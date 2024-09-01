const ageCalculate = () => {
    console.log("ageCalculate function called!"); // Add this line
    const today = new Date();
    const inputDate = new Date(document.getElementById("date-input").value);
    console.log("Input Date:", inputDate);
  
    const birthDetails = getBirthDetails(inputDate);
    console.log("Birth Details:", birthDetails);
    const currentDetails = getCurrentDetails(today);
    console.log("Current Details:", currentDetails);
  
    if (isFutureDate(birthDetails, currentDetails)) {
      alert("Not Born Yet");
      displayResult("-", "-", "-");
      return;
    }

  
    const { years, months, days } = calculateAge(birthDetails, currentDetails);
    console.log("Years:", years);
    console.log("Months:", months);
    console.log("Days:", days);
    displayResult(days, months, years);
  };
  
  const getBirthDetails = (date) => {
    const birthDetails = {
      date: date.getDate(),
      month: date.getMonth() + 1,
      year: date.getFullYear(),
    };
    console.log("Birth Details:", birthDetails);
    return birthDetails;
  };
  
  const getCurrentDetails = (date) => {
    const currentDetails = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      date: date.getDate(),
    };
    console.log("Current Details:", currentDetails);
    return currentDetails;
  };
  
  const isFutureDate = (birthDetails, currentDetails) => {
    const isFuture = (
      birthDetails.year > currentDetails.year ||
      (birthDetails.year === currentDetails.year &&
        (birthDetails.month > currentDetails.month ||
          (birthDetails.month === currentDetails.month &&
            birthDetails.date > currentDetails.date)))
    );
    console.log("Is Future Date:", isFuture);
    return isFuture;
  };
  
  const calculateAge = (birthDetails, currentDetails) => {
    let years = currentDetails.year - birthDetails.year;
    let months, days;
  
    if (currentDetails.month < birthDetails.month) {
      years--;
      months = 12 - (birthDetails.month - currentDetails.month);
    } else {
      months = currentDetails.month - birthDetails.month;
    }
  
    if (currentDetails.date < birthDetails.date) {
      months--;
      const lastMonth = currentDetails.month === 1 ? 12 : currentDetails.month - 1;
      const daysInLastMonth = getDaysInMonth(lastMonth, currentDetails.year);
      days = daysInLastMonth - (birthDetails.date - currentDetails.date);
    } else {
      days = currentDetails.date - birthDetails.date;
    }
    console.log("Years:", years);
    console.log("Months:", months);
    console.log("Days:", days);
    return { years, months, days };
  };
  
  const getDaysInMonth = (month, year) => {
    const isLeapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    const daysInMonth = [31, isLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 30, 30, 31, 30, 31];
    return daysInMonth[month - 1];
  };
  
  const displayResult = (days, months, years) => {
    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
  };
  
  document.getElementById("calc-age-btn").addEventListener("click", () => {
    alert("Button Clicked!");
    console.log("Button clicked!"); 
    ageCalculate();
  });


  
  

  
  
  