import "./styles/theme.css";
import "./styles/global.css";
import { MyText } from "./components/MyText.jsx";

export default function App() {
  const texts = [
    { title: "Meu titulo", text: "meu texto" },
    { title: "Meu titulo", text: "meu texto" },
    { title: "Meu titulo", text: "meu texto" },
    { title: "Meu titulo", text: "meu texto" },
  ];
  return (
    //React Fragment
    <>
    {
      texts.map((obj, index) => {
       return <MyText key={index} title={`${obj.title} ${index + 1}`}> 
          {`${obj.text} ${index + 1}`}
        </MyText>
})}
    </>
    











































    
    //  {
    //  
    //  texts.map((obj, index) => (
    //    <MyText title={obj.title + " " + (index + 1)}>
    //      {obj.text + " " + (index + 1)}
    //    </MyText>
    //  ))
    //  
    //  }



  );
}
