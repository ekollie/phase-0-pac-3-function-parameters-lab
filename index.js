function introduction(name, addPeriod = true){
    const period = addPeriod ? `.` : ``;
    return `Hi, my name is ${name}${period}`;
}
function introductionWithLanguage(name, language){
  return `${introduction(name, false)} and I am learning to program in ${language}.`
}
function  introductionWithLanguageOptional(name, language = `JavaScript`){
    return introductionWithLanguage(name, language);
}
