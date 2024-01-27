===========
Menu System
===========

1. Information
2. Config Vars
3. History

--------------
1. Information
--------------

All of the Defrag cvars have been added to the menu system.  Putting your mouse over an item will show you the range for the var, as well as the default value.

The q3 menu system colors have been modified.  You can change these colors to your own personal settings, using the df_ui_* cvars, or through the MENU: Defrag -> Misc -> Menu Display.

*** NOTE: If you do not like the colors, and want to change the menu colors back to the standard ID disgusting red/orange colors, set df_ui_CustomMenu to "0".  Also, if you leave a single color var empty, it will default to the standard q3 color for that particular item.

--------------
2. Config Vars
--------------

\df_ui_CustomMenu [ DEFAULT: 1 RANGE: 0 (q3) to 1 (custom) ] - turns custom menu on/off
--------------------------------------------------

\df_ui_DisplayCVarName [ DEFAULT: 1 RANGE: 0 to 1 ] - turns the display of cvar names onscreen in the custom menu system on/off

--------------------------------------------------
\df_ui_TextColorLabel [ DEFAULT: "1.00 1.00 0.00 1.00" ] - .r .g .b .t color

FORMAT: RED (0.00 to 1.00) GREEN (0.00 to 1.00) BLUE (0.00 to 1.00) TRANSPARENCY (0.00 to 1.00) 

Default: (yellow). Leave empty for standard ID color (orange)

--------------------------------------------------
\df_ui_TextColorValue [ DEFAULT: "1.00 0.00 0.00 1.00" ] - .r .g .b .t color

FORMAT: RED (0.00 to 1.00) GREEN (0.00 to 1.00) BLUE (0.00 to 1.00) TRANSPARENCY (0.00 to 1.00) 

Default: (red). Leave empty for standard ID color (orange)

--------------------------------------------------
\df_ui_TextColorDisabled [ DEFAULT: "0.50 0.50 0.50 1.00" ] - .r .g .b .t color

FORMAT: RED (0.00 to 1.00) GREEN (0.00 to 1.00) BLUE (0.00 to 1.00) TRANSPARENCY (0.00 to 1.00) 

Default: (gray). Leave empty for standard ID color (gray)

--------------------------------------------------
\df_ui_TextColorMedium [ DEFAULT: "0.00 0.00 1.00 1.00" ] - .r .g .b .t color

FORMAT: RED (0.00 to 1.00) GREEN (0.00 to 1.00) BLUE (0.00 to 1.00) TRANSPARENCY (0.00 to 1.00) 

Default: (blue). Leave empty for standard ID color (red)

--------------------------------------------------
\df_ui_TextColorBig [ DEFAULT: "1.00 0.00 0.00 1.00" ] - .r .g .b .t color

FORMAT: RED (0.00 to 1.00) GREEN (0.00 to 1.00) BLUE (0.00 to 1.00) TRANSPARENCY (0.00 to 1.00) 

Default: (red). Leave empty for standard ID color (red)

--------------------------------------------------
\df_ui_TextColorHighlight [ DEFAULT: "1.00 1.00 0.00 1.00" ] - .r .g .b .t color

FORMAT: RED (0.00 to 1.00) GREEN (0.00 to 1.00) BLUE (0.00 to 1.00) TRANSPARENCY (0.00 to 1.00) 

Default: (transparent yellow). Leave empty for standard ID color (transparent orange)

--------------------------------------------------
\df_ui_PulseColor [ DEFAULT: "1.00 1.00 1.00 1.00" ] - .r .g .b .t color

FORMAT: RED (0.00 to 1.00) GREEN (0.00 to 1.00) BLUE (0.00 to 1.00) TRANSPARENCY (0.00 to 1.00) 

Default: (white). Leave empty for standard ID color (white)

--------------------------------------------------
\df_ui_ListbarColor [ DEFAULT: "1.00 0.00 0.00 0.30" ] - .r .g .b .t color

FORMAT: RED (0.00 to 1.00) GREEN (0.00 to 1.00) BLUE (0.00 to 1.00) TRANSPARENCY (0.00 to 1.00) 

Default: (red). Leave empty for standard ID color (orange)

--------------------------------------------------
\df_ui_StatusColor [ DEFAULT: "1.00 1.00 1.00 1.00" ] - .r .g .b .t color

FORMAT: RED (0.00 to 1.00) GREEN (0.00 to 1.00) BLUE (0.00 to 1.00) TRANSPARENCY (0.00 to 1.00) 

Default: (white). Leave empty for standard ID color (white)

--------------------------------------------------
df_ui_CursorColor [ DEFAULT: "0.50 0.80 1.00 1.00"] - .r .g .b .t color

FORMAT: RED (0.00 to 1.00) GREEN (0.00 to 1.00) BLUE (0.00 to 1.00) TRANSPARENCY (0.00 to 1.00) 

-----------
11. History
-----------
1.90
- Feature Introduced
- All df_* cvars added to the menu system.
- Extra Q3 cvars added to the menu system.
- User-definable colors for the entire q3 menu system (df_ui_* cvars).
