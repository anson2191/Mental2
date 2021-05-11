<template>
	<div>
  		<Nav showText=true navText="匹配問題填答"></Nav>
		<div id="layout_down">
			<p1>1. 這次主要想和心理師談什麼呢？</p1>
			<div class="button_list" style="height: 30vh">
			
					<div class="medium_button">
						<div id="b1" onclick="press('b1')" class="button_content">
							<p2>生涯規劃</p2>
						</div>
					</div>
					
					<div class="medium_button">
						<div id="b2" onclick="press('b2')" class="button_content">
							<p2>家庭狀況</p2>
						</div>
					</div>
					
					<div class="medium_button">
						<div id="b3" onclick="press('b3')" class="button_content">
							<p2>自我探索</p2>
						</div>
					</div>
					
					<div class="medium_button">
						<div id="b4" onclick="press('b4')" class="button_content">
							<p2>感情議題</p2>
						</div>
					</div>
					
					<div class="medium_button">
						<div id="b5" onclick="press('b5')" class="button_content">
							<p2>生活變故</p2>
						</div>
					</div>
					
					<div class="medium_button">
						<div id="b6" onclick="press('b6')" class="button_content">
							<p2>情緒低落</p2>
						</div>
					</div>
					
					<div class="medium_button">
						<div id="b7" onclick="press('b7')" class="button_content">
							<p2>性別議題</p2>
						</div>
					</div>
					
					<div class="medium_button">
						<div id="b8" onclick="press('b8')" class="button_content">
							<p2>人際相處</p2>
						</div>
					</div>
					
					<div class="medium_button">
						<div id="b9" onclick="press('b9')" class="button_content">
							<p2>睡眠問題</p2>
						</div>
					</div>
					
					<div class="medium_button">
						<div id="b10" onclick="press('b10')" class="button_content">
							<p2>其他</p2>
						</div>
					</div>
			</div>
			
			<p1>2. 有特別想選男/女性心理師嗎？</p1>
			<div class="button_list" style="height: 7vh">
			
					<div class="short_button">
						<div id="b11" onclick="press('b11')" class="button_content">
							<p2>不拘</p2>
						</div>
					</div>
					
					<div class="short_button">
						<div id="b12" onclick="press('b12')" class="button_content">
							<p2>男</p2>
						</div>
					</div>
					
					<div class="short_button">
						<div id="b13" onclick="press('b13')" class="button_content">
							<p2>女</p2>
						</div>
					</div>
			</div>
			
			<p1>3. 比較喜歡以下哪種諮商風格呢？</p1>
			<div class="button_list" style="height: 20vh">
			
					<div class="long_button">
						<div id="b14" onclick="press('b14')" class="button_content">
							<p2>想被溫柔安慰</p2>
						</div>
					</div>
					
					<div class="long_button">
						<div id="b15" onclick="press('b15')" class="button_content">
							<p2>想聽客觀的視角分析</p2>
						</div>
					</div>
					
					<div class="long_button">
						<div id="b16" onclick="press('b16')" class="button_content">
							<p2>想被溫和的罵醒</p2>
						</div>
					</div>
			</div>
			
			<div id="accept_div">
				<div id="accept_button" onclick="location.href=''">				
					<font class="button_font">下一步</font>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'button_content',
	data: {
		pressing: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
	},
	methods: {
		press(id) {
			if(pressing[id]) {
				document.getElementById(id).style = ("color: #5C5C5C; background: #FFFFFF;");
			}
			else {
				document.getElementById(id).style = ("color: #FFFFFF; background: #20E2D7;");
			}
			pressing[id] = !pressing[id];
		},
	},
};
</script>

<style rel="stylesheet" type="text/css">
body{
	border: 0;
	padding: 0;
	margin: 0;
	
	font-family: Taipei Sans TC Beta;
}

button{
	border: none;
    outline: none;
    background: none;
    padding: 0;
    border-radius: 1vw;
    cursor: pointer;
}

blockquote{
	margin-block: 0;
}

.button_font{
	font-size: 2.22vh;
	font-weight: normal;
	color: #FFFFFF;
}

#layout_down{

    padding: 0 4vh;
}

.short_button{
	width: 9.63vh;
	height: 5vh;
	
	background-image: -webkit-linear-gradient(top, #96FBC4 33.15%, #20E2D7 127.81%);
    background-image: -moz-linear-gradient(top, #96FBC4 33.15%, #20E2D7 127.81%);
    background-image: linear-gradient(top, #96FBC4 33.15%, #20E2D7 127.81%);
	
	box-shadow: 0.24vh 0.24vh 1.2vh rgb(204 204 204 / 75%);
	
	padding: 0.1vh;
	border-radius: 1.2vh;
	box-sizing: border-box;
}

.medium_button{
	width: 14.8vh;
	height: 5vh;
	
	background-image: -webkit-linear-gradient(top, #96FBC4 33.15%, #20E2D7 127.81%);
    background-image: -moz-linear-gradient(top, #96FBC4 33.15%, #20E2D7 127.81%);
    background-image: linear-gradient(top, #96FBC4 33.15%, #20E2D7 127.81%);
	
	box-shadow: 0.24vh 0.24vh 1.2vh rgb(204 204 204 / 75%);
	
	padding: 0.1vh;
	border-radius: 1.2vh;
	box-sizing: border-box;
}

.button_content{
	width:100%; 
    height:100%; 
    border-radius: 1.2vh; 
	
	display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.8vh;
	
	background: #FFFFFF;
    color: #5C5C5C;
	
	cursor: pointer;
}

.long_button{
	width: 34.3vh;
	height: 5vh;
	
	background-image: -webkit-linear-gradient(top, #96FBC4 33.15%, #20E2D7 127.81%);
    background-image: -moz-linear-gradient(top, #96FBC4 33.15%, #20E2D7 127.81%);
    background-image: linear-gradient(top, #96FBC4 33.15%, #20E2D7 127.81%);
	
	box-shadow: 0.24vh 0.24vh 1.2vh rgb(204 204 204 / 75%);
	
	padding: 0.1vh;
	border-radius: 1.2vh;
	box-sizing: border-box;
}

p1{
	font-style: normal;
	font-weight: bold;
	font-size: 2.5vh;
	color: #4F4F4F;
	
	line-height: 3.05vh;
}

p2{
	font-style: normal;
	font-weight: normal;
	font-size: 1.85vh;
	color: #5C5C5C;
	line-height: 2.46vh;
}

.button_list{
	display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-content: space-around;
    flex-wrap: wrap;
	
	padding: 0 0 3vh 0;
}

#accept_div{
	display: flex;
    justify-content: center;
}

#accept_button{
    display: flex;
	flex-direction: row;
	align-items: center;
    justify-content: center;
	
	background: #20E2D7;
	box-shadow: 0 0.55vh 2.36vh -0.14vh rgba(107, 182, 177, 0.51);
	border-radius: 4.5vh;
	
	width: 34.3vh;
	height: 6vh;
    
	cursor: pointer;
}
</style>
