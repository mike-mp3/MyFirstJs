function plus(){
    var n1, n2, r;
    n1 = document.getElementById('n1').value;
    n1 = parseInt(n1);

    n2 = document.getElementById('n2').value;
    n2 = parseInt(n2);
    
    r = n1+n2;

    document.getElementById('out').innerHTML = r;
}

function min(){
    var n1, n2, r;
    n1 = document.getElementById('n1').value;
    n1 = parseInt(n1);

    n2 = document.getElementById('n2').value;
    n2 = parseInt(n2);
    
    r = n1-n2;

    document.getElementById('out').innerHTML = r;
}