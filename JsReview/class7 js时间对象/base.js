function getDate(){
		var d=new Date();//new 一个时间对象
		var year=d.getFullYear(); //获取年份
		var month=d.getMonth()+1;//获取月份
		var day=d.getDate(); //获取天数
		var res=year+'/'+month+'/'+day;
		return res;
	}
function getMonthDate(m,y){
		var d=new Date(''+y+'/1/1');  //new 一个时间对象
		var sum1=d.setMonth(m); //从一月1到m+1月1号的时间
		var sum2=d.setMonth(m-1);// 从一月1到m月1号的时间
		var res=Math.abs((sum1-sum2)/1000/60/60/24);
		//求出该月的天数
		return res
}