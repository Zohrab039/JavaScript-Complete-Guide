const task3Element = document.getElementById('task-3');

function task1(){
    alert('This is Function 1!');
}

function task2(name){
    alert(name);
}

task3Element.addEventListener('click', task1);

task1();
task2('Zohrab');

function task4(str1, str2, str3){
    combinedStr = `${str1} ${str2} ${str3}`;
    alert(combinedStr);
}

task4("hello", "Hi", "Bruh");