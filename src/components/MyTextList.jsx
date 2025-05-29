import styles from "./MyTextList.module.css";
import { MyText } from "./MyText";

export function MyTextList() {
  const texts = [
    { title: "Meu titulo", text: "meu texto" },
    { title: "Meu titulo", text: "meu texto" },
    { title: "Meu titulo", text: "meu texto" },
    { title: "Meu titulo", text: "meu texto" },
  ];

  return (
    <div className={styles.container}>
      {texts.map((obj, index) => {
        return (
          <MyText key={index} title={`${obj.title} ${index + 1}`}>
            {`${obj.text} ${index + 1}`}
          </MyText>
        );
      })}
    </div>
  );
}
