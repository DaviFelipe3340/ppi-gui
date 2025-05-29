import "./styles/theme.css";
import "./styles/global.css";
import { MyText } from "./components/MyText.jsx";
import { MyTextList } from "./components/MyTextList";

export default function App() {
 
  return (
    //React Fragment
    <>
     <MyTextList />
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
