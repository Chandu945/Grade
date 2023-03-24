const handle = () =>{
    
    let eng = parseInt(document.getElementById("english").value) || 0
    let math = parseInt(document.getElementById("maths").value) || 0
    let phy = parseInt(document.getElementById("phy").value) || 0
    let chem = parseInt(document.getElementById("chem").value) || 0
    let comp = parseInt(document.getElementById("comp").value) || 0
    let total = eng + math + phy + chem + comp
    if(eng < 0 || eng > 100 || math < 0 || math > 100 ||phy < 0 || phy > 100 ||chem < 0 || chem > 100 ||comp < 0 || comp > 100 ){
        alert("Please Enter Marks in range of 100")
    }
    document.getElementById("tot").innerText = `Total Marks : ${total}`
    let Ave = total/5
    let Average = Ave.toFixed(1)
    document.getElementById("avg").innerText = `Your Average marks are : ${Average}`
    let res;
    if (eng < 36 || math < 36 || phy < 36 || chem < 36 || comp < 36){
        res = "F"
    }else if(Average >= 90){
        res = "A"
    }else if(Average >= 80 && Average < 90){
        res = "B"
    }else if(Average >= 70 && Average < 80){
        res = "C"
    }else if(Average >= 60 && Average < 70){
        res = "D"
    }else{
        res = "F"
    }
    document.getElementById("gra").innerText = `You Got ${res} Grade`
 }