
//basic map config with custom fills, mercator projection
var map = new Datamap({
	scope: 'world',
	element: document.getElementById('container1'),
	projection: 'mercator',
	geographyConfig: {
		highlightBorderColor: '#666666',
		popupTemplate: function(geography, data) {
			if (data != null) return "<div class='hoverinfo'>" + geography.properties.name+': '+data.visitors +'</div>'
	},
	highlightBorderWidth: 1
	},
fills: { 
defaultFill: '#CCCCCC', 
OMN: '#440154',
GBR: '#32648e',
ITA: '#481c6e',
JPN: '#453581',
TJK: '#440154',
REU: '#440154',
PHL: '#450457',
ARM: '#440154',
MLT: '#440154',
TUR: '#471365',
EGY: '#450457',
JOR: '#440154',
CAN: '#46337f',
ARG: '#450559',
CHL: '#450559',
UKR: '#450559',
ARE: '#440256',
BGR: '#440256',
COL: '#481467',
MEX: '#481467',
GRL: '#440154',
CIV: '#440154',
VNM: '#440256',
SAU: '#450457',
DMA: '#440154',
TZA: '#440154',
PAN: '#440154',
HUN: '#450559',
BHS: '#440154',
MNG: '#440154',
BLR: '#440154',
VEN: '#440154',
HRV: '#440256',
CMR: '#440256',
BLZ: '#440154',
PRT: '#450457',
MDA: '#440154',
SVK: '#440256',
HND: '#440154',
MDG: '#440154',
SRB: '#440154',
LSO: '#440154',
PER: '#440256',
TTO: '#440154',
CRI: '#440154',
LKA: '#440154',
CZE: '#450457',
NZL: '#450559',
SVN: '#440256',
AUT: '#481769',
IRN: '#460b5e',
FRA: '#463480',
SWZ: '#440154',
PRI: '#440154',
ALB: '#440154',
GHA: '#440154',
PAK: '#450559',
GRC: '#450457',
GUY: '#440154',
FRO: '#440154',
FIN: '#450559',
ECU: '#440154',
NPL: '#440154',
DEU: '#29798e',
IND: '#453581',
SGP: '#471063',
LUX: '#440154',
NOR: '#450457',
NLD: '#481b6d',
MAR: '#440256',
URY: '#440154',
LBY: '#440154',
IRQ: '#440154',
LTU: '#440154',
ROU: '#440256',
CUB: '#440154',
CUW: '#440154',
BEN: '#440154',
IRL: '#450457',
TUN: '#440154',
MUS: '#440154',
BEL: '#46085c',
LVA: '#440154',
MTQ: '#440154',
ESP: '#481b6d',
LIE: '#440154',
ZAF: '#450559',
BOL: '#440154',
POL: '#471164',
MAC: '#440154',
ZMB: '#440154',
UZB: '#440154',
CHE: '#481f70',
HKG: '#450559',
KOR: '#481467',
DZA: '#440256',
NGA: '#440154',
GRD: '#440154',
GTM: '#440154',
CYP: '#440154',
SDN: '#440154',
LBR: '#440154',
BGD: '#440154',
NIC: '#440154',
MLI: '#440154',
KWT: '#440154',
ISL: '#440154',
ETH: '#440154',
GUM: '#440154',
KEN: '#440154',
TKM: '#440154',
BMU: '#440154',
QAT: '#440154',
AZE: '#440154',
MYS: '#450457',
THA: '#440256',
KAZ: '#440154',
BIH: '#440154',
USA: '#fde725',
MMR: '#440154',
LBN: '#440154',
DOM: '#440154',
SWE: '#471063',
TWN: '#470d60',
MKD: '#440154',
DNK: '#470d60',
UGA: '#440154',
IDN: '#440256',
RUS: '#481467',
SLV: '#440154',
BRA: '#46337f',
EST: '#440154',
GEO: '#440154',
SYR: '#440154',
SEN: '#440154',
BHR: '#440154',
AUS: '#482071',
BFA: '#440154',
CHN: '#46307e',
ISR: '#471063',
},data: { 
OMN: {fillKey: 'OMN', visitors: 2, country: " Oman " },
GBR: {fillKey: 'GBR', visitors: 2143, country: " United Kingdom " },
ITA: {fillKey: 'ITA', visitors: 516, country: " Italy " },
JPN: {fillKey: 'JPN', visitors: 1036, country: " Japan " },
TJK: {fillKey: 'TJK', visitors: 5, country: " Tajikistan " },
REU: {fillKey: 'REU', visitors: 1, country: " Réunion " },
PHL: {fillKey: 'PHL', visitors: 67, country: " Philippines " },
ARM: {fillKey: 'ARM', visitors: 6, country: " Armenia " },
MLT: {fillKey: 'MLT', visitors: 18, country: " Malta " },
TUR: {fillKey: 'TUR', visitors: 334, country: " Turkey " },
EGY: {fillKey: 'EGY', visitors: 70, country: " Egypt " },
JOR: {fillKey: 'JOR', visitors: 4, country: " Jordan " },
CAN: {fillKey: 'CAN', visitors: 989, country: " Canada " },
ARG: {fillKey: 'ARG', visitors: 92, country: " Argentina " },
CHL: {fillKey: 'CHL', visitors: 104, country: " Chile " },
UKR: {fillKey: 'UKR', visitors: 92, country: " Ukraine " },
ARE: {fillKey: 'ARE', visitors: 37, country: " United Arab Emirates " },
BGR: {fillKey: 'BGR', visitors: 28, country: " Bulgaria " },
COL: {fillKey: 'COL', visitors: 344, country: " Colombia " },
MEX: {fillKey: 'MEX', visitors: 360, country: " Mexico " },
GRL: {fillKey: 'GRL', visitors: 1, country: " Greenland " },
CIV: {fillKey: 'CIV', visitors: 6, country: " Côte d'Ivoire " },
VNM: {fillKey: 'VNM', visitors: 33, country: " Viet Nam " },
SAU: {fillKey: 'SAU', visitors: 66, country: " Saudi Arabia " },
DMA: {fillKey: 'DMA', visitors: 1, country: " Dominica " },
TZA: {fillKey: 'TZA', visitors: 3, country: " Tanzania, United Republic of " },
PAN: {fillKey: 'PAN', visitors: 3, country: " Panama " },
HUN: {fillKey: 'HUN', visitors: 84, country: " Hungary " },
BHS: {fillKey: 'BHS', visitors: 2, country: " Bahamas " },
MNG: {fillKey: 'MNG', visitors: 4, country: " Mongolia " },
BLR: {fillKey: 'BLR', visitors: 12, country: " Belarus " },
VEN: {fillKey: 'VEN', visitors: 24, country: " Venezuela, Bolivarian Republic of " },
HRV: {fillKey: 'HRV', visitors: 38, country: " Croatia " },
CMR: {fillKey: 'CMR', visitors: 42, country: " Cameroon " },
BLZ: {fillKey: 'BLZ', visitors: 1, country: " Belize " },
PRT: {fillKey: 'PRT', visitors: 67, country: " Portugal " },
MDA: {fillKey: 'MDA', visitors: 4, country: " Moldova, Republic of " },
SVK: {fillKey: 'SVK', visitors: 38, country: " Slovakia " },
HND: {fillKey: 'HND', visitors: 6, country: " Honduras " },
MDG: {fillKey: 'MDG', visitors: 1, country: " Madagascar " },
SRB: {fillKey: 'SRB', visitors: 1, country: " Serbia " },
LSO: {fillKey: 'LSO', visitors: 2, country: " Lesotho " },
PER: {fillKey: 'PER', visitors: 27, country: " Peru " },
TTO: {fillKey: 'TTO', visitors: 3, country: " Trinidad and Tobago " },
CRI: {fillKey: 'CRI', visitors: 10, country: " Costa Rica " },
LKA: {fillKey: 'LKA', visitors: 14, country: " Sri Lanka " },
CZE: {fillKey: 'CZE', visitors: 64, country: " Czech Republic " },
NZL: {fillKey: 'NZL', visitors: 80, country: " New Zealand " },
SVN: {fillKey: 'SVN', visitors: 30, country: " Slovenia " },
AUT: {fillKey: 'AUT', visitors: 408, country: " Austria " },
IRN: {fillKey: 'IRN', visitors: 206, country: " Iran, Islamic Republic of " },
FRA: {fillKey: 'FRA', visitors: 1000, country: " France " },
SWZ: {fillKey: 'SWZ', visitors: 1, country: " Swaziland " },
PRI: {fillKey: 'PRI', visitors: 13, country: " Puerto Rico " },
ALB: {fillKey: 'ALB', visitors: 1, country: " Albania " },
GHA: {fillKey: 'GHA', visitors: 9, country: " Ghana " },
PAK: {fillKey: 'PAK', visitors: 85, country: " Pakistan " },
GRC: {fillKey: 'GRC', visitors: 74, country: " Greece " },
GUY: {fillKey: 'GUY', visitors: 1, country: " Guyana " },
FRO: {fillKey: 'FRO', visitors: 1, country: " Faroe Islands " },
FIN: {fillKey: 'FIN', visitors: 105, country: " Finland " },
ECU: {fillKey: 'ECU', visitors: 5, country: " Ecuador " },
NPL: {fillKey: 'NPL', visitors: 2, country: " Nepal " },
DEU: {fillKey: 'DEU', visitors: 2732, country: " Germany " },
IND: {fillKey: 'IND', visitors: 1044, country: " India " },
SGP: {fillKey: 'SGP', visitors: 279, country: " Singapore " },
LUX: {fillKey: 'LUX', visitors: 26, country: " Luxembourg " },
NOR: {fillKey: 'NOR', visitors: 64, country: " Norway " },
NLD: {fillKey: 'NLD', visitors: 476, country: " Netherlands " },
MAR: {fillKey: 'MAR', visitors: 39, country: " Morocco " },
URY: {fillKey: 'URY', visitors: 8, country: " Uruguay " },
LBY: {fillKey: 'LBY', visitors: 2, country: " Libya " },
IRQ: {fillKey: 'IRQ', visitors: 10, country: " Iraq " },
LTU: {fillKey: 'LTU', visitors: 16, country: " Lithuania " },
ROU: {fillKey: 'ROU', visitors: 33, country: " Romania " },
CUB: {fillKey: 'CUB', visitors: 2, country: " Cuba " },
CUW: {fillKey: 'CUW', visitors: 1, country: " Curaçao " },
BEN: {fillKey: 'BEN', visitors: 2, country: " Benin " },
IRL: {fillKey: 'IRL', visitors: 68, country: " Ireland " },
TUN: {fillKey: 'TUN', visitors: 15, country: " Tunisia " },
MUS: {fillKey: 'MUS', visitors: 4, country: " Mauritius " },
BEL: {fillKey: 'BEL', visitors: 144, country: " Belgium " },
LVA: {fillKey: 'LVA', visitors: 22, country: " Latvia " },
MTQ: {fillKey: 'MTQ', visitors: 1, country: " Martinique " },
ESP: {fillKey: 'ESP', visitors: 489, country: " Spain " },
LIE: {fillKey: 'LIE', visitors: 1, country: " Liechtenstein " },
ZAF: {fillKey: 'ZAF', visitors: 83, country: " South Africa " },
BOL: {fillKey: 'BOL', visitors: 21, country: " Bolivia, Plurinational State of " },
POL: {fillKey: 'POL', visitors: 301, country: " Poland " },
MAC: {fillKey: 'MAC', visitors: 4, country: " Macao " },
ZMB: {fillKey: 'ZMB', visitors: 3, country: " Zambia " },
UZB: {fillKey: 'UZB', visitors: 1, country: " Uzbekistan " },
CHE: {fillKey: 'CHE', visitors: 559, country: " Switzerland " },
HKG: {fillKey: 'HKG', visitors: 101, country: " Hong Kong " },
KOR: {fillKey: 'KOR', visitors: 359, country: " Korea, Republic of " },
DZA: {fillKey: 'DZA', visitors: 30, country: " Algeria " },
NGA: {fillKey: 'NGA', visitors: 9, country: " Nigeria " },
GRD: {fillKey: 'GRD', visitors: 1, country: " Grenada " },
GTM: {fillKey: 'GTM', visitors: 5, country: " Guatemala " },
CYP: {fillKey: 'CYP', visitors: 13, country: " Cyprus " },
SDN: {fillKey: 'SDN', visitors: 1, country: " Sudan " },
LBR: {fillKey: 'LBR', visitors: 1, country: " Liberia " },
BGD: {fillKey: 'BGD', visitors: 19, country: " Bangladesh " },
NIC: {fillKey: 'NIC', visitors: 1, country: " Nicaragua " },
MLI: {fillKey: 'MLI', visitors: 2, country: " Mali " },
KWT: {fillKey: 'KWT', visitors: 4, country: " Kuwait " },
ISL: {fillKey: 'ISL', visitors: 6, country: " Iceland " },
ETH: {fillKey: 'ETH', visitors: 13, country: " Ethiopia " },
GUM: {fillKey: 'GUM', visitors: 1, country: " Guam " },
KEN: {fillKey: 'KEN', visitors: 25, country: " Kenya " },
TKM: {fillKey: 'TKM', visitors: 1, country: " Turkmenistan " },
BMU: {fillKey: 'BMU', visitors: 1, country: " Bermuda " },
QAT: {fillKey: 'QAT', visitors: 5, country: " Qatar " },
AZE: {fillKey: 'AZE', visitors: 3, country: " Azerbaijan " },
MYS: {fillKey: 'MYS', visitors: 72, country: " Malaysia " },
THA: {fillKey: 'THA', visitors: 46, country: " Thailand " },
KAZ: {fillKey: 'KAZ', visitors: 5, country: " Kazakhstan " },
BIH: {fillKey: 'BIH', visitors: 5, country: " Bosnia and Herzegovina " },
USA: {fillKey: 'USA', visitors: 6732, country: " United States " },
MMR: {fillKey: 'MMR', visitors: 3, country: " Myanmar " },
LBN: {fillKey: 'LBN', visitors: 2, country: " Lebanon " },
DOM: {fillKey: 'DOM', visitors: 4, country: " Dominican Republic " },
SWE: {fillKey: 'SWE', visitors: 272, country: " Sweden " },
TWN: {fillKey: 'TWN', visitors: 223, country: " Taiwan, Province of China " },
MKD: {fillKey: 'MKD', visitors: 2, country: " Macedonia, Republic of " },
DNK: {fillKey: 'DNK', visitors: 234, country: " Denmark " },
UGA: {fillKey: 'UGA', visitors: 2, country: " Uganda " },
IDN: {fillKey: 'IDN', visitors: 51, country: " Indonesia " },
RUS: {fillKey: 'RUS', visitors: 344, country: " Russian Federation " },
SLV: {fillKey: 'SLV', visitors: 1, country: " El Salvador " },
BRA: {fillKey: 'BRA', visitors: 983, country: " Brazil " },
EST: {fillKey: 'EST', visitors: 14, country: " Estonia " },
GEO: {fillKey: 'GEO', visitors: 7, country: " Georgia " },
SYR: {fillKey: 'SYR', visitors: 2, country: " Syrian Arab Republic " },
SEN: {fillKey: 'SEN', visitors: 2, country: " Senegal " },
BHR: {fillKey: 'BHR', visitors: 2, country: " Bahrain " },
AUS: {fillKey: 'AUS', visitors: 602, country: " Australia " },
BFA: {fillKey: 'BFA', visitors: 1, country: " Burkina Faso " },
CHN: {fillKey: 'CHN', visitors: 927, country: " China " },
ISR: {fillKey: 'ISR', visitors: 270, country: " Israel " },
}
})
