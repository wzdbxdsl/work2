//第一种

var obj1={
    name1:'毛子寒',
    age1:18,
    sex1:'女',
    contact:{
        QQnumber:3478265250,
        Telephone:13228532777
    }
}
console.log(obj1.name1);

//第二种
var obj2=new Object();
obj2.name2='毛子寒';
obj2.age2=18;
obj2.sex2='女';
console.log(obj2.name2);
//第三种
var mzh={
    name3:'毛子寒',
    age3:18,
    contact3:{
        QQnumber3:3478265250,
        Telephone3:13228532777
    }
    

//第四种

}

function Student(name4,age4,sex4){
            this.name4 = name4;
            this.age4 = age4;
            this.sex4 = sex4;
}

var m=new Student('毛子寒',18,女);
console.long(m);

