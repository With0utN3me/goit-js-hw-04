function slugify(title){
    let titleLower = title.toLowerCase();
    let slug = Array.from(titleLower);
    for (let element of slug) {
        if (element === " "){
            slug[slug.indexOf(element)] = "-";
        }
    }
    return slug.join("");
}
console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"