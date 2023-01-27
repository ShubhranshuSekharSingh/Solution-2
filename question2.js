const data = [
        { No:'1', name:'Bazaar Cafe', Address:'45250 Worth Avenue, Unit A', Postal Code:'201619' Lat:'36.1152', Long:'117.521' },
        { No:'2', name:'Bazaar Cafe', Address:'45250 Worth Avenue, Unit A', Postal Code:'201619' Lat:'36.1152', Long:'117.521' },
        { No:'3', name:'Bazaar Cafe', Address:'45250 Worth Avenue, Unit A', Postal Code:'201619' Lat:'36.1152', Long:'117.521' },
        { No:'4', name:'Bazaar Cafe', Address:'45250 Worth Avenue, Unit A', Postal Code:'201619' Lat:'36.1152', Long:'117.521' },
        { No:'5', name:'Bazaar Cafe', Address:'45250 Worth Avenue, Unit A', Postal Code:'201619' Lat:'36.1152', Long:'117.521' },
        { No:'6', name:'Bazaar Cafe', Address:'45250 Worth Avenue, Unit A', Postal Code:'201619' Lat:'36.1152', Long:'117.521' }
      ];

      const searchBox = document.getElementById('searchBox');
      const searchResults = document.getElementById('searchResults');

      searchBox.addEventListener('input', () => {
        const searchTerm = searchBox.value.toLowerCase();
        let results = '';
        data.forEach(item => {
          if (item.name.toLowerCase().includes(searchTerm)) {
            results += '<tr><td>${item.S No}</td><td>${item.Cafe Name}</td><td>${item.Address}</td><td>${item.Postal Code}</td><td>${item.Lat}</td><td>${item.Long}</td></tr>';
          }
        });
      });