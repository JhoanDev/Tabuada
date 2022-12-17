function gerar() {
    var num = document.getElementById('numero')
    var res = document.getElementById('res')
    var n1 = document.getElementById('1')
    var n2 = document.getElementById('2')
    var n3 = document.getElementById('3')
    var n4 = document.getElementById('4')
    var n5 = document.getElementById('5')
    var n6 = document.getElementById('6')
    var n7 = document.getElementById('7')
    var n8 = document.getElementById('8')
    var n9 = document.getElementById('9')
    var n10 = document.getElementById('10')
    if (num.value.length == 0) {
        window.alert('Insira algum valor')
    }
    else{
        num = Number(num.value)
        res.innerHTML = `Tabuada do ${num}` 
        for(var cont = 1; cont <= 10 ; cont++){
            switch (cont) {
                case 1:
                    n1.innerHTML = `${num} * ${cont} = <b>${num*cont}</b>`
                    break;
                case 2:
                    n2.innerHTML = `${num} * ${cont} = <b>${num*cont}</b>`
                    break;
                case 3:
                    n3.innerHTML = `${num} * ${cont} = <b>${num*cont}</b>`
                    break;
                case 4:
                    n4.innerHTML = `${num} * ${cont} = <b>${num*cont}</b>`
                    break;
                case 5:
                    n5.innerHTML = `${num} * ${cont} = <b>${num*cont}</b>`
                    break;
                case 6:
                    n6.innerHTML = `${num} * ${cont} = <b>${num*cont}</b>`
                    break;
                case 7:
                    n7.innerHTML = `${num} * ${cont} = <b>${num*cont}</b>`
                    break;
                case 8:
                    n8.innerHTML = `${num} * ${cont} = <b>${num*cont}</b>`
                    break;
                case 9:
                    n9.innerHTML = `${num} * ${cont} = <b>${num*cont}</b>`
                    break;
                case 10:
                    n10.innerHTML = `${num} * ${cont} = <b>${num*cont}</b>`
                    break;
                default:
                    n10.innerHTML = '[ERRO]'
                    break;
            }
        }
    }
}

