// Create a time seried from object array
function timeSeries(data){

    var map = {}; data.forEach(function(val){
        map[val.entry_date] = map[val.entry_date] || {};
        map[val.entry_date][val.status] = map[val.entry_date][val.status] || 0;
        map[val.entry_date][val.status]++;
      });

    var data1 = Object.keys(map).map(function(key){
        var tmpArr = [];
        var dict = {};
        for(var status in map[key])
        {
            tmpArr.push({key:status,value:map[key][status]})
            dict[status] = map[key][status];
        }
        return {date : new Date(key), status: dict};
    })

    return data1;
}

export default timeSeries;