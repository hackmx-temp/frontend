export interface SearchBarProp {
  /**
   * Placeholder for the bar
   */
  label: string;

  /**
   * Function for the search button
   */
  searchClick: (txt: string) => void;

  /**
   * Page´s title
   */
  title?: string;

  /**
   * Button
   */
  btnText?: string;

  /**
   * Button handler
   */
  btnHandler?: () => void;

  /**
   * Bar type
   */
  barType?: "normal" | "integrated";

  clearStateText?: (txt: string) => void;
}
