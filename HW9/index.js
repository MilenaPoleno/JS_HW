async function getUserData(ID) {
    try {
      const response = await fetch(`https://reqres.in/api/users?page=2&id=${ID}`);
      if (response.ok) {
        console.log(await response.json());
      } else {
        console.log(await response.text());
      }
    } catch (error) {
      console.log(error);
    }
  }
getUserData(10);
getUserData(20);

const user = {
name: "John Doe",
job: "unknown",
};
  
async function saveUserData(user) {
try {
    const response = await fetch("https://reqres.in/api/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(user),
    });
    if (response.ok) {
    console.log(await response.json());
    } else {
    console.log(await response.text());
    }
} catch (error) {
    console.log(error);
}
}

saveUserData(user);