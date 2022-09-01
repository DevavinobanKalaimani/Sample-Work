<!DOCTYPE html>
<html>
    <body>
        <script>
    let  a,b,c,d;
 
function read(){
    a=prompt('Enter a 1st number');
    b=prompt('enter a 2nd number');
}

function check(){
    c= a%10;
    d= b%10;
}

if (a==b){
    alert(`${a} and ${b} are same`);
}else{
    alert(`${a} and ${b} are different`);
}
read();
</script>
</body>
</html>