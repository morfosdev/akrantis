

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
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
borderRadius: '8px',
width: '155px',
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
            `Permissões`
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
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
borderRadius: '8px',
width: '155px',
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
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
borderRadius: '8px',
width: '155px',
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
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
borderRadius: '8px',
width: '155px',
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
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
borderRadius: '8px',
width: '155px',
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
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
borderRadius: '8px',
width: '155px',
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
        
