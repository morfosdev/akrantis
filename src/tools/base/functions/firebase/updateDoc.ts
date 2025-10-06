
// ---------- import Local Tools
import { getFirestore, doc, updateDoc, Timestamp } from 'firebase/firestore';
import { getCtData, testVarType } from '../../project';

export const css1 =
  'color: #ffb73b; background-color: black; font-size: 11px; padding: 2px 6px; border-radius: 3px';
export const css2 =
  'color: black; background-color: #ffb73b; font-size: 10px; padding: 2px 6px; border-radius: 3px';

type Tprops = {
  args: any;
  pass: {
    arrRefStrings: string[];
    arrPathData: string[];
    arrFuncs: any[];
  };
};

export const updateDocTool = async (props: Tprops) => {
  // ---------- set Props
  const { args, pass } = props;
  const { arrRefStrings, arrPathData, arrFuncs } = pass;

  // -----------------------------
  // ---------- set Firestore Call
  // -----------------------------
  const newArrStringRefs = arrRefStrings.map(i => {
    const varValue = testVarType(i, args);
    return varValue;
  });

  console.log('3', { newArrStringRefs });

  const fbInit = getCtData('all.temp.fireInit');
  console.log(fbInit);
  const fireInit: any = getFirestore(fbInit);
  console.log({ arrRefStrings });
  const refColl = doc(fireInit, ...newArrStringRefs);

  // ------ check Data
  if (!Array.isArray(arrRefStrings))
    return console.log(
      'arrRefStrings needs to be a string array',
      arrRefStrings,
    );

  // ------ read Data
  const newPath = arrPathData.map(i => testVarType(i, args));
  const pathStr = newPath.join('.');
  console.log({ pathStr });
  const fetched = getCtData(pathStr);
  console.log({ fetched });

  // --- garante objeto
  const baseUpdate =
    fetched && typeof fetched === 'object' && !Array.isArray(fetched)
      ? { ...fetched }
      : {};

  const dataToUpdate = {
    ...baseUpdate,
    updatedAt: Timestamp.now(),
  };
  console.log({ dataToUpdate });

  await updateDoc(refColl, dataToUpdate).catch(err =>
    console.log('Erro do updateDoc', { err }),
  );

  // ---------- set Get Value Functions
  for (const currFunc of arrFuncs) await currFunc(dataToUpdate, args);

  console.log('%cupdateDoc ok', css1);
  console.log('%cReferencia do Documento', css2, {
    newArrStringRefs,
    dataToUpdate,
  });

  return dataToUpdate;
};

