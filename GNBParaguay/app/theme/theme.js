const Dimensions = require('Dimensions');
const {width, height} = Dimensions.get('window');

const Theme={
	colorHeader:'#4086dd',
	//colorPrincipal:'#98c352',
	//colorPrincipal:'#005DB1', 
  colorPrincipal:'#98C352',
  colorSecundario:'#E5D700',
	colorInputBackground:'#e2e2e2',
	colorInputText:'#7f7f7f',
	colorStepLogin:'#919191',
	colorText:'#4f4f4f',
	colorLightGray:'#a9b6ba',
	colorRed:'#C50140',
	backgroundColorScreens:'#e9e9ec',
	halfWidth:width/2,
	width:width,
	height:height,
	heightLogo: height*0.085,
    widthLogo:width*0.80,
    margin:width*0.1,
    marginS:width*0.05,
    marginXS:width*0.025,
    paddingList:width*0.020,
    widthInput:width*0.8,
    warningColor:'#f49836',

};

//export default theme

const color = {
  primary: '#007cc6',
  brown: '#351f22',
  white: '#F6F4F0',
  blue: '#064082',
  text: '#3e3e3e',
  grey: '#969696',
  green: '#00a94a',
  black: '#000000',
};


// margins
const margins = {
  xs: 10,
  md: 20,
  lg: 30,
  xg: 40,
};

// font sizes
const fontSize = {
  title: 24,
  input: 16,
  text: 14,
};

export default {Theme, margins, fontSize, color};
