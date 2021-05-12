import {unstable_createMuiStrictModeTheme as createMuiTheme} from "@material-ui/core/styles";
import Yellow from "@material-ui/core/colors/yellow";
import Grey from "@material-ui/core/colors/grey";

export const grabitTheme = createMuiTheme({
    palette: {
        secondary: {
            main: Yellow[700],
            contrastText: Grey[50],
        }
    }
});
