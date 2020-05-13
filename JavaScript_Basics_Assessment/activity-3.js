const nameList = ['Derrick', 'Sam', 'Devin'];

for (let i = 0; i < 3; i++) {
    const name = prompt(`Enter additional person number ${i+1}'s name (${i+1} of 3):`);
    nameList.push(name);
}

for (let i = 0; i < nameList.length; i++) {
    console.log(nameList[i]);
}