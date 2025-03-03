import { ColorPalette } from "@/theme/themes";
import { CSSProperties } from "react";

// -----------TOP MENU STYLE--------------
export const TopMenuWrap: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  minHeight: "60px",
};
export const TopMenuLeftPart: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

// -----------TRIGGER MENU STYLE--------------
export const TriggerMenuParent: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "75px",
};
export const TriggerMenuIconParent: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyItems: "start",
};
export const TriggerMenuSearchInput: CSSProperties = {
  width: "100%",
  maxWidth: "100%",
  height: "40px",
  padding: "10px",
  borderRadius: "5px",
  background: ColorPalette.colorPrimaryLight,
  border: "none",
  paddingLeft: "50px",
};
export const TriggerMenuSearchIcon: CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "24px",
  transform: "translate(-50%, -50%)",
  fontSize: "22px",
  color: ColorPalette.colorPrimary,
  background: ColorPalette.colorPrimaryLight,
  cursor: "pointer",
  padding: "3px",
};
export const TriggerMenuFilterIcon: CSSProperties = {
  position: "absolute",
  top: "50%",
  right: "0%",
  transform: "translate(-50%, -50%)",
  fontSize: "22px",
  color: ColorPalette.colorPrimary,
  background: ColorPalette.colorPrimaryLight,
  cursor: "pointer",
  padding: "3px",
};

export const TriggerMenuSignShape: CSSProperties = {
  background: ColorPalette.colorPrimaryLight,
  width: "1px",
  height: "30px",
  display: "inline-block",
  marginTop: "13px",
};

// -----------------TRIGGER MENU ITEMS STYLE---------------
export const TriggerSiderStyle: CSSProperties = {
  color: ColorPalette.colorTextPrimary,

  height: "100vh",
  // position: "sticky",
  left: 0,
  top: 0,
  zIndex: 99,
  transition: "1s",
  opacity: "1",
  minHeight: "100vh",
};

export const TriggerMenuCloseIcon: CSSProperties = {
  width: "40px ",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: `1px solid ${ColorPalette?.colorBorder}`,
  cursor: "pointer",
};
export const TriggerMenuLogoParent: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "15px",
};
export const TriggerMenuCloseIconParent: CSSProperties = {
  display: "flex",
  justifyContent: "end",
  alignItems: "end",
};

// -----------------MAIN MENU STYLE---------------

export const MainMenu: CSSProperties = {
  backgroundColor: ColorPalette.colorPrimaryLight,
  color: ColorPalette.colorTextPrimary,
  // flex: 1,
  minWidth: 0,
  justifyContent: "end",
  alignItems: "center",
  // display: "flex",
  borderBottom: `1px solid ${ColorPalette?.colorBorder}`,
};

export const MainMenuTriggerIcon: CSSProperties = {
  cursor: "pointer",
  marginLeft: "auto",
  backgroundColor: ColorPalette.colorPrimaryLight,
  color: ColorPalette.colorTextPrimary,
};

// -----------------INPUT STYLE---------------

export const InputStyles: CSSProperties = {};
