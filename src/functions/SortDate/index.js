function sortDate(arry){
    arry.sort(function(a,b){
      return new Date(b.entry_date) - new Date(a.entry_date);
    });

    // Display top 10 elements
    return arry.slice(Math.max(arry.length - 10, 1))
  }

export default sortDate;