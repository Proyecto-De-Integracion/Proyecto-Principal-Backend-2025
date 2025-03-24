import color from "chalk";
export const errorSeparator: () => void = () => {
  console.log("");
  console.log(
    color.blue(
      "-----------------------------------------------------------------------------------------------------"
    )
  );
  console.log("");
};
