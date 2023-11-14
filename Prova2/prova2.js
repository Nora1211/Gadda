// Sample JSON data
const jsonData = [{"Id":0,
"Authors":"Abba, Giuseppe Cesare",
"Title":"Ricordi garibaldini",
"Cities":"Torino",
"Publisher":"Sten",
"Years":1913,
"Fund":"BTB Segn. 1493",
"Segni":null,
"Category":"IL",
"Archive": "AppLetIt"
},{
"Id":1,
"Authors":"Abernethy, Silvia M.",
"Title":"Something to read. Qualcosa da leggere in inglese. Letture per gli studenti di inglese",
"Cities":"Firenze  ",
"Publisher":"La Nuova Italia",
"Years":1946,
"Fund":"BTB Segn. 2404",
"Segni":null,
"Category":"GL",
"Archive": "AppLetTed"

}];


const jsonDataArch = [{
    "N":0,
    "unit\u00e0Id":"unit\u00e0bonsanti-0",
    "archivio":"Archivio Bonsanti",
    "fondo":null,
    "unit\u00e0":"\u00abPiccola antologia 1904\u00bb",
    "serie":"II",
    "sottoserie":"1 Quaderni 1",
    "faldone":null,
    "opera":"Appunti giovanili, scolastici e universitari (politecnico)",
    "schede tematiche":"AppLetIt",
    "anno inizio":1904.0,
    "anno fine":null,
    "mese":null,
    "giorno":null,
    "luogo":null,
    "genere":"Appunti",
    "forma":"Quaderni",
    "tipo":"Documento",
    "contenitore":"1 scatola",
    "sigla":null,
    "descrizione":null,
    "segnatura":null,
    "provenienza":null,
    "lingua":null,
    "sommario":null,
    "Stato di conservazione":null,
    "collana":null,
    "generelib": "IL"
},{
    "N":1,
    "unit\u00e0Id":"unit\u00e0bonsanti-1",
    "archivio":"Archivio Bonsanti",
    "fondo":null,
    "unit\u00e0":"\u00ab1913. \u2013 Gaddus\u00bb [appunti di analisi matematica]",
    "serie":"II",
    "sottoserie":"1 Quaderni 1",
    "faldone":null,
    "opera":"Appunti giovanili, scolastici e universitari (politecnico)",
    "schede tematiche":"AppLetIt",
    "anno inizio":1913.0,
    "anno fine":null,
    "mese":null,
    "giorno":null,
    "luogo":null,
    "genere":"Appunti",
    "forma":"Quaderni",
    "tipo":"Documento",
    "contenitore":"1 scatola",
    "sigla":null,
    "descrizione":null,
    "segnatura":null,
    "provenienza":null,
    "lingua":null,
    "sommario":null,
    "Stato di conservazione":null,
    "collana":null,
    "generelib": "IL"
}]
    
    const file2Data =[{
        "Id":3.0,
        "Nota di possesso":"\u00abCarlo Emilio Gadda \u2013 ottobre 1931-\u00bb",
        "Dedica":null,
        "Collocazione":"[p. 61 rr. 1-9 \u00abMais nous commen\u00e7ons \u00e0 conna\u00eetre la d\u00e9marche de ses anxi\u00e9t\u00e9s nocturnes: a nous commen\u00e7ons \u00e0 savoir le point \u00e0 partir duquel Balzac se s\u00e9pare de son exp\u00e9rience v\u00e9cue pour forger l'\u00eatre fictif auquel il va communiquer toute la force tragique de ses propres imaginations. Si la mort de l'enfant, si la mort de la jeune fille s\u00e9duite, si ce fait-divers bouleversant n'a jamais exist\u00e9 pour lui, est-on en droit de dire que rien n'aurait pu le causer?\u00bb].",
        "Postilla parlata":"dopo la promesse { \u201cmeschinit\u00e0 --> dalle immagini alla biografia",
        "Postilla muta":"Sottolineature"
    },{
        "Id":3.0,
        "Nota di possesso":null,
        "Dedica":null,
        "Collocazione":"[p. 62 rr. 7-20 \u00abEn fait, la ressemblance entre le Benassis de cinquante ans et l'\u00e9crivain de trente-trois acquiert toute la valeur d'une conjuration lointaine. Comme Balzac a conjur\u00e9 ses spectres de nagu\u00e8re, il s'efforce ici de conjurer le spectre de son \u00e2ge m\u00fbr. La trag\u00e9die est la m\u00eame, qu'il s'agisse de briser avec le pass\u00e9 ou de se lib\u00e9rer du futur. Fant\u00f4mes d'hier ou fant\u00f4mes de demain, les \u00eatres model\u00e9s \u00e0 la ressemblance de leur cr\u00e9ateur assument, au long de la \u201cCom\u00e9die Humaine\u201d, cette t\u00e2che affreuse de lui conqu\u00e9rir et de lui maintenir la route libre. A cette t\u00e2che ils succombent l'un apr\u00e8s l'autre. Mais leur sacrifice n'est pas vain: la route demeure ouverte, et l'\u00e9crivain peut s'y donner carri\u00e8re\u00bb]",
        "Postilla parlata":"Conclusione sintetica",
        "Postilla muta":null
    },{
        "Id":3.0,
        "Nota di possesso":null,
        "Dedica":null,
        "Collocazione":"[pp. 62- 63 rr 32-33; 1-13 \u00abTrop engrav\u00e9s en lui pour r\u00e9agir dans la pl\u00e9nitude de leur force. D\u00e9j\u00e0 trop exterieurs \u00e0 lui pour b\u00e9b\u00e9ficier de toute son \u00e9nergie interne. \u00catres mi-partie, ils apparaissent sous un signe funeste et sont d\u00e8s leur naissance vou\u00e9s au pire destin. Ce qu\u2019ils nous enseignent est pr\u00e9cieux: entre l\u2019auteur et la foule des personnages libres qu\u2019il entend cr\u00e9er s\u2019interposent, comme autant d\u2019\u00e9tapes \u00e0 franchir, les images de lui-m\u00eame qui lui font obstacle. Pour atteindre \u00e0 la\nfoule, ce sont, p\u00e9riodiquement, ces images qu\u2019il doit immoler. Balzac ne deviant romancier, dans toute la force du terme,\nqu\u2019une fois purg\u00e9 de tout \u00e9gocentrisme, \u00e0 coup de suicides imaginaires, \u00e0 coup de suppressions r\u00e9p\u00e9t\u00e9es des images qui\nl\u2019encombrent, - bref, \u00e0 coup de lui-m\u00eame\u00bb]",
        "Postilla parlata":"Interessante anche per me. Acuto",
        "Postilla muta":null
    }];
    
    
    const options = {
        valueNames: ['Authors', 'Title', 'Cities', 'Publisher', 'Years', 'Fund', 'Category'],
        page: 5,
        pagination: true,
        item: function (item, options) {
            // Create an array of links for the matching items in file2Data
            const matchingItems = file2Data.filter((file2Item) => file2Item.Id === item.Id);
            let links = '';
    
            if (matchingItems.length > 0) {
                links = `<a href="Postille.html?id=${item.Id}">View annotations </a>`;
            }
    
            return `<li>
                <strong class="Authors">${item.Authors}</strong><br>
                <span class="Title">${item.Title}</span><br>
                <span class="Cities">${item.Cities}</span>
                <span class="Publisher">,</span>
                <span class="Years">${item.Years}</span><br>
                <span class="Fund">${item.Fund}</span><br>
                <span class="Segni">${item.Segni}</span><br>
                <span class="Category">${item.Category}</span><br>
                ${links}
            </li>`;
        }
    };
    
    const userList = new List('catalog', options, jsonData);
    
    
    
    function resetList(){
        userList.search();
        userList.filter();
        $('.search', '.searchFil').val('');   
        //console.log('Reset Successfully!');
    };
    


    //filter through authors
    document.getElementById('search-author').addEventListener('input', function () {
        var authorsearchString = this.value.toLowerCase(); // Convert searchString to lowercase
        userList.filter(function (item) {
            var authorValue = item.values().Authors;
            return authorValue && authorValue.toLowerCase().includes(authorsearchString);
        });
    });
    

    
// filter through title
    document.getElementById('search-title').addEventListener('input', function () {
        var titlesearchString = this.value.toLowerCase();
        userList.filter(function (item) {
            var titleValue = item.values().Title;
            if (typeof titleValue === 'string') {
                return titleValue.toLowerCase().includes(titlesearchString);
            } else {
                return false; // Skip non-string values
            }
        });
    });



    /// Define an array of filters
    const filters = ['BTB', 'BAL', 'BAC', 'BTM'];
    
    // Attach a click event handler to each filter list item
    $('.filter-button').on('click', function() {
      const $li = $(this);
      const filterValue = $li.data('filter');
    
      if ($li.hasClass('selected')) {
        userList.filter(); // Clear the filter
        $li.removeClass('selected');
      } else {
        // Remove the 'selected' class from all filter list items
        $('.filter-button').removeClass('selected');
    
        // Add the 'selected' class to the clicked filter list item
        $li.addClass('selected');
    
        // Filter the list based on the filter value
        userList.filter(function(item) {
          return new RegExp(filterValue, 'i').test(item.values().Fund);
        });
      }
    });
    
    // Attach a click event handler to the "Show All Funds" button
$('#show-all').on('click', function() {
    // Remove the 'selected' class from all filter list items
    $('.filter-button').removeClass('selected');
    
    // Clear the filter to show all "Fund" values
    userList.filter();
  });
  
  
  // show only items that contain annotations
$('#show-annotations').on('click', function() {
    // Remove the 'selected' class from all filter list items
    $('.filter-button').removeClass('selected');

    // Filter the list to show only items that have a non-null and non-empty value in the "Segni" column
    userList.filter(function (item) {
        const segniValue = item.values().Segni;
        return segniValue !== null && segniValue.trim() !== '';
    });
});

// Reverse the previous function
$('#revert-show-annotations').on('click', function() {
    // Remove the 'selected' class from all filter list items
    $('.filter-button').removeClass('selected');
    
    // Clear the filter to show all items in the list
    userList.filter();
});



document.getElementById('category-filter').addEventListener('change', function () {
    var selectedCategory = this.value;

    if (selectedCategory === 'all') {
        userList.filter(); // Show all items
    } else {
        userList.filter(function (item) {
            return item.values().Category === selectedCategory;
        });
    }
});

