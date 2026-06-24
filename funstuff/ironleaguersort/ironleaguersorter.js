// 2008/7/3 Scripted by K-Factory@migiwa
// 2009/1/27 Modified by K-Factory@migiwa

// *****************************************************************************
str_CenterT = 'Tie!';
str_CenterB = 'Undo last choice';

str_ImgPath = '';
var bln_ResultMode = 1;
var int_ResultImg = 2;
var int_ResultRank = 3;

var bln_ResultStyle = 0;

var bln_ProgessBar = 1;

var int_Colspan = 3;
var ary_TitleData = [
   "Silver Castle",
   "Dark Prince",
   "Stray Leaguers",
   "Misc Humans",
   "Humans Only",
   "Leaguers Only",
   "Major Named Characters Only",
];

var ary_CharacterData = [
[1,"Magnum Ace",		 	[1,0,0,0,0,1,1], "https://i.imgur.com/qfmQXug.png"],
[1,"Mach Windy", 		 	[1,0,0,0,0,1,1], "https://i.imgur.com/mlgXK8t.png"],
[1,"Kiai Ryuken",		 	[1,0,0,0,0,1,1], "https://i.imgur.com/EdPaVx5.png"],
[1,"Bull Armor",		 	[1,0,0,0,0,1,1], "https://i.imgur.com/lO2LN4R.png"],
[1,"Juurota Kiwami",	 	[1,0,0,0,0,1,1], "https://i.imgur.com/c3PRXti.png"],
[1,"Topjoy",			 	[1,0,0,0,0,1,1], "https://i.imgur.com/GJtqC96.png"],
[1,"GZ",				 	[1,0,0,0,0,1,1], "https://i.imgur.com/qxU79F2.png"],
[1,"Silky",				 	[1,0,0,0,0,1,1], "https://i.imgur.com/EGoDbFl.png"],
[1,"Silver Castle Player", 	[1,0,0,0,0,1,0], "https://i.imgur.com/bQDzBFK.png"],
[1,"Ruri Ginjo", 			[1,0,0,0,1,0,1], "https://i.imgur.com/0l9H3sp.png"],
[1,"Edmond Ginjo", 			[1,0,0,0,1,0,1], "https://i.imgur.com/DVT7EWe.png"],
[1,"Richard Ginjo", 		[1,0,0,0,1,0,1], "https://i.imgur.com/3UmOS95.png"],
[1,"Meckel", 				[1,0,0,0,1,0,1], "https://i.imgur.com/bhxmwGT.png"],
[1,"Gold Arm", 				[0,1,0,0,0,1,1], "https://i.imgur.com/6JJ4nE1.png"],
[1,"Gold Foot", 			[0,1,0,0,0,1,1], "https://i.imgur.com/QDxt7Qw.png"],
[1,"Gold Mask", 			[0,1,0,0,0,1,1], "https://i.imgur.com/WdW2OK2.png"],
[1,"Super Head", 			[0,1,0,0,0,1,0], "https://i.imgur.com/Y4oCUwo.png"],
[1,"S-XXX", 				[0,1,0,0,0,1,0], "https://i.imgur.com/PXxNfmq.png"],
[1,"Shirky-Dorg", 			[0,1,0,0,0,1,0], "https://i.imgur.com/4Mxxxle.png"],
[1,"Dankuganzu", 			[0,1,0,0,0,1,0], "https://i.imgur.com/dAMXiJs.png"],
[1,"Valkyirle", 			[0,1,0,0,0,1,0], "https://i.imgur.com/KFI7QGi.png"],
[1,"Fighter Spirits", 		[0,1,0,0,0,1,1], "https://i.imgur.com/rnk5Thw.png"],
[1,"Fighter Arrow", 		[0,1,0,0,0,1,1], "https://i.imgur.com/vgKJi7N.png"],
[1,"Giroti", 				[0,1,0,0,1,0,1], "https://i.imgur.com/avB5tid.png"],
[1,"Segal", 				[0,1,0,0,1,0,1], "https://i.imgur.com/WIM2LNe.png"],
[1,"Section-X", 			[0,1,0,0,1,0,0], "https://i.imgur.com/vxQs0zK.png"],
[1,"Kuritsu", 				[0,1,0,0,1,0,0], "https://i.imgur.com/mFcXQHT.png"],
[1,"Mueher", 				[0,1,0,0,1,0,0], "https://i.imgur.com/1ca8Uru.png"],
[1,"Holy", 					[0,1,0,0,1,0,0], "https://i.imgur.com/dcznylF.png"],
[1,"Richie", 				[0,1,0,0,1,0,0], "https://i.imgur.com/IbxLLGL.png"],
[1,"Heizuman", 				[0,1,0,0,1,0,0], "https://i.imgur.com/BD06Abi.png"],
[1,"Gebara", 				[0,0,1,0,0,1,0], "https://i.imgur.com/H88wWsf.png"],
[1,"Wild Hawk", 			[0,0,1,0,0,1,0], "https://i.imgur.com/IIuRmsT.png"],
[1,"Mad Chain", 			[0,0,1,0,0,1,0], "https://i.imgur.com/qO2Dli5.png"],
[1,"Destiny", 				[0,0,1,0,0,1,0], "https://i.imgur.com/Y9vuPzp.png"],
[1,"Nakkara", 				[0,0,1,0,0,1,0], "https://i.imgur.com/QVHi8hw.png"],
[1,"Grey Link", 			[0,0,1,0,0,1,0], "https://i.imgur.com/fq4OWbX.png"],
[1,"Thirteen", 				[0,0,1,0,0,1,0], "https://i.imgur.com/xCPdZRI.png"],
[1,"Deus", 					[0,0,1,0,0,1,0], "https://i.imgur.com/61aBJ3p.png"],
[1,"Dyke Dyson", 			[0,0,1,0,0,1,0], "https://i.imgur.com/e0P6geL.png"],
[1,"Sisley", 				[0,0,1,0,0,1,0], "https://i.imgur.com/qAc0eJk.png"],
[1,"Health Parse", 			[0,0,1,0,0,1,0], "https://i.imgur.com/bYXcHol.png"],
[1,"Jet Setter", 			[0,0,1,0,0,1,0], "https://i.imgur.com/8hzC8cL.png"],
[1,"Watt", 					[0,0,1,0,0,1,0], "https://i.imgur.com/akjcKqz.png"],
[1,"Amp", 					[0,0,1,0,0,1,0], "https://i.imgur.com/883mvfv.png"],
[1,"Alucard", 				[0,0,1,0,0,1,0], "https://i.imgur.com/blYVbkR.png"],
[1,"Hiroshi", 				[0,0,0,1,1,0,0], "https://i.imgur.com/upYVNty.png"],
[1,"Gerus", 				[0,0,0,1,1,0,0], "https://i.imgur.com/bRWAu3y.png"],
[1,"Mariko", 				[0,0,0,1,1,0,0], "https://i.imgur.com/P01RKDT.png"],
[1,"Pot", 					[0,0,0,1,1,0,0], "https://i.imgur.com/Synwygm.png"],
[1,"Bezbez", 				[0,0,0,1,1,0,0], "https://i.imgur.com/fu8LKhO.png"],
[1,"Georgy Island", 		[0,0,0,1,1,0,0], "https://i.imgur.com/KAecrBH.png"],
[1,"Announcer", 			[0,0,0,1,1,0,0], "https://i.imgur.com/fJ3bbrK.png"],
[1,"Rogashi", 				[0,0,0,1,1,0,0], "https://i.imgur.com/2xGkaoP.png"],
[1,"Outrageous", 			[0,0,0,1,1,0,0], "https://i.imgur.com/8DP9Nx5.png"],
];