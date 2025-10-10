

          // ---------- import React Packs
          import React from 'react';
          import * as RN from 'react-native';

          // ---------- import Variables Pack
          import { create } from 'zustand';

          // ---------- import Local Tools
          import { mapElements } from './tools/base/project/mapElements';
          import * as functions from './tools/base/functions';
          import * as Elements from './tools/base/Elements';
          import { Project } from './tools/base/project';
          import * as jsvals from './tools/base/jsvals';
          import { props } from './tools/base/props';
          import * as customs from './tools/customs';
          import * as stls from './tools/base/stls';
          import { tools } from './tools';

          // ---------- set Caps Inputs
          const currRoute = 'ab0login';

          let args: any = [];

          const screens = [
            
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"designsys",

          styles:[
        `{ width: "100%", height: "100%" }`, 
        `{ alignItems: "center", justifyContent: "center" }`, `{ backgroundColor: "$var_all.colors.primary" }`],

          screenElements:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flexDirection: "row",
  backgroundColor: "#0064fe",
  alignItems: "center",
  width: "100%",
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.box1", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  width: 30,
  height: 30,
  alignItems: "center",
  justifyContent: "center",
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
    fill="red"
    {...props}
  >
    <Path
      fill="#fff"
      d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "16px",

      largura: "16px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flex: 1,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  color: "#FFF",
  textAlign: "left",
}`
          ],

          children: [
            `Minha Tela`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

 (...args:any) => <Elements.Custom pass={{
  arrItems: [() => {
  const [userName, setUserName] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");
  const [mensagemErro, setMensagemErro] = React.useState("");
  const handleLogin = () => {
    if (!userName.trim()) {
      setMensagemErro("O nome de usuário precisa ser preenchido.");
      return;
    }
    if (!userPassword.trim()) {
      setMensagemErro("A senha precisa ser preenchida.");
      return;
    }

    setMensagemErro("");
    console.log("Login realizado com sucesso!");
const path1 = "all.toggles.box1";
    const value = false;
    const pass1 = { keyPath: [path1], value: [value] };
    tools.functions.setVar({ args: "", pass: pass1 });
  };

  return (
    <RN.View
      style={{
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
       flex: 1,
      }}
    >
      <RN.TextInput
        placeholder="Nome de usuário"
        style={{
          borderWidth: 1,
          borderColor: "#65686e",
          paddingVertical: 10,
          paddingHorizontal: 15,
          borderRadius: 8,
          marginBottom: 10,
        }}
        value={userName}
        onChangeText={setUserName}
      />

      <RN.TextInput
        placeholder="Senha"
        style={{
          borderWidth: 1,
          borderColor: "#65686e",
          paddingVertical: 10,
          paddingHorizontal: 15,
          borderRadius: 8,
        }}
        value={userPassword}
        onChangeText={setUserPassword}
        secureTextEntry
      />

      {mensagemErro !== "" && (
        <RN.Text
          style={{
            color: "red",
            marginBottom: 10,
          }}
        >
          {mensagemErro}
        </RN.Text>
      )}

      <RN.Pressable
        style={{
          backgroundColor: "#007BFF",
          paddingVertical: 12,
          paddingHorizontal: 24,
          borderRadius: 8,
          alignItems: "center",
        }}
        onPress={handleLogin}
      >
        <RN.Text
          style={{
            color: "#FFFFFF",
            fontSize: 16,
          }}
        >
          Login
        </RN.Text>
      </RN.Pressable>
    </RN.View>
  );
}] 
}}/>
],

            args,
          }}/>
        , 
        (...args:any) => <Elements.ScrollBar pass={{
            styles: [`{ backgroundColor: "#EFEFEF", width: "100%", padding: 20 }`],
            arrProps: [],
            arrItems: [
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [" "],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.inputs.ipt1`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 100, height: 20, backgroundColor: "yellow", alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.box1`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "blue" }`
          ],

          children: [
            `Ocultar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 100, height: 20, backgroundColor: "yellow", alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.box1`],
          value: [true]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "blue" }`
          ],

          children: [
            `Mostrar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "100%", padding: 5, backgroundColor: "#FFF", flexDirection: "row", alignItems: "center"}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
  const path = "all.toggles.checkbox1";
  const currState = tools.getCtData(path);
  tools.functions.setVar({
		args: '',
		pass: { keyPath: [path], value: [!currState] },
	});
}]
 , trigger: 'on press'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 20, height: 20, alignItems: "center", justifyContent: "center", backgroundColor: "$var_all.colors.secondary", borderRadius: 4, marginRight: 5}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.checkbox1", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    viewBox="0 0 40 40"
    {...props}
  >
    <Path
      stroke="#FFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4.17}
      d="M33.333 10 15 28.333 6.667 20"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "14px",

      largura: "14px",

      preenchimento: [`transparent`],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 20, height: 20, backgroundColor: "#FFF", borderRadius: 4, borderWidth: 2, borderColor: "#CCC", marginRight: 5}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.checkbox1", "==", false ]]
 , trigger: 'on listen'
}})],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `JavaScript`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ marginTop: 20 }`
          ],

          children: [
            `Check Dentro de Lista`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.FlatList2 pass={{
          elementProperties: [
            {}
          ],

          pData: `all.lists.lst3`,

          itemElements: [
            

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "100%", padding: 5, backgroundColor: "#FFF", flexDirection: "row", alignItems: "center"}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [(args) => {
console.log({ tools, args });
console.log({ current: args[0] });

  const path = "all.lists.lst3." + args[0].index + ".check";

  const currState = args[0].item.check;
  tools.functions.setVar({
		args: '',
		pass: { keyPath: [path], value: [!currState] },
	});
}]
 , trigger: 'on press'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 20, height: 20, alignItems: "center", justifyContent: "center", backgroundColor: "$var_all.colors.secondary", borderRadius: 4, marginRight: 5}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [(args) => [ "all.lists.lst3" + args[0].item.check, "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    viewBox="0 0 40 40"
    {...props}
  >
    <Path
      stroke="#FFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4.17}
      d="M33.333 10 15 28.333 6.667 20"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "14px",

      largura: "14px",

      preenchimento: [`transparent`],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 20, height: 20, backgroundColor: "#FFF", borderRadius: 4, borderWidth: 2, borderColor: "#CCC", marginRight: 5}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.checkbox1", "==", false ]]
 , trigger: 'on listen'
}})],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `$arg_name`
          ],

          args,

        }}/>],

            args,
          }}/>
        
          ],

      styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],    args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 100, height: 20, backgroundColor: "yellow", alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.getDocsTool({ args, pass:{
   arrRefStrings: [`users`],
            arrFuncs: [()=>{}],
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "blue" }`
          ],

          children: [
            `GetDocs: users`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
const item = tools.findFlatItem([[{idx: 0, item: {name: "João"}}]]);

console.log({item});
}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Testar findFlatItem.ts`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],
            args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ alignItems: "center", justifyContent: "center" }`, 
        `{ width: "100%", height: "100%" }`, 
        `{ padding: 20, backgrondColor: "#FFF" }`, 
        `{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`, 
        `{ 
	width: 30,
	height: 30,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`, 
        `{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`, 
        `{ 
	width: 50,
	height: 50,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`, 
        `{ width: "100%", flexDirection: "row", alignItems: "center" }`, 
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, 
        `{ width: "100%", flexDirection: "row", alignItems: "flex-end" }`, 
        `{ backgroundColor: "$var_all.colors.primary" }`, 
        `{ flex: 1 }`, 
        `{ 
	width: 400,
	height: 400,
	backgroundColor: "#FFF",
	borderRadius: 20,
	paddingHorizontal: 25,
	paddingVertical: 35,
}`, 
        `{ width: "fit-content", minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 20, alignItems: "center", justifyContent: "center" }`, 
        `{ color: "#FFF" }`, 
        `{ backgroundColor: "$var_all.colors.smoke" }`, `{ justifyContent: "flex-start" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 20,
	height: 20,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "fit-content", minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 20, alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("b0login");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Entrar c/ Google`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "$var_all.color.primary",
	alignItems: "center",
}

`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            "Escreva..."
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ flex: 1 }`, 
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{ padding: 10 }`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Título`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 30,
	height: 30,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            "Escreva..."
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "$var_all.colors.primary",
	alignItems: "center",
}

`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	console.log("Olá Amigos")
}]
 , trigger: 'on press'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	tools.goTo("b1home")
}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
    fill="red"
    {...props}
  >
    <Path
      fill="#fff"
      d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "16px",

      largura: "16px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ flex: 1 }`, 
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{ padding: 10 }`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: "$var_all.texts.sizes.large",
	color: "#FFF"
}`
          ],

          children: [
            `Título`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "$var_all.colors.primary",
	alignItems: "center",
}

`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	tools.goTo("b2list")
}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg     xmlns="http://www.w3.org/2000/svg"
width={14}     height={12}     fill="red"     viewBox="0 0 14 12"     {...props}   >
<Path       stroke="#FFF"       strokeLinecap="round"       strokeLinejoin="round"       d="M13.5 1H.5m13 5H.5m13 5H.5"     />   </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "16px",

      largura: "16px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ flex: 1 }`, 
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{ padding: 10 }`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: "$var_all.texts.sizes.large",
	color: "#FFF"
}`
          ],

          children: [
            `Título`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	width: 400,
	height: 400,
	backgroundColor: "#FFF",
	borderRadius: 20,
	paddingHorizontal: 25,
	paddingVertical: 35,
}`, `{ alignItems: "center", justifyContent: "center" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

          functions:[()=>{}],

          args,
        }}/>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"ab0login",

          styles:[
        `{ width: "100%", height: "100%" }`, 
        `{ alignItems: "center", justifyContent: "center" }`, `{ backgroundColor: "$var_all.colors.primary" }`],

          screenElements:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	width: 400,
	height: 400,
	backgroundColor: "#FFF",
	borderRadius: 20,
	paddingHorizontal: 25,
	paddingVertical: 35,
}`, `{ alignItems: "center", justifyContent: "center" }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "fit-content", minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 20, alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a0login");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Ir p/ Adm`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "fit-content", minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 20, alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("b0login");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Ir p/ App`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "fit-content", minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 20, alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("designsys");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Design System`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "fit-content", minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 20, alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("b3list");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Ir p/ Industrias`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

          functions:[()=>{}],

          args,
        }}/>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"a0login",

          styles:[
        `{ width: "100%", height: "100%" }`, 
        `{ alignItems: "center", justifyContent: "center" }`, `{ backgroundColor: "$var_all.colors.smoke" }`],

          screenElements:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	width: 400,
	height: 400,
	backgroundColor: "#FFF",
	borderRadius: 20,
	paddingHorizontal: 25,
	paddingVertical: 35,
}`, `{ alignItems: "center", justifyContent: "center" }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 25,
fontWeight: '700',
color: '#1D1D1F',
}`
          ],

          children: [
            `Login`
          ],

          args,

        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '400',
color: '#86868B',
}`
          ],

          children: [
            `Please login to continue to your account`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 30,
	height: 30,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
color: '#86868B',
}`
          ],

          children: [
            `Email Address`
          ],

          args,

        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 5,
	height: 5,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{
borderRadius: 10,
borderWidth: 1,
borderColor: '#E6E7E8',
padding: 10,
}`],

          path: [`sc.A0.forms.iptsChanges.userEmail`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A0.forms.iptsChanges.userEmail`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 20,
	height: 20,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	flexDirection: 'row',
	justifyContent: 'space-between',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
color: '#86868B',
}`
          ],

          children: [
            `Password`
          ],

          args,

        }}/>, 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [()=>{}]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="red"
    viewBox="0 0 20 20"
    {...props}
  >
    <Path
      fill="#666"
      fillOpacity={0.8}
      d="m15.845 4.279-.58-.581c-.165-.164-.468-.139-.657.088l-2.02 2.008c-.91-.392-1.907-.58-2.955-.58-3.119.012-5.82 1.83-7.12 4.443a.589.589 0 0 0-.001.505 7.778 7.778 0 0 0 2.651 3.03l-1.654 1.68c-.189.19-.214.492-.088.656l.58.581c.165.164.468.139.657-.088L15.744 4.935c.24-.189.265-.492.1-.656Zm-5.543 3.813c-.215-.05-.442-.114-.656-.114A1.924 1.924 0 0 0 7.714 9.91c0 .214.05.441.114.656l-.847.833a2.946 2.946 0 0 1-.39-1.49c0-1.678 1.35-3.03 3.03-3.03.555 0 1.047.14 1.49.392l-.809.82ZM16.754 9.658a7.745 7.745 0 0 0-1.742-2.323l-2.349 2.323v.252c0 1.68-1.35 3.03-3.03 3.03h-.252l-1.49 1.49c.555.114 1.136.19 1.704.19 3.119 0 5.82-1.818 7.121-4.445a.513.513 0 0 0 .038-.517Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.8449 4.27876L15.2641 3.69803C15.1 3.5339 14.797 3.55916 14.6076 3.78638L12.5873 5.79383C11.6782 5.40248 10.6809 5.21309 9.63294 5.21309C6.51431 5.22567 3.81259 7.04374 2.51205 9.65742C2.43628 9.82154 2.43628 10.0235 2.51205 10.1624C3.11803 11.3997 4.02714 12.4224 5.16345 13.1925L3.50949 14.8717C3.32011 15.0611 3.29485 15.3641 3.42114 15.5282L4.00188 16.109C4.166 16.2731 4.46901 16.2478 4.6584 16.0206L15.7437 4.93539C15.9836 4.74611 16.0088 4.44312 15.8447 4.27898L15.8449 4.27876ZM10.3021 8.09162C10.0874 8.0411 9.86023 7.97801 9.64557 7.97801C8.57235 7.97801 7.7139 8.83657 7.7139 9.90968C7.7139 10.1243 7.76442 10.3515 7.82751 10.5662L6.9815 11.3995C6.72902 10.9577 6.59015 10.4652 6.59015 9.90971C6.59015 8.23051 7.94111 6.87955 9.62031 6.87955C10.1759 6.87955 10.6683 7.01842 11.1101 7.2709L10.3021 8.09162Z" fill="#666666" fill-opacity="0.8"/>
<path d="M16.7539 9.65779C16.3121 8.77396 15.7312 7.9786 15.0116 7.33466L12.6632 9.65779V9.91027C12.6632 11.5895 11.3123 12.9404 9.63307 12.9404H9.38059L7.89078 14.4302C8.44635 14.5438 9.02709 14.6196 9.59525 14.6196C12.7139 14.6196 15.4156 12.8016 16.7161 10.1753C16.8297 9.99849 16.8297 9.8218 16.754 9.65766L16.7539 9.65779Z" fill="#666666" fill-opacity="0.8"/>
</svg>

      `,

      altura: "18px",

      largura: "18px",

      preenchimento: ['black'],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 5,
	height: 5,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
color: '#86868B',
}`
          ],

          children: [
            `Hide`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 5,
	height: 5,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{
borderRadius: 10,
borderWidth: 1,
borderColor: '#E6E7E8',
padding: 10,
}`],

          path: [`sc.A0.forms.iptsChanges.userPassword`],

          funcsArray: [
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A0.forms.iptsChanges.userPassword`],
          value: [`$arg_callback`]
        }}), (txt) => {
	const x = '';
	console.log({txt});
	tools.setData({path: "sc.A0.forms.iptsChanges.pass2", value: txt });
}],

          args,
        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "sc.A0.forms.showErr", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
color: 'red',
}`
          ],

          children: [
            `$var_sc.A0.forms.msgs.msg1`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 20,
	height: 20,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
width: "100%",
height: 40, 
backgroundColor: "#A2DA90", 
borderRadius: 10, 
alignItems: "center", 
justifyContent: "center" 
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
 functions.firebase.where({ args, pass:{

  arrRefStrings: [`users`],
 arrWhere: [
 (...args) =>
        functions.firebase.whereConds({ args, pass:{
          arrStrings: [
        `userEmail`, 
        `==`, `$var_sc.A0.forms.iptsChanges.userEmail`],
        }}), (...args) =>
        functions.firebase.whereConds({ args, pass:{
          arrStrings: [
        `userPassword`, 
        `==`, `$var_sc.A0.forms.iptsChanges.userPassword`],
        }})],
 arrFuncs: [(args) => {
  console.log("minha custom login 1", args);

  const isArray = Array.isArray(args);
  const isEmpty = !isArray || args.length === 0;

  if (isEmpty) {
    tools.setData({
      path: "sc.A0.forms.showErr",
      value: true,
    });

    tools.setData({
      path: "sc.A0.forms.msgs.msg1",
      value: "Usuário ou Senha incorretos.",
    });
    return;
  }

  const loginData = args[0] ?? null;

  if (!loginData || typeof loginData !== "object") {
    console.log("custom 2 - Dados inválidos", { loginData });
    return;
  }

  console.log("custom 3", { loginData });

  // 🔑 Pega o tipo de conta ANTES de usar em logs
  const typeAccount = loginData?.typeAccount;

  // 🔑 Definição das rotas
  const routes = {
    adm: "a1list",
    ind: "axIndustria",
    dest: "axDestinador",
    transp: "axTransportador",
  };

  const targetRoute = routes[typeAccount] || "home";

  console.log("➡️ Redirecionando usuário:", { typeAccount, targetRoute });

  tools.goTo(targetRoute);
}
],
 }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
	color: "#FFF",
	fontSize: 14,
	fontWeight: 500,
}`
          ],

          children: [
            `Entrar`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

          functions:[()=>{}],

          args,
        }}/>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"a1list",

          styles:[
        `{ width: "100%", height: "100%" }`, 
        `{ backgroundColor: "$var_all.colors.smoke" }`, `{ justifyContent: "flex-start" }`],

          screenElements:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	backgroundColor: "white",
	paddingHorizontal: 35,
	height: 70,
	paddingVertical: 15,
	flexDirection: 'row',
	alignItems: 'center',
	width: "100%",
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ flex: 1 }`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={119}
    height={39}
    fill="red"
    viewBox="0 0 119 39"
    {...props}
  >
    <Path
      fill="#1D1D1F"
      d="M50.434 26.114h5.98V29h-9.62V10.852h3.64v15.262Zm16.978 3.068c-1.7 0-3.26-.399-4.68-1.196a8.958 8.958 0 0 1-3.38-3.302c-.832-1.421-1.248-3.025-1.248-4.81 0-1.768.416-3.354 1.248-4.758a8.901 8.901 0 0 1 3.38-3.328c1.42-.797 2.98-1.196 4.68-1.196 1.716 0 3.276.399 4.68 1.196a8.715 8.715 0 0 1 3.354 3.328c.832 1.404 1.248 2.99 1.248 4.758 0 1.785-.416 3.389-1.248 4.81a8.768 8.768 0 0 1-3.354 3.302c-1.422.797-2.982 1.196-4.68 1.196Zm0-3.25c1.092 0 2.054-.243 2.886-.728.832-.503 1.482-1.213 1.95-2.132.468-.919.702-1.985.702-3.198 0-1.213-.234-2.27-.702-3.172-.468-.919-1.118-1.62-1.95-2.106-.832-.485-1.794-.728-2.886-.728s-2.063.243-2.912.728c-.832.485-1.482 1.187-1.95 2.106-.468.901-.702 1.959-.702 3.172s.234 2.28.702 3.198c.468.919 1.118 1.63 1.95 2.132.849.485 1.82.728 2.912.728Zm24.886-9.62a4.261 4.261 0 0 0-1.716-1.742c-.728-.399-1.578-.598-2.548-.598-1.075 0-2.028.243-2.86.728-.832.485-1.482 1.179-1.95 2.08-.468.901-.702 1.941-.702 3.12 0 1.213.234 2.27.702 3.172.485.901 1.152 1.595 2.002 2.08.849.485 1.837.728 2.964.728 1.386 0 2.522-.364 3.406-1.092.884-.745 1.464-1.777 1.742-3.094h-6.24v-2.782h9.828v3.172a8.527 8.527 0 0 1-1.56 3.51c-.798 1.075-1.829 1.941-3.094 2.6-1.248.641-2.652.962-4.212.962-1.751 0-3.337-.39-4.758-1.17a8.82 8.82 0 0 1-3.328-3.302c-.798-1.404-1.196-2.999-1.196-4.784 0-1.785.398-3.38 1.196-4.784a8.58 8.58 0 0 1 3.328-3.302c1.421-.797 2.998-1.196 4.732-1.196 2.045 0 3.822.503 5.33 1.508 1.508.988 2.548 2.383 3.12 4.186h-4.186Zm16.005 12.87c-1.699 0-3.259-.399-4.68-1.196a8.953 8.953 0 0 1-3.38-3.302c-.832-1.421-1.248-3.025-1.248-4.81 0-1.768.416-3.354 1.248-4.758a8.896 8.896 0 0 1 3.38-3.328c1.421-.797 2.981-1.196 4.68-1.196 1.716 0 3.276.399 4.68 1.196a8.719 8.719 0 0 1 3.354 3.328c.832 1.404 1.248 2.99 1.248 4.758 0 1.785-.416 3.389-1.248 4.81a8.772 8.772 0 0 1-3.354 3.302c-1.422.797-2.982 1.196-4.68 1.196Zm0-3.25c1.092 0 2.054-.243 2.886-.728.832-.503 1.482-1.213 1.95-2.132.468-.919.702-1.985.702-3.198 0-1.213-.234-2.27-.702-3.172-.468-.919-1.118-1.62-1.95-2.106-.832-.485-1.794-.728-2.886-.728s-2.063.243-2.912.728c-.832.485-1.482 1.187-1.95 2.106-.468.901-.702 1.959-.702 3.172s.234 2.28.702 3.198c.468.919 1.118 1.63 1.95 2.132.849.485 1.82.728 2.912.728ZM18.5 35.888c-1.033 0-2.081-.232-2.898-.71l-8.48-4.887c-3.452-2.328-3.668-2.682-3.668-6.336v-8.91c0-3.655.2-4.01 3.592-6.306l8.54-4.933c1.62-.94 4.163-.94 5.782 0l8.51 4.902c3.453 2.328 3.669 2.682 3.669 6.336v8.896c0 3.653-.2 4.008-3.592 6.305l-8.541 4.933c-.833.478-1.88.71-2.914.71Zm0-30.464c-.647 0-1.28.124-1.726.386l-8.48 4.902c-2.512 1.696-2.512 1.696-2.512 4.332v8.896c0 2.636 0 2.636 2.574 4.378l8.418 4.856c.91.524 2.559.524 3.468 0l8.48-4.902c2.497-1.696 2.497-1.696 2.497-4.332v-8.896c0-2.636 0-2.636-2.575-4.378L20.227 5.81c-.447-.262-1.08-.386-1.727-.386Z"
    />
    <Path
      fill="#1D1D1F"
      d="M18.5 25.281a5.783 5.783 0 0 1-5.781-5.781 5.783 5.783 0 0 1 5.781-5.781 5.783 5.783 0 0 1 5.781 5.781 5.783 5.783 0 0 1-5.781 5.781Zm0-9.25a3.474 3.474 0 0 0-3.469 3.469 3.474 3.474 0 0 0 3.469 3.469 3.474 3.474 0 0 0 3.469-3.469 3.474 3.474 0 0 0-3.469-3.469Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="119" height="39" viewBox="0 0 119 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M50.434 26.114H56.414V29H46.794V10.852H50.434V26.114ZM67.4116 29.182C65.7129 29.182 64.1529 28.7833 62.7316 27.986C61.3103 27.1887 60.1836 26.088 59.3516 24.684C58.5196 23.2627 58.1036 21.6593 58.1036 19.874C58.1036 18.106 58.5196 16.52 59.3516 15.116C60.1836 13.6947 61.3103 12.5853 62.7316 11.788C64.1529 10.9907 65.7129 10.592 67.4116 10.592C69.1276 10.592 70.6876 10.9907 72.0916 11.788C73.5129 12.5853 74.6309 13.6947 75.4456 15.116C76.2776 16.52 76.6936 18.106 76.6936 19.874C76.6936 21.6593 76.2776 23.2627 75.4456 24.684C74.6309 26.088 73.5129 27.1887 72.0916 27.986C70.6703 28.7833 69.1103 29.182 67.4116 29.182ZM67.4116 25.932C68.5036 25.932 69.4656 25.6893 70.2976 25.204C71.1296 24.7013 71.7796 23.9907 72.2476 23.072C72.7156 22.1533 72.9496 21.0873 72.9496 19.874C72.9496 18.6607 72.7156 17.6033 72.2476 16.702C71.7796 15.7833 71.1296 15.0813 70.2976 14.596C69.4656 14.1107 68.5036 13.868 67.4116 13.868C66.3196 13.868 65.3489 14.1107 64.4996 14.596C63.6676 15.0813 63.0176 15.7833 62.5496 16.702C62.0816 17.6033 61.8476 18.6607 61.8476 19.874C61.8476 21.0873 62.0816 22.1533 62.5496 23.072C63.0176 23.9907 63.6676 24.7013 64.4996 25.204C65.3489 25.6893 66.3196 25.932 67.4116 25.932ZM92.2977 16.312C91.8817 15.5493 91.3097 14.9687 90.5817 14.57C89.8537 14.1713 89.0043 13.972 88.0337 13.972C86.959 13.972 86.0057 14.2147 85.1737 14.7C84.3417 15.1853 83.6917 15.8787 83.2237 16.78C82.7557 17.6813 82.5217 18.7213 82.5217 19.9C82.5217 21.1133 82.7557 22.1707 83.2237 23.072C83.709 23.9733 84.3763 24.6667 85.2257 25.152C86.075 25.6373 87.063 25.88 88.1897 25.88C89.5763 25.88 90.7117 25.516 91.5957 24.788C92.4797 24.0427 93.0603 23.0113 93.3377 21.694H87.0977V18.912H96.9257V22.084C96.683 23.3493 96.163 24.5193 95.3657 25.594C94.5683 26.6687 93.537 27.5353 92.2717 28.194C91.0237 28.8353 89.6197 29.156 88.0597 29.156C86.309 29.156 84.723 28.766 83.3017 27.986C81.8977 27.1887 80.7883 26.088 79.9737 24.684C79.1763 23.28 78.7777 21.6853 78.7777 19.9C78.7777 18.1147 79.1763 16.52 79.9737 15.116C80.7883 13.6947 81.8977 12.594 83.3017 11.814C84.723 11.0167 86.3003 10.618 88.0337 10.618C90.079 10.618 91.8557 11.1207 93.3637 12.126C94.8717 13.114 95.9117 14.5093 96.4837 16.312H92.2977ZM108.303 29.182C106.604 29.182 105.044 28.7833 103.623 27.986C102.201 27.1887 101.075 26.088 100.243 24.684C99.4107 23.2627 98.9947 21.6593 98.9947 19.874C98.9947 18.106 99.4107 16.52 100.243 15.116C101.075 13.6947 102.201 12.5853 103.623 11.788C105.044 10.9907 106.604 10.592 108.303 10.592C110.019 10.592 111.579 10.9907 112.983 11.788C114.404 12.5853 115.522 13.6947 116.337 15.116C117.169 16.52 117.585 18.106 117.585 19.874C117.585 21.6593 117.169 23.2627 116.337 24.684C115.522 26.088 114.404 27.1887 112.983 27.986C111.561 28.7833 110.001 29.182 108.303 29.182ZM108.303 25.932C109.395 25.932 110.357 25.6893 111.189 25.204C112.021 24.7013 112.671 23.9907 113.139 23.072C113.607 22.1533 113.841 21.0873 113.841 19.874C113.841 18.6607 113.607 17.6033 113.139 16.702C112.671 15.7833 112.021 15.0813 111.189 14.596C110.357 14.1107 109.395 13.868 108.303 13.868C107.211 13.868 106.24 14.1107 105.391 14.596C104.559 15.0813 103.909 15.7833 103.441 16.702C102.973 17.6033 102.739 18.6607 102.739 19.874C102.739 21.0873 102.973 22.1533 103.441 23.072C103.909 23.9907 104.559 24.7013 105.391 25.204C106.24 25.6893 107.211 25.932 108.303 25.932Z" fill="#1D1D1F"/>
<path d="M18.5003 35.8876C17.4674 35.8876 16.419 35.6564 15.602 35.1784L7.12284 30.2914C3.66951 27.9634 3.45367 27.6089 3.45367 23.9551V15.0443C3.45367 11.3905 3.65409 11.0359 7.04576 8.73887L15.5865 3.80553C17.2053 2.86512 19.749 2.86512 21.3678 3.80553L29.8778 8.70803C33.3311 11.0359 33.547 11.3905 33.547 15.0443V23.9397C33.547 27.5934 33.3465 27.948 29.9549 30.2451L21.414 35.1784C20.5815 35.6564 19.5332 35.8876 18.5003 35.8876ZM18.5003 5.42428C17.8528 5.42428 17.2207 5.54762 16.7736 5.8097L8.29451 10.7122C5.78159 12.408 5.78159 12.408 5.78159 15.0443V23.9397C5.78159 26.5759 5.78159 26.5759 8.35617 28.318L16.7736 33.1743C17.6832 33.6984 19.3328 33.6984 20.2424 33.1743L28.7215 28.2718C31.219 26.5759 31.219 26.5759 31.219 23.9397V15.0443C31.219 12.408 31.219 12.408 28.6445 10.6659L20.227 5.8097C19.7799 5.54762 19.1478 5.42428 18.5003 5.42428Z" fill="#1D1D1F"/>
<path d="M18.5 25.2812C15.3088 25.2812 12.7188 22.6912 12.7188 19.5C12.7188 16.3088 15.3088 13.7188 18.5 13.7188C21.6912 13.7188 24.2812 16.3088 24.2812 19.5C24.2812 22.6912 21.6912 25.2812 18.5 25.2812ZM18.5 16.0312C16.5883 16.0312 15.0312 17.5883 15.0312 19.5C15.0312 21.4117 16.5883 22.9688 18.5 22.9688C20.4117 22.9688 21.9688 21.4117 21.9688 19.5C21.9688 17.5883 20.4117 16.0312 18.5 16.0312Z" fill="#1D1D1F"/>
</svg>

      `,

      altura: "39px",

      largura: "119px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	width: 150,
	flexDirection: "row",
	justifyContent: "start",
	alignItems: "center"
}`],

            functions:[()=>{}],            childrenItems:[
        

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
	width: 30,
	height: 30,
	borderRadius: 200
}],

      URIvariablePath:["https://images.unsplash.com/photo-1488831861984-179da3647265?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],

      args,
    }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            
        `{ 
	fontWeight: "bold",
	fontSize: 12
}`, `{ marginLeft: 5 }`
          ],

          children: [
            `Admin`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ width: "100%", height: "100%" }`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	width: 200,
	height: "100%",
	backgroundColor: "white",
	paddingHorizontal: 15,
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 20,
	height: 20,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
justifyContent: 'space-between',
flexDirection: 'row',
paddingHorizontal: '10',
paddingVertical: '8',
borderRadius: '8px',
width: '100%',
backgroundColor: '#F5F5F7',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	flexDirection: 'row',
	backgroundColor: 'transparent',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="red"
    viewBox="0 0 20 20"
    {...props}
  >
    <Path
      fill="#9197B3"
      d="M12.5 18.958h-5c-4.525 0-6.458-1.933-6.458-6.458v-5c0-4.525 1.933-6.458 6.458-6.458h5c4.525 0 6.458 1.933 6.458 6.458v5c0 4.525-1.933 6.458-6.458 6.458Zm-5-16.666c-3.842 0-5.208 1.366-5.208 5.208v5c0 3.842 1.366 5.208 5.208 5.208h5c3.842 0 5.208-1.366 5.208-5.208v-5c0-3.842-1.366-5.208-5.208-5.208h-5Z"
    />
    <Path
      fill="#9197B3"
      d="M10 10.9a.62.62 0 0 1-.316-.084l-4.417-2.55a.619.619 0 0 1-.225-.85c.175-.3.559-.4.85-.225l4.1 2.375 4.075-2.358a.622.622 0 0 1 .85.225.632.632 0 0 1-.225.85l-4.383 2.533A.656.656 0 0 1 10 10.9Z"
    />
    <Path
      fill="#9197B3"
      d="M10 15.433a.63.63 0 0 1-.625-.625v-4.533A.63.63 0 0 1 10 9.65a.63.63 0 0 1 .625.625v4.533a.63.63 0 0 1-.625.625Z"
    />
    <Path
      fill="#9197B3"
      d="M10 15.625c-.483 0-.958-.108-1.341-.317l-2.667-1.483c-.8-.442-1.417-1.5-1.417-2.417V8.583c0-.908.625-1.967 1.417-2.417l2.667-1.483c.766-.425 1.916-.425 2.683 0l2.666 1.483c.8.442 1.417 1.5 1.417 2.417v2.825c0 .909-.625 1.967-1.417 2.417l-2.666 1.483c-.383.217-.859.317-1.342.317Zm0-10c-.275 0-.541.05-.733.158L6.6 7.266c-.408.225-.775.859-.775 1.317v2.825c0 .467.367 1.092.775 1.317l2.667 1.483c.383.217 1.083.217 1.466 0l2.667-1.483c.409-.225.775-.858.775-1.317V8.583c0-.466-.367-1.092-.775-1.317l-2.667-1.483c-.191-.108-.458-.158-.733-.158Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5 18.9583H7.50002C2.97502 18.9583 1.04169 17.025 1.04169 12.5V7.49999C1.04169 2.97499 2.97502 1.04166 7.50002 1.04166H12.5C17.025 1.04166 18.9584 2.97499 18.9584 7.49999V12.5C18.9584 17.025 17.025 18.9583 12.5 18.9583ZM7.50002 2.29166C3.65835 2.29166 2.29169 3.65832 2.29169 7.49999V12.5C2.29169 16.3417 3.65835 17.7083 7.50002 17.7083H12.5C16.3417 17.7083 17.7084 16.3417 17.7084 12.5V7.49999C17.7084 3.65832 16.3417 2.29166 12.5 2.29166H7.50002Z" fill="#9197B3"/>
<path d="M10.0005 10.8998C9.89217 10.8998 9.78384 10.8748 9.68384 10.8164L5.26718 8.26643C4.96718 8.09143 4.86716 7.70809 5.04216 7.41643C5.21716 7.11643 5.60051 7.01643 5.89218 7.19143L9.99217 9.56643L14.0672 7.20809C14.3672 7.03309 14.7505 7.14143 14.9172 7.43309C15.0838 7.72476 14.9838 8.11643 14.6922 8.28309L10.3088 10.8164C10.2172 10.8664 10.1088 10.8998 10.0005 10.8998Z" fill="#9197B3"/>
<path d="M10 15.4334C9.65833 15.4334 9.375 15.1501 9.375 14.8084V10.2751C9.375 9.93342 9.65833 9.65009 10 9.65009C10.3417 9.65009 10.625 9.93342 10.625 10.2751V14.8084C10.625 15.1501 10.3417 15.4334 10 15.4334Z" fill="#9197B3"/>
<path d="M10.0002 15.6248C9.51684 15.6248 9.04192 15.5165 8.65859 15.3082L5.99188 13.8248C5.19188 13.3832 4.5752 12.3248 4.5752 11.4082V8.58316C4.5752 7.67484 5.20021 6.61649 5.99188 6.16649L8.65859 4.68316C9.42525 4.25816 10.5752 4.25816 11.3418 4.68316L14.0085 6.16649C14.8085 6.60816 15.4253 7.6665 15.4253 8.58316V11.4082C15.4253 12.3165 14.8002 13.3748 14.0085 13.8248L11.3418 15.3082C10.9585 15.5248 10.4835 15.6248 10.0002 15.6248ZM10.0002 5.62483C9.72517 5.62483 9.4585 5.67483 9.26684 5.78316L6.60022 7.26649C6.19189 7.49149 5.8252 8.12483 5.8252 8.58316V11.4082C5.8252 11.8748 6.19189 12.4998 6.60022 12.7248L9.26684 14.2082C9.65017 14.4248 10.3502 14.4248 10.7335 14.2082L13.4002 12.7248C13.8085 12.4998 14.1753 11.8665 14.1753 11.4082V8.58316C14.1753 8.1165 13.8085 7.49149 13.4002 7.26649L10.7335 5.78316C10.5418 5.67483 10.2752 5.62483 10.0002 5.62483Z" fill="#9197B3"/>
</svg>

      `,

      altura: "20px",

      largura: "20px",

      preenchimento: ['black'],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 8,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: 14,
	fontWeight: '500',
	color: '#9197B3',
}`
          ],

          children: [
            `Permissões`
          ],

          args,

        }}/>],

            args,
          }}/>
        , (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={16}
    fill="red"
    viewBox="0 0 19 16"
    {...props}
  >
    <Path
      stroke="#9197B3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m7.039 12 4.693-4-4.693-4"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.03894 12L11.7316 8L7.03894 4" stroke="#9197B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "16px",

      largura: "18px",

      preenchimento: [`transparent`],

      args,
    }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
justifyContent: 'space-between',
flexDirection: 'row',
paddingHorizontal: '10',
paddingVertical: '8',
borderRadius: '8px',
width: '100%',
backgroundColor: 'transparent',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a0login");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	flexDirection: 'row',
	backgroundColor: 'transparent',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="red"
    viewBox="0 0 20 20"
    {...props}
  >
    <Path
      fill="#9197B3"
      d="M12.5 18.958h-5c-4.525 0-6.458-1.933-6.458-6.458v-5c0-4.525 1.933-6.458 6.458-6.458h5c4.525 0 6.458 1.933 6.458 6.458v5c0 4.525-1.933 6.458-6.458 6.458Zm-5-16.666c-3.842 0-5.208 1.366-5.208 5.208v5c0 3.842 1.366 5.208 5.208 5.208h5c3.842 0 5.208-1.366 5.208-5.208v-5c0-3.842-1.366-5.208-5.208-5.208h-5Z"
    />
    <Path
      fill="#9197B3"
      d="M10 10.9a.62.62 0 0 1-.316-.084l-4.417-2.55a.619.619 0 0 1-.225-.85c.175-.3.559-.4.85-.225l4.1 2.375 4.075-2.358a.622.622 0 0 1 .85.225.632.632 0 0 1-.225.85l-4.383 2.533A.656.656 0 0 1 10 10.9Z"
    />
    <Path
      fill="#9197B3"
      d="M10 15.433a.63.63 0 0 1-.625-.625v-4.533A.63.63 0 0 1 10 9.65a.63.63 0 0 1 .625.625v4.533a.63.63 0 0 1-.625.625Z"
    />
    <Path
      fill="#9197B3"
      d="M10 15.625c-.483 0-.958-.108-1.341-.317l-2.667-1.483c-.8-.442-1.417-1.5-1.417-2.417V8.583c0-.908.625-1.967 1.417-2.417l2.667-1.483c.766-.425 1.916-.425 2.683 0l2.666 1.483c.8.442 1.417 1.5 1.417 2.417v2.825c0 .909-.625 1.967-1.417 2.417l-2.666 1.483c-.383.217-.859.317-1.342.317Zm0-10c-.275 0-.541.05-.733.158L6.6 7.266c-.408.225-.775.859-.775 1.317v2.825c0 .467.367 1.092.775 1.317l2.667 1.483c.383.217 1.083.217 1.466 0l2.667-1.483c.409-.225.775-.858.775-1.317V8.583c0-.466-.367-1.092-.775-1.317l-2.667-1.483c-.191-.108-.458-.158-.733-.158Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5 18.9583H7.50002C2.97502 18.9583 1.04169 17.025 1.04169 12.5V7.49999C1.04169 2.97499 2.97502 1.04166 7.50002 1.04166H12.5C17.025 1.04166 18.9584 2.97499 18.9584 7.49999V12.5C18.9584 17.025 17.025 18.9583 12.5 18.9583ZM7.50002 2.29166C3.65835 2.29166 2.29169 3.65832 2.29169 7.49999V12.5C2.29169 16.3417 3.65835 17.7083 7.50002 17.7083H12.5C16.3417 17.7083 17.7084 16.3417 17.7084 12.5V7.49999C17.7084 3.65832 16.3417 2.29166 12.5 2.29166H7.50002Z" fill="#9197B3"/>
<path d="M10.0005 10.8998C9.89217 10.8998 9.78384 10.8748 9.68384 10.8164L5.26718 8.26643C4.96718 8.09143 4.86716 7.70809 5.04216 7.41643C5.21716 7.11643 5.60051 7.01643 5.89218 7.19143L9.99217 9.56643L14.0672 7.20809C14.3672 7.03309 14.7505 7.14143 14.9172 7.43309C15.0838 7.72476 14.9838 8.11643 14.6922 8.28309L10.3088 10.8164C10.2172 10.8664 10.1088 10.8998 10.0005 10.8998Z" fill="#9197B3"/>
<path d="M10 15.4334C9.65833 15.4334 9.375 15.1501 9.375 14.8084V10.2751C9.375 9.93342 9.65833 9.65009 10 9.65009C10.3417 9.65009 10.625 9.93342 10.625 10.2751V14.8084C10.625 15.1501 10.3417 15.4334 10 15.4334Z" fill="#9197B3"/>
<path d="M10.0002 15.6248C9.51684 15.6248 9.04192 15.5165 8.65859 15.3082L5.99188 13.8248C5.19188 13.3832 4.5752 12.3248 4.5752 11.4082V8.58316C4.5752 7.67484 5.20021 6.61649 5.99188 6.16649L8.65859 4.68316C9.42525 4.25816 10.5752 4.25816 11.3418 4.68316L14.0085 6.16649C14.8085 6.60816 15.4253 7.6665 15.4253 8.58316V11.4082C15.4253 12.3165 14.8002 13.3748 14.0085 13.8248L11.3418 15.3082C10.9585 15.5248 10.4835 15.6248 10.0002 15.6248ZM10.0002 5.62483C9.72517 5.62483 9.4585 5.67483 9.26684 5.78316L6.60022 7.26649C6.19189 7.49149 5.8252 8.12483 5.8252 8.58316V11.4082C5.8252 11.8748 6.19189 12.4998 6.60022 12.7248L9.26684 14.2082C9.65017 14.4248 10.3502 14.4248 10.7335 14.2082L13.4002 12.7248C13.8085 12.4998 14.1753 11.8665 14.1753 11.4082V8.58316C14.1753 8.1165 13.8085 7.49149 13.4002 7.26649L10.7335 5.78316C10.5418 5.67483 10.2752 5.62483 10.0002 5.62483Z" fill="#9197B3"/>
</svg>

      `,

      altura: "20px",

      largura: "20px",

      preenchimento: ['black'],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: 14,
	fontWeight: '500',
	color: '#9197B3',
}`
          ],

          children: [
            `Sair`
          ],

          args,

        }}/>],

            args,
          }}/>
        , (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={16}
    fill="red"
    viewBox="0 0 19 16"
    {...props}
  >
    <Path
      stroke="#9197B3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m7.039 12 4.693-4-4.693-4"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.03894 12L11.7316 8L7.03894 4" stroke="#9197B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "16px",

      largura: "18px",

      preenchimento: [`transparent`],

      args,
    }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "100%", height: "100%" }`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
margin: 20,
backgroundColor: '#FFF',
alignItems: 'center',
paddingHorizontal: 20,
paddingBottom: 35,
borderRadius: 10,
borderWidth: 1,
borderColor: "#E9E9EB",
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	width: '100%',
	justifyContent: 'center',
	alignItems: 'center',
	height: '100px',
	flexDirection: 'row',
	backgroundColor: '#FFF',
}`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: "fit-content",
 minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 5, alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [true]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a4AddForm`],
          value: [true]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Adicionar`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
justifyContent: 'center',
alignItems: 'center',
height: '44px',
flexDirection: 'row',
paddingHorizontal: '10px',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Nome da Empresa`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `E-mail`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Tipo`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Status`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , (...args:any) => <Elements.ScrollBar pass={{
            styles: [`{ flex:1, width: '100%',}`],
            arrProps: [],
            arrItems: [(...args:any) => <Elements.FlatList2 pass={{
          elementProperties: [
            {}
          ],

          pData: `sc.a1.list`,

          itemElements: [
            

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
justifyContent: 'center',
alignItems: 'center',
height: '80px',
flexDirection: 'row',
paddingHorizontal: '10px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a5.editData.permission`],
          value: [`$arg_item`]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a5EditForm`],
          value: [true]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [true]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `$arg_companyName`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `$arg_userEmail`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `$arg_permission`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
}`],

            functions:[()=>{}],            childrenItems:[

 (...args:any) => <Elements.Custom pass={{
  arrItems: [() => {
const item = tools.findFlatItem(args);
const isAvailable =  item.status;
return (
  <span style={{ color: isAvailable === "Ativo" ? "green" : "red" }}>
    {isAvailable}
  </span>
)
}] 
}}/>
],

            args,
          }}/>
        ],

            args,
          }}/>
        
          ],

      styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],    args,
        }}/>],
            args,
        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{
	width: 300,
	height: "100%",
	position: 'absolute',
	right: 0,
	top: -60,
	zIndex: 1,
	padding: 10,
}`, `{ backgroundColor: "$var_all.colors.smoke" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.sideRight", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ backgroundColor: 'transparent', }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.a4AddForm", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "white",
	alignItems: "center",
}`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={14}
              viewBox="0 0 20 14"
              {...props}
              >
              <Path
              fillRule="evenodd"
              d="M7.707.293a1 1 0 0 1 0 1.414L3.414 6H19a1 1 0 1 1 0 2H3.414l4.293 4.293a1 1 0 1 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0Z"
              clipRule="evenodd"
              {...props}
              />
              </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "30px",

      largura: "30px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ flex: 1, padding: 10 }`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Formulário de`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `ADICIONAR PERMISSÃO`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 20,
	height: 20,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Tipo de Acesso`
          ],

          args,

        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	width: "90%",
	maxWidth: 280,
	backgroundColor: "#FFF",
	borderRadius: 20,
	padding: 10
}`, `{ alignItems: "center", justifyContent: "center" }`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Indústria`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Nome da Empresa`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{
backgroundColor: "#FFF", 
borderRadius: 10,
}`],

          path: [`sc.a1.iptChanges.companyName`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges.companyName`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `CNPJ`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{
backgroundColor: "#FFF", 
borderRadius: 10,
}`],

          path: [`sc.a1.iptChanges.cnpj`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges.cnpj`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Email do responsável`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{
backgroundColor: "#FFF", 
borderRadius: 10,
}`],

          path: [`sc.a1.iptChanges.userEmail`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges.userEmail`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Senha`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{
backgroundColor: "#FFF", 
borderRadius: 10,
}`],

          path: [`sc.a1.iptChanges.userPassword`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges.userPassword`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ flexDirection: 'row', }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	width: "fit-content",
	minWidth: 120, 
	height: 30, 
	backgroundColor: "$var_all.colors.primary",
	borderRadius: 5,
	alignItems: "center", 
	justifyContent: "center",
	margin: 10, 
}`, `{
	backgroundColor: 'transparent',
	borderWidth: 1,
	borderColor: "$var_all.colors.primary",
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a4AddForm`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Cancelar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: "fit-content",
	minWidth: 120, 
	height: 30, 
	backgroundColor: "$var_all.colors.primary",
	borderRadius: 5,
	alignItems: "center", 
	justifyContent: "center",
	margin: 10, 
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges.permission`],
          value: [`Indústria`]
        }}), async (...args) =>
        functions.firebase.setDocTool({ args, pass:{
  arrRefStrings: [`companies`],
            arrPathData: [`sc.a1.iptChanges`],
            arrFuncs: [
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.iptChanges`],
          value: [` `]
        }}), 
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a4AddForm`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }})],
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Salvar`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ backgroundColor: 'transparent', }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.a5EditForm", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "white",
	alignItems: "center",
}`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={14}
              viewBox="0 0 20 14"
              {...props}
              >
              <Path
              fillRule="evenodd"
              d="M7.707.293a1 1 0 0 1 0 1.414L3.414 6H19a1 1 0 1 1 0 2H3.414l4.293 4.293a1 1 0 1 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0Z"
              clipRule="evenodd"
              {...props}
              />
              </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "30px",

      largura: "30px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ flex: 1, padding: 10 }`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Formulário de`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `PERFIL`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 20,
	height: 20,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Tipo de Acesso`
          ],

          args,

        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	width: "90%",
	maxWidth: 280,
	backgroundColor: "#FFF",
	borderRadius: 20,
	padding: 10
}`, `{ alignItems: "center", justifyContent: "center" }`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Indústria`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Nome da Empresa`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{
backgroundColor: "#FFF", 
borderRadius: 10,
}`],

          path: [`sc.a5.editData.permission.companyName`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a5.editData.permission.companyName`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `CNPJ`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{
backgroundColor: "#FFF", 
borderRadius: 10,
}`],

          path: [`sc.a5.editData.permission.cnpj`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a5.editData.permission.cnpj`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Email do responsável`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{
backgroundColor: "#FFF", 
borderRadius: 10,
}`],

          path: [`sc.a5.editData.permission.userEmail`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a5.editData.permission.userEmail`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Senha`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{
backgroundColor: "#FFF", 
borderRadius: 10,
}`],

          path: [`sc.a5.editData.permission.userPassword`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a5.editData.permission.userPassword`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ flexDirection: 'row', }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	width: "fit-content",
	minWidth: 120, 
	height: 30, 
	backgroundColor: "$var_all.colors.primary",
	borderRadius: 5,
	alignItems: "center", 
	justifyContent: "center",
	margin: 10, 
}`, `{
	backgroundColor: 'transparent',
	borderWidth: 1,
	borderColor: "$var_all.colors.primary",
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a5EditForm`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Cancelar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: "fit-content",
	minWidth: 120, 
	height: 30, 
	backgroundColor: "$var_all.colors.primary",
	borderRadius: 5,
	alignItems: "center", 
	justifyContent: "center",
	margin: 10, 
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.updateDocTool({ args, pass:{
   arrRefStrings: [
        `companies`, `$var_sc.a5.editData.permission.docId`],
            arrPathData: [`$var_sc.a5.editData.permission`],
            arrFuncs: [
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`$var_sc.a5.editData.permission`],
          value: [` `]
        }}), 
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a5EditForm`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }})],
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Salvar`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

          functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.getDocsTool({ args, pass:{
   arrRefStrings: [`companies`],
            arrFuncs: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a1.list`],
          value: [`$arg_callback`]
        }})],
        }})]
 , trigger: 'on init'
}})],

          args,
        }}/>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"b3list",

          styles:[
        `{ width: "100%", height: "100%" }`, 
        `{ backgroundColor: "$var_all.colors.smoke" }`, `{ justifyContent: "flex-start" }`],

          screenElements:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{
	backgroundColor: "white",
	paddingHorizontal: 20,
	height: 50,
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ flex: 1 }`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
	fontWeight: "bold",
	fontSize: 12
}`
          ],

          children: [
            `My Company Name`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	width: 150,
	flexDirection: "row",
	justifyContent: "start",
	alignItems: "center"
}`],

            functions:[()=>{}],            childrenItems:[
        

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
	width: 30,
	height: 30,
	borderRadius: 200
}],

      URIvariablePath:["https://images.unsplash.com/photo-1488831861984-179da3647265?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],

      args,
    }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            
        `{ 
	fontWeight: "bold",
	fontSize: 12
}`, `{ marginLeft: 5 }`
          ],

          children: [
            `Admin`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ width: "100%", height: "100%" }`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	width: 200,
	height: "100%",
	backgroundColor: "white"
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 20,
	height: 20,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
justifyContent: 'space-between',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
borderRadius: '8px',
width: '100%',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={14}
              viewBox="0 0 20 14"
              {...props}
              >
              <Path
              fillRule="evenodd"
              d="M7.707.293a1 1 0 0 1 0 1.414L3.414 6H19a1 1 0 1 1 0 2H3.414l4.293 4.293a1 1 0 1 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0Z"
              clipRule="evenodd"
              {...props}
              />
              </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "20px",

      largura: "20px",

      preenchimento: ['black'],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Criação de Lote`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
justifyContent: 'space-between',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
borderRadius: '8px',
width: '100%',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={14}
              viewBox="0 0 20 14"
              {...props}
              >
              <Path
              fillRule="evenodd"
              d="M7.707.293a1 1 0 0 1 0 1.414L3.414 6H19a1 1 0 1 1 0 2H3.414l4.293 4.293a1 1 0 1 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0Z"
              clipRule="evenodd"
              {...props}
              />
              </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "20px",

      largura: "20px",

      preenchimento: ['black'],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Destinador/Transportador`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
justifyContent: 'space-between',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
borderRadius: '8px',
width: '100%',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={14}
              viewBox="0 0 20 14"
              {...props}
              >
              <Path
              fillRule="evenodd"
              d="M7.707.293a1 1 0 0 1 0 1.414L3.414 6H19a1 1 0 1 1 0 2H3.414l4.293 4.293a1 1 0 1 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0Z"
              clipRule="evenodd"
              {...props}
              />
              </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "20px",

      largura: "20px",

      preenchimento: ['black'],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Agendamento de Coleta`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
justifyContent: 'space-between',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
borderRadius: '8px',
width: '100%',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={14}
              viewBox="0 0 20 14"
              {...props}
              >
              <Path
              fillRule="evenodd"
              d="M7.707.293a1 1 0 0 1 0 1.414L3.414 6H19a1 1 0 1 1 0 2H3.414l4.293 4.293a1 1 0 1 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0Z"
              clipRule="evenodd"
              {...props}
              />
              </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "20px",

      largura: "20px",

      preenchimento: ['black'],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Sair`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "100%", height: "100%" }`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
margin: 20,
backgroundColor: '#FFF',
alignItems: 'center',
paddingHorizontal: 20,
paddingBottom: 35,
borderRadius: 10,
borderWidth: 1,
borderColor: "#E9E9EB",
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	width: '100%',
	justifyContent: 'center',
	alignItems: 'center',
	height: '100px',
	flexDirection: 'row',
	backgroundColor: '#FFF',
}`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: "fit-content",
 minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 5, alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [true]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.b3AddForm`],
          value: [true]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Adicionar`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
justifyContent: 'center',
alignItems: 'center',
height: '44px',
flexDirection: 'row',
paddingHorizontal: '10px',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Data da Criação`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `ID do Lote`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Tipo de Resíduo`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Unidade Geradora`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , (...args:any) => <Elements.ScrollBar pass={{
            styles: [`{ flex:1, width: '100%',}`],
            arrProps: [],
            arrItems: [(...args:any) => <Elements.FlatList2 pass={{
          elementProperties: [
            {}
          ],

          pData: `sc.b3.list`,

          itemElements: [
            

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
justifyContent: 'center',
alignItems: 'center',
height: '80px',
flexDirection: 'row',
paddingHorizontal: '10px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.b3.editData.industria`],
          value: [`$arg_item`]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.b3EditForm`],
          value: [true]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [true]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `$arg_dateString`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `$arg_loteID`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `$arg_Residuo`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `$arg_unity`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        
          ],

      styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],    args,
        }}/>],
            args,
        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{
	width: 300,
	height: "100%",
	position: 'absolute',
	right: 0,
	top: -60,
	zIndex: 1,
	padding: 10,
}`, `{ backgroundColor: "$var_all.colors.smoke" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.sideRight", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ backgroundColor: 'transparent', }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.b3AddForm", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "white",
	alignItems: "center",
}`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={14}
              viewBox="0 0 20 14"
              {...props}
              >
              <Path
              fillRule="evenodd"
              d="M7.707.293a1 1 0 0 1 0 1.414L3.414 6H19a1 1 0 1 1 0 2H3.414l4.293 4.293a1 1 0 1 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0Z"
              clipRule="evenodd"
              {...props}
              />
              </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "30px",

      largura: "30px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ flex: 1, padding: 10 }`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Formulário de`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `CRIAR LOTE`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 20,
	height: 20,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Data da Criação`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{
backgroundColor: "#FFF", 
borderRadius: 10,
}`],

          path: [`sc.b3.iptChanges.createdAt`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.b3.iptChanges.createdAt`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `ID do Lote`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{
backgroundColor: "#FFF", 
borderRadius: 10,
}`],

          path: [`sc.b3.iptChanges.loteID`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.b3.iptChanges.loteID`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Tipo de Resíduo`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{
backgroundColor: "#FFF", 
borderRadius: 10,
}`],

          path: [`sc.b3.iptChanges.Residuo`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.b3.iptChanges.Residuo`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Unidade Geradora`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{
backgroundColor: "#FFF", 
borderRadius: 10,
}`],

          path: [`sc.b3.iptChanges.unity`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.b3.iptChanges.unity`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ flexDirection: 'row', }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	width: "fit-content",
	minWidth: 120, 
	height: 30, 
	backgroundColor: "$var_all.colors.primary",
	borderRadius: 5,
	alignItems: "center", 
	justifyContent: "center",
	margin: 10, 
}`, `{
	backgroundColor: 'transparent',
	borderWidth: 1,
	borderColor: "$var_all.colors.primary",
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.b3.iptChanges`],
          value: [` `]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.b3AddForm`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Cancelar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: "fit-content",
	minWidth: 120, 
	height: 30, 
	backgroundColor: "$var_all.colors.primary",
	borderRadius: 5,
	alignItems: "center", 
	justifyContent: "center",
	margin: 10, 
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.setDocTool({ args, pass:{
  arrRefStrings: [`industrias`],
            arrPathData: [`sc.b3.iptChanges`],
            arrFuncs: [
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.b3.iptChanges`],
          value: [` `]
        }}), 
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.b3AddForm`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }})],
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Salvar`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ backgroundColor: 'transparent', }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.b3EditForm", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "white",
	alignItems: "center",
}`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={14}
              viewBox="0 0 20 14"
              {...props}
              >
              <Path
              fillRule="evenodd"
              d="M7.707.293a1 1 0 0 1 0 1.414L3.414 6H19a1 1 0 1 1 0 2H3.414l4.293 4.293a1 1 0 1 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0Z"
              clipRule="evenodd"
              {...props}
              />
              </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "30px",

      largura: "30px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ flex: 1, padding: 10 }`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Formulário de`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `EDITAR INDUSTRIA`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 20,
	height: 20,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Data da Criação`
          ],

          args,

        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	width: "90%",
	maxWidth: 280,
	backgroundColor: "#FFF",
	borderRadius: 20,
	padding: 10
}`, `{ alignItems: "center", justifyContent: "center" }`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Indústria`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `ID do Lote`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{
backgroundColor: "#FFF", 
borderRadius: 10,
}`],

          path: [`sc.b3.editData.industria.loteID`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.b3.editData.industria.loteID`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Tipo de Resíduo`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{
backgroundColor: "#FFF", 
borderRadius: 10,
}`],

          path: [`sc.b3.editData.industria.Residuo`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.b3.editData.industria.Residuo`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Unidade Geradora`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{
backgroundColor: "#FFF", 
borderRadius: 10,
}`],

          path: [`sc.b3.editData.industria.unity`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.b3.editData.industria.unity`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ flexDirection: 'row', }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	width: "fit-content",
	minWidth: 120, 
	height: 30, 
	backgroundColor: "$var_all.colors.primary",
	borderRadius: 5,
	alignItems: "center", 
	justifyContent: "center",
	margin: 10, 
}`, `{
	backgroundColor: 'transparent',
	borderWidth: 1,
	borderColor: "$var_all.colors.primary",
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.b3EditForm`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Cancelar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: "fit-content",
	minWidth: 120, 
	height: 30, 
	backgroundColor: "$var_all.colors.primary",
	borderRadius: 5,
	alignItems: "center", 
	justifyContent: "center",
	margin: 10, 
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.updateDocTool({ args, pass:{
   arrRefStrings: [
        `companies`, `$var_sc.a5.editData.permission.docId`],
            arrPathData: [`$var_sc.a5.editData.permission`],
            arrFuncs: [
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`$var_sc.a5.editData.permission`],
          value: [` `]
        }}), 
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.a5EditForm`],
          value: [false]
        }}), async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.sideRight`],
          value: [false]
        }})],
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Salvar`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

          functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.getDocsTool({ args, pass:{
   arrRefStrings: [`industrias`],
            arrFuncs: [
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.b3.list`],
          value: [`$arg_callback`]
        }}), args => {

  const newArray = [];

  if (Array.isArray(args)) {
    args.forEach(element => {
      let dateString = '';

      const timestamp = element.createdAt;

      if (timestamp && typeof timestamp.toDate === 'function') {
        const dateObject = timestamp.toDate();

        dateString = dateObject.toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        });
      } else {
        dateString = 'Data Indisponível';
      }

      newArray.push({ ...element, dateString });
    });
  } else {
    console.error('args não é um array ou está vazio.');
  }

  tools.setData({ path: 'sc.b3.list', value: newArray });
}],
        }})]
 , trigger: 'on init'
}})],

          args,
        }}/>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"b0login",

          styles:[
        `{ alignItems: "center", justifyContent: "center" }`, 
        `{ width: "100%", height: "100%" }`, `{ backgroundColor: "$var_all.colors.primary" }`],

          screenElements:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	width: 400,
	height: 400,
	backgroundColor: "#FFF",
	borderRadius: 20,
	paddingHorizontal: 25,
	paddingVertical: 35,
}`, `{ alignItems: "center", justifyContent: "center" }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 10,
	height: 10,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
 }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "fit-content", minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 20, alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("b1home");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Entrar c/ Google`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

          functions:[()=>{}],

          args,
        }}/>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"b1home",

          styles:[
        `{ backgroundColor: "$var_all.colors.smoke" }`, 
        `{ width: "100%", height: "100%" }`, `{ justifyContent: "flex-start" }`],

          screenElements:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "$var_all.colors.primary",
	alignItems: "center",
}

`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	tools.goTo("b2list")
}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg     xmlns="http://www.w3.org/2000/svg"
width={14}     height={12}     fill="red"     viewBox="0 0 14 12"     {...props}   >
<Path       stroke="#FFF"       strokeLinecap="round"       strokeLinejoin="round"       d="M13.5 1H.5m13 5H.5m13 5H.5"     />   </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "16px",

      largura: "16px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ flex: 1 }`, 
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{ padding: 10 }`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: "$var_all.texts.sizes.large",
	color: "#FFF"
}`
          ],

          children: [
            `Título`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , (...args:any) => <Elements.ScrollBar pass={{
            styles: [],
            arrProps: [],
            arrItems: [(...args:any) => <Elements.FlatList2 pass={{
          elementProperties: [
            {}
          ],

          pData: `all.lists.lst3`,

          itemElements: [
            

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{ padding: 10 }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("b3form");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ flex: 1 }`
          ],

          children: [
            `$arg_name`
          ],

          args,

        }}/>, 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ flex: 1 }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [(...args) =>
        functions.firebase.deleteDocTool({ args, pass:{
   arrRefStrings: [
        `locations`, 
        `HW6jpFRnQGxnZRaP4Y6M`, 
        `localBikes`, `$arg_docId`],
   arrFuncs: [() => {}],
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Apagar`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        
          ],

      styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],    args,
        }}/>],
            args,
        }}/>],

          functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.getDocsTool({ args, pass:{
   arrRefStrings: [
        `locations`, 
        `$var_sc.B1.currId`, `localBikes`],
            arrFuncs: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.lists.lst3`],
          value: [`$arg_callback`]
        }})],
        }})]
 , trigger: 'on init'
}})],

          args,
        }}/>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"b2list",

          styles:[
        `{ backgroundColor: "$var_all.colors.smoke" }`, 
        `{ width: "100%", height: "100%" }`, `{ justifyContent: "flex-start" }`],

          screenElements:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "$var_all.colors.primary",
	alignItems: "center",
}

`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	console.log("Olá Amigos")
}]
 , trigger: 'on press'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	tools.goTo("b1home")
}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
    fill="red"
    {...props}
  >
    <Path
      fill="#fff"
      d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "16px",

      largura: "16px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ flex: 1 }`, 
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{ padding: 10 }`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: "$var_all.texts.sizes.large",
	color: "#FFF"
}`
          ],

          children: [
            `Título`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , (...args:any) => <Elements.ScrollBar pass={{
            styles: [],
            arrProps: [],
            arrItems: [
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Funcs. Firebase Revisadas:
fbInit - OK
getDocs - OK
getDoc - OK
deleteDoc - OK
updateDoc
fireUpload
where
whereConds ??`
          ],

          args,

        }}/>, (...args:any) => <Elements.FlatList2 pass={{
          elementProperties: [
            {}
          ],

          pData: `all.lists.lst3`,

          itemElements: [
            (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	padding: 20
}`
          ],

          children: [
            `$arg_name`
          ],

          args,

        }}/>
          ],

      styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],    args,
        }}/>],
            args,
        }}/>],

          functions:[()=>{}],

          args,
        }}/>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"b3form",

          styles:[
        `{ backgroundColor: "$var_all.colors.smoke" }`, 
        `{ width: "100%", height: "100%" }`, `{ justifyContent: "flex-start" }`],

          screenElements:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ 
	backgroundColor: "$var_all.colors.primary",
	alignItems: "center",
}

`, `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	console.log("Olá Amigos")
}]
 , trigger: 'on press'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
	tools.goTo("b1home")
}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
    fill="red"
    {...props}
  >
    <Path
      fill="#fff"
      d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "16px",

      largura: "16px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{ flex: 1 }`, 
        `{ 
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start"
 }`, `{ padding: 10 }`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	fontSize: "$var_all.texts.sizes.large",
	color: "#FFF"
}`
          ],

          children: [
            `Título`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
	width: 40,
	height: 40,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , (...args:any) => <Elements.ScrollBar pass={{
            styles: [],
            arrProps: [],
            arrItems: [
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{
	borderBottomColor: "#444",
	borderBottomWidth: 2
}`],

          path: [`sc.B3.forms.iptsChanges.name`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.B3.forms.iptsChanges.name`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "fit-content", minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 20, alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.setDocTool({ args, pass:{
  arrRefStrings: [
        `locations`, 
        `$var_sc.B1.currId`, `localBikes`],
            arrPathData: [`$var_sc.B3.forms.iptsChanges`],
            arrFuncs: [()=>{}],
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Salvar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "fit-content", minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 20, alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.getDocTool({ args, pass:{
  arrRefStrings: [
        `locations`, `$var_sc.B1.currId`],
            arrFuncs: [()=>{}],
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Pegar Doc`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "fit-content", minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 20, alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.updateDocTool({ args, pass:{
   arrRefStrings: [
        `users`, `$var_sc.B3.currId`],
            arrPathData: [`sc.B3.forms.iptsChanges`],
            arrFuncs: [() => {}],
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Atualizar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "fit-content", minWidth: 120, height: 30, backgroundColor: "$var_all.colors.primary", borderRadius: 20, alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [()=>{}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#FFF" }`
          ],

          children: [
            `Upload`
          ],

          args,

        }}/>],

            args,
          }}/>
        , (...args:any) => <Elements.BtnImagePicker pass={{
 arrFuncs: [() => console.log({args})], args,
 }}/>],
            args,
        }}/>],

          functions:[()=>{}],

          args,
        }}/>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"axIndustria",

          styles:[
              {
                backgroundColor: '#101',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '100%',
              }
              ],

          screenElements:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: 'white', }`
          ],

          children: [
            `INDUSTRIA`
          ],

          args,

        }}/>],

          functions:[()=>{}],

          args,
        }}/>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"axDestinador",

          styles:[
              {
                backgroundColor: '#101',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '100%',
              }
              ],

          screenElements:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: 'white', }`
          ],

          children: [
            `DESTINADOR`
          ],

          args,

        }}/>],

          functions:[()=>{}],

          args,
        }}/>, 

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"axTransportador",

          styles:[
              {
                backgroundColor: '#101',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '100%',
              }
              ],

          screenElements:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: 'white', }`
          ],

          children: [
            `TRANSPORTADOR`
          ],

          args,

        }}/>],

          functions:[()=>{}],

          args,
        }}/>
          ];

          const initCt = () => (
 {
 
        'all': { 
'firebaseConfig': {
  apiKey: "AIzaSyDghDA3OxMO2ZjlAIlVkNlfUGJJKH3cNdE",
  authDomain: "akrantis-530e0.firebaseapp.com",
  projectId: "akrantis-530e0",
  storageBucket: "akrantis-530e0.firebasestorage.app",
  messagingSenderId: "418693559379",
        appId: "1:418693559379:web:dd143a24eb05f3834882a6"

}, 
'colors': { 
'primary': '#A2DA90', 
'secondary': "#0064fe", 'smoke': "#ddd" } 
, 
'lists': { 
'lt1': [{name: "João", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{name: "Luciana"},{name: "Pedro"}], 
'lst2': [{name: "Tarefa 1", date: "21/03/25"},{name: "Tarefa 2", date: "21/03/25"},{name: "Tarefa 3", date: "24/03/25"}], 'lst3': [
	{name: "Task 1", check: false},
	{name: "Task 2", check: false},
	{name: "Task 3", check: false},
	{name: "Task 4", check: false},
	{name: "Task 5", check: false},
	{name: "Task 6", check: false},
	{name: "Task 7", check: false},
	{name: "Task 8", check: false},
	{name: "Task 9", check: false},
	{name: "Task 10", check: false},
	{name: "Task 11", check: false},
	{name: "Task 12", check: false}
] } 
, 
'toggles': { 
'box1': true, 'checkbox1': false } 
, 'texts': { 
'sizes': { 
'small': "12px", 
'medium': "14px", 'large': "16px" } 
, 'contents': {   } 
 } 
 } 
, 'sc': { 
'A0': { 'forms': { 'iptsChanges': {
	userEmail: "admin",
	userPassword: "admin"
} } 
 } 
, 
'A1': { 'forms': { 'iptsChanges': {   } 
 } 
 } 
, 
'B1': { 
'forms': { 'iptsChanges': {   } 
 } 
, 'currId': "HW6jpFRnQGxnZRaP4Y6M" } 
, 'B3': { 
'forms': { 'iptsChanges': {   } 
 } 
, 
'currId': "8F9zjOn7lqQK0QPpzpjj", 'pathTest': "iptsChanges" } 
 } 
 
} 
 );
          const initObj = initCt();
          // console.log(initObj);

          const arrInitFuncs = [
            async (...args) =>
  functions.firebase.fireInit({ args, pass:{
   fbConfig: `all.firebaseConfig`,

        }})
          ];

          export const useRoutes = create(() => ({ currRoute }));
          export const useData = create(() => initObj);

          // ---------- set Main Component
          export const Router = () => {
            return (
              <Project
                configData={{
                  screens,
                  initCt,
                  arrInitFuncs,
                }}
              />
            );
          };
        
