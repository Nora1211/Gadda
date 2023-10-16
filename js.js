// Add event listener to a common ancestor element of your form(s)
document.querySelector("#search-form").addEventListener("submit", handleSearchSubmit);

function handleSearchSubmit(e) {
  e.preventDefault();

  const authorInput = document.querySelector("#search-authors");
  const titleInput = document.querySelector("#search-titles");

  if (authorInput && titleInput) {
    const authorQuery = authorInput.value;
    const titleQuery = titleInput.value;

    const searchResults = filterData(authorQuery, titleQuery);

    updateItemsPerPage(1);
    displayCatalog(searchResults);
  } else {
    console.error("One or both input elements not found in the DOM.");
  }
}

function filterData(authorQuery, titleQuery) {
  if (authorQuery === null || titleQuery === null) {
    console.error("AuthorQuery or TitleQuery is null.");
    return [];
  }

  return jsonData.filter(item => {
    return (
      (item.Authors || '').toLowerCase().includes(authorQuery.toLowerCase()) &&
      (item.Title || '').toLowerCase().includes(titleQuery.toLowerCase())
    );
  });
}



// Function to update the displayed items based on the current page
// ... (keep the previous code for pagination)

// Function to display the catalog items
// ... (keep the previous code for displaying catalog items)



// Sample JSON data
var jsonData = [
{
"Unnamed: 0":0.0,
"Authors":"Abba, Giuseppe Cesare",
"Title":"Ricordi garibaldini",
"Cities":"Torino",
"Publisher":"Sten",
"Years":1913,
"Fund":"BTB Segn. 1493",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1.0,
"Authors":"Abernethy, Silvia M.",
"Title":"Something to read. Qualcosa da leggere in inglese. Letture per gli studenti di inglese",
"Cities":"Firenze  ",
"Publisher":"La Nuova Italia",
"Years":1946,
"Fund":"BTB Segn. 2404",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2.0,
"Authors":"Abetti, Giorgio",
"Title":"Amici e nemici di Galileo",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1945,
"Fund":"BTB Segn. 743",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":3.0,
"Authors":"Abraham, Pierre",
"Title":"Cr\u00e9atures chez Balzac. Recherches sur la r\u00e9alisation intellectuelle. Avec un texte in\u00e9dit de Balzac",
"Cities":"Paris",
"Publisher":"NRF-Gallimard",
"Years":1931,
"Fund":"BTB Segn. 1116.",
"Segni":"Nota di possesso autografa in data 10.1931. Pieghe, sottolineature, postille.",
"Category":"FL"
},{
"Unnamed: 0":4.0,
"Authors":"Accademia Nazionale dei Lincei",
"Title":"Adunanza straordinaria pubblica Roma 14 novembre 1967",
"Cities":"Roma",
"Publisher":"Accademia Nazionale dei Lincei",
"Years":1967,
"Fund":"BTB Segn. Op.22",
"Segni":null,
"Category":"v"
},{
"Unnamed: 0":5.0,
"Authors":"Not found",
"Title":"L\u2019acquedotto del Flora in Maremma. Una grande opera voluta dal Duce",
"Cities":"Grosseto",
"Publisher":"Bollettino di Statistica",
"Years":1938,
"Fund":"BTB Segn. Op.110",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":6.0,
"Authors":"Acri, Francesco",
"Title":"Le cose migliori",
"Cities":"Lanciano",
"Publisher":"Carabba",
"Years":1919,
"Fund":"BTB Segn. 1803",
"Segni":"Sottolineature. Ritaglio di giornale inserito.",
"Category":"IL"
},{
"Unnamed: 0":7.0,
"Authors":"Acton, Harold",
"Title":"Gli ultimi Medici",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1962,
"Fund":"BTB Segn. 1494",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":8.0,
"Authors":"Adam, Antoine",
"Title":"Proust",
"Cities":"Paris",
"Publisher":"Hachette",
"Years":1965,
"Fund":"BAL",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":9.0,
"Authors":"Not found",
"Title":"Addestramento della fanteria",
"Cities":"Roma",
"Publisher":"Regio esercito italiano",
"Years":1916,
"Fund":"BAL",
"Segni":"Nota di possesso di Enrico Gadda, Valpini B. Valchiese 25 campo.",
"Category":"M"
},{
"Unnamed: 0":10.0,
"Authors":"Addison, Joseph",
"Title":"Il tappezziere politico",
"Cities":"Roma",
"Publisher":"Colombo",
"Years":1945,
"Fund":"BTB Segn. 1235",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":11.0,
"Authors":"Not found",
"Title":"The Advanced Learner\u2019s Dictionary of Current English",
"Cities":"London",
"Publisher":"Oxford University Press",
"Years":1955,
"Fund":"BTB Segn. 2482",
"Segni":null,
"Category":"D"
},{
"Unnamed: 0":12.0,
"Authors":"Aegerter, Emmanuel",
"Title":"Le grandi religioni",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1960,
"Fund":"BTB Segn. 1775",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":13.0,
"Authors":"Afanas\u2019ev, Aleksandr Nikolaevi\u010d",
"Title":"Antiche fiabe russe",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1953,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":14.0,
"Authors":"Not found",
"Title":"Agenti segreti veneziani nel \u2019700",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1942,
"Fund":"BTB Segn. 1495",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":15.0,
"Authors":"Agnetti, Vincenzo",
"Title":"Obsoleto",
"Cities":"Milano",
"Publisher":"All\u2019insegna del pesce d\u2019oro",
"Years":1968,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":16.0,
"Authors":"Agostino, Aurelio",
"Title":"La citt\u00e0 di Dio",
"Cities":"Torino",
"Publisher":"Societ\u00e0 Editrice Internazionale",
"Years":1939,
"Fund":"BTB Segn. 1776-1777",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":17.0,
"Authors":"Agostino, Aurelio",
"Title":"Le confessioni",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1966,
"Fund":"BTB Segn. 1778",
"Segni":"Biglietto inserito con invio autografodi Giulio Einaudi.",
"Category":"F"
},{
"Unnamed: 0":18.0,
"Authors":"Agostino, Aurelio",
"Title":"Confessions. Libri IVIII, IXXIII",
"Cities":"Paris",
"Publisher":"Les Belles Lettres",
"Years":1947,
"Fund":"BTB Segn. 1779-1780",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":19.0,
"Authors":"Not found",
"Title":"Ai vittoriosi di Castelfidardo XVIII settembre MDCCCLXXVIII settembre MDCCCCXII",
"Cities":"Roma",
"Publisher":"s.n.",
"Years":1912,
"Fund":"BTB Segn. Op. 92",
"Segni":"Nota di possesso autografa in data01.1920.",
"Category":"M"
},{
"Unnamed: 0":20.0,
"Authors":"Not found",
"Title":"Albert Paris G\u00fctersloh zum 75.Geburtstag",
"Cities":"M\u00fcnchen",
"Publisher":"Piper",
"Years":1962,
"Fund":"BTB Segn. 1227",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":21.0,
"Authors":"Albert-Sorel, Jean",
"Title":"Le d\u00e9clin de la monarchie  (1715- 1789)",
"Cities":"Paris",
"Publisher":"Fayard",
"Years":1948,
"Fund":"BTB Segn. 1591",
"Segni":"Postille.",
"Category":"S"
},{
"Unnamed: 0":22.0,
"Authors":"Not found",
"Title":"Gli albori della vita italiana.",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1941,
"Fund":"BTB Segn. 1578",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":23.0,
"Authors":"Aleardi, Aleardo",
"Title":"Le prime storie",
"Cities":"s.l.",
"Publisher":"s.e.",
"Years":1865,
"Fund":"BAL",
"Segni":"Nota di possesso Giuseppe Prosperini editore",
"Category":"IL"
},{
"Unnamed: 0":24.0,
"Authors":"Alem\u00e1n, Mateo",
"Title":"La vita del furfante (1599-1604)",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1942,
"Fund":"BTB Segn. 907",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":25.0,
"Authors":"Alessandrini, Garibaldo",
"Title":"Sabbie fiorite",
"Cities":"Asti",
"Publisher":"Poeti d\u2019oggi",
"Years":1940,
"Fund":"BTB Segn. 130",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":26.0,
"Authors":"Alfano, Giovanni Battista",
"Title":"Riassunto di geografia fisica egeologia per gli alunni delle scuole medie superiori",
"Cities":"Napoli",
"Publisher":"Casaeditrice P. Federico e G. Ardia",
"Years":1954,
"Fund":"BAL",
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":27.0,
"Authors":"Alfassio Grimaldi, Ugoberto",
"Title":"Il re buono",
"Cities":"Milano",
"Publisher":"Feltrinelli",
"Years":1970,
"Fund":"BAL",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":28.0,
"Authors":"Alfero, Giovanni Angelo \u2013 Haas, Eugen",
"Title":"Corso completo di lingua tedesca. Grammatica, esercizi, letture, lessico",
"Cities":"Milano",
"Publisher":"Dante Alighieri",
"Years":1939,
"Fund":"BTB Segn. 2406-2408",
"Segni":null,
"Category":"GR"
},{
"Unnamed: 0":29.0,
"Authors":"Alfieri, Vittorio",
"Title":"Giornali e lettere scelte",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1949,
"Fund":"BTB Segn. 132",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":30.0,
"Authors":"Alfieri, Vittorio",
"Title":"Tragedie. Con una notizia di C.Milanesi intorno agli autografi",
"Cities":"Firenze",
"Publisher":"Le Monnier",
"Years":1866,
"Fund":"BTB Segn. 133-134",
"Segni":"Postille.",
"Category":"IL"
},{
"Unnamed: 0":31.0,
"Authors":"Alfieri, Vittorio",
"Title":"Vita scritta da esso",
"Cities":"Milano",
"Publisher":"Guigoni",
"Years":"s.d",
"Fund":"BTB Segn. 131",
"Segni":"Sottolineature.",
"Category":"IL"
},{
"Unnamed: 0":32.0,
"Authors":"Alfieri, Vittorio Enzo",
"Title":"Lucrezio",
"Cities":"Firenze",
"Publisher":"Le Monnier",
"Years":1929,
"Fund":"BTB Segn. 115",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":33.0,
"Authors":"Algarotti, Francesco",
"Title":"Viaggio in Russia",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1942,
"Fund":"BTB Segn. 135",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":34.0,
"Authors":"Alge, Sines \u2013 Hamburger, Sophie \u2013 Rippmann, Walter",
"Title":"Leitfaden f\u00fcr den ersten Unterricht im Deutschen (II).",
"Cities":"St. GallenNeuch\u00e2tel",
"Publisher":"Fehr\u2019sche Buchhandlung-Delachaux & Niestl\u00e9",
"Years":1911,
"Fund":"BTB Segn. 2409",
"Segni":null,
"Category":"GR"
},{
"Unnamed: 0":35.0,
"Authors":"Alighieri, Dante",
"Title":"Il Convivio",
"Cities":"Firenze",
"Publisher":"Barbera",
"Years":1928,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":36.0,
"Authors":"Alighieri, Dante",
"Title":"Dante. Tutte le opere",
"Cities":"Milano",
"Publisher":"Mursia",
"Years":1965,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":37.0,
"Authors":"Alighieri, Dante",
"Title":"Della Volgare Eloquenza. ",
"Cities":"Roma",
"Publisher":"Garroni",
"Years":1910,
"Fund":"BAL",
"Segni":"Nota di possesso di Enrico Gadda,",
"Category":"IL"
},{
"Unnamed: 0":38.0,
"Authors":"Alighieri, Dante",
"Title":"La Divina Commedia giusta la lezione del codice bartoliniano. Vol.1",
"Cities":"Udine",
"Publisher":"Fratelli Mattiuzzi",
"Years":1823,
"Fund":"BTB Segn. 136",
"Segni":"Nota di possesso di Adele Gadda Lehr.",
"Category":"IL"
},{
"Unnamed: 0":39.0,
"Authors":"Alighieri, Dante",
"Title":"La divina commedia giusta la lezione del codice bartoliniano. Voll.2-3",
"Cities":"Udine",
"Publisher":"Fratelli Mattiuzzi",
"Years":1833,
"Fund":null,
"Segni":"Nota di possesso di Adele Gadda Lehr.",
"Category":"IL"
},{
"Unnamed: 0":40.0,
"Authors":"Alighieri, Dante",
"Title":"La Divina Commedia esposta inprosa a comune intelligenza",
"Cities":"Milano",
"Publisher":"Schiepatti",
"Years":1864,
"Fund":"BTB Segn. 140",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":41.0,
"Authors":"Alighieri, Dante",
"Title":"La Divina Commedia. ",
"Cities":"Milano",
"Publisher":"Albrighi e Segati e C.",
"Years":1905,
"Fund":"BAL",
"Segni":"Dedica anonima",
"Category":"IL"
},{
"Unnamed: 0":42.0,
"Authors":"Alighieri, Dante",
"Title":"La Divina Comm\u00e8dia",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1905,
"Fund":"BTB Segn. 137",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":43.0,
"Authors":"Alighieri, Dante",
"Title":"La Divina Commedia",
"Cities":"Roma-Milano",
"Publisher":"Albrighi e Segati e C.",
"Years":1908,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":44.0,
"Authors":"Alighieri, Dante",
"Title":"La Divina Commedia",
"Cities":"Firenze",
"Publisher":"Barbera",
"Years":1942,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":45.0,
"Authors":"Alighieri, Dante",
"Title":"La Divina Commedia",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1943,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":46.0,
"Authors":"Alighieri, Dante",
"Title":"La Divina Commedia, le Rime, iversi della Vita Nuova e le canzoni del Convivio",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1964,
"Fund":"BTB Segn. 138",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":47.0,
"Authors":"Alighieri, Dante",
"Title":"La Divina Commedia. Il Paradiso",
"Cities":"Milano",
"Publisher":"Societ\u00e0 Editrice La Milano",
"Years":"s.d.",
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":48.0,
"Authors":"Alighieri, Dante",
"Title":"Le opere. Testo critico della Societ\u00e0 dantesca italiana",
"Cities":"Firenze",
"Publisher":"Bemporad",
"Years":1921,
"Fund":"BTB Segn. 139",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":49.0,
"Authors":"Alighieri, Dante",
"Title":"Rime",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1965,
"Fund":"BTB Segn. 142",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":50.0,
"Authors":"Alighieri, Dante",
"Title":"La Vita Nuova",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1900,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":51.0,
"Authors":"Alighieri, Dante",
"Title":"La Vita Nuova",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1911,
"Fund":"BTB Segn. 144",
"Segni":"Nota di possesso autografa di Clara Gadda.",
"Category":"IL"
},{
"Unnamed: 0":52.0,
"Authors":"Alighieri, Dante",
"Title":"Vita nuova",
"Cities":"Firenze",
"Publisher":"Rinascimento del Libro",
"Years":1928,
"Fund":"BTB Segn. 143",
"Segni":"Parzialmente intonso.",
"Category":"IL"
},{
"Unnamed: 0":53.0,
"Authors":"Alighieri, Dante",
"Title":"La Vita Nuova e il Convivio con la vita di Dante scritta da Boccaccio",
"Cities":"Milano",
"Publisher":" Istituto EditorialeItaliano",
"Years":" Istituto EditorialeItaliano",
"Fund":"BAL",
"Segni":"Nota di possesso illeggibile e data 03.1917.",
"Category":"IL"
},{
"Unnamed: 0":54.0,
"Authors":"Not found",
"Title":"Alla santa memoria del Cav. Emilio Gadda",
"Cities":null,
"Publisher":"s.e.",
"Years":1921,
"Fund":"BAC",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":55.0,
"Authors":"Not found",
"Title":"Alla santa memoria di Carlotta  Gadda Belloni",
"Cities":null,
"Publisher":"s.e.",
"Years":1921,
"Fund":"BAC",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":56.0,
"Authors":"Allem, Maurice",
"Title":" La vie quotidienne sous le SecondEmpire",
"Cities":"Paris",
"Publisher":"Hachette",
"Years":1948,
"Fund":null,
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":57.0,
"Authors":"Alvisi, Giacomo Giuseppe",
"Title":"Intenti politici dei diversi statid\u2019Europa nelle questioni orientali",
"Cities":"Napoli",
"Publisher":"Morano",
"Years":1883,
"Fund":null,
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":58.0,
"Authors":"Amari, Michele",
"Title":"I Musulmani in Sicilia",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1942,
"Fund":"BTB Segn. 145",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":59.0,
"Authors":"Amati, Amato",
"Title":"Onoranze centenarie a M. Gaetana Agnesi",
"Cities":"Milano",
"Publisher":"Libreria Paolo Carrara",
"Years":1899,
"Fund":"BTB Segn. Op. 28",
"Segni":"Nota di possesso autografa di Adele Gadda   Lehr.",
"Category":"S"
},{
"Unnamed: 0":60.0,
"Authors":"Ambrosini, Igino",
"Title":"Alpinia intimo",
"Cities":"AnnoniStresa",
"Publisher":"Tip  Annoni",
"Years":"s.d.",
"Fund":"BTB Segn. 2059",
"Segni":"Intonso.",
"Category":"IL"
},{
"Unnamed: 0":61.0,
"Authors":"Amedeo, Giovanni",
"Title":"Il nipote",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1970,
"Fund":"BTB Segn. 146",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":62.0,
"Authors":"Not found",
"Title":"America d\u2019altri tempi. Mostra di 138 incisioni americane dal 1722 al 1875",
"Cities":"s.l.",
"Publisher":"American Federation of Arts",
"Years":1954,
"Fund":"BTB Segn. 2214",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":63.0,
"Authors":"Not found",
"Title":"Americana. Raccolta di narratori dalle origini ai nostri giorni",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1942,
"Fund":"BTB Segn. 1236",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":64.0,
"Authors":"Amicucci, Ermanno",
"Title":"Nizza e l\u2019Italia. Con documenti autografi, stampe e fotografie",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1939,
"Fund":"BTB Segn. 1496",
"Segni":"Pieghe e sottolineature.",
"Category":"S"
},{
"Unnamed: 0":65.0,
"Authors":"Anceschi, Luciano",
"Title":"Civilt\u00e0 delle lettere",
"Cities":"Milano",
"Publisher":"Istituto Editoriale Italiano",
"Years":1945,
"Fund":"BTB Segn. 745",
"Segni":"Dedica dell\u2019autore. Parzialmente intonso.",
"Category":"IL"
},{
"Unnamed: 0":66.0,
"Authors":"Andolfi, Otello",
"Title":"Don Giovanni di Volfango Mozart",
"Cities":"Roma",
"Publisher":"Form\u00ecggini",
"Years":1930,
"Fund":"BTB Segn. 1444",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":67.0,
"Authors":"Andr\u00e9, Albert",
"Title":"Edouard Manet",
"Cities":"Paris",
"Publisher":"Braun",
"Years":"s.d",
"Fund":"BTB Segn. 2204",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":68.0,
"Authors":"Andr\u00e9, Louis",
"Title":"Louis XIV et l\u2019Europe",
"Cities":"Paris",
"Publisher":"Michel",
"Years":1950,
"Fund":"BTB Segn. 1593",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":69.0,
"Authors":"Andreini Galli, Nori",
"Title":"Un cerchio d\u2019ansia",
"Cities":"Parma",
"Publisher":"Guanda",
"Years":1967,
"Fund":"BTB Segn. 147",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":70.0,
"Authors":"Anelli, Angelo",
"Title":"L\u2019italiana in Algeri",
"Cities":"Sesto San Giovanni",
"Publisher":"Barion",
"Years":1934,
"Fund":"BTB Segn. 1445",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":71.0,
"Authors":"Angeli, Diego",
"Title":"La vita di Guglielmo Shakespeare",
"Cities":"Milano",
"Publisher":"Treves",
"Years":1934,
"Fund":"BTB Segn. 1339",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":72.0,
"Authors":"Angeli, Siro",
"Title":"L\u2019ultima libert\u00e0",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1962,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore.",
"Category":"T"
},{
"Unnamed: 0":73.0,
"Authors":"Angelini, Alceste",
"Title":"Prime poesie e traduzioni dal greco",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1946,
"Fund":"BTB Segn. 148",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":74.0,
"Authors":"Angelini, Arnaldo Maria",
"Title":"La ricostruzione degli impiantiidroelettrici sul Velino e sul Neradella Soc. \u00abTerni\u00bb",
"Cities":"Milano",
"Publisher":"AEI",
"Years":1947,
"Fund":"BTB Segn. Op. 109",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":75.0,
"Authors":"Angelini, Cesare",
"Title":"Manzoni",
"Cities":"Torino",
"Publisher":"UTET",
"Years":1942,
"Fund":"BTB Segn. 746",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":76.0,
"Authors":"Angelini, Cesare",
"Title":"Notizie di poeti",
"Cities":"Firenze",
"Publisher":"LeMonnier",
"Years":1942,
"Fund":"BTB Segn. 747",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":77.0,
"Authors":"Angioletti, Giovanni Battista",
"Title":"Amici di strada",
"Cities":"Lanciano",
"Publisher":"Carabba",
"Years":1935,
"Fund":"BAL",
"Segni":"Biglietto omaggio dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":78.0,
"Authors":"Angioletti, Giovanni Battista",
"Title":"Donata",
"Cities":"Firenze",
"Publisher":"Le Monnier",
"Years":1941,
"Fund":"BTB Segn. 149",
"Segni":"Indicazione autografa del contenuto sul dorso.",
"Category":"IL"
},{
"Unnamed: 0":79.0,
"Authors":"Angioletti, Giovanni Battista",
"Title":"Un europeo d\u2019Italia. Inchiesta in occidente",
"Cities":"Torino",
"Publisher":"ERI",
"Years":1951,
"Fund":"BTB Segn. 1497",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":80.0,
"Authors":"Angioletti, Giovanni Battista",
"Title":"Giobbe uomo solo",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1955,
"Fund":"BTB Segn. 150",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":81.0,
"Authors":"Angioletti, Giovanni Battista",
"Title":"Il giorno del giudizio. Donata",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1952,
"Fund":"BTB Segn. 151",
"Segni":"Dedica dell\u2019autore in data 28.4.1952.",
"Category":"IL"
},{
"Unnamed: 0":82.0,
"Authors":"Angioletti, Giovanni Battista",
"Title":"Inchiesta segreta",
"Cities":"Roma",
"Publisher":"Casini",
"Years":1953,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":83.0,
"Authors":"Angioletti, Giovanni Battista",
"Title":"Gli italiani sono onesti",
"Cities":"Milano",
"Publisher":"Palazzi",
"Years":1968,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":84.0,
"Authors":"Angioletti, Giovanni Battista",
"Title":"Lavori \u00abin corso\u00bb",
"Cities":"Venezia",
"Publisher":"Neri Pozza",
"Years":1951,
"Fund":"BTB Segn. Op. 114",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":85.0,
"Authors":"Angrisani, Gaetano",
"Title":"Storia d\u2019Italia dal IV al XIX secolo scritta per le classi liceali",
"Cities":"Napoli",
"Publisher":"Morano",
"Years":1876,
"Fund":null,
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":86.0,
"Authors":"Not found",
"Title":"Anno bisestile 1932",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1931,
"Fund":"BTB Segn. Op. 47",
"Segni":"Nota di possesso autografa in data 2.09.1931 Milano.",
"Category":"V"
},{
"Unnamed: 0":87.0,
"Authors":"Not found",
"Title":"Annuario del teatro italiano",
"Cities":"Roma",
"Publisher":"SIAE",
"Years":1971,
"Fund":"BTB Segn. 2401",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":88.0,
"Authors":"Not found",
"Title":"Annuario del teatro italiano",
"Cities":"Roma",
"Publisher":"SIAE",
"Years":1971,
"Fund":"BTB Segn. 2402",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":89.0,
"Authors":"Not found",
"Title":"Annuario del teatro italiano",
"Cities":"Roma",
"Publisher":"SIAE",
"Years":1972,
"Fund":"BTB Segn. 2403",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":90.0,
"Authors":"Not found",
"Title":"Annuario generale 1925-26",
"Cities":"Milano",
"Publisher":"Touring club italiano",
"Years":1925,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":91.0,
"Authors":"Anonimo (ma C.E. Gadda)",
"Title":" Gli impianti elettrici della Citt\u00e0 del Vaticano",
"Cities":"s.l.",
"Publisher":"s.e.",
"Years":1936,
"Fund":"BTM, BAL",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":92.0,
"Authors":"Anonimo romano",
"Title":"Vita di Cola di Rienzo",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1943,
"Fund":"BTB Segn. 152",
"Segni":"Segnalibro.",
"Category":"IL"
},{
"Unnamed: 0":93.0,
"Authors":"Anselmo d\u2019Aosta",
"Title":"Monologio",
"Cities":"Lanciano",
"Publisher":"Carabba",
"Years":1912,
"Fund":"BTB Segn. 1781",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":94.0,
"Authors":"Anti, Carlo",
"Title":"Policleto",
"Cities":"Roma",
"Publisher":"Istituto Nazionale L.U.C.E.",
"Years":1931,
"Fund":"BTB Segn. 2175",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":95.0,
"Authors":"Not found",
"Title":"Antiche rime italiane tratte",
"Cities":"Modena",
"Publisher":"Societ\u00e0 Tipografica Modenese",
"Years":1941,
"Fund":"BTB Segn. 768",
"Segni":"Parzialmente intonso.",
"Category":"IL"
},{
"Unnamed: 0":96.0,
"Authors":"Antongini, Tom",
"Title":"Vita segreta di Gabriele\nD\u2019Annunzio",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1938,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":97.0,
"Authors":"Not found",
"Title":"Antologia della poesia italiana contemporanea",
"Cities":"Firenze",
"Publisher":" Vallecchi",
"Years":1946,
"Fund":null,
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":98.0,
"Authors":"Antologia della prosa italiana",
"Title":"Antologia della prosa italiana",
"Cities":"Firenze",
"Publisher":" Vallecchi",
"Years":1946,
"Fund":"BTB Segn. 885-887",
"Segni":"volume 1 in doppia copia: una copiaintonsa ed una parzialmente intonsa;volume 2 intonso.",
"Category":"IL"
},{
"Unnamed: 0":99.0,
"Authors":"Not found",
"Title":"Antologia della prosa scientifica italiana del \u2019600",
"Cities":"Firenze",
"Publisher":" Vallecchi",
"Years":1943,
"Fund":"BTB Segn. 801-802",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":100.0,
"Authors":"Not found",
"Title":"Antologia di scrittori lombardi\ncontemporanei",
"Cities":"Alpignano",
"Publisher":"Tallone",
"Years":1898,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":101.0,
"Authors":"Apollinaire, Guillaume",
"Title":"Alcools: po\u00e8mes",
"Cities":"Paris",
"Publisher":"NRF Gallimard",
"Years":1850,
"Fund":"BTB Segn. 944",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":102.0,
"Authors":"Apollinaire, Guillaume",
"Title":"Calligrammes",
"Cities":"Paris",
"Publisher":"NRF Gallimard",
"Years":1948,
"Fund":"BTB Segn. 945",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":103.0,
"Authors":"Not found",
"Title":"Approbation du livre de piet\u00e8\nde lajeune fille",
"Cities":"s.l.",
"Publisher":"s.e.",
"Years":"s.d.",
"Fund":"BAL",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":104.0,
"Authors":"Arbasino, Alberto",
"Title":"L\u2019anonimo lombardo",
"Cities":"Milano",
"Publisher":"Feltrinelli",
"Years":1959,
"Fund":"BTB Segn. 153-154",
"Segni":"Segnalibro.",
"Category":"IL"
},{
"Unnamed: 0":105.0,
"Authors":"Arbasino, Alberto",
"Title":"Certi romanzi",
"Cities":"Milano",
"Publisher":"Feltrinelli",
"Years":1964,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":106.0,
"Authors":"Arbasino, Alberto",
"Title":"Fratelli d\u2019Italia",
"Cities":"Milano",
"Publisher":"Feltrinelli",
"Years":1963,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":107.0,
"Authors":"Arbasino, Alberto",
"Title":"Le piccole vacanze",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1971,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":108.0,
"Authors":"Arbasino, Alberto",
"Title":"Il principe costante",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1972,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":109.0,
"Authors":"Aretino, Pietro",
"Title":"Lettere",
"Cities":"Milano",
"Publisher":"Bietti",
"Years":1928,
"Fund":"BTB Segn. 155",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":110.0,
"Authors":"Aretino, Pietro",
"Title":"Lettere",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1945,
"Fund":"BTB Segn. 156",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":111.0,
"Authors":"Aretino, Pietro",
"Title":"Piacevoli e capricciosi ragionamenti",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1943,
"Fund":"BTB Segn. 157",
"Segni":"Nota di possesso autografa in data 1945 Roma.",
"Category":"IL"
},{
"Unnamed: 0":112.0,
"Authors":"Aretino, Pietro",
"Title":"L\u2019umanit\u00e0 di Cristo",
"Cities":"Roma  Colombo",
"Publisher":"Colombo",
"Years":1945,
"Fund":"BTB Segn. 158",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":113.0,
"Authors":"Argan, Giulio Carlo",
"Title":"Tosi",
"Cities":"Firenze",
"Publisher":"Le Monnier",
"Years":1942,
"Fund":"BTB Segn. 2216",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":114.0,
"Authors":"Ariosto, Ludovico",
"Title":"Opere minori",
"Cities":"Firenze",
"Publisher":"Salani",
"Years":1936,
"Fund":"BTB Segn. 159",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":115.0,
"Authors":"Ariosto, Ludovico",
"Title":"Orlando furioso. Vol. II",
"Cities":"Firenze",
"Publisher":"Barbera",
"Years":1914,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":116.0,
"Authors":"Ariosto, Ludovico",
"Title":"Orlando furioso. Vol. III. Firenze,Barbera",
"Cities":"Firenze",
"Publisher":"Barbera",
"Years":1914,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":117.0,
"Authors":"Ariosto, Ludovico",
"Title":"Orlando furioso",
"Cities":"Bari",
"Publisher":"Laterza",
"Years":1928,
"Fund":"BTB Segn. 160-162",
"Segni":"Postille nel secondo e terzo volume.",
"Category":"IL"
},{
"Unnamed: 0":118.0,
"Authors":"Ariosto, Ludovico",
"Title":"Orlando furioso",
"Cities":"Firenze",
"Publisher":"Barbera",
"Years":1934,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":119.0,
"Authors":"Ariosto, Ludovico",
"Title":"Orlando furioso",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1966,
"Fund":"BTB Segn. 163",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":120.0,
"Authors":"Aristotele",
"Title":"De arte poetica liber",
"Cities":"Leipzig",
"Publisher":"Teubner",
"Years":"s.d.",
"Fund":"BAL",
"Segni":"Nota di possesso autografa di Clara Gaddae sottolineature",
"Category":"F"
},{
"Unnamed: 0":121.0,
"Authors":"Aristotele",
"Title":"Etica nicomachea",
"Cities":"Bari",
"Publisher":"Laterza",
"Years":1913,
"Fund":"BTB Segn. 1804",
"Segni":"Sottolineature e postille.",
"Category":"F"
},{
"Unnamed: 0":122.0,
"Authors":"Aristotele",
"Title":"Introduzione alla filosofia: dalla Metafisica, libri IIV; IX,10; XI,18",
"Cities":"Bari",
"Publisher":"Laterza",
"Years":1920,
"Fund":"BTB Segn. 1805",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":123.0,
"Authors":"Aristotele",
"Title":"Kategorien",
"Cities":"Leipzig",
"Publisher":"Felix Meiner",
"Years":1920,
"Fund":"BTB Segn. 1807",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":124.0,
"Authors":"Aristotele",
"Title":"Metaphysik",
"Cities":"Leipzig",
"Publisher":"Felix Meiner",
"Years":1920,
"Fund":"BTB Segn. 1809-1810",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":125.0,
"Authors":"Aristotele",
"Title":"Il primo libro della metafisica",
"Cities":"Lanciano",
"Publisher":"Carabba",
"Years":"s.d.",
"Fund":"BTB Segn. 1808",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":126.0,
"Authors":"Aristotele",
"Title":" I principi primi: dalla Metafisica, libri 89, 12",
"Cities":"Bari",
"Publisher":"Laterza",
"Years":1924,
"Fund":"BTB Segn. 1806",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":127.0,
"Authors":"Aristotele",
"Title":"Topik",
"Cities":"Leipzig",
"Publisher":"Felix Meiner",
"Years":1919,
"Fund":"BTB Segn. 1811",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":128.0,
"Authors":"Arland, Marcel",
"Title":"Essais critiques",
"Cities":"Paris",
"Publisher":"NRF-Gallimard",
"Years":1931,
"Fund":"BTB Segn. 946",
"Segni":"Nota di possesso autografa in data15.10.1931 Milano. Pieghe.",
"Category":"FL"
},{
"Unnamed: 0":129.0,
"Authors":"Arnim, Ludwig Achim von \u2013 Eichendorff, Joseph Freiherrn von",
"Title":"Dramen",
"Cities":"Leipzig",
"Publisher":"Reclam",
"Years":1939,
"Fund":"BTB Segn. 1155",
"Segni":"Etichetta della Biblioteca NazionaleBraidense. Sottolineature e postille aDie Appelm\u00e4nner.",
"Category":"L"
},{
"Unnamed: 0":130.0,
"Authors":"Arnim, Ludwig Achim von \u2013 Eichendorff, Joseph Freiherrn von",
"Title":"Il manichino tragico",
"Cities":"Roma",
"Publisher":"Lettere d\u2019oggi",
"Years":1942,
"Fund":"BTB Segn. 1155bis",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":131.0,
"Authors":"Arpesani, Camillo",
"Title":"Lavorazione dei metalli",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1921,
"Fund":"BTB Segn. 2029",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":132.0,
"Authors":"Not found",
"Title":"Arsa \u2013 societ\u00e0 anonima carbonifera",
"Cities":"Trieste",
"Publisher":"Trieste Editoriale libraria",
"Years":1935,
"Fund":"BAL",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":133.0,
"Authors":"Not found",
"Title":"L\u2019arte in Italia dai secoli pi\u00f9\nremoti ai tempi nostri. Sguardo d\u2019insieme al Piemonte, alla\nLombardia e al Canton Ticino;\nTorino, Milano",
"Cities":"Milano",
"Publisher":"TCI",
"Years":1914,
"Fund":"BTB Segn. 2321",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":134.0,
"Authors":"Artini, Ettore",
"Title":"I minerali",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1914,
"Fund":"BTB Segn. 2030",
"Segni":"Sottolineature e postille.",
"Category":"T"
},{
"Unnamed: 0":135.0,
"Authors":"Asciamprener, Spartaco",
"Title":"Canti",
"Cities":"Milano",
"Publisher":"Schwarz",
"Years":1956,
"Fund":"BTB Segn. 164",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":136.0,
"Authors":"Ascoli, Graziadio Isaia",
"Title":"Scritti sulla questione della lingua",
"Cities":"Torino",
"Publisher":"Giappichelli",
"Years":1968,
"Fund":"BTB Segn. 2410",
"Segni":"Parzialmente intonso.",
"Category":"L"
},{
"Unnamed: 0":137.0,
"Authors":"Ascoli, Guido",
"Title":"Lezioni elementari di analisi matematica",
"Cities":"Torino",
"Publisher":"Petrini",
"Years":1925,
"Fund":"BTB Segn. 2111",
"Segni":"Nota di possesso autografa in data1.06.1925 Milano. Postille.",
"Category":"T"
},{
"Unnamed: 0":138.0,
"Authors":null,
"Title":"L\u2019assassinio di Winckelmann. Gli atti originali del processo criminale (1768)",
"Cities":"Milano",
"Publisher":"Longanesi",
"Years":1971,
"Fund":"BAL",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":139.0,
"Authors":"Astolfi, Giovanni",
"Title":"Guida per l\u2019agente di campagna nelle pratiche operazioni d\u2019agrimensura",
"Cities":"Milano",
"Publisher":"Stella",
"Years":1845,
"Fund":"BTB Segn. 2061-2062",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":140.0,
"Authors":"Not found",
"Title":"Atlante Garzanti. Enciclopedia geografica",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1966,
"Fund":"BTB Segn. 2284",
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":141.0,
"Authors":"Not found",
"Title":"Atlante geografico metodico.",
"Cities":"Novara",
"Publisher":"Istituto geografico DeAgostini",
"Years":1930,
"Fund":"BAL",
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":142.0,
"Authors":"Not found",
"Title":"Attivit\u00e0 geografica del TCI nel triennio 1924-1926. Nota per il XCongresso Geografico Italiano, Milano",
"Cities":"Milano",
"Publisher":"TCI",
"Years":1926,
"Fund":"BTB Segn. Op. 103",
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":143.0,
"Authors":"Not found",
"Title":"L\u2019attivit\u00e0 svolta dalla Terni durante l\u2019ultimo decennio nel campo delle costruzioni idroelettriche",
"Cities":"Milano",
"Publisher":"Societ\u00e0 Editrice Riviste Industrie Elettriche",
"Years":1948,
"Fund":"BTB Segn. Op. 107",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":144.0,
"Authors":"Aubry, Octave",
"Title":"Napol\u00e9on III",
"Cities":"Paris",
"Publisher":"Tallandier",
"Years":1932,
"Fund":"BTB Segn. 1595",
"Segni":"Presente solo il II volume.",
"Category":"S "
},{
"Unnamed: 0":145.0,
"Authors":"Aubry, Octave",
"Title":"Il Secondo Impero",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1940,
"Fund":"BTB Segn. 1594",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":146.0,
"Authors":"Auerbach, Erich",
"Title":"Introduzione alla filologia romanza",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1963,
"Fund":"BTB Segn. 2419",
"Segni":null,
"Category":"GL"
},{
"Unnamed: 0":147.0,
"Authors":"Auerbach, Erich",
"Title":"Mimesis. Il realismo nella letteratura occidentale",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1956,
"Fund":"BTB Segn. 1221",
"Segni":null,
"Category":"GL"
},{
"Unnamed: 0":148.0,
"Authors":"Not found",
"Title":"Un augurio a Raffaele Mattioli",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1970,
"Fund":"BTB Segn. 749",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":149.0,
"Authors":"Augustinus, Aurelius (santo)",
"Title":"I soliloqui",
"Cities":"Novara",
"Publisher":"Merati e Compagno",
"Years":1844,
"Fund":"BAL",
"Segni":"Nota di possesso di Gerolamo CappelliLehr.",
"Category":"F"
},{
"Unnamed: 0":150.0,
"Authors":"Aym\u00e9, Marcel",
"Title":"Le vaurien",
"Cities":"Paris",
"Publisher":"NRF-Gallimard",
"Years":1931,
"Fund":"BTB Segn. 947",
"Segni":"Sottolineature e postille. B",
"Category":"FL"
},{
"Unnamed: 0":151.0,
"Authors":"Babinger, Franz",
"Title":"Maometto il conquistatore",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1957,
"Fund":"BTB Segn. 1724",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":152.0,
"Authors":"Bacchelli, Riccardo",
"Title":"Acque dolci e peccati. Novelle,fiabe e racconti",
"Cities":"Milano",
"Publisher":"Ceschina",
"Years":1930,
"Fund":"BTB Segn. 165",
"Segni":"Dedica dell\u2019autore in data 31.10.1939.Postille.",
"Category":"IL"
},{
"Unnamed: 0":153.0,
"Authors":"Bacchelli, Riccardo",
"Title":"Amore di poesia. Poemi lirici;Memorie; Riepilogo; Liriche",
"Cities":"Milano",
"Publisher":"Preda",
"Years":1930,
"Fund":"BTB Segn. 166",
"Segni":"Dedica dell\u2019autore in data 27.7.1932.",
"Category":"IL"
},{
"Unnamed: 0":154.0,
"Authors":"Bacchelli, Riccardo",
"Title":"Il brigante di Tacca del Lupo.Racconti disperati",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1942,
"Fund":"BTB Segn. 167",
"Segni":"Timbro dell\u2019autore. Intonso.",
"Category":"IL"
},{
"Unnamed: 0":155.0,
"Authors":"Bacchelli, Riccardo",
"Title":"La citt\u00e0 degli amanti",
"Cities":"Milano  Ce schina",
"Publisher":"Ceschina",
"Years":1941,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":156.0,
"Authors":"Bacchelli, Riccardo",
"Title":"La citt\u00e0 degli amanti",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1960,
"Fund":"BTB Segn. 168",
"Segni":"Dedica dell\u2019autore in data 6.12.1968.",
"Category":"IL"
},{
"Unnamed: 0":157.0,
"Authors":"Bacchelli, Riccardo",
"Title":"Confessioni letterarie",
"Cities":"Milano",
"Publisher":"La Cultura",
"Years":1932,
"Fund":"BTB Segn. 169",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":158.0,
"Authors":"Bacchelli, Riccardo",
"Title":"La congiura di Don Giuliod\u2019Este",
"Cities":"Milano",
"Publisher":"Treves",
"Years":1931,
"Fund":"BTB Segn. 170-171",
"Segni":"Dedica dell\u2019autore in data 8.1931. Sottoli neature e postille.",
"Category":"IL"
},{
"Unnamed: 0":159.0,
"Authors":"Bacchelli, Riccardo",
"Title":"Il diavolo a Pontelungo",
"Cities":"Milano",
"Publisher":"Ceschina",
"Years":1927,
"Fund":"BTB Segn. 172-173",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":160.0,
"Authors":"Bacchelli, Riccardo",
"Title":"Il diavolo al Pontelungo",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1957,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":161.0,
"Authors":"Bacchelli, Riccardo",
"Title":"L\u2019elmo di Tancredi ed altre novelle giocose",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1942,
"Fund":"BTB Segn. 174",
"Segni":"Intonso.",
"Category":"IL"
},{
"Unnamed: 0":162.0,
"Authors":"Bacchelli, Riccardo",
"Title":"La fine di Atlantide",
"Cities":"Milano  Garzanti",
"Publisher":"Garzanti",
"Years":1942,
"Fund":"BTB Segn. 175",
"Segni":"Dedica dell\u2019autore. Intonso.",
"Category":"IL"
},{
"Unnamed: 0":163.0,
"Authors":"Bacchelli, Riccardo",
"Title":"Il fiore della Mirabilis",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1942,
"Fund":"BTB Segn. 176",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":164.0,
"Authors":"Bacchelli, Riccardo",
"Title":"Mal d\u2019Africa",
"Cities":"Milano",
"Publisher":"Treves",
"Years":1935,
"Fund":"BTB Segn. 177",
"Segni":"Dedica dell\u2019autore in data 15.12.1934.Nota di possesso autografa in data20.12.1934. Postille.",
"Category":"IL"
},{
"Unnamed: 0":165.0,
"Authors":"Bacchelli, Riccardo",
"Title":"Il mulino del Po. Romanzo storico",
"Cities":"Milano",
"Publisher":"Treves-Garzanti",
"Years":1938,
"Fund":"BTB Segn. 178-180",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":166.0,
"Authors":"Bacchelli, Riccardo",
"Title":"Il mulino del Po",
"Cities":"Milano",
"Publisher":"Rizzoli",
"Years":1954,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":167.0,
"Authors":"Bacchelli, Riccardo",
"Title":"Il mulino del Po. Mondo vecchio sempre nuovo",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1940,
"Fund":null,
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":168.0,
"Authors":"Bacchelli, Riccardo",
"Title":"Nel fiume della storia. Riflessioni,discorsi e saggi storici",
"Cities":"Milano",
"Publisher":"Rizzoli",
"Years":1955,
"Fund":"BTB Segn. 181",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":169.0,
"Authors":"Bacchelli, Riccardo",
"Title":"Oggi domani mai",
"Cities":"Milano-Roma",
"Publisher":"Treves-Treccani-Tumminelli",
"Years":1932,
"Fund":"BTB Segn. 182",
"Segni":"Dedica dell\u2019autore in data 8.5.1932.",
"Category":"IL"
},{
"Unnamed: 0":170.0,
"Authors":"Bacchelli, Riccardo",
"Title":"La ruota del tempo. Scritti d\u2019occasione",
"Cities":"Bologna",
"Publisher":"L\u2019Italiano",
"Years":1928,
"Fund":"BTB Segn. 183",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":171.0,
"Authors":"Bacchelli, Riccardo",
"Title":"Una passione coniugale",
"Cities":"Milano",
"Publisher":"Ceschina",
"Years":1930,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":172.0,
"Authors":"Bachofen, Jakob",
"Title":"Le madri e la virilit\u00e0 olimpica.Studi sulla storia segreta dell\u2019antico mondo mediterraneo",
"Cities":"Milano",
"Publisher":"Bocca",
"Years":1949,
"Fund":"BTB Segn. 1447",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":173.0,
"Authors":"Bacon, Francis",
"Title":"Novum Organum",
"Cities":"Paris",
"Publisher":"Hachette",
"Years":1857,
"Fund":"BTB Segn. 1813",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":174.0,
"Authors":"Bacon, Francis",
"Title":"Novum Organum",
"Cities":"Bari",
"Publisher":"Laterza",
"Years":1912,
"Fund":"BTB Segn. 1812",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":175.0,
"Authors":"Badoaro, Giacomo",
"Title":"Il ritorno di Ulisse in patria",
"Cities":"Milano",
"Publisher":"Suvini-Zerboni",
"Years":1942,
"Fund":"BTB Segn. 1442",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":176.0,
"Authors":"Badoni, Piera",
"Title":"Felicit\u00e0 che pure esisti",
"Cities":"Milano",
"Publisher":"Sormani",
"Years":1948,
"Fund":"BTB Segn. 184",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":177.0,
"Authors":"B\u00e6deker, Karl",
"Title":"Berlin und Umgebungen",
"Cities":"Leipzig",
"Publisher":"Baedeker",
"Years":1921,
"Fund":"BTB Segn. 2304",
"Segni":"Nota di possesso autografa in data28.09.1922 Berlino.",
"Category":"G"
},{
"Unnamed: 0":178.0,
"Authors":"B\u00e6deker, Karl",
"Title":"Italie centrale et Rome: manueldu voyageur",
"Cities":"Leipzig",
"Publisher":"Baedeker",
"Years":1919,
"Fund":"BTB Segn. 2305",
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":179.0,
"Authors":"B\u00e6deker, Karl",
"Title":"Unteritalien, Sizilien, Sardinien,Malta, Korfu",
"Cities":"Leipzig",
"Publisher":"B\u00e6deker",
"Years":1911,
"Fund":"BTB Segn. 2304",
"Segni":"Postille.",
"Category":"G"
},{
"Unnamed: 0":180.0,
"Authors":"Bagni, Tullio",
"Title":"Teoria matematica dei fenomenicollettivi",
"Cities":"Firenze",
"Publisher":"Barbera",
"Years":1915,
"Fund":"BTB Segn. 2063",
"Segni":"Nota di possesso autografa in data 4.06. 1925 Milano.",
"Category":"T"
},{
"Unnamed: 0":181.0,
"Authors":"Bailly, Auguste",
"Title":"Byzance",
"Cities":"Paris",
"Publisher":"Fayard",
"Years":1948,
"Fund":"BTB Segn. 1448",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":182.0,
"Authors":"Bainville, Jacques",
"Title":"Histoire de France",
"Cities":"Paris",
"Publisher":"Fayard",
"Years":1924,
"Fund":"BTB Segn. 1596",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":183.0,
"Authors":"Bainville, Jacques",
"Title":"Napol\u00e9on",
"Cities":"Paris",
"Publisher":"Fayard",
"Years":1931,
"Fund":"BTB Segn. 1597",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":184.0,
"Authors":"Balbo, Cesare",
"Title":"Sommario della storia d\u2019Italia (dalle origini fino ai nostri tempi). ",
"Cities":"Milano",
"Publisher":"Alpes",
"Years":1927,
"Fund":"BTB Segn. 1499",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":185.0,
"Authors":"Balbo, Cesare",
"Title":"Vita di Dante",
"Cities":"Firenze",
"Publisher":"Le Monnier",
"Years":1853,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":186.0,
"Authors":"Baldini, Antonio",
"Title":"Beato fra le donne. Seconda edizionemolto accresciuta ma niente aggiornata de \u00abLa dolce calamita\u00bb (1929)",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1940,
"Fund":"BTB Segn. 185",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":187.0,
"Authors":"Baldini, Antonio",
"Title":"Diagonale 1930: Parigi-Ankara. Note di viaggio",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1943,
"Fund":"BTB Segn. 186",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":188.0,
"Authors":"Baldini, Antonio",
"Title":"Melafumo. Quindici variazioni. Con cinque tavole di A. Bartoli",
"Cities":"Torino",
"Publisher":"ERI",
"Years":1950,
"Fund":"BTB Segn. 187bis",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":189.0,
"Authors":"Baldini, Antonio",
"Title":"Michelaccio",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1941,
"Fund":"BTB Segn. 187",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":190.0,
"Authors":"Baldini, Antonio",
"Title":"Quel caro magon di Lucia. Microscopie manzoniane",
"Cities":"Milano-Napoli",
"Publisher":"Ricciardi",
"Years":1956,
"Fund":"BTB Segn. 750",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":191.0,
"Authors":"Baldini, Gabriele",
"Title":"Due poemetti elisabettiani: \u2018Hero and Leander\u2019 di Christopher Marlowe, \u2018Venus e Adonis\u2019 di William Shakespeare",
"Cities":"Parma",
"Publisher":"Guanda",
"Years":1952,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":192.0,
"Authors":"Baldini, Gabriele",
"Title":"Selva e torrente",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1970,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":193.0,
"Authors":"Bailly, Auguste",
"Title":"Mazzarino",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1949,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":194.0,
"Authors":"Bally, Charles",
"Title":"Linguistica generale e linguistica francese",
"Cities":"Milano",
"Publisher":"Il Saggiatore",
"Years":1963,
"Fund":"BAL",
"Segni":null,
"Category":"GR"
},{
"Unnamed: 0":195.0,
"Authors":"Balzac, Honor\u00e9 de",
"Title":"Illusioni perdute",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1966,
"Fund":"BAL",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":196.0,
"Authors":"Balzac, Honor\u00e9 de",
"Title":" Mercadet, homme d\u2019affaires",
"Cities":"Paris",
"Publisher":"Nilsson",
"Years":"s.d.",
"Fund":"BAL",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":197.0,
"Authors":"Balzac, Honor\u00e9 de",
"Title":"Les paysans: sc\u00e8nes de la vie de campagne",
"Cities":"Paris",
"Publisher":"Michel",
"Years":1927,
"Fund":"BTB Segn. 949",
"Segni":"Pieghe, sottolineature e postille. Segnalibro.",
"Category":"FL"
},{
"Unnamed: 0":198.0,
"Authors":"Balzac, Honor\u00e9 de",
"Title":"Le p\u00e8re Goriot",
"Cities":"Paris",
"Publisher":"Cluny",
"Years":1937,
"Fund":"BTB Segn. 952",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":199.0,
"Authors":"Balzac, Honor\u00e9 de",
"Title":"Les petits bourgeois",
"Cities":"Paris",
"Publisher":"Calmann-L\u00e9vy",
"Years":1922,
"Fund":"BTB Segn. 950-951",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":200.0,
"Authors":"Balzac, Honor\u00e9 de",
"Title":"Splendori e miserie delle cortigiane",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1968,
"Fund":"BAL",
"Segni":"Nota di possesso autografa di Enrico Gadda in data 06.1917.",
"Category":"FL"
},{
"Unnamed: 0":201.0,
"Authors":"Balzac, Honor\u00e9 de",
"Title":"Una figlia d\u2019Eva",
"Cities":"Lanciano",
"Publisher":"Carabba",
"Years":1917,
"Fund":"BTB Segn. 948",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":202.0,
"Authors":"Balzaretti, Liliana",
"Title":"Villa Amalia",
"Cities":"Como",
"Publisher":"Cairoli",
"Years":1964,
"Fund":"BTB Segn. 2345-2346",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":203.0,
"Authors":"Bandello, Matteo",
"Title":"Novelle",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1940,
"Fund":"BTB Segn. 188",
"Segni":"Dedica del curatore. Parzialmente intonso.",
"Category":"IL"
},{
"Unnamed: 0":204.0,
"Authors":"Bandello, Matteo",
"Title":"Tutte le opere di Matteo Bandello",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1951,
"Fund":"BAL",
"Segni":"Disegni",
"Category":"IL"
},{
"Unnamed: 0":205.0,
"Authors":"Bandini, Franco",
"Title":"Claretta",
"Cities":"Milano",
"Publisher":"Longanesi",
"Years":1969,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":206.0,
"Authors":"Banti, Anna",
"Title":"Allarme sul lago",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1954,
"Fund":"BTB Segn. 189",
"Segni":"Dedica dell\u2019autrice in data 2.1956.",
"Category":"IL"
},{
"Unnamed: 0":207.0,
"Authors":"Banti, Anna",
"Title":"Artemisia",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1953,
"Fund":"BTB Segn. 190",
"Segni":"Dedica dell\u2019autrice.",
"Category":"IL"
},{
"Unnamed: 0":208.0,
"Authors":"Banti, Anna",
"Title":"Corte Savella",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1960,
"Fund":"BTB Segn. 191",
"Segni":"Dedica dell\u2019autrice, giugno 1960.",
"Category":"IL"
},{
"Unnamed: 0":209.0,
"Authors":"Barbagallo, Corrado",
"Title":"Manuale di storia antica (4000 a.C.-476 d.C.). Per la prima classe delle scuole normali",
"Cities":"Milano-Roma-Napoli",
"Publisher":"Dante Alighieri",
"Years":1915,
"Fund":"BTB Segn. 1449",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":210.0,
"Authors":"Barbagallo, Corrado",
"Title":"Manuale di storia del Medioevo (dal 476 al 1494). Per la seconda classe delle scuole normali",
"Cities":"Milano-Roma-Napoli",
"Publisher":"Dante Alighieri",
"Years":1914,
"Fund":"BTB Segn. 1449",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":211.0,
"Authors":"Barbagallo, Corrado",
"Title":"Manuale di storia moderna e contemporanea (1492-1914). Per la terza classe normale",
"Cities":"Milano-Roma-Napoli",
"Publisher":"Dante Alighieri",
"Years":1915,
"Fund":"BTB Segn. 1449",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":212.0,
"Authors":"Barbarani, Tiberio Umberto",
"Title":"I due canzonieri",
"Cities":"Verona ",
"Publisher":"Tipografia P. Apollonio",
"Years":1920,
"Fund":"BTB Segn. 192",
"Segni":"Nota di possesso autografa in data 18.09.1915 Milano. Parzialmente intonso.",
"Category":"IL"
},{
"Unnamed: 0":213.0,
"Authors":"B\u00e0rberi Squarotti, Giorgio",
"Title":"La narrativa italiana del dopoguerra",
"Cities":"Bologna",
"Publisher":"Cappelli",
"Years":1965,
"Fund":"BTB Segn. 751",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":214.0,
"Authors":"Barbet, Pierre",
"Title":"La passione di Cristo secondo il chirurgo",
"Cities":"Padova",
"Publisher":"Lice",
"Years":1965,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":215.0,
"Authors":"Barbiera, Raffaello",
"Title":"Carlo Porta e la sua Milano",
"Cities":"Firenze",
"Publisher":"Barbera",
"Years":1921,
"Fund":"BTB Segn. 752",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":216.0,
"Authors":"Barbiera, Raffaello",
"Title":"Diademi. Donne e madonne dell\u2019Ottocento",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1940,
"Fund":"BTB Segn. 753",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":217.0,
"Authors":"Barbiera, Raffaello",
"Title":"Immortali e dimenticati",
"Cities":"Milano",
"Publisher":"Treves",
"Years":1901,
"Fund":"BTB Segn. 754",
"Segni":"Nota di possesso autografa.",
"Category":"IL"
},{
"Unnamed: 0":218.0,
"Authors":"Barbiera, Raffaello",
"Title":"Passioni del Risorgimento. Condocumenti inediti e illustrazioni",
"Cities":"Milano",
"Publisher":"Treves",
"Years":1929,
"Fund":"BTB Segn. 755",
"Segni":"Intonso.",
"Category":"IL"
},{
"Unnamed: 0":219.0,
"Authors":"Barbiera, Raffaello",
"Title":"La Principessa Belgiojoso: i suoiamici e nemici \u2013 il suo tempo",
"Cities":"Milano",
"Publisher":"Treves",
"Years":1902,
"Fund":"BTB Segn. 756",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":220.0,
"Authors":"Barbiera, Raffaello",
"Title":"Il salotto della contessa Maffei e la societ\u00e0 milanese",
"Cities":"Milano",
"Publisher":"Treves",
"Years":1895,
"Fund":"BTB Segn. 757",
"Segni":"Nota di possesso autografa di Luisa Gadda.",
"Category":"IL"
},{
"Unnamed: 0":221.0,
"Authors":"Bardi, Pietro",
"Title":"Grammatica inglese con introduzione e note storiche",
"Cities":"Bari",
"Publisher":"Laterza",
"Years":1919,
"Fund":"BTB Segn. 2420",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":222.0,
"Authors":"Baretti, Giuseppe",
"Title":"Scritti scelti, inediti o rari connuove  memorie della sua vita",
"Cities":"Milano",
"Publisher":"Bianchi",
"Years":1822,
"Fund":"BTB Segn. 193-194",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":223.0,
"Authors":"Bargellini, Piero",
"Title":"Giosu\u00e8 Carducci",
"Cities":"Brescia",
"Publisher":"Morcelliana",
"Years":1935,
"Fund":"BTB Segn. 758",
"Segni":"Parzialmente intonso.",
"Category":"IL"
},{
"Unnamed: 0":224.0,
"Authors":"Bargellini, Piero",
"Title":"Pian dei Giullari: panorama storico della letteratura italiana (vol. 1:Dalle origini alla fine del Quattrocento)",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1951,
"Fund":"BTB Segn. 759",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":225.0,
"Authors":"Barilli, Bruno",
"Title":"Il paese del melodramma",
"Cities":"Lanciano",
"Publisher":"Carabba",
"Years":"s.d.",
"Fund":"BTB Segn. 1433",
"Segni":"Intonso.",
"Category":"IL"
},{
"Unnamed: 0":226.0,
"Authors":"Barni, Edoardo",
"Title":"Elettrotecnica. Manuale teoricopratico di elettricit\u00e0 industriale",
"Cities":"Brescia",
"Publisher":"Vannini",
"Years":1922,
"Fund":"BTB Segn. 2064",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":227.0,
"Authors":"Barolini, Antonio",
"Title":"Le notti della paura",
"Cities":"Milano",
"Publisher":"Feltrinelli",
"Years":1967,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore",
"Category":"IL"
},{
"Unnamed: 0":228.0,
"Authors":"Barolini, Antonio",
"Title":"L\u2019ultima contessa di famiglia",
"Cities":"Milano",
"Publisher":"Feltrinelli",
"Years":1968,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":229.0,
"Authors":"Barone, Carlo",
"Title":"Manual of conversation EnglishItalian with the Italian figured pronounciation for English tourist in Italy",
"Cities":"Milano",
"Publisher":"Bietti",
"Years":"s.d.",
"Fund":"BTB Segn. 2421",
"Segni":null,
"Category":"GR"
},{
"Unnamed: 0":230.0,
"Authors":"Barozzi da Vignola, Giacomo",
"Title":"Li cinque ordini di architettura.Coll\u2019aggiunta di diverse altre regole ad istruzione della giovent\u00f9ad uso delle scuole e delle accademie d\u2019Italia",
"Cities":"Milano-Napoli",
"Publisher":"Pagnoni",
"Years":1873,
"Fund":"BTB Segn. 2248",
"Segni":"Parzialmente intonso.",
"Category":"T"
},{
"Unnamed: 0":231.0,
"Authors":"Barozzi da Vignola, Giacomo",
"Title":"Gli ordini d\u2019architettura civile",
"Cities":"Milano",
"Publisher":"Vallardi",
"Years":1825,
"Fund":"BTB Segn. 2283",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":232.0,
"Authors":"Barzini, Luigi",
"Title":"La met\u00e0 del mondo vista daun\u2019automobile",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1908,
"Fund":"BTB Segn. 2347",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":233.0,
"Authors":"Barzini, Luigi jr.",
"Title":"I comunisti non hanno vinto",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1955,
"Fund":"BTB Segn. 1500",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":234.0,
"Authors":"Bassani, Giorgio",
"Title":"Gli occhiali d\u2019oro",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1958,
"Fund":"BTB Segn. 196",
"Segni":"Dedica dell\u2019autore in data 2.6.1958.",
"Category":"IL"
},{
"Unnamed: 0":235.0,
"Authors":"Barzini, Luigi jr.",
"Title":"Dietro la porta",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1964,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore.",
"Category":null
},{
"Unnamed: 0":236.0,
"Authors":"Bassani, Giorgio",
"Title":"Un\u2019altra libert\u00e0",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1951,
"Fund":"BTB Segn. 195",
"Segni":null,
"Category":null
},{
"Unnamed: 0":237.0,
"Authors":"Bassi, Domenico",
"Title":"La Bibbia",
"Cities":"Firenze",
"Publisher":"Nemi",
"Years":1932,
"Fund":null,
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":238.0,
"Authors":"Battaglia, Achille",
"Title":"L\u2019articolo 104 e la magistratura",
"Cities":"Roma",
"Publisher":"Associazione italiana per la libert\u00e0 della cultura",
"Years":1954,
"Fund":"BAL",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":239.0,
"Authors":"Battaglia, Felice",
"Title":"Marsilio da Padova e la filosofia politica del Medio Evo",
"Cities":"Firenze",
"Publisher":"Le Monnier",
"Years":1928,
"Fund":"BTB Segn. 1930",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":240.0,
"Authors":"Battaglia, Roberto",
"Title":"La seconda guerra mondiale",
"Cities":"Roma",
"Publisher":"Editori Riuniti",
"Years":1960,
"Fund":"BTB Segn. 1725",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":241.0,
"Authors":"Baudelaire, Charles",
"Title":"L\u2019art romantique",
"Cities":"Paris",
"Publisher":"Calmann-L\u00e9vy",
"Years":1919,
"Fund":"BTB Segn. 954",
"Segni":"Nota di possesso autografa in data 17.09.1919 Milano.",
"Category":"FL"
},{
"Unnamed: 0":242.0,
"Authors":"Baudelaire, Charles",
"Title":"Charles Baudelaire critico d\u2019arte. Curiosit\u00e0 estetiche: \u00abL\u2019arte romantica\u00bb: Opere postume. Raccolta completa di saggi baudelairiani a cura de \u00abL\u2019Esame\u00bb",
"Cities":"Milano  ",
"Publisher":"L\u2019Esame",
"Years":1923,
"Fund":"BTB Segn. 953",
"Segni":"Parzialmente intonso.",
"Category":"FL"
},{
"Unnamed: 0":243.0,
"Authors":"Baudelaire, Charles",
"Title":"Diari intimi",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1942,
"Fund":"BTB Segn. 957",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":244.0,
"Authors":"Baudelaire, Charles",
"Title":"Diari intimi",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1949,
"Fund":"BTB Segn. 956",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":245.0,
"Authors":"Baudelaire, Charles",
"Title":"Les fleurs du mal: 1857-1861",
"Cities":"Paris",
"Publisher":"GeorgeCres Et Cie",
"Years":1919,
"Fund":null,
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":246.0,
"Authors":"Baudelaire, Charles",
"Title":"Giornali intimi",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1942,
"Fund":"BTB Segn. 958",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":247.0,
"Authors":"Baudelaire, Charles",
"Title":"Morale del giocattolo",
"Cities":"Firenze",
"Publisher":"Fussi-Sansoni",
"Years":"s.d.",
"Fund":"BTB Segn. 1213",
"Segni":"Dedica del curatore.",
"Category":"FL"
},{
"Unnamed: 0":248.0,
"Authors":"Baudelaire, Charles",
"Title":"Le spleen de Paris. Petits po\u00e8mesen prose",
"Cities":"Paris",
"Publisher":"Cr\u00e8s",
"Years":1917,
"Fund":"BTB Segn. 960",
"Segni":"Nota di possesso autografa in data 16.09.1919 Milano.",
"Category":"FL"
},{
"Unnamed: 0":249.0,
"Authors":"Baudelaire, Charles",
"Title":"Le spleen de Paris. Petits po\u00ebmes en prose, suivis des Journaux intimes et de Choix de maximes consolantes sur l\u2019amour",
"Cities":"Paris",
"Publisher":"Cluny",
"Years":1937,
"Fund":"BTB Segn. 961",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":250.0,
"Authors":"Bavagnoli, Carlo",
"Title":"Cara Parma",
"Cities":"Milano",
"Publisher":"Amilcare Pizzi",
"Years":1961,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":251.0,
"Authors":"Baxter, James Phinney",
"Title":"La scienza in lotta col tempo",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1950,
"Fund":"BTB Segn. 2129",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":252.0,
"Authors":"Beccaria, Cesare",
"Title":"Dei delitti e delle pene",
"Cities":"Firenze",
"Publisher":"Le Monnier",
"Years":1945,
"Fund":"BTB Segn. 197",
"Segni":null,
"Category":"F "
},{
"Unnamed: 0":253.0,
"Authors":"Beccaria, Cesare",
"Title":"Scritti maggiori",
"Cities":"Milano",
"Publisher":"Bietti",
"Years":1929,
"Fund":"BTB Segn. 198",
"Segni":null,
"Category":"F "
},{
"Unnamed: 0":254.0,
"Authors":"Beckett, Samuel",
"Title":"Poesie in inglese",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1961,
"Fund":"BTB Segn. 1237",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":255.0,
"Authors":"Beckett, Samuel",
"Title":"Proust",
"Cities":"Milano",
"Publisher":"Sugar Editore",
"Years":1962,
"Fund":"BAL",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":256.0,
"Authors":"B\u00e9dier, Joseph",
"Title":"Il romanzo di Tristano e Isotta",
"Cities":"Milano",
"Publisher":"Rizzoli",
"Years":1952,
"Fund":"BTB Segn. 962-963",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":257.0,
"Authors":"Beecher Stowe, Enrichetta",
"Title":"La capanna dello zio Tom",
"Cities":"Sesto San Giovanni",
"Publisher":"Barion",
"Years":1920,
"Fund":"BAL",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":258.0,
"Authors":"Not found",
"Title":"Belleza de Espa\u00f1a. Gu\u00eda de arte y paisaje",
"Cities":"Barcelona",
"Publisher":"Aedos",
"Years":1949,
"Fund":"BTB Segn. 2264",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":259.0,
"Authors":"Bellezza, Dario",
"Title":"Lettere da Sodoma",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1972,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":260.0,
"Authors":"Belli, Giuseppe Gioachino",
"Title":"Cento sonetti",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1944,
"Fund":"BTB Segn. 202",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":261.0,
"Authors":"Belli, Giuseppe Gioachino",
"Title":"Er Commedione",
"Cities":"Roma",
"Publisher":"Colombo",
"Years":1944,
"Fund":"BAL",
"Segni":"Nota di possesso autografa, Carlo Emilo  Gadda Roma 1945.",
"Category":"IL"
},{
"Unnamed: 0":262.0,
"Authors":"Belli, Giuseppe Gioachino",
"Title":"Duecento sonetti in dialetto romanesco",
"Cities":"Firenze",
"Publisher":"Barbera",
"Years":1884,
"Fund":"BTB Segn. 201",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":263.0,
"Authors":"Belli, Giuseppe Gioachino",
"Title":" Lettere, giornali, zibaldone",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1962,
"Fund":"BTB Segn. 199",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":264.0,
"Authors":"Belli, Giuseppe Gioachino",
"Title":"Sonetti. Vol. 1",
"Cities":"Roma",
"Publisher":"Form\u00ecggini",
"Years":1930,
"Fund":"BTB Segn. 200",
"Segni":"Pieghe e postille.",
"Category":"IL"
},{
"Unnamed: 0":265.0,
"Authors":"Bellonci, Goffredo",
"Title":"Cristoforo Colombo",
"Cities":"Urbino",
"Publisher":"Istituto d\u2019arte del libro",
"Years":1938,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore in data 9.10.1951.",
"Category":"L"
},{
"Unnamed: 0":266.0,
"Authors":"Belvero, Enrico",
"Title":"Una stagione",
"Cities":"Milano",
"Publisher":"Todariana",
"Years":1972,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":267.0,
"Authors":"Benco, Silvio",
"Title":"Ricordi di Antonio Smareglia",
"Cities":"Trieste   ",
"Publisher":"Umana",
"Years":1968,
"Fund":"BAL",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":268.0,
"Authors":"Bendinelli, Goffredo",
"Title":"Iconografia imperiale romana. I",
"Cities":"Roma",
"Publisher":"Istituto Nazionale L.U.C.E.",
"Years":1932,
"Fund":"BTB Segn. 2176",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":269.0,
"Authors":"Benedetti, Arrigo",
"Title":"Le donne fantastiche",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1942,
"Fund":"BTB Segn. 203",
"Segni":"Parzialmente intonso.",
"Category":"IL"
},{
"Unnamed: 0":270.0,
"Authors":"Benedetti, Arrigo",
"Title":"La figlia del capitano",
"Cities":"Firenze",
"Publisher":"Parenti",
"Years":1938,
"Fund":"BTB Segn. 204",
"Segni":"Intonso.",
"Category":"IL"
},{
"Unnamed: 0":271.0,
"Authors":"Benelli, Sam",
"Title":"La cena delle beffe",
"Cities":"Milano  ",
"Publisher":"Treves",
"Years":1915,
"Fund":"BAL",
"Segni":"Nota di possesso autografa, C.E. Gadda Milano 1920.",
"Category":"IL"
},{
"Unnamed: 0":272.0,
"Authors":"Benet, Stephen Vincent",
"Title":"La valle delle Sabine",
"Cities":"Milano",
"Publisher":"Longanesi",
"Years":1948,
"Fund":"BTB Segn. 1238",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":273.0,
"Authors":"Benjamin, Ren\u00e9",
"Title":"La prodigieuse vie d\u2019Honor\u00e9 de Balzac",
"Cities":"Paris",
"Publisher":"Plon",
"Years":1925,
"Fund":"BTB Segn. 1117",
"Segni":"Nota di possesso autografa in data 10.1931.",
"Category":"FL"
},{
"Unnamed: 0":274.0,
"Authors":"Benn, Gottfried",
"Title":"Poesie",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1954,
"Fund":"BTB Segn. 1156",
"Segni":null,
"Category":"GL"
},{
"Unnamed: 0":275.0,
"Authors":"Beraudi, Sebastiano",
"Title":"Uso del verbo latino",
"Cities":"Torino  ",
"Publisher":"Paravia",
"Years":1905,
"Fund":null,
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":276.0,
"Authors":"Berenson, Bernard",
"Title":"Del Caravaggio, delle sue incon gruenze e della sua fama",
"Cities":"Firenze",
"Publisher":"Electa",
"Years":1951,
"Fund":"BTB Segn. 2219",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":277.0,
"Authors":"Berenson, Bernard",
"Title":"Estetica etica e storia nelle belle arti della rappresentazione visiva",
"Cities":"Firenze",
"Publisher":"Electa",
"Years":1948,
"Fund":null,
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":278.0,
"Authors":"Berenson, Bernard",
"Title":"Un artista fuori del suo tempo",
"Cities":"Firenze  ",
"Publisher":"Le Monnier",
"Years":1950,
"Fund":"BTB Segn. Op. 106",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":279.0,
"Authors":"Bergson, Henri",
"Title":"L\u2019\u00e9nergie spirituelle",
"Cities":"Paris",
"Publisher":"Presses Universitaires de France",
"Years":1946,
"Fund":"BTB Segn. 1815",
"Segni":"Parzialmente intonso.",
"Category":"F"
},{
"Unnamed: 0":280.0,
"Authors":"Bergson, Henri",
"Title":"Essai sur les donn\u00e9es imm\u00e9diates de la conscience",
"Cities":"Paris",
"Publisher":"Presses Universitaires de France",
"Years":1946,
"Fund":"BTB Segn. 1814",
"Segni":"Parzialmente intonso.",
"Category":"F"
},{
"Unnamed: 0":281.0,
"Authors":"Bergson, Henri",
"Title":"L\u2019\u00e9volution cr\u00e9atrice",
"Cities":"Paris",
"Publisher":"Presses Universitaires de France",
"Years":1946,
"Fund":"BTB Segn. 1816",
"Segni":"Intonso.",
"Category":"F"
},{
"Unnamed: 0":282.0,
"Authors":"Bergson, Henri",
"Title":"L\u2019evoluzione creatrice",
"Cities":"Milano",
"Publisher":"Corbaccio",
"Years":1936,
"Fund":"BTB Segn. 1817",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":283.0,
"Authors":"Bergson, Henri",
"Title":"La filosofia dell\u2019intuizione. Introduzione di G. Papini",
"Cities":"Lanciano",
"Publisher":"Carabba",
"Years":1919,
"Fund":"BTB Segn. 1818",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":284.0,
"Authors":"Bergson, Henri",
"Title":"Mati\u00e8re et m\u00e9moire",
"Cities":"Paris",
"Publisher":"Presses Universitaires de France",
"Years":1946,
"Fund":"BTB Segn. 1819",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":285.0,
"Authors":"Bergson, Henri",
"Title":"La pens\u00e9e et le mouvant",
"Cities":"Paris",
"Publisher":"Presses Universitaires de France",
"Years":1946,
"Fund":"BTB Segn. 1820",
"Segni":"Intonso.",
"Category":"F"
},{
"Unnamed: 0":286.0,
"Authors":"Berkeley, George",
"Title":"Saggio di una nuova teoria della visione",
"Cities":"Lanciano",
"Publisher":"Carabba",
"Years":1920,
"Fund":"BTB Segn. 1822",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":287.0,
"Authors":"Berkeley, George",
"Title":"Trattato dei principi della conoscenza umana",
"Cities":"Bari",
"Publisher":"Laterza",
"Years":1909,
"Fund":"BTB Segn. 1821",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":288.0,
"Authors":"Not found",
"Title":"Berlino Ovest: accampamenti militari americani",
"Cities":"Roma",
"Publisher":"U.S. Information Service",
"Years":1961,
"Fund":"BTB Segn. 2349",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":289.0,
"Authors":"Bernardi, Marziano",
"Title":"Antonio Fontanesi",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1933,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":290.0,
"Authors":"Bernardino da Siena",
"Title":"Le pi\u00f9 belle pagine. Scelte da P. Misciattelli",
"Cities":"Milano",
"Publisher":"Treves",
"Years":1924,
"Fund":"BTB Segn. 205",
"Segni":null,
"Category":null
},{
"Unnamed: 0":291.0,
"Authors":"Berni, Francesco",
"Title":"Le Rime e la Catrina",
"Cities":"Roma",
"Publisher":"Form\u00ecggini",
"Years":1924,
"Fund":"BTB Segn. 206",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":292.0,
"Authors":"Bernini, Ferdinando",
"Title":"Storia di Parma",
"Cities":"Parma",
"Publisher":"Battei",
"Years":1954,
"Fund":"BTB Segn. 1501",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":293.0,
"Authors":"Bernini, Ferruccio",
"Title":"Ovidio",
"Cities":"Milano",
"Publisher":"Bietti",
"Years":1939,
"Fund":"BTB Segn. 116",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":294.0,
"Authors":"Berrini, Osvaldo",
"Title":"Trattatello elementare di antichit\u00e0 greche e romane prescritte dairecenti programmi ministeriali alla 3a e 4a classe ginnasiale",
"Cities":"Torino",
"Publisher":"Paravia",
"Years":1881,
"Fund":"BTB Segn. 117",
"Segni":"Nota di possesso autografa di Adele Gadda Lehr. Postille.",
"Category":"IL"
},{
"Unnamed: 0":295.0,
"Authors":"Bertarelli, Luigi Vittorio",
"Title":"Italia centrale",
"Cities":"Milano",
"Publisher":"TCI",
"Years":1925,
"Fund":"BTB Segn. 2322-2326",
"Segni":null,
"Category":"G "
},{
"Unnamed: 0":296.0,
"Authors":"Bertarelli, Luigi Vittorio",
"Title":"Italia insulare, possedimenti e colonie",
"Cities":"Milano",
"Publisher":"TCI",
"Years":1931,
"Fund":"BTB Segn. 2302",
"Segni":null,
"Category":"G "
},{
"Unnamed: 0":297.0,
"Authors":"Bertarelli, Luigi Vittorio",
"Title":"Italia meridionale",
"Cities":"Milano",
"Publisher":"TCI",
"Years":1928,
"Fund":"BTB Segn. 2333-2335",
"Segni":null,
"Category":"G "
},{
"Unnamed: 0":298.0,
"Authors":"Bertarelli, Luigi Vittorio",
"Title":"Italia meridionale",
"Cities":"Milano",
"Publisher":"TCI",
"Years":1930,
"Fund":"BTB Segn. 2301",
"Segni":null,
"Category":"G "
},{
"Unnamed: 0":299.0,
"Authors":"Bertarelli, Luigi Vittorio",
"Title":"Italia settentrionale",
"Cities":"Milano",
"Publisher":"TCI",
"Years":1927,
"Fund":"BTB Segn. 2298-2299",
"Segni":null,
"Category":"G "
},{
"Unnamed: 0":300.0,
"Authors":"Bertarelli, Luigi Vittorio",
"Title":"Liguria \u2013 Toscana \u2013 Emilia settentrionale",
"Cities":"Milano",
"Publisher":"TCI",
"Years":1916,
"Fund":"BTB Segn. 2328",
"Segni":null,
"Category":"G "
},{
"Unnamed: 0":301.0,
"Authors":"Bertarelli, Luigi Vittorio",
"Title":"Piemonte",
"Cities":"Milano",
"Publisher":"TCI",
"Years":1930,
"Fund":"BTB Segn. 2280",
"Segni":null,
"Category":"G "
},{
"Unnamed: 0":302.0,
"Authors":"Bertarelli, Luigi Vittorio",
"Title":"Piemonte \u2013 Lombardia \u2013 Canton Ticino",
"Cities":"Milano",
"Publisher":"TCI",
"Years":1914,
"Fund":"BTB Segn. 2320",
"Segni":null,
"Category":"G "
},{
"Unnamed: 0":303.0,
"Authors":"Bertarelli, Luigi Vittorio",
"Title":"Toscana",
"Cities":"Milano",
"Publisher":"TCI",
"Years":1935,
"Fund":"BTB Segn. 2330",
"Segni":null,
"Category":"G "
},{
"Unnamed: 0":304.0,
"Authors":"Bertarelli, Luigi Vittorio",
"Title":"Le Tre Venezie",
"Cities":"Milano",
"Publisher":"TCI",
"Years":1920,
"Fund":"BTB Segn. 2330",
"Segni":null,
"Category":"G "
},{
"Unnamed: 0":305.0,
"Authors":"Bertarelli, Luigi Vittorio",
"Title":"Umbria",
"Cities":"Milano",
"Publisher":"TCI",
"Years":1937,
"Fund":"BTB Segn. 2319",
"Segni":null,
"Category":"G "
},{
"Unnamed: 0":306.0,
"Authors":"Bertati, Giovanni",
"Title":"Il matrimonio segreto",
"Cities":"Sesto San Giovanni",
"Publisher":"Barion",
"Years":1934,
"Fund":"BTB Segn. 1440",
"Segni":"Intonso.",
"Category":"IL"
},{
"Unnamed: 0":307.0,
"Authors":"Berti, Luigi",
"Title":"Storie di Rio",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1959,
"Fund":"BTB Segn. 207",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":308.0,
"Authors":"Berto, Giuseppe",
"Title":"La cosa buffa",
"Cities":"Milano",
"Publisher":"Rizzoli",
"Years":1966,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore in data 15.11.1965.",
"Category":"IL"
},{
"Unnamed: 0":309.0,
"Authors":"Berto, Giuseppe",
"Title":"La fantarca",
"Cities":"Milano",
"Publisher":"Rizzoli",
"Years":1965,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore",
"Category":"IL"
},{
"Unnamed: 0":310.0,
"Authors":"Berto, Giuseppe",
"Title":"Guerra in camicia nera",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1955,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore in data 15.09.1964.",
"Category":"IL"
},{
"Unnamed: 0":311.0,
"Authors":"Berto, Giuseppe",
"Title":"Le opere di Dio",
"Cities":"Milano",
"Publisher":"Nuova accademia",
"Years":1965,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":312.0,
"Authors":"Berto, Giuseppe",
"Title":"Un po\u2019 di successo",
"Cities":"Milano",
"Publisher":"Longanesi",
"Years":1963,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":313.0,
"Authors":"Berto, Giuseppe",
"Title":"L\u2019uomo e la sua morte: dramma in due parti",
"Cities":"Brescia",
"Publisher":"Morcelliana",
"Years":1964,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":314.0,
"Authors":"Bertolazzi, Carlo",
"Title":"El nost Milan e altre commedie",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1971,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":315.0,
"Authors":"Bertoli, Pietro ",
"Title":"Non pace ma la spada",
"Cities":"Milano",
"Publisher":"Feltrinelli",
"Years":1970,
"Fund":"BTB Segn. Op. 56",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":316.0,
"Authors":"Bertolini, Francesco",
"Title":"Storia antica ad uso delle scuole secondarie",
"Cities":"Milano",
"Publisher":"Vallardi",
"Years":"s.d.",
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":317.0,
"Authors":"Bertolucci, Attilio",
"Title":"La capanna indiana",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1951,
"Fund":"BTB Segn. 208",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":318.0,
"Authors":"Bertolucci, Attilio",
"Title":"Viaggio d\u2019inverno (1955-1970)",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1971,
"Fund":"BTB Segn. 209",
"Segni":"Dedica dell\u2019autore in data 6.1971.",
"Category":"IL"
},{
"Unnamed: 0":319.0,
"Authors":"Bertolucci, Bernardo",
"Title":"In cerca di mistero",
"Cities":"Milano",
"Publisher":"Longanesi",
"Years":1962,
"Fund":"BTB Segn. 210",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":320.0,
"Authors":"Bertoni, Giulio",
"Title":"Introduzione alla filologia",
"Cities":"Modena",
"Publisher":"Soc. Tip. Modenese",
"Years":1941,
"Fund":"BTB Segn. 2422",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":321.0,
"Authors":"Bertoni, Giulio",
"Title":"Profilo linguistico d\u2019Italia",
"Cities":"Modena",
"Publisher":"Soc. Tip. Modenese",
"Years":1940,
"Fund":"BTB Segn. 2423",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":322.0,
"Authors":"Bertram, Anthony",
"Title":"Hieronymus Bosch",
"Cities":"London-New York",
"Publisher":"The Studio Publications",
"Years":1950,
"Fund":"BTB Segn. 2194",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":323.0,
"Authors":"Bertrand, Louis",
"Title":"Louis XIV",
"Cities":"Paris",
"Publisher":"Fayard",
"Years":1949,
"Fund":"BTB Segn. 1598",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":324.0,
"Authors":"Bert\u00f9, Berto",
"Title":"Dizionario del gergo marinaresco (A-B)",
"Cities":"s.l.",
"Publisher":"Marinara",
"Years":"s.d.",
"Fund":"BTB Segn. Op. 29",
"Segni":null,
"Category":"D"
},{
"Unnamed: 0":325.0,
"Authors":"Bessi\u00e8re, Gustave",
"Title":"Il calcolo differenziale ed integrale reso facile ed attraente",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1943,
"Fund":"BTB Segn. 2031-2032",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":326.0,
"Authors":"Besson, Georges",
"Title":"Claude Monet",
"Cities":"Paris",
"Publisher":"Braun",
"Years":1951,
"Fund":"BTB Segn. 2206",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":327.0,
"Authors":"Besson, Georges",
"Title":"Monet",
"Cities":"Paris",
"Publisher":"Braun",
"Years":1951,
"Fund":"BTB Segn. 2230",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":328.0,
"Authors":"Besta, Riccardo",
"Title":"Anatomia e fisiologia comparate",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1907,
"Fund":"BTB Segn. 2021",
"Segni":"Nota di possesso autografa.",
"Category":"T"
},{
"Unnamed: 0":329.0,
"Authors":"Betocchi, Carlo",
"Title":"Poesie 1930-1954: Realt\u00e0 vince il sogno. Altre poesie. Notizie. Tetti toscani",
"Cities":"Firenze",
"Publisher":"Valecchi",
"Years":1955,
"Fund":"BTB Segn. 211",
"Segni":"Dedica dell\u2019autore in data 26.8.1955.",
"Category":"IL"
},{
"Unnamed: 0":330.0,
"Authors":"Betti, Emilio",
"Title":"Diritto romano e dogmatica odierna.",
"Cities":"Modena",
"Publisher":"Soc. Tip. Modenese",
"Years":1928,
"Fund":"BTB Segn. Op. 30",
"Segni":"Dedica dell\u2019autore. Postille.",
"Category":"V"
},{
"Unnamed: 0":331.0,
"Authors":"Betti, Ugo",
"Title":"Canzonette. La morte",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1932,
"Fund":"BTB Segn. 212",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":332.0,
"Authors":"Betti, Ugo",
"Title":"Le case",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1933,
"Fund":"BTB Segn. 215",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":333.0,
"Authors":"Betti, Ugo",
"Title":"Il mercante di frottole",
"Cities":null,
"Publisher":"Estratto da \u00abLa Nuova Antologia\u00bb",
"Years":1927,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":334.0,
"Authors":"Betti, Ugo",
"Title":"La padrona",
"Cities":"Torino",
"Publisher":"Ribet",
"Years":1929,
"Fund":"BTB Segn. 214",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":335.0,
"Authors":"Betti, Ugo",
"Title":"Il re pensieroso",
"Cities":"Milano",
"Publisher":"Treves",
"Years":1922,
"Fund":"BTB Segn. 213",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":336.0,
"Authors":"Betti, Ugo",
"Title":"Versi",
"Cities":"Roma",
"Publisher":"Nuova Antologia",
"Years":1924,
"Fund":"BTB Segn. Op. 115",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":337.0,
"Authors":"Bevilacqua, Alberto",
"Title":"L\u2019occhio del gatto",
"Cities":"Milano",
"Publisher":"Rizzoli",
"Years":1968,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":338.0,
"Authors":"Biagini, Mario",
"Title":"Il poeta della terza Italia: vita di Giosu\u00e8 Carducci",
"Cities":"Milano",
"Publisher":"Mursia",
"Years":1961,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":339.0,
"Authors":"Bianchi, Celestino",
"Title":"Manuale di storia moderna (1454-1885)",
"Cities":"Firenze",
"Publisher":"Barb\u00e8ra",
"Years":1885,
"Fund":"BTB Segn. 1726",
"Segni":"Nota di possesso autografa di Adele Gadda Lehr.",
"Category":"S"
},{
"Unnamed: 0":340.0,
"Authors":"Bianchi, Matteo",
"Title":"Geografia politica dell\u2019Italia",
"Cities":"Firenze",
"Publisher":"Societ\u00e0 Editrice Fiorentina",
"Years":1845,
"Fund":"BTB Segn. 2348",
"Segni":"Nota di possesso autografa di Adele Gadda Lehr.",
"Category":"G "
},{
"Unnamed: 0":341.0,
"Authors":"Bianchi, Pietro",
"Title":"HenriGeorges Clouzot",
"Cities":"Parma",
"Publisher":"Guanda",
"Years":1951,
"Fund":"BTB Segn. 2400",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":342.0,
"Authors":"Bianciardi, Luciano",
"Title":"Da Quarto a Torino: breve storia della spedizione dei Mille",
"Cities":"Milano",
"Publisher":"Feltrinelli",
"Years":1960,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":343.0,
"Authors":"Bianconi, Pietro",
"Title":"Tutta la pittura del Correggio",
"Cities":"Milano",
"Publisher":"Rizzoli",
"Years":1953,
"Fund":"BTB Segn. 2198",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":344.0,
"Authors":"Not found",
"Title":"Biblia sacra juxta vulgatam clementinam",
"Cities":"Roma-Paris",
"Publisher":"Descl\u00e9e",
"Years":1938,
"Fund":"BTB Segn. 1769",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":345.0,
"Authors":"Bigliazzi, Francesco",
"Title":"Come visitare Firenze e i suoidintorni",
"Cities":"Milano",
"Publisher":"Tip. Capello",
"Years":1940,
"Fund":null,
"Segni":null,
"Category":"G "
},{
"Unnamed: 0":346.0,
"Authors":"Bignone, Ettore",
"Title":"Il libro della letteratura greca:storia della letteratura greca conun\u2019antologia delle pi\u00f9 belle pagine di prosa e di poesia dei maggiori scrittori",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1940,
"Fund":"BTB",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":347.0,
"Authors":"Bigongiari, Piero",
"Title":"L\u2019elaborazione della lirica leopardiana",
"Cities":"Firenze",
"Publisher":"Marzocco",
"Years":1948,
"Fund":"BTB Segn. 762",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":348.0,
"Authors":"Bigongiari, Piero",
"Title":"Studi",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1946,
"Fund":"BTB Segn. 216",
"Segni":"Dedica dell\u2019autore in data 1.5.1946.Parzialmente intonso.",
"Category":"L"
},{
"Unnamed: 0":349.0,
"Authors":"Bigongiari, Piero\u2013 Angioletti, Giovanni Battista",
"Title":"Testimone in Grecia",
"Cities":"Torino",
"Publisher":"ERI",
"Years":1954,
"Fund":"BTB Segn. 2263",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":350.0,
"Authors":"Bilenchi, Romano",
"Title":"Anna e Bruno e altri racconti",
"Cities":"Fi renze",
"Publisher":"Parenti",
"Years":1938,
"Fund":"BTB Segn. 217",
"Segni":"Intonso.",
"Category":"IL"
},{
"Unnamed: 0":351.0,
"Authors":"Bilenchi, Romano",
"Title":"Conservatorio di Santa Teresa",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1940,
"Fund":"BTB Segn. 218",
"Segni":"Dedica dell\u2019autore. Parzialmente intonso.",
"Category":"IL"
},{
"Unnamed: 0":352.0,
"Authors":"Bilenchi, Romano",
"Title":"Dino e altri racconti",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1942,
"Fund":"BTB Segn. 219",
"Segni":"Dedica dell\u2019autore in data 14.12.1942.Parzialmente intonso.",
"Category":"IL"
},{
"Unnamed: 0":353.0,
"Authors":"Bilenchi, Romano",
"Title":"Mio cugino Andrea",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1943,
"Fund":"BTB Segn. 220",
"Segni":"Dedica dell\u2019autore in data 20.4.1943.Parzialmente intonso.",
"Category":"IL"
},{
"Unnamed: 0":354.0,
"Authors":"Bilenchi, Romano",
"Title":"Racconti",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1958,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":355.0,
"Authors":"Bilenchi, Romano",
"Title":"La siccit\u00e0",
"Cities":"Firenze",
"Publisher":"Rivoluzione",
"Years":1941,
"Fund":"BTB Segn. 221",
"Segni":"Dedica dell\u2019autore, Firenze, 2.1943.",
"Category":"IL"
},{
"Unnamed: 0":356.0,
"Authors":"Bisinger, Gerald",
"Title":"Sieben Gedichte zum Vorlesen",
"Cities":"Berlin",
"Publisher":"Literarische Colloquium",
"Years":1968,
"Fund":"BTB Segn. 1159",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":357.0,
"Authors":"Blanc, Charles",
"Title":"  portatif Fran\u00e7aisItalien et ItalienFran\u00e7ais, abr\u00e9g\u00e9 de celui de Cormon et Manniavec l\u2019accent prosodique surchaque mot italien",
"Cities":"St Hilaire",
"Publisher":"Cormon Et Blanc",
"Years":1846,
"Fund":null,
"Segni":"Nota di possesso Francesco Gadda",
"Category":"S"
},{
"Unnamed: 0":358.0,
"Authors":"Blixen, Karen",
"Title":"La mia Africa",
"Cities":"Milano",
"Publisher":"Feltrinelli",
"Years":1959,
"Fund":"BTB Segn. 1239",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":359.0,
"Authors":"Bo, Carlo",
"Title":"Delle immagini giovanili di Sainte-Beuve",
"Cities":"Firenze",
"Publisher":"Parenti",
"Years":1938,
"Fund":"BTB Segn. 118",
"Segni":"Dedica dell\u2019autore in data 9.1938. Parzial mente intonso.",
"Category":"L"
},{
"Unnamed: 0":360.0,
"Authors":"Bo, Carlo",
"Title":"Inchiesta sul neorealismo",
"Cities":"Torino",
"Publisher":"ERI",
"Years":1951,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":361.0,
"Authors":"Bo, Carlo",
"Title":"Otto studi",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1939,
"Fund":"BTB Segn. 763",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":362.0,
"Authors":"Bo, Carlo",
"Title":"Saggi di letteratura francese",
"Cities":"Brescia",
"Publisher":"Morcelliana",
"Years":1940,
"Fund":"BTB Segn. 1119",
"Segni":"Dedica dell\u2019autore in data 5.1940. Pieghe.",
"Category":"IL"
},{
"Unnamed: 0":363.0,
"Authors":"Boccaccio, Giovanni",
"Title":"Il decamerone",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1938,
"Fund":null,
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":364.0,
"Authors":"Boccaccio, Giovanni",
"Title":"Il Decamerone",
"Cities":"Roma",
"Publisher":"Colombo Editore",
"Years":1944,
"Fund":"BAL",
"Segni":"Nota di possesso autografa in data 1945.",
"Category":"IL"
},{
"Unnamed: 0":365.0,
"Authors":"Boccaccio, Giovanni",
"Title":"Decamer\u00f2n",
"Cities":"Milano",
"Publisher":"Rizzoli",
"Years":1950,
"Fund":"BTB Segn. 222-223",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":366.0,
"Authors":"Boccaccio, Giovanni",
"Title":"Il testamento di Giovanni Boccaccio secondo l\u2019originale in pergamena dell\u2019archivio Bichi-Borghesi di Siena",
"Cities":"Siena",
"Publisher":"Landi",
"Years":1855,
"Fund":"BTB Segn. 224",
"Segni":"Dedica.",
"Category":"IL"
},{
"Unnamed: 0":367.0,
"Authors":"Bodini, Vittorio",
"Title":"La luna dei Borboni ed altre poesie",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1962,
"Fund":"BAL",
"Segni":"Postille.",
"Category":"IL"
},{
"Unnamed: 0":368.0,
"Authors":"Bodrero, Emilio",
"Title":"Eraclito",
"Cities":"Milano",
"Publisher":"Bocca",
"Years":1910,
"Fund":"BTB Segn. 1931",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":369.0,
"Authors":"Boezio, Severino",
"Title":"La consolazione della filosofia",
"Cities":"Firenze",
"Publisher":"Salani",
"Years":1942,
"Fund":"BTB Segn. 1823",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":370.0,
"Authors":"Boiardo, Matteo Maria",
"Title":"Tutte le opere",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1937,
"Fund":"BTB Segn. 225-226",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":371.0,
"Authors":"Boileau-Despr\u00e9aux, Nicolas",
"Title":" Oeuvres",
"Cities":"Paris",
"Publisher":"David \u00e0 la Plume d\u2019OrDurand au Griffon",
"Years":1752,
"Fund":"BTB Segn. 964",
"Segni":"Sottolineature e postille. Nota di possesso di Clara Gadda.",
"Category":"FL "
},{
"Unnamed: 0":372.0,
"Authors":"Bonacossa, Aldo",
"Title":"Regione dell\u2019Ortles",
"Cities":"Milano",
"Publisher":"Club Alpino Italiano",
"Years":1915,
"Fund":"BTB Segn. 2286",
"Segni":null,
"Category":"G "
},{
"Unnamed: 0":373.0,
"Authors":"Bonaventura da Bagnoregio",
"Title":"Vita di San Francesco",
"Cities":"Firenze",
"Publisher":"Rinascimento del Libro",
"Years":1931,
"Fund":"BTB Segn. 1782",
"Segni":null,
"Category":null
},{
"Unnamed: 0":374.0,
"Authors":"Bonavia, Calogero",
"Title":"L\u2019Apocalisse di S. Giovanni. Nuova traduzione del poema",
"Cities":"Bari",
"Publisher":"Laterza",
"Years":1933,
"Fund":"BTB Segn. 1783",
"Segni":null,
"Category":null
},{
"Unnamed: 0":375.0,
"Authors":"Boneschi, Francesco",
"Title":"Il laccio degli innocenti",
"Cities":"Milano",
"Publisher":"Ceschina",
"Years":1969,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore in data 2.1969.",
"Category":"IL"
},{
"Unnamed: 0":376.0,
"Authors":"Bonfadini, Romualdo",
"Title":"Mezzo secolo di patriottismo",
"Cities":"Milano",
"Publisher":"Treves",
"Years":1886,
"Fund":"BTB Segn. 1502",
"Segni":"Nota di possesso autografa.",
"Category":"IL"
},{
"Unnamed: 0":377.0,
"Authors":"Bonfadini, Romualdo",
"Title":"Milano nei suoi momenti storici",
"Cities":"Milano",
"Publisher":"Treves",
"Years":1883,
"Fund":"BTB Segn. 2285",
"Segni":"Nota di possesso autografa di Luisa Gadda.",
"Category":"IL"
},{
"Unnamed: 0":378.0,
"Authors":"Bonfantini, Mario",
"Title":"Scomparso a Venezia",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1972,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore. Piega.",
"Category":"IL"
},{
"Unnamed: 0":379.0,
"Authors":"Bongiovanni, Giannetto",
"Title":"I Gonzaga",
"Cities":"Milano",
"Publisher":"Athena",
"Years":1930,
"Fund":"BTB Segn. 1498",
"Segni":"Dedica dell\u2019autore in data 1.1932.",
"Category":"IL"
},{
"Unnamed: 0":380.0,
"Authors":"Bonsanti, Alessandro",
"Title":"I capricci dell\u2019Adriana",
"Cities":"Firenze",
"Publisher":"Solaria",
"Years":1934,
"Fund":"BTB Segn. 227",
"Segni":"Dedica dell\u2019autore in data 12.1933.",
"Category":"IL"
},{
"Unnamed: 0":381.0,
"Authors":"Bonsanti, Alessandro",
"Title":"Dialoghi e altre prose",
"Cities":"Firenze",
"Publisher":"Parenti",
"Years":1940,
"Fund":"BTB Segn. 228",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":382.0,
"Authors":"Bonsanti, Alessandro",
"Title":"Introduzione al gran viaggio. Racconto seguito da Fine dell\u2019adolescenza",
"Cities":"Roma",
"Publisher":"Tumminelli",
"Years":1944,
"Fund":"BTB Segn. 229",
"Segni":null,
"Category":null
},{
"Unnamed: 0":383.0,
"Authors":"Bonsanti, Alessandro",
"Title":"La nuova stazione di Firenze",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1965,
"Fund":"BTB Segn. 230",
"Segni":"Dedica dell\u2019autore in data 3.6.1966.",
"Category":"IL"
},{
"Unnamed: 0":384.0,
"Authors":"Bonsanti, Alessandro",
"Title":"Racconto militare",
"Cities":"Firenze",
"Publisher":"Parenti",
"Years":1937,
"Fund":"BTB Segn. 232",
"Segni":"Dedica dell\u2019autore in data 29.6.1937.",
"Category":"IL"
},{
"Unnamed: 0":385.0,
"Authors":"Bonsanti, Alessandro",
"Title":"Racconto militare",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1968,
"Fund":"BTB Segn. 231",
"Segni":"Dedica dell\u2019autore in data 16.4.1968. Sottolineature e postille.",
"Category":"IL"
},{
"Unnamed: 0":386.0,
"Authors":"Bonsanti, Alessandro",
"Title":"La serva amorosa",
"Cities":"Firenze",
"Publisher":"Edizioni di Solaria",
"Years":1929,
"Fund":"BTB Segn. 233",
"Segni":"Dedica dell\u2019autore 19.6.1930.",
"Category":"IL"
},{
"Unnamed: 0":387.0,
"Authors":"Bonsanti, Alessandro",
"Title":"La vipera e il toro",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1955,
"Fund":"BTB Segn. 234",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":388.0,
"Authors":"Bonvesin de la Riva",
"Title":"Cinque volgari",
"Cities":"Modena",
"Publisher":"Soc. Tip. Modenese",
"Years":1937,
"Fund":"BTB Segn. 235",
"Segni":"Dedica del curatore.",
"Category":"L"
},{
"Unnamed: 0":389.0,
"Authors":"Boothe Luce, Clare",
"Title":"L\u2019Europa e l\u2019America",
"Cities":"Roma",
"Publisher":"United States Information Service",
"Years":1955,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":390.0,
"Authors":"Borgese, Giuseppe Antonio",
"Title":"Studi di letterature moderne",
"Cities":"Milano",
"Publisher":"Treves",
"Years":1920,
"Fund":"BTB Segn. 764",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":391.0,
"Authors":"Borghese, Junio Valerio",
"Title":"Decima flottiglia MAS. Dalle origini all\u2019armistizio",
"Cities":"Milano  ",
"Publisher":"Garzanti",
"Years":1950,
"Fund":"BTB Segn. 1503",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":392.0,
"Authors":"Borlenghi, Aldo",
"Title":"L\u2019arte di N. Tommaseo",
"Cities":"Milano",
"Publisher":"Meridiana",
"Years":1953,
"Fund":"BTB Segn. 765",
"Segni":"Dedica dell\u2019autore.",
"Category":"L"
},{
"Unnamed: 0":393.0,
"Authors":"Borlenghi, Aldo",
"Title":"Poesie",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1952,
"Fund":"BTB Segn. 236",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":394.0,
"Authors":"Borsetta, Francesco",
"Title":"Per curarsi con le erbe",
"Cities":"Vigevano",
"Publisher":"Borsetta",
"Years":1942,
"Fund":"BTB Segn. 2074",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":395.0,
"Authors":"Boselli, Carlo",
"Title":"La grammatica spagnola del XX secolo ad uso degli italiani",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1940,
"Fund":"BTB Segn. 2424",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":396.0,
"Authors":"Bosisio, Carlo",
"Title":"Tecoppa in tribunal",
"Cities":"Milano",
"Publisher":"Cesati",
"Years":1924,
"Fund":"BAL",
"Segni":"Postille.",
"Category":"IL"
},{
"Unnamed: 0":397.0,
"Authors":"Bossert, Adolphe",
"Title":"Histoire de la litt\u00e9rature allemande",
"Cities":"Paris",
"Publisher":"Hachette",
"Years":1921,
"Fund":"BTB Segn. 1222",
"Segni":"Nota di possesso autografa in data 06.1925 Milano. Parzialmente intonso.",
"Category":"FL "
},{
"Unnamed: 0":398.0,
"Authors":"Bossuet, Jacques B\u00e9nigne",
"Title":"\u0152uvres",
"Cities":"Fribourg",
"Publisher":"Egloff",
"Years":1944,
"Fund":"BTB Segn. 966",
"Segni":null,
"Category":"FL "
},{
"Unnamed: 0":399.0,
"Authors":"Bossuet, Jacques B\u00e9nigne",
"Title":"Oraisons fun\u00e8bres",
"Cities":"Milano",
"Publisher":"Fontana",
"Years":1831,
"Fund":"BTB Segn. 965",
"Segni":"Nota di possesso autografa di Adele Gadda Lehr. Sottolineature, pieghe.",
"Category":"FL "
},{
"Unnamed: 0":400.0,
"Authors":"Bossuet, Jacques B\u00e9nigne",
"Title":"Traitez du libre arbitre et de la concupiscence",
"Cities":"Paris",
"Publisher":"Barthelemy Alix Libraire",
"Years":1731,
"Fund":"BTB Segn. 967",
"Segni":"Postille.",
"Category":"FL "
},{
"Unnamed: 0":401.0,
"Authors":"Botta, Carlo",
"Title":"Storia della guerra d\u2019indipendenza",
"Cities":"Milano",
"Publisher":"Borroni e Scotti",
"Years":1844,
"Fund":"BTB Segn. 1727-1728",
"Segni":"Dedica a Francesco Gadda in data 1851.",
"Category":"S"
},{
"Unnamed: 0":402.0,
"Authors":"Bottari, Stefano",
"Title":"Michelangelo e la Cappella Sistina",
"Cities":"Milano",
"Publisher":"Fratelli Fabbri Editori",
"Years":1968,
"Fund":"BAL",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":403.0,
"Authors":"Bouillet, Marie Nicolas",
"Title":"Dictionnaire universel d\u2019histoire et de g\u00e9ographie",
"Cities":"Paris",
"Publisher":"Hachette",
"Years":1893,
"Fund":"BAL",
"Segni":"Postille e segnalibro.",
"Category":"D"
},{
"Unnamed: 0":404.0,
"Authors":"Bourciez, Edouard",
"Title":"El\u00e9ments de linguistique romane",
"Cities":"Paris",
"Publisher":"Klincksiek",
"Years":1930,
"Fund":"BTB Segn. 2425",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":405.0,
"Authors":"Bourget, Paul",
"Title":"Le disciple",
"Cities":"Paris",
"Publisher":"Klincksiek",
"Years":"s.d.",
"Fund":"BTB Segn. 968",
"Segni":"Invio di Bonaventura Tecchi in data 17.12.1918.",
"Category":"FL "
},{
"Unnamed: 0":406.0,
"Authors":"Boutroux, Emile",
"Title":"La natura e lo spirito",
"Cities":"Lanciano",
"Publisher":"Carabba",
"Years":1919,
"Fund":"BTB Segn. 1824",
"Segni":null,
"Category":"F "
},{
"Unnamed: 0":407.0,
"Authors":"Branca, Stefano",
"Title":"Io ho quel che ho donato",
"Cities":"s.l.",
"Publisher":"La reazione in agguato",
"Years":1964,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":408.0,
"Authors":"Branca, Stefano",
"Title":"Una serenit\u00e0 che sorride alla morte",
"Cities":"Milano",
"Publisher":"Branca Stefano",
"Years":1965,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":409.0,
"Authors":"Brancati, Vitaliano",
"Title":"Il vecchio con gli stivali",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1946,
"Fund":"BTB Segn. 237",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":410.0,
"Authors":"Brandi, Cesare",
"Title":"Elegie",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1942,
"Fund":"BTB Segn. 238",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":411.0,
"Authors":"Brandi, Cesare",
"Title":"Morandi",
"Cities":"Firenze",
"Publisher":"Le Monnier",
"Years":1942,
"Fund":"BTB Segn. 2221",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":412.0,
"Authors":"Brandi, Karl",
"Title":"Carlo V",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1961,
"Fund":"BAL",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":413.0,
"Authors":"Brecht, Bertolt",
"Title":"Libro di devozioni domestiche",
"Cities":"Torino  ",
"Publisher":"Einaudi",
"Years":1964,
"Fund":"BTB Segn. 1158",
"Segni":null,
"Category":"GL"
},{
"Unnamed: 0":414.0,
"Authors":"Breton, Andr\u00e9",
"Title":"Antologia dello humour nero",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1970,
"Fund":"BTB Segn. 969",
"Segni":null,
"Category":"FL "
},{
"Unnamed: 0":415.0,
"Authors":"Brignetti, Raffaello",
"Title":"La spiaggia d\u2019oro",
"Cities":"Milano",
"Publisher":"Rizzoli",
"Years":1971,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore in data 5.1971. Segna libro.",
"Category":"IL"
},{
"Unnamed: 0":416.0,
"Authors":"Brion, Marcel",
"Title":"La vie des Huns",
"Cities":"Paris",
"Publisher":"NRF-Gallimard",
"Years":1931,
"Fund":"BTB Segn. 1729",
"Segni":null,
"Category":"FL "
},{
"Unnamed: 0":417.0,
"Authors":"Brioschi, Francesco",
"Title":"I problemi di Urania. Trattato di astronomia",
"Cities":"Milano",
"Publisher":"Politecnica",
"Years":1928,
"Fund":"BTB Segn. 2112",
"Segni":"Invio ad Adele Gadda Lehr. Parzialmente  intonso.",
"Category":"T"
},{
"Unnamed: 0":418.0,
"Authors":"Brock, Helma",
"Title":"Storie naturali",
"Cities":"Treviso",
"Publisher":"Edizioni di Treviso",
"Years":1954,
"Fund":"BTB Segn. 239",
"Segni":"Dedica dell\u2019autrice.",
"Category":"L"
},{
"Unnamed: 0":419.0,
"Authors":"Brod, Max",
"Title":"Tycho Brahe e il suo cammino a Dio",
"Cities":"Milano",
"Publisher":"Sperling & Kupfer",
"Years":1933,
"Fund":"BTB Segn. 1157",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":420.0,
"Authors":"Broggini, Luigi",
"Title":"\u00c8 riapparso l\u2019impero sui colli fatali di Roma",
"Cities":"Milano",
"Publisher":"All\u2019insegna del pesce d\u2019oro",
"Years":1962,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":421.0,
"Authors":"Broglie, Louis de",
"Title":"I quanti e la fisica moderna",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1938,
"Fund":"BTB Segn. 2113",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":422.0,
"Authors":"Brooks, Van Wyck",
"Title":"Storia della letteratura americana. La fioritura della Nuova Inghilterra",
"Cities":"Roma",
"Publisher":"Astrolabio",
"Years":1952,
"Fund":"BTB Segn. 1340",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":423.0,
"Authors":"Brooks, Van Wyck",
"Title":"Storia della letteratura americana. La Nuova Inghilterra: l\u2019estate di San Martino",
"Cities":"Roma",
"Publisher":"Astrolabio",
"Years":1953,
"Fund":"BTB Segn. 1341",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":424.0,
"Authors":"Brousson, Jean-Jacques",
"Title":"Anatole France en pantoufles",
"Cities":"Paris",
"Publisher":"Cr\u00e8s",
"Years":1927,
"Fund":"BTB Segn. 1120",
"Segni":null,
"Category":"FL "
},{
"Unnamed: 0":425.0,
"Authors":"Brousson, Jean-Jacques",
"Title":"Itin\u00e9raire de Paris \u00e0 Buenos-Ayres",
"Cities":"Paris",
"Publisher":"Cr\u00e8s",
"Years":1927,
"Fund":"BTB Segn. 970",
"Segni":null,
"Category":"FL "
},{
"Unnamed: 0":426.0,
"Authors":"Bruce, Jean",
"Title":"A tout c\u0153ur \u00e0 Tokyo (O.S.S. 117)",
"Cities":"Paris",
"Publisher":"Presses de la Cit\u00e9",
"Years":1958,
"Fund":"BTB Segn. 971",
"Segni":null,
"Category":"G "
},{
"Unnamed: 0":427.0,
"Authors":"Bruckner, Ferdinand",
"Title":"Elisabetta d\u2019Inghilterra",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1952,
"Fund":"BTB Segn. 1160",
"Segni":"Intonso.",
"Category":"S"
},{
"Unnamed: 0":428.0,
"Authors":"Buchan, John",
"Title":"The Thirty-nine Steps",
"Cities":"London-New York",
"Publisher":"Longmans",
"Years":1955,
"Fund":"BTB Segn. 1240",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":429.0,
"Authors":"Budigna, Luciano",
"Title":"Assedio",
"Cities":"Trieste",
"Publisher":"Edizioni dello Zibaldone",
"Years":1949,
"Fund":"BTB Segn. 240",
"Segni":"Dedica.",
"Category":"IL"
},{
"Unnamed: 0":430.0,
"Authors":"Bulferetti, Domenico",
"Title":"Ugo Foscolo",
"Cities":"Torino",
"Publisher":"UTET",
"Years":1952,
"Fund":"BTB Segn. 767",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":431.0,
"Authors":"Buonaiuti, Ernesto",
"Title":"San Girolamo",
"Cities":"Roma",
"Publisher":"Form\u00ecggini",
"Years":1919,
"Fund":"BTB Segn. 1784",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":432.0,
"Authors":"Burali-Forti, Cesare \u2013 Boggio, Tommaso",
"Title":"Esercizi di matematica. Algebra,geometria, funzioni circolari",
"Cities":"Torino",
"Publisher":"Petrini",
"Years":1924,
"Fund":"BTB Segn. 2044",
"Segni":"Nota di possesso autografa in data 1.06.1925 Milano.",
"Category":"T"
},{
"Unnamed: 0":433.0,
"Authors":"Burchiello (Domenico di Giovanni, detto il)",
"Title":"I sonetti",
"Cities":"Milano",
"Publisher":"Bietti",
"Years":1940,
"Fund":"BTB Segn. 241-242",
"Segni":"Due copie. Una intonsa, l\u2019altra parzialmente intonsa. Piega.",
"Category":"IL"
},{
"Unnamed: 0":434.0,
"Authors":"Burckhardt, Jacob",
"Title":"The Age of Constantine the Great",
"Cities":"New-York",
"Publisher":"Doubleday",
"Years":1956,
"Fund":"BTB Segn. 1450",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":435.0,
"Authors":"Burckhardt, Jacob",
"Title":"La civilt\u00e0 del Rinascimento in Italia",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1958,
"Fund":"BAL",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":436.0,
"Authors":"Burckhardt, Jacob",
"Title":"Considerazioni sulla storia del mondo",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1945,
"Fund":"BTB Segn. 1745",
"Segni":null,
"Category":null
},{
"Unnamed: 0":437.0,
"Authors":"Burckhardt, Jacob",
"Title":"Richelieu",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1941,
"Fund":"BTB Segn. 1599",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":438.0,
"Authors":"Burnand, Robert",
"Title":"La vie quotidienne en France en 1830",
"Cities":"Paris",
"Publisher":"Hachette",
"Years":1950,
"Fund":"BTB Segn. 1600",
"Segni":"Parzialmente intonso.",
"Category":"S"
},{
"Unnamed: 0":439.0,
"Authors":"Burnet, John",
"Title":"Greek Philosophy",
"Cities":"London",
"Publisher":"Macmillan",
"Years":1920,
"Fund":"BTB Segn. 1932",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":440.0,
"Authors":"Burnett, William Riley",
"Title":"Il boia \u00e8 solo",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1953,
"Fund":"BTB Segn. 1241",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":441.0,
"Authors":"Burzio, Filippo",
"Title":"Lagrange",
"Cities":"Torino",
"Publisher":"UTET",
"Years":1942,
"Fund":"BTB Segn. 2114",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":442.0,
"Authors":"Busenello, Gian Francesco",
"Title":"Incoronazione di Poppea",
"Cities":"Venezia",
"Publisher":"Neri Pozza",
"Years":1949,
"Fund":"BTB Segn. 1436",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":443.0,
"Authors":"Not found",
"Title":"Le bustine si orlavano d\u2019unto\u2026",
"Cities":null,
"Publisher":null,
"Years":null,
"Fund":"BTB Segn. Op. 100",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":444.0,
"Authors":"Butler, Samuel",
"Title":"Ainsi va toute chair",
"Cities":"Paris",
"Publisher":"NRF-Gallimard",
"Years":1936,
"Fund":"BTB Segn. 1242",
"Segni":null,
"Category":"FL "
},{
"Unnamed: 0":445.0,
"Authors":"Buttitta, Pietro A.",
"Title":".Il volantino",
"Cities":"Milano",
"Publisher":"Rizzoli",
"Years":1965,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":446.0,
"Authors":"Buzzi, Giancarlo",
"Title":"Isabella della Grazia",
"Cities":"Milano",
"Publisher":"All\u2019insegna del Pesce d\u2019oro",
"Years":1967,
"Fund":"BTB Segn. 243",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":447.0,
"Authors":"Byron, George Gordon",
"Title":"Il corsaro",
"Cities":"s.l.",
"Publisher":"s.e.",
"Years":1842,
"Fund":"BAL",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":448.0,
"Authors":"Byron, George Gordon",
"Title":"\u0152uvres completes de Lord Byron",
"Cities":"Paris",
"Publisher":"Bry Ain\u00e8",
"Years":1853,
"Fund":"BAL",
"Segni":"Postille su fogli inseriti.",
"Category":"EL"
},{
"Unnamed: 0":449.0,
"Authors":"Byron, George Gordon",
"Title":"The Works of Lord Byron complete in five volumes: vol. 2",
"Cities":"Leipzig",
"Publisher":"Tauchnitz",
"Years":1866,
"Fund":"BTB Segn. 1243",
"Segni":"Postille. C",
"Category":"EL"
},{
"Unnamed: 0":450.0,
"Authors":"Cabau, Jacques",
"Title":"Edgar Poe par luim\u00eame",
"Cities":"Paris",
"Publisher":"Seuil",
"Years":1960,
"Fund":"BTB Segn. 1344",
"Segni":null,
"Category":"FL "
},{
"Unnamed: 0":451.0,
"Authors":"Cabrini, Gabrielle",
"Title":"Les \u00eeles sans bord",
"Cities":"Paris",
"Publisher":"Laffont",
"Years":1960,
"Fund":"BAL",
"Segni":"Dedica autografa dell\u2019autrice in data3.11.60.",
"Category":"FL"
},{
"Unnamed: 0":452.0,
"Authors":"Caccia Dominioni, Paolo",
"Title":"1915-1919",
"Cities":"Milano",
"Publisher":"Longanesi",
"Years":1965,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore in data 1965.",
"Category":"S"
},{
"Unnamed: 0":453.0,
"Authors":"Caddeo, Rinaldo",
"Title":"Le historie della vita e dei fatti di Cristoforo Colombo",
"Cities":"Milano",
"Publisher":"Alpes",
"Years":1930,
"Fund":"BTB Segn. 1508-1509",
"Segni":null,
"Category":null
},{
"Unnamed: 0":454.0,
"Authors":"Cadorna, Luigi",
"Title":"Addestramento della fanteria alcombattimento. Fascicolo Istruzione della recluta (EdizioneI.provvisoria)",
"Cities":"Roma",
"Publisher":"Tipografia del Senato  per il R. Esercito italiano-Comando supremo",
"Years":1916,
"Fund":"BTB Segn. 2167",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":455.0,
"Authors":"Cadorna, Luigi",
"Title":"Attacco frontale e ammaestramento tattico. Circolare n. 191 del 25 febbraio 1915.",
"Cities":"Roma",
"Publisher":"Tipografia Editrice La Speranza per il Comando del Corpo di Stato Maggiore dell\u2019Esercito",
"Years":1915,
"Fund":"BTB Segn. 2160",
"Segni":null,
"Category":"M"
},{
"Unnamed: 0":456.0,
"Authors":"Cadorna, Luigi",
"Title":"Esplorazione vicina e sicurezza. Circolare n. 400 I.M. del 1 maggio\n1915",
"Cities":"Roma",
"Publisher":"Tipografia Impr. Gen. d\u2019affissioni e pubblicit\u00e0 per il Comando del Corpo di Stato Maggiore dell\u2019Esercito",
"Years":1915,
"Fund":"BTB Segn. 2161",
"Segni":null,
"Category":"M"
},{
"Unnamed: 0":457.0,
"Authors":"Cadorna, Luigi",
"Title":"Pagine polemiche",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1951,
"Fund":"BAL",
"Segni":null,
"Category":"M"
},{
"Unnamed: 0":458.0,
"Authors":"Cagna, Achille Giovanni",
"Title":"Alpinisti ciabattoni",
"Cities":"Milano",
"Publisher":"Baldini e Castoldi",
"Years":1934,
"Fund":"BTM",
"Segni":"Sottolineature e postille.",
"Category":"L"
},{
"Unnamed: 0":459.0,
"Authors":"Caldwell, Taylor",
"Title":"L\u2019ora finale",
"Cities":"Milano",
"Publisher":"Baldini e Castoldi",
"Years":1949,
"Fund":"BAL",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":460.0,
"Authors":"Caillois, Roger",
"Title":"Descrizione del marxismo",
"Cities":"Roma",
"Publisher":"Associazione Italiana per la libert\u00e0 della cultura",
"Years":1954,
"Fund":"BTB Segn. 2006",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":461.0,
"Authors":"Caird, Edward",
"Title":"Hegel",
"Cities":"Milano-Palermo-Napoli",
"Publisher":"Sandron",
"Years":"s.d.",
"Fund":"BTB Segn. 1933",
"Segni":"Parzialmente intonso.",
"Category":"F"
},{
"Unnamed: 0":462.0,
"Authors":"Calderini, Aristide",
"Title":"Lettere private dell\u2019Egitto grecoromano",
"Cities":"Milano  ",
"Publisher":"Figli della Provvidenza",
"Years":1915,
"Fund":"BTB Segn. Op. 26",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":463.0,
"Authors":"Calderini, Aristide \u2013 Mondini, Maria",
"Title":"Testamenti di soldati",
"Cities":"Firenze",
"Publisher":"Ariani",
"Years":1915,
"Fund":"BTB Segn. Op. 43",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":464.0,
"Authors":"Calderini, Aristide \u2013 Paribeni, Roberto",
"Title":"Milano",
"Cities":"Roma",
"Publisher":"Libreria dello Stato",
"Years":1951,
"Fund":"BTB Segn. 2340",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":465.0,
"Authors":"Calder\u00f3n de la Barca, Pedro",
"Title":"La vita \u00e8 un sogno",
"Cities":"Torino",
"Publisher":"SET-Il Dramma",
"Years":1943,
"Fund":"BTB Segn. 908",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":466.0,
"Authors":"Not found",
"Title":"Calendario di letture",
"Cities":"Torino",
"Publisher":"ERI",
"Years":1966,
"Fund":"BTB Segn. 1409",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":467.0,
"Authors":"]Callet, Jean-Fran\u00e7ois",
"Title":"Tables de logarithmes \u00e0 sept d\u00e9cimales",
"Cities":"Paris",
"Publisher":"Hachette",
"Years":1862,
"Fund":"BTB Segn. 2120",
"Segni":"Nota di possesso, C.E. Gadda 1919.",
"Category":"T"
},{
"Unnamed: 0":468.0,
"Authors":"Calogero, Giuseppe",
"Title":"Pedagogia politica e sociale di Tommaso Campanella",
"Cities":"Pozzuoli (Napoli)",
"Publisher":"Conte",
"Years":1964,
"Fund":"BTB Segn. 1934",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":469.0,
"Authors":"Calvin, Jean",
"Title":"La religione individuale",
"Cities":"Lanciano",
"Publisher":"Carabba",
"Years":1919,
"Fund":"BTB Segn. 1785",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":470.0,
"Authors":"Calvino, Italo",
"Title":"Le cosmicomiche",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1965,
"Fund":"BTB Segn. 244",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":471.0,
"Authors":"Calvino, Italo",
"Title":"L\u2019entrata in guerra",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1965,
"Fund":"BTB Segn. 245",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":472.0,
"Authors":"Calvino, Italo",
"Title":"Fiabe italiane",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1956,
"Fund":"BAL",
"Segni":"Biglietto augurale di Giulio Einaudidel 1956 e dedica di Gadda ad A.Lberati in data 15.6.1970.",
"Category":"IL"
},{
"Unnamed: 0":473.0,
"Authors":"Calzini, Raffaele \u2013 Portaluppi, Piero",
"Title":"Il Palazzo e la famiglia Durini in duesecoli di vita milanese: 1648- 1848",
"Cities":"Milano",
"Publisher":"Bestetti e Tumminelli",
"Years":1923,
"Fund":"BTB Segn. 2392",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":474.0,
"Authors":"Cammarano, Salvatore",
"Title":"Lucia di Lammermoor",
"Cities":"Sesto San Giovanni",
"Publisher":"Barion",
"Years":1934,
"Fund":"BTB Segn. 1441",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":475.0,
"Authors":"Campana, Dino",
"Title":"Canti orfici",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1941,
"Fund":"BTB Segn. 247",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":476.0,
"Authors":"Campana, Dino",
"Title":"Canti orfici ed altre liriche. Opera completa",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1928,
"Fund":"BTB Segn. 246",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":477.0,
"Authors":"Campana, Dino",
"Title":"Inediti",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1942,
"Fund":"BTB Segn. 248",
"Segni":"Intonso.",
"Category":"IL"
},{
"Unnamed: 0":478.0,
"Authors":"Campanella, Tommaso",
"Title":"La citt\u00e0 del sole",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1941,
"Fund":"BTB Segn. 1825",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":479.0,
"Authors":"Campanella, Tommaso",
"Title":"La citt\u00e0 del sole",
"Cities":"Messina-Firenze",
"Publisher":"D\u2019Anna",
"Years":1967,
"Fund":"BAL",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":480.0,
"Authors":"Campanini, Giuseppe \u2013 Santini, Alessandro",
"Title":"Nozioni di analisi logica",
"Cities":"Roma",
"Publisher":"Manzoni",
"Years":1904,
"Fund":"BTB Segn. 2456",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":481.0,
"Authors":"Not found",
"Title":"Campiello 1969. Antologia",
"Cities":"Venezia",
"Publisher":"Fondazione Cini",
"Years":1969,
"Fund":"BAL",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":482.0,
"Authors":"Not found",
"Title":"Campiello 1970. Antologia",
"Cities":"Venezia",
"Publisher":"Fondazione Cini",
"Years":1970,
"Fund":"BAL",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":483.0,
"Authors":"Campiglio, Giovanni",
"Title":"Storia di Milano",
"Cities":"Milano",
"Publisher":"Rusconi",
"Years":1831,
"Fund":"BTB Segn. 1504-1507",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":484.0,
"Authors":"Cancogni, Manlio",
"Title":"Allegri, giovent\u00f9",
"Cities":"Milano",
"Publisher":"Rizzoli",
"Years":1973,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":485.0,
"Authors":"Canetti, Elias",
"Title":"Auto da f\u00e9",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1967,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":486.0,
"Authors":"Canna, Giovanni",
"Title":"Le opere e i giorni di Esiodo",
"Cities":"Torino",
"Publisher":"Loescher",
"Years":1874,
"Fund":"BTB Segn. Op. 31",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":487.0,
"Authors":"Cantalupi, Antonio",
"Title":"Nozioni pratiche intorno alle consegne, riconsegne e bilanci dei beni stabili secondo i diversi metodi adottati in Lombardia",
"Cities":"Milano",
"Publisher":"Monti",
"Years":1847,
"Fund":"BTB Segn. 2007",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":488.0,
"Authors":"Not found",
"Title":"Canti alpini",
"Cities":"Milano",
"Publisher":"Semenza",
"Years":1924,
"Fund":"BAL",
"Segni":"Nota di possesso di Gadda, C.E. Gadda Capitano nel 5\u00b0 reggimento alpini marzo 1925 Milano (dono di Dubini). Sottolineature e postille.",
"Category":"L"
},{
"Unnamed: 0":489.0,
"Authors":"Not found",
"Title":"Cantico dei cantici",
"Cities":"Venezia",
"Publisher":"Neri Pozza",
"Years":1952,
"Fund":"BTB Segn. 1771",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":490.0,
"Authors":"Cant\u00f9, Cesare",
"Title":"L\u2019Abate Parini e la Lombardia nel secolo passato: studj",
"Cities":"Milano",
"Publisher":"Gnocchi",
"Years":1854,
"Fund":"BTB Segn. 769",
"Segni":"Invio.",
"Category":"IL"
},{
"Unnamed: 0":491.0,
"Authors":"Not found",
"Title":"]Canzoniere italiano: antologia della poesia popolare",
"Cities":"Parma",
"Publisher":"Guanda",
"Years":1955,
"Fund":"BTB Segn. 770",
"Segni":"Dedica del curatore. Parzialmente intonso.",
"Category":"IL"
},{
"Unnamed: 0":492.0,
"Authors":"Not found",
"Title":"Capolavori nei secoli",
"Cities":"Milano",
"Publisher":"Fabbri",
"Years":1961,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":493.0,
"Authors":"Caporali, Cesare",
"Title":"Rime",
"Cities":"Lanciano",
"Publisher":"Carabba",
"Years":1916,
"Fund":"BTB Segn. 249-250",
"Segni":"volume I parzialmente intonso.",
"Category":"IL"
},{
"Unnamed: 0":494.0,
"Authors":"Capote, Truman",
"Title":"L\u2019arpa d\u2019erba",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1953,
"Fund":"BAL",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":495.0,
"Authors":"Caproni, Giorgio",
"Title":"Il terzo libro e altre cose",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1968,
"Fund":"BTB Segn. 251",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":496.0,
"Authors":"Capuana, Luigi",
"Title":"I paralipomeni del Lucifero di Mario Rapisardi",
"Cities":"Bologna",
"Publisher":"Zanichelli",
"Years":1878,
"Fund":"BAL",
"Segni":"Nota di possesso di Prosperini.",
"Category":"IL"
},{
"Unnamed: 0":497.0,
"Authors":"Carcopino, J\u00e9r\u00f4me",
"Title":"La vie quotidienne \u00e0 Rome \u00e0 l\u2019apog\u00e9e de l\u2019Empire",
"Cities":"Paris",
"Publisher":"Hachette",
"Years":1939,
"Fund":"BTB Segn. 1451",
"Segni":"Parzialmente intonso.",
"Category":"S"
},{
"Unnamed: 0":498.0,
"Authors":"Cardarelli, Vincenzo",
"Title":"Il cielo sulla citt\u00e0",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1939,
"Fund":"BTB Segn. 252",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":499.0,
"Authors":"Cardarelli, Vincenzo",
"Title":"Poesie",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1942,
"Fund":"BTB Segn. 253",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":500.0,
"Authors":"Carducci, Giosu\u00e8",
"Title":"Archeologia poetica",
"Cities":"Bologna",
"Publisher":"Zanichelli",
"Years":1908,
"Fund":"BTB Segn. 271",
"Segni":"Parzialmente intonso.",
"Category":"IL"
},{
"Unnamed: 0":501.0,
"Authors":"Carducci, Giosu\u00e8",
"Title":"Bozzetti e scherme",
"Cities":"Bologna",
"Publisher":"Zanichelli",
"Years":1903,
"Fund":"BTB Segn. 256",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":502.0,
"Authors":"Carducci, Giosu\u00e8",
"Title":"Cavalleria e Umanesimo",
"Cities":"Bologna",
"Publisher":"Zanichelli ",
"Years":1909,
"Fund":"BTB Segn. 273",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":503.0,
"Authors":"Carducci, Giosu\u00e8",
"Title":"Ceneri e faville: serie prima: 1858-1870",
"Cities":"Bologna",
"Publisher":"Zanichelli ",
"Years":1871,
"Fund":"BTB Segn. 258",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":504.0,
"Authors":"Carducci, Giosu\u00e8",
"Title":"Ceneri e faville: serie seconda: 1871-1876",
"Cities":"Bologna",
"Publisher":"Zanichelli ",
"Years":1893,
"Fund":"BTB Segn. 260",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":505.0,
"Authors":"Carducci, Giosu\u00e8",
"Title":"Ceneri e faville: serie terza e ultima: 1877-1901",
"Cities":"Bologna",
"Publisher":"Zanichelli ",
"Years":1902,
"Fund":"BTB Segn. 264",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":506.0,
"Authors":"Carducci, Giosu\u00e8",
"Title":"Confessioni e battaglie",
"Cities":"Bologna",
"Publisher":"Zanichelli",
"Years":1903,
"Fund":"BTB Segn. 257",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":507.0,
"Authors":"Carducci, Giosu\u00e8",
"Title":"Confessioni e battaglie: serie seconda",
"Cities":"Bologna",
"Publisher":"Zanichelli",
"Years":1902,
"Fund":"BTB Segn. 265",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":508.0,
"Authors":"Carducci, Giosu\u00e8",
"Title":"Discorsi letterari e storici",
"Cities":"Bologna",
"Publisher":"Zanichelli",
"Years":1905,
"Fund":"BTB Segn. 254",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":509.0,
"Authors":"Carducci, Giosu\u00e8",
"Title":"Giambi ed epodi e rime nuove",
"Cities":"Bologna",
"Publisher":"Zanichelli",
"Years":1903,
"Fund":"BTB Segn. 262",
"Segni":"Sottolineature e postille.",
"Category":"IL"
},{
"Unnamed: 0":510.0,
"Authors":"Carducci, Giosu\u00e8",
"Title":"Juvenilia e Levia gravia",
"Cities":"Bologna",
"Publisher":"Zanichelli",
"Years":1903,
"Fund":"BTB Segn. 259",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":511.0,
"Authors":"Carducci, Giosu\u00e8",
"Title":" Melica e lirica del Settecento: con altri studi di varia letteratura",
"Cities":"Bologna",
"Publisher":"Zanichelli",
"Years":1909,
"Fund":"BTB Segn. 272",
"Segni":"Parzialmente intonso.",
"Category":"IL"
},{
"Unnamed: 0":512.0,
"Authors":"Carducci, Giosu\u00e8",
"Title":"Odi barbare: Rime e ritmi",
"Cities":"Bologna",
"Publisher":"Zanichelli",
"Years":1907,
"Fund":"BTB Segn. 270",
"Segni":"Sottolineature.",
"Category":"IL"
},{
"Unnamed: 0":513.0,
"Authors":"Carducci, Giosu\u00e8",
"Title":"Poesia e storia",
"Cities":"Bologna",
"Publisher":"Zanichelli",
"Years":1905,
"Fund":"BTB Segn. 269",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":514.0,
"Authors":"Carducci, Giosu\u00e8",
"Title":"Poesie di Giosu\u00e8 Carducci 1850-1900",
"Cities":"Bologna",
"Publisher":"Zanichelli",
"Years":1906,
"Fund":"BAL",
"Segni":"Dedica di Carlotta Gadda Belloni",
"Category":"IL"
},{
"Unnamed: 0":515.0,
"Authors":"Carducci, Giosu\u00e8",
"Title":"Primi saggi",
"Cities":"Bologna",
"Publisher":"Zanichelli",
"Years":1903,
"Fund":"BTB Segn. 255",
"Segni":"Sottolineature.",
"Category":"IL"
},{
"Unnamed: 0":516.0,
"Authors":"Carducci, Giosu\u00e8",
"Title":"Studi letterari",
"Cities":"Bologna",
"Publisher":"Zanichelli",
"Years":1893,
"Fund":"BTB Segn. 261",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":517.0,
"Authors":"Carducci, Giosu\u00e8",
"Title":" Studi, saggi e discorsi",
"Cities":"Bologna",
"Publisher":"Zanichelli",
"Years":1898,
"Fund":"BTB Segn. 263",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":518.0,
"Authors":"Carducci, Giosu\u00e8",
"Title":"Studi su Giuseppe Parini: Il Parini maggiore",
"Cities":"Bologna",
"Publisher":"Zanichelli",
"Years":1907,
"Fund":"BTB Segn. 267",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":519.0,
"Authors":"Carducci, Giosu\u00e8",
"Title":"Studi su Giuseppe Parini: Il Parini minore",
"Cities":"Bologna",
"Publisher":"Zanichelli",
"Years":1903,
"Fund":"BTB Segn. 266",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":520.0,
"Authors":"Carducci, Giosu\u00e8",
"Title":"Su Ludovico Ariosto e TorquatoTasso",
"Cities":"Bologna",
"Publisher":"Zanichelli",
"Years":1905,
"Fund":"BTB Segn. 268",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":521.0,
"Authors":"Carena, Giacinto",
"Title":"Prontuario di vocaboli attinenti aparecchie arti, ad alcuni mestieri, acose domestiche, ed altre di uso comune \u2013 parte prima",
"Cities":"Napoli",
"Publisher":"Marghieri Giuseppe",
"Years":1859,
"Fund":"BAL",
"Segni":"Nota di possesso autografa di AdeleGadda Lehr.",
"Category":"IL"
},{
"Unnamed: 0":522.0,
"Authors":"Caretti, Lanfranco",
"Title":"Ariosto e Tasso",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1961,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":523.0,
"Authors":"Caretti, Lanfranco",
"Title":"Le carte alfieriane della raccoltaCora: catalogo e testi",
"Cities":"Pavia",
"Publisher":"Istituto di letteratura italiana",
"Years":1960,
"Fund":"BAL",
"Segni":"Dedica autografa in data 5.1961.",
"Category":"IL"
},{
"Unnamed: 0":524.0,
"Authors":"Caretti, Lanfranco",
"Title":"Il diario del Pontormo",
"Cities":"Roma",
"Publisher":"Rassegna di Cultura e vita scolastica",
"Years":1954,
"Fund":"BTB Segn. Op. 32",
"Segni":"Dedica dell\u2019autore in data 27.9.1959.",
"Category":"IL"
},{
"Unnamed: 0":525.0,
"Authors":"Caretti, Lanfranco",
"Title":"Manzoni e la critica",
"Cities":"Bari",
"Publisher":"Laterza",
"Years":1969,
"Fund":"BTB Segn. 771",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":526.0,
"Authors":"Carletti, Francesco",
"Title":"Giro del mondo del buon negriero (1594-1606)",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1941,
"Fund":"BTB Segn. 274",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":527.0,
"Authors":"Carletti, Francesco",
"Title":"Le pi\u00f9 belle pagine",
"Cities":"Milano",
"Publisher":"Treves",
"Years":1926,
"Fund":"BTB Segn. 275",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":528.0,
"Authors":"Carletti, Francesco",
"Title":"Ragionamenti del mio viaggio intorno al mondo",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1958,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":529.0,
"Authors":"Carli, Enzo",
"Title":"La mostra dei capolavori delle chiese di Bologna.",
"Cities":null,
"Publisher":null,
"Years":null,
"Fund":"BTB Segn. Op. 93",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":530.0,
"Authors":"Carli, Enzo",
"Title":"Mostra delle tavolette di Biccherna e di altri uffici delloStato di Siena",
"Cities":"Firenze",
"Publisher":"Electa",
"Years":1950,
"Fund":"BTB Segn. 2209-2210",
"Segni":"Su una copia, dedica di C.L. Ragghianti.",
"Category":"SA"
},{
"Unnamed: 0":531.0,
"Authors":"Not found",
"Title":"Carlo Dossi: mostra di documenti sulla vita e sull\u2019opera (Milano, Palazzo Sormani, 18 marzo 10 aprile 1965)",
"Cities":"Milano",
"Publisher":"Biblioteca Comunale di Milano",
"Years":1965,
"Fund":"BTB Segn. 773",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":532.0,
"Authors":"Carlyle, Thomas",
"Title":"La rivoluzione francese",
"Cities":"Milano",
"Publisher":"Istituto Editoriale Italiano",
"Years":"s.d.",
"Fund":"BAL e BTB Segn. 1601-1603",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":533.0,
"Authors":"Caro, Annibale",
"Title":"Lettere del commendatore Annibal Caro distribuite ne\u2019 loro varj argomenti. Colla vita dell\u2019autore scritta da A.F. Seghezzi",
"Cities":"Como",
"Publisher":"Ostinelli",
"Years":1825,
"Fund":"BTB Segn. 276-278",
"Segni":"Nota di possesso autografa. Parzialmente intonso.",
"Category":"L"
},{
"Unnamed: 0":534.0,
"Authors":"Carossa, Hans",
"Title":"Adolescenza",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1935,
"Fund":"BTB Segn. 1161",
"Segni":"Dedica del traduttore.",
"Category":"GL"
},{
"Unnamed: 0":535.0,
"Authors":"Carossa, Hans",
"Title":"Dieci poesie",
"Cities":"Milano",
"Publisher":"All\u2019insegna del pesce d\u2019oro",
"Years":1947,
"Fund":"BAL",
"Segni":null,
"Category":"GL"
},{
"Unnamed: 0":536.0,
"Authors":"Carotti, Giulio",
"Title":"Pittura italiana di tutti i tempi. Strenna a benefizio del Pio Istituto Rachitici di Milano",
"Cities":"Bergamo",
"Publisher":"Istituto Italiano d\u2019Arti Grafiche",
"Years":1914,
"Fund":"BTB Segn. 2223",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":537.0,
"Authors":"Not found",
"Title":"Carpaccio",
"Cities":"Firenze",
"Publisher":"Electa",
"Years":1949,
"Fund":"BTB Segn. 2200",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":538.0,
"Authors":"Carpaccio, Vittore",
"Title":"Vittore : la leggenda di San t\u2019Orsola",
"Cities":"Milano",
"Publisher":"Edizioni d\u2019arte Amilcare Pizzi",
"Years":1957,
"Fund":"BAL",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":539.0,
"Authors":"Carr\u00e0, Carlo",
"Title":"Artisti moderni",
"Cities":"Firenze",
"Publisher":"Le Monnier",
"Years":1943,
"Fund":"BTB Segn. 772",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":540.0,
"Authors":"Carra de Vaux, Bernard",
"Title":"Leibniz",
"Cities":"Paris",
"Publisher":"Bloud & Cie",
"Years":1908,
"Fund":"BTB Segn. 1935",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":541.0,
"Authors":"Carr\u00e9, Jean Marie",
"Title":"La vie aventureuse de JeanArthur Rimbaud",
"Cities":"Paris",
"Publisher":"Plon",
"Years":1926,
"Fund":"BTB Segn. 1121",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":542.0,
"Authors":"Carrieri, Raffaele",
"Title":"Cesetti",
"Cities":"Milano",
"Publisher":"All\u2019insegna del pesce d\u2019oro",
"Years":1937,
"Fund":"BAL",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":543.0,
"Authors":"Carrieri, Raffaele",
"Title":"Fantasia degli italiani",
"Cities":"Milano",
"Publisher":"Domus",
"Years":1940,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":544.0,
"Authors":"Carrieri, Raffaele",
"Title":"Immagini di moda 1800-1900",
"Cities":"Milano",
"Publisher":"Domus",
"Years":1940,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":545.0,
"Authors":"Carrieri, Raffaele",
"Title":"Il sabato del bibliofilo",
"Cities":"Milano",
"Publisher":"Scheiwiller",
"Years":1936,
"Fund":"BTB Segn. 279",
"Segni":"Parzialmente intonso.",
"Category":"IL"
},{
"Unnamed: 0":546.0,
"Authors":"Carrozzari, Raph\u00e4el",
"Title":"Carmina selecta",
"Cities":"Milano",
"Publisher":"Bertieri et Vanzetti",
"Years":1921,
"Fund":"BTB Segn. 280",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":547.0,
"Authors":"Casalini, Mario",
"Title":"La boniifica di Alberese",
"Cities":"Roma",
"Publisher":"Istituto Editoriale di Monografie illustrative di Aziende",
"Years":"s.d.",
"Fund":"BTB Segn. Op. 108",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":548.0,
"Authors":"Casas, Cristobal de las",
"Title":"Vocabulario de las dos lenguas toscana y castellana",
"Cities":"Venezia",
"Publisher":"Olivier Alberti",
"Years":1600,
"Fund":"BTB Segn. 2452",
"Segni":null,
"Category":"D"
},{
"Unnamed: 0":549.0,
"Authors":"Casati, Carlo",
"Title":"Nuove rivelazioni su i fatti di Milano nel 1847-1848",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1885,
"Fund":null,
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":550.0,
"Authors":"Casati, Gaetano",
"Title":"Dieci anni in Equatoria e ritorno con Emin Pasci\u00e0",
"Cities":"Milano",
"Publisher":"Dumolard",
"Years":1891,
"Fund":"BTB Segn. 2350-2351",
"Segni":"Nota di possesso autografa in data 4.11.1905.",
"Category":"G "
},{
"Unnamed: 0":551.0,
"Authors":"Cassieri, Giuseppe",
"Title":"Dove abita il prossimo",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1954,
"Fund":"BTB Segn. 281",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":552.0,
"Authors":"Cassirer, Ernst",
"Title":"La filosofia dell\u2019Illuminismo",
"Cities":"Firenze",
"Publisher":"La Nuova Italia",
"Years":1935,
"Fund":"BTB Segn. 1936",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":553.0,
"Authors":"Cassirer, Ernst",
"Title":"Individuo e cosmo nella filosofiadel Rinascimento",
"Cities":"Firenze",
"Publisher":"La Nuova Italia",
"Years":1935,
"Fund":"BTB Segn. 1937",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":554.0,
"Authors":"Castellaneta, Carlo",
"Title":"La dolce compagna",
"Cities":"Milano",
"Publisher":"Rizzoli",
"Years":1970,
"Fund":"BAL",
"Segni":"Intonso.",
"Category":"IL"
},{
"Unnamed: 0":555.0,
"Authors":"Castellaneta, Carlo",
"Title":"Villa di delizia",
"Cities":"Milano",
"Publisher":"Rizzoli",
"Years":1965,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore in data 14.9.1965.",
"Category":"IL"
},{
"Unnamed: 0":556.0,
"Authors":"Castelnuovo, Enrico",
"Title":"Un pittore italiano alla corte diAvignone. Matteo Giovannetti e la pittura in Provenza nel secolo XIV",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1962,
"Fund":"BTB Segn. 2224",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":557.0,
"Authors":"Castelnuovo, Guido",
"Title":"Spazio e tempo secondo le vedutedi A. Einstein",
"Cities":"Bologna",
"Publisher":"Zanichelli",
"Years":"s.d.",
"Fund":"BTM",
"Segni":"Nota di possesso e data 10.06.1925Milano.",
"Category":"T"
},{
"Unnamed: 0":558.0,
"Authors":"Castelnuovo Tedesco, Ugo",
"Title":"La figura umana di G. Pieraccini",
"Cities":"Firenze",
"Publisher":"La Nuova Italia",
"Years":1957,
"Fund":"BTB Segn. Op. 33",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":559.0,
"Authors":"Castiglione, Baldassare",
"Title":"Il Cortegiano. Con un\u2019appendicecontenente una scelta dal Galateodi G. della Casa",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1932,
"Fund":"BTB Segn. 283",
"Segni":"Parzialmente intonso.",
"Category":"IL"
},{
"Unnamed: 0":560.0,
"Authors":"Castiglione, Baldassare \u2013 Giovanni Della Casa",
"Title":"Opere",
"Cities":"Milano",
"Publisher":"Rizzoli",
"Years":1937,
"Fund":"BTB Segn. 282",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":561.0,
"Authors":"Castro, Americo",
"Title":"La Spagna nella sua realt\u00e0 storica",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1955,
"Fund":"BTB Segn. 1585",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":562.0,
"Authors":"Not found",
"Title":"Catalogo Catalogo della esposizione\ndella pittura ferrarese del Rinascimento. Ferrara maggioottobre 1933 XI E.F.della esposizionedella pittura ferrarese del Rinascimento",
"Cities":"Venezia",
"Publisher":"Tipi di Carlo Ferrari",
"Years":1933,
"Fund":"BTB Segn. 2240",
"Segni":"Postille.",
"Category":"SA"
},{
"Unnamed: 0":563.0,
"Authors":"Not found",
"Title":"Catalogo della R. Pinacoteca di Brera in Milano",
"Cities":"Milano",
"Publisher":"R. Pinacoteca di Brera",
"Years":"s.d.",
"Fund":"BTB Segn. 2238",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":564.0,
"Authors":"Not found",
"Title":"Catalogo generale delle edizioni Einaudi dalla fondazione della Casa editrice al 1\u00b0 gennaio 1956.",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1956,
"Fund":"BTB Segn. Op. 134",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":565.0,
"Authors":"Cattaneo, Carlo",
"Title":"Considerazioni sulle cose d\u2019Italia nel 1848",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1942,
"Fund":"BTB Segn. 286",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":566.0,
"Authors":"Cattaneo, Carlo",
"Title":"India, Messico, Cina",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1942,
"Fund":"BTB Segn. 285",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":567.0,
"Authors":"Cattaneo, Carlo",
"Title":"Lombardia antica e moderna",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1943,
"Fund":"BTB Segn. 284",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":568.0,
"Authors":"Cattaneo, Carlo",
"Title":"Saggi di economia rurale",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1939,
"Fund":"BTB Segn. 2008",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":569.0,
"Authors":"Cattaneo, Carlo",
"Title":"Sulle interdizioni israelitiche",
"Cities":"Roma",
"Publisher":"Sestante",
"Years":1944,
"Fund":"BTB Segn. 287",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":570.0,
"Authors":"Cattaneo, Giulio",
"Title":"Bisbetici e bizzarri nella letteratura italiana",
"Cities":"Milano",
"Publisher":"Fabbri",
"Years":1957,
"Fund":"BTB Segn. 774",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":571.0,
"Authors":"Cattaneo, Giulio",
"Title":"Da inverno a inverno",
"Cities":"Milano",
"Publisher":"il Saggiatore",
"Years":1968,
"Fund":"BTB Segn. 288",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":572.0,
"Authors":"Cattaneo, Giulio",
"Title":"Il gran lombardo",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1973,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore in data 3.1973.",
"Category":"IL"
},{
"Unnamed: 0":573.0,
"Authors":"Cattaneo, Giulio",
"Title":"L\u2019uomo delle novit\u00e0",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1968,
"Fund":"BTB Segn. 289",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":574.0,
"Authors":"Catullo, Gaio Valerio",
"Title":"Carmi",
"Cities":"Milano",
"Publisher":"Istituto Editoriale Italiano",
"Years":1927,
"Fund":"BTB Segn. 30",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":575.0,
"Authors":"Catullo, Gaio Valerio",
"Title":"I carmi",
"Cities":"Milano",
"Publisher":"Istituto Editoriale Italiano",
"Years":1947,
"Fund":"BTB Segn. 31",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":576.0,
"Authors":"Catullo, Gaio Valerio",
"Title":"Carmina",
"Cities":"Milano",
"Publisher":"Edizioni di Uomo",
"Years":1945,
"Fund":"BTB Segn. 32",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":577.0,
"Authors":"Catullo, Gaio Valerio",
"Title":"Le Poesie",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1969,
"Fund":"BTB Segn. 33",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":578.0,
"Authors":"Catullo, Gaio Valerio",
"Title":"Po\u00e9sies",
"Cities":"Paris",
"Publisher":"Les Belles Lettres",
"Years":1949,
"Fund":"BTB Segn. 89",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":579.0,
"Authors":"Cavallotti, Felice",
"Title":"Canti e frammenti di Tirteo",
"Cities":"s.l.",
"Publisher":"Rechiedei",
"Years":1878,
"Fund":"BTB Segn. 290",
"Segni":"Nota di possesso di Adele Gadda Lehr.",
"Category":"IL"
},{
"Unnamed: 0":580.0,
"Authors":"Cecchi, Dario",
"Title":"Giovanni Boldini",
"Cities":"Torino",
"Publisher":"UTET",
"Years":1962,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":581.0,
"Authors":"Cecchi, Dario",
"Title":"Museo d\u2019amore",
"Cities":"Milano",
"Publisher":"Martello",
"Years":1960,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":582.0,
"Authors":"Cecchi, Emilio",
"Title":"America amara",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1946,
"Fund":"BTB Segn. 291",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":583.0,
"Authors":"Cecchi, Emilio",
"Title":"Appunti per un periplo dell\u2019Africa",
"Cities":"Milano-Napoli",
"Publisher":"Ricciardi",
"Years":1954,
"Fund":"BTB Segn. 292",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":584.0,
"Authors":"Cecchi, Emilio",
"Title":"Di giorno in giorno: note di letteraturaitaliana contemporanea (1945- 1954)",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1945,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore in data 10.1959.",
"Category":"IL"
},{
"Unnamed: 0":585.0,
"Authors":"Cecchi, Emilio",
"Title":"Et in Arcadia ego",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1942,
"Fund":"BTB Segn. 293",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":586.0,
"Authors":"Cecchi, Emilio",
"Title":"Messico",
"Cities":"Milano",
"Publisher":"Treves",
"Years":1932,
"Fund":"BTB Segn. 294",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":587.0,
"Authors":"Cecchi, Emilio",
"Title":"L\u2019osteria del cattivo tempo",
"Cities":"Milano",
"Publisher":"Corbaccio",
"Years":1927,
"Fund":"BTB Segn. 295",
"Segni":"Intonso.",
"Category":"IL"
},{
"Unnamed: 0":588.0,
"Authors":"Cecchi, Emilio",
"Title":"L\u2019osteria del cattivo tempo",
"Cities":"Milano",
"Publisher":"Dall\u2019Oglio",
"Years":1942,
"Fund":"BTB Segn. 296",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":589.0,
"Authors":"Cecchi, Emilio",
"Title":"Pesci rossi",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1943,
"Fund":"BTB Segn. 297",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":590.0,
"Authors":"Cecchi, Emilio",
"Title":"Ritratti e profili",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1957,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore in data 10.1957.",
"Category":"IL"
},{
"Unnamed: 0":591.0,
"Authors":"Cecchi Pieraccini, Leonetta",
"Title":"Agendina di guerra 1939-1944",
"Cities":"Milano",
"Publisher":"Longanesi",
"Years":1964,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autrice",
"Category":"IL"
},{
"Unnamed: 0":592.0,
"Authors":"Cecchi Pieraccini, Leonetta",
"Title":"Vecchie agendine 1911-1929",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1960,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autrice",
"Category":"IL"
},{
"Unnamed: 0":593.0,
"Authors":"Cecchini, Giovanni",
"Title":"La Galleria Nazionale dell\u2019Umbria in Perugia",
"Cities":"Roma",
"Publisher":"Libreria dello Stato",
"Years":1932,
"Fund":"BTB Segn. 2354",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":594.0,
"Authors":"Cecco d\u2019Ascoli (Francesco Stabili)",
"Title":"L\u2019Acerba",
"Cities":"Lanciano",
"Publisher":"Carabba",
"Years":1926,
"Fund":"BTB Segn. 298",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":595.0,
"Authors":"\u010cechov, Anton Pavlovi\u010d",
"Title":"Caccia tragica",
"Cities":"Milano",
"Publisher":"Rizzoli",
"Years":1941,
"Fund":"BTB Segn. 1356",
"Segni":null,
"Category":"RL"
},{
"Unnamed: 0":596.0,
"Authors":"\u010cechov, Anton Pavlovi\u010d",
"Title":"La camera n. 6",
"Cities":"Torino",
"Publisher":"Slavia",
"Years":1929,
"Fund":"BTB Segn. 1357",
"Segni":null,
"Category":"RL"
},{
"Unnamed: 0":597.0,
"Authors":"\u010cechov, Anton Pavlovi\u010d",
"Title":"La casa sul mezzanino",
"Cities":"Torino",
"Publisher":"Slavia",
"Years":1932,
"Fund":"BTB",
"Segni":null,
"Category":"RL"
},{
"Unnamed: 0":598.0,
"Authors":"\u010cechov, Anton Pavlovi\u010d",
"Title":" Cechov",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1942,
"Fund":"BTB Segn. 1355",
"Segni":null,
"Category":"RL"
},{
"Unnamed: 0":599.0,
"Authors":"\u010cechov, Anton Pavlovi\u010d",
"Title":"Un delitto. Racconti",
"Cities":"Torino",
"Publisher":"Slavia",
"Years":1934,
"Fund":null,
"Segni":null,
"Category":"RL"
},{
"Unnamed: 0":600.0,
"Authors":"\u010cechov, Anton Pavlovi\u010d",
"Title":"Il fiammifero svedese",
"Cities":"Milano",
"Publisher":"Rizzoli",
"Years":1952,
"Fund":"BTB Segn. 1361 bis",
"Segni":null,
"Category":"RL"
},{
"Unnamed: 0":601.0,
"Authors":"\u010cechov, Anton Pavlovi\u010d",
"Title":"Romanzi brevi",
"Cities":"Milano-Roma",
"Publisher":"Treves-Treccani-Tumminelli",
"Years":1932,
"Fund":"BTB Segn. 1361 ter",
"Segni":null,
"Category":"RL"
},{
"Unnamed: 0":602.0,
"Authors":"\u010cechov, Anton Pavlovi\u010d",
"Title":"La steppa e altri racconti",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1966,
"Fund":"BAL",
"Segni":null,
"Category":"RL"
},{
"Unnamed: 0":603.0,
"Authors":"\u010cechov, Anton Pavlovi\u010d",
"Title":"Teatro",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":"s.d.",
"Fund":"BTB Segn. 1356 bis",
"Segni":null,
"Category":"RL"
},{
"Unnamed: 0":604.0,
"Authors":"\u010cechov, Anton Pavlovi\u010d",
"Title":"Tre anni",
"Cities":"Milano-Roma",
"Publisher":"Jandi Sapi",
"Years":1944,
"Fund":"BTB Segn. 1356 ter",
"Segni":null,
"Category":"RL"
},{
"Unnamed: 0":605.0,
"Authors":"\u010cechov, Anton Pavlovi\u010d",
"Title":"Le tre sorelle",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1943,
"Fund":"BTB Segn. 1355 ter",
"Segni":"Intonso.",
"Category":"RL"
},{
"Unnamed: 0":606.0,
"Authors":"\u010cechov, Anton Pavlovi\u010d",
"Title":"Tre sorelle",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1953,
"Fund":"BTB Segn. 1355 bis",
"Segni":"Intonso.",
"Category":"RL"
},{
"Unnamed: 0":607.0,
"Authors":"Not found",
"Title":"Celebrazioni di Torquato Tasso, Ferrara, 26 giugno-4 luglio, 11 settembre-10 ottobre 1954",
"Cities":"Ferrara",
"Publisher":"Tip. Padana",
"Years":1954,
"Fund":"BTB Segn. 775",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":608.0,
"Authors":"Celli, Teodoro",
"Title":"Manuale pratico dell\u2019impiegatodi banca. Le operazioni commerciali, le operazioni accessorie,l\u2019organizzazione",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1930,
"Fund":"BTB Segn. 2033",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":609.0,
"Authors":"Cellini, Benvenuto",
"Title":"La vita",
"Cities":"Milano",
"Publisher":"Istituto Editoriale Italiano",
"Years":"s.d.",
"Fund":"BTB Segn. 301",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":610.0,
"Authors":"Cellini, Benvenuto",
"Title":"La vita",
"Cities":"Milano",
"Publisher":"Carrara",
"Years":1910,
"Fund":"BTB Segn. 299",
"Segni":"Nota di possesso autografata in data12.10.1941.",
"Category":"IL"
},{
"Unnamed: 0":611.0,
"Authors":"Cellini, Benvenuto",
"Title":"La vita",
"Cities":"Firenze",
"Publisher":"Rinascimento del Libro",
"Years":1937,
"Fund":"BTB Segn. 300",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":612.0,
"Authors":"Cellini, Benvenuto",
"Title":"La vita: prefazione",
"Cities":"Milano",
"Publisher":"Club del Libro",
"Years":1959,
"Fund":"BTB Segn. 301",
"Segni":"Parzialmente intonso.",
"Category":"IL"
},{
"Unnamed: 0":613.0,
"Authors":"Celotti, Temistocle",
"Title":"Storia di Spagna",
"Cities":"Torino",
"Publisher":"UTET",
"Years":1940,
"Fund":"BTB Segn. 1586",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":614.0,
"Authors":"Cendras, Blaise",
"Title":"La mano mozza",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1967,
"Fund":"BAL",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":615.0,
"Authors":"Cernezzi, Luigi",
"Title":"I cinquant\u2019anni del Circolo Filologico Milanese 1872-1922",
"Cities":"Milano",
"Publisher":"Modrano",
"Years":1922,
"Fund":"BTB Segn. Op. 91",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":616.0,
"Authors":"Ceronetti, Guido",
"Title":"Aquilegia",
"Cities":"Azzate",
"Publisher":"Rusconi",
"Years":1973,
"Fund":"BAL",
"Segni":"Biglietto e due fogli dattiloscritti inseriti.",
"Category":"IL"
},{
"Unnamed: 0":617.0,
"Authors":"Cervantes Saavedra, Miguel de",
"Title":"Don Chisciotte",
"Cities":"Sesto San Giovanni",
"Publisher":"Barion",
"Years":1929,
"Fund":null,
"Segni":null,
"Category":"SL"
},{
"Unnamed: 0":618.0,
"Authors":"Cervantes Saavedra, Miguel de",
"Title":"Don Chisciotte",
"Cities":"Sesto San Giovanni",
"Publisher":"Barion",
"Years":1938,
"Fund":"BTB Segn. 910-911",
"Segni":"Parzialmente intonso.",
"Category":"SL"
},{
"Unnamed: 0":619.0,
"Authors":"Cervantes Saavedra, Miguel de",
"Title":"Don Chisciotte",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1942,
"Fund":"BAL",
"Segni":"Appunti su foglietto nel vol. 2",
"Category":"SL"
},{
"Unnamed: 0":620.0,
"Authors":"Cervantes Saavedra, Miguel de",
"Title":"El ingenioso hidalgo Don Quijote de la Mancha",
"Cities":"Madrid",
"Publisher":"Francisco de Mellado",
"Years":1844,
"Fund":"BTB Segn. 909",
"Segni":null,
"Category":"SL"
},{
"Unnamed: 0":621.0,
"Authors":"Cervantes Saavedra, Miguel de",
"Title":" El ingenioso hidalgo Don Quijote de la Mancha",
"Cities":"Madrid",
"Publisher":" Espasa-Calpe",
"Years":1941,
"Fund":"BTB Segn. 912",
"Segni":null,
"Category":"SL"
},{
"Unnamed: 0":622.0,
"Authors":"Cervantes Saavedra, Miguel de",
"Title":"Novelas ejemplares",
"Cities":"Madrid",
"Publisher":"Espasa Calpe",
"Years":1933,
"Fund":"BAL",
"Segni":null,
"Category":"SL"
},{
"Unnamed: 0":623.0,
"Authors":"Cervantes Saavedra, Miguel de",
"Title":"Novelas ejemplares",
"Cities":"Madrid",
"Publisher":"Espasa Calpe",
"Years":1938,
"Fund":"BTB Segn. 913",
"Segni":"Parzialmente intonso.",
"Category":"SL"
},{
"Unnamed: 0":624.0,
"Authors":"Cesare, Caio Giulio",
"Title":"I commentarii: De bello gallico",
"Cities":"Torino",
"Publisher":"Loescher",
"Years":1890,
"Fund":null,
"Segni":null,
"Category":"CL "
},{
"Unnamed: 0":625.0,
"Authors":"Cesare, Caio Giulio",
"Title":"I commentarii: De bello civili",
"Cities":"Torino",
"Publisher":"Loescher",
"Years":1888,
"Fund":null,
"Segni":null,
"Category":"CL "
},{
"Unnamed: 0":626.0,
"Authors":"Cesare, Caio Giulio",
"Title":"Le Memorie sulla guerra di Gallia: Libri II e III",
"Cities":"Milano-Roma-Napoli",
"Publisher":"Dante Alighieri",
"Years":1925,
"Fund":"BTB Segn. 29",
"Segni":"Postille.",
"Category":"CL "
},{
"Unnamed: 0":627.0,
"Authors":"Chamberlin, William Henry",
"Title":"Storia della rivoluzione russa",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1941,
"Fund":"BTB Segn. 1730-1731",
"Segni":"Volume 2 intonso.",
"Category":"S"
},{
"Unnamed: 0":628.0,
"Authors":"Chamfort, Nicolas de",
"Title":"Caratteri e aneddoti: Dialoghetti filosofici. Xilografie di Parigi",
"Cities":"Roma  ",
"Publisher":"Form\u00ecggini",
"Years":1924,
"Fund":"BTB Segn. 972",
"Segni":"Parzialmente intonso.",
"Category":"F "
},{
"Unnamed: 0":629.0,
"Authors":"Not found",
"Title":"La Chanson de Roland",
"Cities":"Tours",
"Publisher":"Maison Alfred Mame et fils",
"Years":1887,
"Fund":"BTB Segn. 973",
"Segni":"Sottolineature e postille.",
"Category":"FL"
},{
"Unnamed: 0":630.0,
"Authors":"Not found",
"Title":"Charcot",
"Cities":"Firenze",
"Publisher":"Bemporad",
"Years":1932,
"Fund":"BTB Segn. 1510",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":631.0,
"Authors":"Charteris, Leslie",
"Title":"Vendetta per il santo",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1968,
"Fund":"BAL",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":632.0,
"Authors":"Chartrou, Jos\u00e8phe",
"Title":"La r\u00e9forme et les guerres de religion",
"Cities":"Paris",
"Publisher":"Colin",
"Years":1948,
"Fund":"BTB Segn. 1732",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":633.0,
"Authors":"Chateaubriand, Fran\u00e7ois Ren\u00e9 de",
"Title":"Atala",
"Cities":"Milano",
"Publisher":"Martello",
"Years":1945,
"Fund":"BTB Segn. 975 e BAL",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":634.0,
"Authors":"Chateaubriand, Fran\u00e7ois Ren\u00e9 de",
"Title":"Memoires d\u2019outretombe",
"Cities":"Paris",
"Publisher":"Biblioth\u00e8que de la Pl\u00e9iade",
"Years":1948,
"Fund":"BAL",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":635.0,
"Authors":"Chateaubriand, Fran\u00e7ois Ren\u00e9 de",
"Title":"Vita di Ranc\u00e9",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1942,
"Fund":"BTB Segn. 976",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":636.0,
"Authors":"Checchi, Eugenio",
"Title":"L\u2019Italia dal 1861 ad oggi \u2013 narrazione storica per giovani",
"Cities":"Milano",
"Publisher":"Carrara Paolo",
"Years":1888,
"Fund":"BAL",
"Segni":"Nota di possesso di Adele Gadda Lehr.",
"Category":"S"
},{
"Unnamed: 0":637.0,
"Authors":"Chesterton, Gilbert Keith",
"Title":"George Bernard Shaw",
"Cities":"Bari",
"Publisher":"Leonardo da Vinci",
"Years":"s.d.",
"Fund":"BTB Segn. 1342",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":638.0,
"Authors":"Chesterton, Gilbert Keith",
"Title":"Piccola storia d\u2019Inghilterra",
"Cities":"Roma",
"Publisher":"Atlantica",
"Years":1945,
"Fund":"BTB Segn. 1713",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":639.0,
"Authors":"Chevalley Abel \u2013 Chevalley Marguerite",
"Title":"The Coincise Oxford French dictionary",
"Cities":"Oxford",
"Publisher":"Oxford University Press",
"Years":1934,
"Fund":"BAL",
"Segni":null,
"Category":"D"
},{
"Unnamed: 0":640.0,
"Authors":"Chiappini, Filippo",
"Title":"Vocabolario romanesco",
"Cities":"Roma",
"Publisher":"Leonardo da Vinci",
"Years":1945,
"Fund":null,
"Segni":null,
"Category":"D"
},{
"Unnamed: 0":641.0,
"Authors":"Chiara, Piero",
"Title":"Dolore del tempo",
"Cities":"Padova",
"Publisher":"Rebellato",
"Years":1959,
"Fund":"BTB Segn. 302",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":642.0,
"Authors":"Chiara, Piero",
"Title":"Il pretore di Cuvio",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1973,
"Fund":"BTB Segn. 303",
"Segni":"Dedica dell\u2019autore in data 4.5.1973.",
"Category":"IL"
},{
"Unnamed: 0":643.0,
"Authors":"Chiarini, Giuseppe",
"Title":"Memorie della vita di Giosu\u00e8 Carducci (1835-1907) raccolte da un amico",
"Cities":"Firenze",
"Publisher":"Barbera",
"Years":1907,
"Fund":"BTB Segn. 776",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":644.0,
"Authors":"Chiarini, Giuseppe",
"Title":"La vita di Ugo Foscolo. Premessi alcuni cenni su Giuseppe Chiarini da G. Mazzoni",
"Cities":"Firenze",
"Publisher":"Barbera",
"Years":1910,
"Fund":"BTB Segn. 777",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":645.0,
"Authors":"Chierici, Gino",
"Title":"Guida della Certosa di Pavia",
"Cities":"Roma",
"Publisher":"Colombo",
"Years":1950,
"Fund":"BTB Segn. 2355",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":646.0,
"Authors":"Chiesura, Giorgio",
"Title":"La zona immobile",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1969,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore in data 5.1969.",
"Category":"IL"
},{
"Unnamed: 0":647.0,
"Authors":"Chilanti, Felice",
"Title":"La paura entusiasmante",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1971,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore in data 5.1971.",
"Category":"IL"
},{
"Unnamed: 0":648.0,
"Authors":"Chiocchio, Anton Angelo",
"Title":"Canto secco per gli undici mesidell\u2019anno",
"Cities":"Roma",
"Publisher":"Ferri",
"Years":"s.d.",
"Fund":"BTB Segn. 304",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":649.0,
"Authors":"Chiocchio, Anton Angelo",
"Title":"Poesia post-modernista in Brasile",
"Cities":"Roma",
"Publisher":"Editore dell\u2019Arco",
"Years":"s.d.",
"Fund":null,
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":650.0,
"Authors":"Chopin, Jean-Marie",
"Title":"Russia",
"Cities":"Venezia",
"Publisher":"Antonelli",
"Years":1842,
"Fund":"BTB Segn. 2356-2357",
"Segni":"Nota di possesso autografa di Adele Gadda Lehr.",
"Category":"G"
},{
"Unnamed: 0":651.0,
"Authors":"Cialente, Fausta",
"Title":"Un inverno freddissimo",
"Cities":"Milano",
"Publisher":"Feltrinelli",
"Years":1966,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autrice in data 4.1966.",
"Category":"L"
},{
"Unnamed: 0":652.0,
"Authors":"Cialfi, Mario",
"Title":"Tempo di Grecia",
"Cities":"Venezia",
"Publisher":"NeriPozza",
"Years":1955,
"Fund":"BTB Segn. 1452",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":653.0,
"Authors":"Ciarrocchi, Arnoldo \u2013 Zuaglia, Carlo \u2013 Stradore, Giovanni",
"Title":"Catalogo della mostra. Galleria Passeggiata di Ripetta. 16-31\ngennaio",
"Cities":null,
"Publisher":null,
"Years":null,
"Fund":"BTB Segn. Op. 94",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":654.0,
"Authors":"Ciccarelli, Salvatore",
"Title":"Trattato di prosodia e metrologia latina",
"Cities":"Napoli",
"Publisher":"Morano",
"Years":1878,
"Fund":null,
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":655.0,
"Authors":"Cicerone, Marco Tullio",
"Title":"Correspondance",
"Cities":"Paris",
"Publisher":"Les Belles Lettres",
"Years":1940,
"Fund":"BTB Segn. 90-92",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":656.0,
"Authors":"Cicerone, Marco Tullio",
"Title":"De Officiis ad Marcum filium Liber Primus",
"Cities":"Verona",
"Publisher":"Tedeschi",
"Years":1896,
"Fund":"BTB Segn. 37",
"Segni":"Postille.",
"Category":"CL"
},{
"Unnamed: 0":657.0,
"Authors":"Cicerone, Marco Tullio",
"Title":"De officiis",
"Cities":"Napoli",
"Publisher":"L. Ciurazzi",
"Years":1912,
"Fund":null,
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":658.0,
"Authors":"Cicerone, Marco Tullio",
"Title":"De Oratore Libri Tres: Liber Secundus",
"Cities":"Torino-Roma-Milano-Firenze-Napoli",
"Publisher":"Paravia",
"Years":1900,
"Fund":"BTB Segn. 39",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":659.0,
"Authors":"Cicerone, Marco Tullio",
"Title":"Discorso in difesa di Lucio Murena reo di broglio",
"Cities":"Torino",
"Publisher":"Loescher",
"Years":1891,
"Fund":"BTB Segn. 38",
"Segni":"Nota di possesso autografa.",
"Category":"CL"
},{
"Unnamed: 0":660.0,
"Authors":"Cicerone, Marco Tullio",
"Title":"Discours: Tome 2\u00e8me: Pour M. Tullius: Discours contre Q. Caecilius, dit \u00abLa divination\u00bb: Premi\u00e8re action contre C. Verr\u00e8s, Livre premier: La Pr\u00e9ture urbaine",
"Cities":"Paris",
"Publisher":"Les Belles Lettres",
"Years":1938,
"Fund":"BTB Segn. 93",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":661.0,
"Authors":"Cicerone, Marco Tullio",
"Title":"Discours: Tome 3\u00e8me: Seconde action contre Verr\u00e8s, Livre second: La Pr\u00e9ture de Sicile",
"Cities":"Paris",
"Publisher":"Les Belles Lettres",
"Years":1938,
"Fund":"BTB Segn. 94",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":662.0,
"Authors":"Cicerone, Marco Tullio",
"Title":"Discours: Tome 4\u00e8me: Seconde actioncontre Verr\u00e8s, Livre troisi\u00e8me: Le froment",
"Cities":"Paris",
"Publisher":"Les Belles Lettres",
"Years":1945,
"Fund":"BTB Segn. 95",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":663.0,
"Authors":"Cicerone, Marco Tullio",
"Title":" Discours: Tome 5\u00e8me: Seconde action contre Verr\u00e8s, Livre IVe: Les oeuvres d\u2019art",
"Cities":"Paris",
"Publisher":"Les Belles Lettres",
"Years":1927,
"Fund":"BTB Segn. 96",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":664.0,
"Authors":"Cicerone, Marco Tullio",
"Title":" Discours: Tome 6\u00e8me: Seconde action contre Verr\u00e8s, Livre Ve: Les supplices",
"Cities":"Paris",
"Publisher":"Les Belles Lettres",
"Years":1929,
"Fund":"BTB Segn. 97",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":665.0,
"Authors":"Cicerone, Marco Tullio",
"Title":"Discours: Tome 7\u00e8me: \u00abPour M. Fonteius\u00bb: \u00abPour A. C\u00e9cina\u00bb: Sur les pouvoirs de Pomp\u00e9e",
"Cities":"Paris",
"Publisher":"Les Belles Lettres",
"Years":1929,
"Fund":"BTB Segn. 98",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":666.0,
"Authors":"Cicerone, Marco Tullio",
"Title":"Discours: Tome 10\u00e8me: Catilinaires",
"Cities":"Paris",
"Publisher":"Les Belles Lettres",
"Years":1945,
"Fund":"BTB Segn. 99",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":667.0,
"Authors":"Cicerone, Marco Tullio",
"Title":"Due accuse di omicidio (I processi di Celio e di Milone)",
"Cities":"Milano",
"Publisher":"Rizzoli",
"Years":1951,
"Fund":"BTB Segn. 34",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":668.0,
"Authors":"Cicerone, Marco Tullio",
"Title":"Il trattato intorno ai doveri: Libro primo",
"Cities":"Milano-Roma-Napoli",
"Publisher":"Dante Alighieri",
"Years":1923,
"Fund":"BTB Segn. 40",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":669.0,
"Authors":"Cicerone, Marco Tullio",
"Title":"I tre libri De Officiis",
"Cities":"Torino",
"Publisher":"Chiantore",
"Years":1923,
"Fund":"BTB Segn. 35",
"Segni":"Postille.",
"Category":"CL"
},{
"Unnamed: 0":670.0,
"Authors":"Cicerone, Marco Tullio",
"Title":"Le tre orazioni dette dinanzi a Cesare per M. Marcello, Q. Ligario e il re Dejotaro",
"Cities":"Milano",
"Publisher":"Fanfani",
"Years":1832,
"Fund":"BTB Segn. 41",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":671.0,
"Authors":"Cicerone, Marco Tullio",
"Title":"Gli ufficj: Libri tre. Bandiera",
"Cities":"Napoli",
"Publisher":"Chiurazzi",
"Years":1912,
"Fund":"BTB Segn. 36",
"Segni":"Parzialmente intonso. Postille.",
"Category":"CL"
},{
"Unnamed: 0":672.0,
"Authors":"Cinquini, Adolfo",
"Title":"Andocidis de codicibus qui in Bibliotheca Ambrosiana existant",
"Cities":"s.l.",
"Publisher":"Pirola",
"Years":1886,
"Fund":"BTB Segn. Op. 79",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":673.0,
"Authors":"Cioffi, Ren\u00e9 M.",
"Title":"Ti amo, eppure vivo",
"Cities":"Milano",
"Publisher":"Schwarz",
"Years":1955,
"Fund":"BTB Segn. 305",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":674.0,
"Authors":"Cirese, Alberto Mario",
"Title":"Saggi della cultura meridionale. I. Gli studi di tradizioni popolari nel Molise. Profilo storico e saggio di bibliografia",
"Cities":"Roma",
"Publisher":"De Luca",
"Years":1955,
"Fund":"BTB Segn. 2157",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":675.0,
"Authors":"Citati, Piero",
"Title":"Goethe",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1970,
"Fund":"BTB Segn. 1223",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":676.0,
"Authors":"Citati, Piero",
"Title":"La poesia e il caso",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":"s.d.",
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":677.0,
"Authors":"Citati, Piero",
"Title":"Il t\u00e8 del cappellaio matto",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1972,
"Fund":"BTB Segn. 778",
"Segni":"Dedica dell\u2019autore",
"Category":"L"
},{
"Unnamed: 0":678.0,
"Authors":"Clark, Alan",
"Title":"Operazione Barbarossa. Il conflittorusso-tedesco 1941-45",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1966,
"Fund":"BTB Segn. 1733",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":679.0,
"Authors":"Clerici, Fabrizio",
"Title":"Allegorie dei sensi di Jan Brueghel",
"Cities":"Firenze",
"Publisher":"Electa",
"Years":1946,
"Fund":"BAL",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":680.0,
"Authors":"Not found",
"Title":"Club delle fattorie",
"Cities":"s.l.",
"Publisher":"s.e.",
"Years":"s.d.",
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":681.0,
"Authors":"Cobban, Alfred",
"Title":"Storia della Francia da 1715 al 1965",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1966,
"Fund":"BTB Segn. 1604",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":682.0,
"Authors":"Coccia, Alfio",
"Title":"Profilo di ignoto",
"Cities":null,
"Publisher":"Cenacolo Artisti Cattolici",
"Years":1950,
"Fund":"BAL",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":683.0,
"Authors":"Not found",
"Title":"La cokeria di San Giuseppe di Cairo nell\u2019anno della sua inaugurazione 1936",
"Cities":"Torino",
"Publisher":"Cokitalia",
"Years":1937,
"Fund":"BTB Segn. 2109",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":684.0,
"Authors":"Coleridge, Samuel Taylor",
"Title":"La ballata del vecchio marinaio",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1964,
"Fund":"BTB Segn. 1244",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":685.0,
"Authors":"Colerus, Egmont",
"Title":"Piccola storia della matematica. Da Pitagora a Hilbert",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1939,
"Fund":"BTB Segn. 2115",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":686.0,
"Authors":"Collins, William Wilkie",
"Title":"The Moonstone",
"Cities":"London",
"Publisher":"Longmans",
"Years":1953,
"Fund":"BTB Segn. 1245",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":687.0,
"Authors":"Collodi, Carlo",
"Title":"Le avventure di Pinocchio: storia di un burattino",
"Cities":"Firenze",
"Publisher":"Salani",
"Years":1942,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":688.0,
"Authors":"Colombi Guidotti, Mario",
"Title":"Impazienza",
"Cities":"Parma",
"Publisher":"Il Raccoglitore",
"Years":1952,
"Fund":"BTB Segn. 306",
"Segni":"Intonso.",
"Category":"IL"
},{
"Unnamed: 0":689.0,
"Authors":"Colombo, Cristoforo",
"Title":"Giornale di bordo di Cristoforo Colombo 1492-93",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1939,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":690.0,
"Authors":"Colombo, Giuseppe",
"Title":"Manuale dell\u2019ingegnere civile e industriale",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1916,
"Fund":"BTB Segn. 2057",
"Segni":"Nota di possesso autografa in data 07.1920 Milano. Postille.",
"Category":"T"
},{
"Unnamed: 0":691.0,
"Authors":"Colombo, Giuseppe",
"Title":"Le scienze fisiche e le loro applicazioni nel cinquantennio 1865- 1915",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1916,
"Fund":"BTB Segn. 2117",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":692.0,
"Authors":"Not found",
"Title":"La colonizzazione del latifondo siciliano: documenti fotografici leggi e decreti",
"Cities":"Roma",
"Publisher":"Ministero dell\u2019Agricoltura e delle Foreste",
"Years":1940,
"Fund":"BTB Segn. 2379",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":693.0,
"Authors":"Comas, Juan",
"Title":"Antologia de el Escorial",
"Cities":"s.l.",
"Publisher":"Nebrija",
"Years":1946,
"Fund":"BTB Segn. 2352",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":694.0,
"Authors":"Comisso, Giovanni",
"Title":"Al vento dell\u2019Adriatico",
"Cities":"Torino",
"Publisher":"Ribet",
"Years":1928,
"Fund":"BTB Segn. 308",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":695.0,
"Authors":"Comisso, Giovanni",
"Title":"Capriccio e illusione",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1947,
"Fund":null,
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":696.0,
"Authors":"Comisso, Giovanni",
"Title":"L\u2019italiano errante per l\u2019Italia",
"Cities":"Firenze",
"Publisher":"Parenti",
"Years":1937,
"Fund":"BTB Segn. 307",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":697.0,
"Authors":"Not found",
"Title":"Commedia dell\u2019arte. Canovacci della gloriosa Commedia dell\u2019Arte italiana",
"Cities":"Torino",
"Publisher":"SET-Il Dramma",
"Years":1943,
"Fund":"BTB Segn. 766",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":698.0,
"Authors":"Not found",
"Title":"Commemorazione di Gaetano Negri tenuta dai licenziandi del R. Liceo Beccaria il 30 maggio 1912",
"Cities":"Milano",
"Publisher":"Tipolitografia di Rebeschini",
"Years":1912,
"Fund":"BAL",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":699.0,
"Authors":"Compagni, Dino",
"Title":"La Cronica e passi scelti dalla \u00abCronaca\u00bb di Giovanni Villani",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1941,
"Fund":"BTB Segn. 309",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":700.0,
"Authors":"Not found",
"Title":"Compendiaria graecae grammatices institutio",
"Cities":"Torino",
"Publisher":"Marietti",
"Years":1843,
"Fund":"BTB Segn. 2426",
"Segni":"Parzialmente intonso.",
"Category":"L"
},{
"Unnamed: 0":701.0,
"Authors":"Not found",
"Title":"Compendio della storia della casa d\u2019Austria",
"Cities":"Milano",
"Publisher":"Gnocchi",
"Years":1855,
"Fund":"BTB Segn. 1734",
"Segni":"Pieghe.",
"Category":"S"
},{
"Unnamed: 0":702.0,
"Authors":"Not found",
"Title":"A Complete Dictionary of the English Language, both with regard to Sound and Meaning: One main Object of which is, to establish a plain and permanent standard of pronunciation. To which is prefixed a Prosodial Grammar. Vol. II: J-Z",
"Cities":"London",
"Publisher":"Dilly, Law and son, Richardson, Scatcherd and Longman",
"Years":1797,
"Fund":"BTB Segn. 2507",
"Segni":"Presente solo il II volume.",
"Category":"D"
},{
"Unnamed: 0":703.0,
"Authors":"Concina, Umberto \u2013 Neppi Modona, Angelo",
"Title":"Nozioni di trigonometria sferica ad uso dei Licei Scientifici",
"Cities":"Torino",
"Publisher":"Petrini",
"Years":1925,
"Fund":"BTB Segn. 2116",
"Segni":"Nota di possesso autografa in data 2.06.1925 Milano.",
"Category":"T"
},{
"Unnamed: 0":704.0,
"Authors":"Concina, Umberto \u2013 Neppi Modona, Angelo",
"Title":"Trigonometria piana",
"Cities":"Torino",
"Publisher":"Petrini",
"Years":1925,
"Fund":"BTB Segn. 2117",
"Segni":"Nota di possesso autografa in data1925 Milano.",
"Category":"T"
},{
"Unnamed: 0":705.0,
"Authors":"Confucio",
"Title":"Studio integrale e L\u2019asse che non vacilla",
"Cities":"Milano",
"Publisher":"All\u2019insegna del Pesce d\u2019oro",
"Years":1955,
"Fund":"BTB Segn. 1403",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":706.0,
"Authors":"Not found",
"Title":"Conosci Bergamo. Invito allascoperta della provincia orobica",
"Cities":"Bergamo",
"Publisher":"Pol. Bolis",
"Years":1961,
"Fund":"BTB Segn. 2266",
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":707.0,
"Authors":"Conrad, Joseph",
"Title":"L\u2019agente segreto. Romanzo",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1953,
"Fund":"BTM",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":708.0,
"Authors":"Conrad, Joseph",
"Title":"Appunti di vita e letteratura",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1950,
"Fund":"BTB Segn. 1247",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":709.0,
"Authors":"Conrad, Joseph",
"Title":"L\u2019avventuriero",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1950,
"Fund":"BTB Segn. 1248",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":710.0,
"Authors":"Conrad, Joseph",
"Title":"Lo specchio del mare. Cronaca personale. Racconti tra terra e mare",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1954,
"Fund":"BTB Segn. 1246",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":711.0,
"Authors":"Constant, Benjamin",
"Title":"Adolfo",
"Cities":"Milano-Roma",
"Publisher":"Treves-Treccani-Tumminelli",
"Years":1932,
"Fund":"BTB Segn. 977",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":712.0,
"Authors":"Constant, Benjamin",
"Title":"Il generale Federico. Commedia-farsa",
"Cities":"Torino",
"Publisher":"ERI",
"Years":"s.d.",
"Fund":"BTB Segn. 978",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":713.0,
"Authors":"Conti, Ettore",
"Title":"Dal taccuino di un borghese",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1946,
"Fund":"BTB Segn. 310",
"Segni":"Dedica dell\u2019autore.",
"Category":"L"
},{
"Unnamed: 0":714.0,
"Authors":"Conti, Gian Carlo",
"Title":"Un mite ottobre ed altre poesie",
"Cities":"Parma",
"Publisher":"Il raccoglitore",
"Years":1952,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore in data 13.2.1956.",
"Category":"IL"
},{
"Unnamed: 0":715.0,
"Authors":"Conti, Gian Carlo",
"Title":"Il primo passeggio dopo il mare",
"Cities":"Cal tanissetta",
"Publisher":"Sciascia",
"Years":1955,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":716.0,
"Authors":"Conti, Gian Carlo",
"Title":"Il profumo di tigli",
"Cities":"Milano",
"Publisher":"Feltrinelli",
"Years":1960,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore in data 29.5.1968.",
"Category":"IL"
},{
"Unnamed: 0":717.0,
"Authors":"Conti, Giusto",
"Title":"La bella mano",
"Cities":"Lanciano",
"Publisher":"Carabba",
"Years":1916,
"Fund":"BTB Segn. 354",
"Segni":"Nota di possesso autografa di Enrico Gadda in data 06.1917.",
"Category":"IL"
},{
"Unnamed: 0":718.0,
"Authors":"Contini, Gianfranco",
"Title":"Un anno di letteratura",
"Cities":"Firenze",
"Publisher":"Le Monnier",
"Years":1942,
"Fund":"BTB Segn. 779",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":719.0,
"Authors":"Contini, Gianfranco",
"Title":"Esercizi di lettura",
"Cities":"Firenze",
"Publisher":"Parenti",
"Years":1938,
"Fund":"BTB Segn. 780",
"Segni":"Dedica dell\u2019autore. Postille.",
"Category":"IL"
},{
"Unnamed: 0":720.0,
"Authors":"Contini, Gianfranco",
"Title":"Letteratura dell\u2019Italia unita 1861- 1968",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1968,
"Fund":"BTB Segn. 781",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":721.0,
"Authors":"Contini, Gianfranco",
"Title":"Il mulino del Po e la carriera letteraria di Riccardo Bacchelli",
"Cities":"Roma",
"Publisher":"Nuova Antologia",
"Years":1940,
"Fund":"BTB Segn. Op. 78",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":722.0,
"Authors":"Contini, Gianfranco",
"Title":"Scriptor rerum francigenarum",
"Cities":"Reggio Emilia",
"Publisher":"Tipografica nazionale Magnani e Ganassi",
"Years":1933,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":723.0,
"Authors":"Contini, Gianfranco",
"Title":"Scrittori Moderni",
"Cities":"Reggio Emilia",
"Publisher":"Tipografia M.Corsi",
"Years":1933,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":724.0,
"Authors":"Contini, Gianfranco",
"Title":"Tre composizioni o la metrica di Saba \u2013 Bonsanti, o dell\u2019attivit\u00e0 pura",
"Cities":"Reggio Emilia",
"Publisher":"Treves-Treccani-Tumminelli",
"Years":1934,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":725.0,
"Authors":"Contini, Gianfranco",
"Title":"Ungaretti o dell\u2019allegria",
"Cities":"Reggio Emilia",
"Publisher":"Anonima poligrafica emiliana",
"Years":1932,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":726.0,
"Authors":"Contini, Gianfranco",
"Title":"Varianti e altra linguistica: una raccolta di saggi (1938-1968)",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1970,
"Fund":"BTB Segn. 782",
"Segni":"Parzialmente intonso.",
"Category":null
},{
"Unnamed: 0":727.0,
"Authors":"Not found",
"Title":"Contorni di Milano",
"Cities":"Milano",
"Publisher":"Vallardi",
"Years":"s.d.",
"Fund":"BTB Segn. Op. 67",
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":728.0,
"Authors":"Cordati-Martinelli, Bruna",
"Title":"Cordati Martinelli, BrunaQuando s\u2019insegna Dante",
"Cities":"Pisa",
"Publisher":"Nistri- Lischi",
"Years":1966,
"Fund":"BTB Segn. 833",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":729.0,
"Authors":"Cordi\u00e8, Carlo",
"Title":"Ideali e figure d\u2019Europa",
"Cities":"Pisa",
"Publisher":"Nistri Lischi",
"Years":1954,
"Fund":"BTB Segn. 1735",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":730.0,
"Authors":"Corneille, Pierre",
"Title":"\u0152uvres de Corneille",
"Cities":"Paris",
"Publisher":"Barba",
"Years":"s.d.",
"Fund":"BAL",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":731.0,
"Authors":"Corneille, Pierre",
"Title":"Th\u00e9\u00e2tre. Tome second",
"Cities":"Paris",
"Publisher":"Flammarion",
"Years":1912,
"Fund":"BTB Segn. 979",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":732.0,
"Authors":"Cornelio Nepote",
"Title":"Liber de excellentibus ducibus exterarum gentium",
"Cities":"Milano",
"Publisher":"Albrighi-Segati",
"Years":1902,
"Fund":"BTB Segn. 43",
"Segni":"Postille.",
"Category":"CL"
},{
"Unnamed: 0":733.0,
"Authors":"Cornelissen, Christian",
"Title":"Les hallucinations des Einsteiniens ou les erreurs de m\u00e9thode chez le physiciens-math\u00e9maticiens",
"Cities":"Paris",
"Publisher":"Blanchard",
"Years":1923,
"Fund":"BTB Segn. 2065",
"Segni":"Intonso.",
"Category":"T "
},{
"Unnamed: 0":734.0,
"Authors":"Coulon, Marcel",
"Title":"Au c\u0153ur de Verlaine et de Rimbaud. Avec des documents in\u00e9dits",
"Cities":"Paris",
"Publisher":"Le  Livre",
"Years":1925,
"Fund":"BTB Segn. 1122",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":735.0,
"Authors":"Courteline, Georges",
"Title":"Le 51e Chasseurs",
"Cities":"Paris",
"Publisher":"Flammarion",
"Years":1899,
"Fund":"BTB Segn. 980",
"Segni":"Timbro di Antonio Semenza. Parzialmente intonso.",
"Category":"FL"
},{
"Unnamed: 0":736.0,
"Authors":"Not found",
"Title":"Cremona passato e presente.",
"Cities":"Cremona",
"Publisher":"Italia Nostra",
"Years":1958,
"Fund":"BTB Segn. 2381",
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":737.0,
"Authors":"Crippa, Geo Renato",
"Title":"Il restauratore principe Mauro Pelliccioli uomo e \u00abmago\u00bb",
"Cities":"Bergamo",
"Publisher":"Stamperia Conti",
"Years":1966,
"Fund":"BTB Segn. 2225",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":738.0,
"Authors":"Not found",
"Title":"Crivelli e i Crivelleschi.",
"Cities":"Venezia",
"Publisher":"Edizioni Alfieri",
"Years":1961,
"Fund":"BAL",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":739.0,
"Authors":"Croce, Benedetto",
"Title":"Estetica come scienza dell\u2019espressione  e  Linguistica generale",
"Cities":"Bari",
"Publisher":"Laterza",
"Years":1912,
"Fund":"BTB Segn. 321",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":740.0,
"Authors":"Croce, Benedetto",
"Title":"Filosofia della pratica; Economia ed etica",
"Cities":"Bari",
"Publisher":"Laterza",
"Years":1915,
"Fund":"BTB Segn. 323",
"Segni":"Sottolineature e postille.",
"Category":"F"
},{
"Unnamed: 0":741.0,
"Authors":"Croce, Benedetto",
"Title":"La letturatura della nuova Italia.Saggi critici",
"Cities":"Bari",
"Publisher":"Laterza",
"Years":1942,
"Fund":"BTB Segn. 312-317",
"Segni":"Intonsi i volumi 4 e 6.",
"Category":"F"
},{
"Unnamed: 0":742.0,
"Authors":"Croce, Benedetto",
"Title":"La logica come scienza del concetto puro",
"Cities":"Bari",
"Publisher":"Laterza",
"Years":1920,
"Fund":"BTB Segn. 322",
"Segni":"Sottolineature.",
"Category":"F"
},{
"Unnamed: 0":743.0,
"Authors":"Croce, Benedetto",
"Title":"Ludovico Ariosto",
"Cities":"Bari",
"Publisher":"Laterza",
"Years":1927,
"Fund":"BTB Segn. 311",
"Segni":"Nota di possesso autografa.",
"Category":"F"
},{
"Unnamed: 0":744.0,
"Authors":"Croce, Benedetto",
"Title":"Per la storia del Comunismo in quanto realt\u00e0 politica. In appendice: La \u00abterza via\u00bb",
"Cities":"Bari",
"Publisher":"Laterza",
"Years":1943,
"Fund":"BTB Segn. 327",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":745.0,
"Authors":"Croce, Benedetto",
"Title":"Perch\u00e9 non possiamo non dirci \u00abcristiani\u00bb",
"Cities":"Bari",
"Publisher":"Laterza",
"Years":1943,
"Fund":"BTB Segn. 326",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":746.0,
"Authors":"Croce, Benedetto",
"Title":"Saggio sullo Hegel seguito da altri scritti di storia della filosofia",
"Cities":"Bari",
"Publisher":"Laterza",
"Years":1913,
"Fund":"BTB Segn. 325",
"Segni":"Sottolineature e postille.",
"Category":"F"
},{
"Unnamed: 0":747.0,
"Authors":"Croce, Benedetto",
"Title":"Storia d\u2019Europa nel secolo decimonono",
"Cities":"Bari",
"Publisher":"Laterza",
"Years":1948,
"Fund":"BTB Segn. 320",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":748.0,
"Authors":"Croce, Benedetto",
"Title":"Storia del Regno di Napoli",
"Cities":"Bari",
"Publisher":"Laterza",
"Years":1931,
"Fund":"BTB Segn. 318",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":749.0,
"Authors":"Croce, Benedetto",
"Title":"Storia d\u2019Italia dal 1871 al 1915.",
"Cities":"Bari",
"Publisher":"Laterza",
"Years":1947,
"Fund":"BTB Segn. 319",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":750.0,
"Authors":"Croce, Benedetto",
"Title":"Teoria e storia della storiografia",
"Cities":"Bari",
"Publisher":"Laterza",
"Years":1920,
"Fund":"BTB Segn. 324",
"Segni":"Sottolineature.",
"Category":"F"
},{
"Unnamed: 0":751.0,
"Authors":"Croce, Elena",
"Title":"L\u2019infanzia dorata",
"Cities":"Milano",
"Publisher":"Adelphi",
"Years":1966,
"Fund":"BTB Segn. 328",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":752.0,
"Authors":"Crofts, Freeman Wills",
"Title":"L\u2019incendio nella brughiera",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1932,
"Fund":"BTB Segn. 1249",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":753.0,
"Authors":"Not found",
"Title":"Cronica de las jornadas de lengua y literatura hispanoamericana",
"Cities":"Salamanca",
"Publisher":"Universidad de Salamanca",
"Years":1954,
"Fund":"BTB Segn. Op. 61",
"Segni":null,
"Category":"S "
},{
"Unnamed: 0":754.0,
"Authors":"Cronin, Archibald Joseph",
"Title":"Gli anni che contano",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1954,
"Fund":"BAL",
"Segni":"Postille.",
"Category":"L"
},{
"Unnamed: 0":755.0,
"Authors":"Not found",
"Title":"Cronisti del Trecento",
"Cities":"Milano-Roma",
"Publisher":"Rizzoli",
"Years":1935,
"Fund":"BTB Segn. 329",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":756.0,
"Authors":"Croome, Honor Ren\u00e9e \u2013 Hammond, Richard James",
"Title":"Storia economica d\u2019Inghilterra",
"Cities":"Milano",
"Publisher":"Longanesi",
"Years":1951,
"Fund":"BTB Segn. 1714",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":757.0,
"Authors":"Not found",
"Title":"La cucina degli stomachi deboli",
"Cities":"Milano",
"Publisher":"Longanesi",
"Years":1893,
"Fund":"BAL",
"Segni":"Foglietto incollato a p. 12 e nota dipossesso in data 1893.",
"Category":"L"
},{
"Unnamed: 0":758.0,
"Authors":"Not found",
"Title":"Cultura e societ\u00e0",
"Cities":"Roma",
"Publisher":"Associazione italiana per la libert\u00e0 della cultura",
"Years":1958,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":759.0,
"Authors":"Not found",
"Title":"La cultura figurativa e la stampa d\u2019arte ai nostri giorni.",
"Cities":"Roma",
"Publisher":"Associazione italiana per la libert\u00e0 dellacultura",
"Years":1935,
"Fund":null,
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":760.0,
"Authors":"Curetti, Adriano",
"Title":"Gli alberi non vogliono morire",
"Cities":"Bologna",
"Publisher":"Cappelli",
"Years":1960,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore in data 2.1964.",
"Category":"IL"
},{
"Unnamed: 0":761.0,
"Authors":"Curotto, Ernesto",
"Title":"Dizionarietto geografico dantesco",
"Cities":"Genova",
"Publisher":"Stabilimento artigrafiche Caimo e C.",
"Years":1922,
"Fund":"BAL",
"Segni":"D",
"Category":"D"
},{
"Unnamed: 0":762.0,
"Authors":"Da Costa Andrade \u2013 Edward Neville",
"Title":"Isaac Newton. La vita e le opere",
"Cities":"Bologna",
"Publisher":"Zanichelli",
"Years":1965,
"Fund":"BTB Segn. 2073",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":763.0,
"Authors":"Daiches, David",
"Title":"Storia della letteratura inglese",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1970,
"Fund":"BTB Segn. 1337-1338",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":764.0,
"Authors":"Dalbono, Claudio Tito",
"Title":"Guida di Napoli e dintorni",
"Cities":"Napoli",
"Publisher":"Morano",
"Years":1883,
"Fund":null,
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":765.0,
"Authors":"D\u2019Alicandro, Giuseppe Maria",
"Title":"Cesare Battisti nel mio ricordo fanciullo",
"Cities":"Milano",
"Publisher":"Mediolanum",
"Years":1928,
"Fund":"BTB Segn. Op. 77",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":766.0,
"Authors":"D\u2019Amato, Ferdinando",
"Title":"Il pensiero di Enrico Bergson",
"Cities":"s.l",
"Publisher":"Il Solco",
"Years":1921,
"Fund":"BTB Segn. 1938",
"Segni":"Parzialmente intonso.",
"Category":"F"
},{
"Unnamed: 0":767.0,
"Authors":"D\u2019Ancona, Alessandro \u2013 Bacci, Orazio",
"Title":"Manuale della letteratura italiana",
"Cities":"Firenze",
"Publisher":"Barbera",
"Years":1913,
"Fund":"BTB Segn. 783-787",
"Segni":"Sottolineature e postille.",
"Category":"IL"
},{
"Unnamed: 0":768.0,
"Authors":"D\u2019Ancona, Paolo",
"Title":" La mostra di Vincenzo VanGogh",
"Cities":null,
"Publisher":null,
"Years":1952,
"Fund":null,
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":769.0,
"Authors":"D\u2019Andrea, Ezio",
"Title":"51 col formicone",
"Cities":"Roma",
"Publisher":"Il Quadrivio",
"Years":1972,
"Fund":"BAL",
"Segni":"Biglietto da visita dell\u2019autore con nota.",
"Category":"IL"
},{
"Unnamed: 0":770.0,
"Authors":"Dani, Franco",
"Title":"Un gran buio, ancora su Custozae sugli altri eventi militari del 1866",
"Cities":"Firenze",
"Publisher":"R. Coppini",
"Years":1966,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":771.0,
"Authors":"D\u2019Annunzio, Gabriele",
"Title":"Canto novo. Intermezzo",
"Cities":"Milano",
"Publisher":"Treves",
"Years":1912,
"Fund":null,
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":772.0,
"Authors":"D\u2019Annunzio, Gabriele",
"Title":"Il fuoco",
"Cities":"Roma",
"Publisher":"Vittoriale degli Italiani",
"Years":1942,
"Fund":"BTB Segn. 330",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":773.0,
"Authors":"D\u2019Annunzio, Gabriele",
"Title":"In morte di Giuseppe Verdi: Canzone: preceduta da un\u2019orazione ai giovani",
"Cities":"Milano",
"Publisher":"Treves",
"Years":1901,
"Fund":"BTB Segn. 332",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":774.0,
"Authors":"D\u2019Annunzio, Gabriele",
"Title":"L\u2019innocente",
"Cities":"Roma",
"Publisher":"Vittoriale degliItaliani",
"Years":1942,
"Fund":"BTB Segn. 331",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":775.0,
"Authors":"D\u2019Annunzio, Gabriele",
"Title":"Laudi del cielo del mare della terra e degli eroi. Libro primo: Maia",
"Cities":"Milano",
"Publisher":"Treves",
"Years":1910,
"Fund":null,
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":776.0,
"Authors":"D\u2019Annunzio, Gabriele",
"Title":"Laudi del cielo del mare della terrae  degli eroi: Libro quarto: Merope.Le canzoni delle gesta d\u2019oltremare",
"Cities":"Milano",
"Publisher":"Vittoriale degli Italiani",
"Years":1915,
"Fund":"BTB Segn. 334",
"Segni":"Nota di possesso autografa di EnricoGadda in data 11.1917, Cascina Malpensa.",
"Category":"IL"
},{
"Unnamed: 0":777.0,
"Authors":"D\u2019Annunzio, Gabriele",
"Title":"Laudi del cielo del mare della terra e degli eroi",
"Cities":"Roma",
"Publisher":"L\u2019Oleandro",
"Years":1934,
"Fund":"BTB Segn. 335",
"Segni":"Parzialmente intonso.",
"Category":"IL"
},{
"Unnamed: 0":778.0,
"Authors":"D\u2019Annunzio, Gabriele",
"Title":"La Leda senza cigno. Raccontoseguito da una licenza",
"Cities":"Milano",
"Publisher":"Treves",
"Years":1927,
"Fund":"BTB Segn. 336-338",
"Segni":"Intonso.",
"Category":"IL"
},{
"Unnamed: 0":779.0,
"Authors":"D\u2019Annunzio, Gabriele",
"Title":"Lettera ai Dalmati",
"Cities":"Venezia",
"Publisher":"Associazione Nazionale Trento e Trieste",
"Years":1919,
"Fund":"BTB Segn. 339",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":780.0,
"Authors":"D\u2019Annunzio, Gabriele",
"Title":"Il libro delle Vergini",
"Cities":"Como",
"Publisher":"Soc. Ed. Roma",
"Years":"s.d.",
"Fund":"BTB Segn. 340",
"Segni":"Segnalibro.",
"Category":"IL"
},{
"Unnamed: 0":781.0,
"Authors":"D\u2019Annunzio, Gabriele",
"Title":"Notturno",
"Cities":"Roma",
"Publisher":" Vittoriale degli Italiani",
"Years":1940,
"Fund":"BTB Segn. 341",
"Segni":"Parzialmente intonso.",
"Category":"IL"
},{
"Unnamed: 0":782.0,
"Authors":"D\u2019Annunzio, Gabriele",
"Title":"Novelle della Pescara",
"Cities":"Roma",
"Publisher":" Vittoriale degli Italiani",
"Years":1942,
"Fund":"BTB Segn. 342",
"Segni":"Intonso.",
"Category":"IL"
},{
"Unnamed: 0":783.0,
"Authors":"D\u2019Annunzio, Gabriele",
"Title":"Il piacere",
"Cities":"Milano",
"Publisher":"Treves",
"Years":1915,
"Fund":"BTB Segn. 344",
"Segni":"Nota di possesso autografa di Enrico Gadda in data 10.1916.",
"Category":"IL"
},{
"Unnamed: 0":784.0,
"Authors":"D\u2019Annunzio, Gabriele",
"Title":"Il piacere",
"Cities":"Roma",
"Publisher":"Vittoriale degli Italiani",
"Years":1942,
"Fund":"BTB Segn. 343",
"Segni":"Parzialmente intonso.",
"Category":"IL"
},{
"Unnamed: 0":785.0,
"Authors":"D\u2019Annunzio, Gabriele",
"Title":"  Poema paradisiaco",
"Cities":"s.l.",
"Publisher":"s.e.",
"Years":"s.d.",
"Fund":null,
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":786.0,
"Authors":"D\u2019Annunzio, Gabriele",
"Title":"Le vergini delle rocce",
"Cities":"Roma",
"Publisher":"Vittoriale degli Italiani",
"Years":1941,
"Fund":"BTB Segn. 345",
"Segni":"Intonso.",
"Category":"IL"
},{
"Unnamed: 0":787.0,
"Authors":"Da Ponte, Lorenzo",
"Title":"Don Giovanni",
"Cities":"Sesto San Giovanni",
"Publisher":"Barion",
"Years":1933,
"Fund":"BTB Segn. 1443",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":788.0,
"Authors":"Dari\u00e8s, Georges",
"Title":"M\u00e9canique, hydraulique, thermodynamique",
"Cities":"Paris",
"Publisher":"Dunod et Vicq",
"Years":1896,
"Fund":"BTB Segn. 2066",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":789.0,
"Authors":"D\u2019Arrigo, Stefano",
"Title":"Codice siciliano",
"Cities":"Milano",
"Publisher":"All\u2019insegna del pesce d\u2019oro",
"Years":1957,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":790.0,
"Authors":"D\u2019Aspro, Franco.",
"Title":"Disegni di Franco D\u2019Aspro",
"Cities":"Firenze",
"Publisher":"Edizioni Ofiria",
"Years":1953,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":791.0,
"Authors":"D\u2019Arzo, Silvio",
"Title":"Casa d\u2019altri",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1953,
"Fund":"BTB Segn. 346",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":792.0,
"Authors":"Darwin, Charles",
"Title":"L\u2019origine dell\u2019uomo e la scelta in rapporto col sesso",
"Cities":"Milano",
"Publisher":"Casa editrie  sociale",
"Years":1925,
"Fund":"BAL",
"Segni":"Nota di possesso, Ing. Carlo Emilio Gadda 14 aprile 1925.",
"Category":"T"
},{
"Unnamed: 0":793.0,
"Authors":"Daudet, Alphonse",
"Title":"Tartarino di Tarascona",
"Cities":"Milano",
"Publisher":"Bietti",
"Years":1939,
"Fund":"BTB Segn. 981",
"Segni":"Intonso.",
"Category":"L"
},{
"Unnamed: 0":794.0,
"Authors":"Dauzat, Albert",
"Title":"Dictionnaire \u00e9tymologique de la langue fran\u00e7aise",
"Cities":"Paris",
"Publisher":"Larousse",
"Years":1938,
"Fund":"BAL",
"Segni":null,
"Category":"D"
},{
"Unnamed: 0":795.0,
"Authors":"Davanzati, Bernardo",
"Title":"Le opere",
"Cities":"Firenze",
"Publisher":"Le Monnier",
"Years":1853,
"Fund":"BTB Segn. 347-348",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":796.0,
"Authors":"Da Verona, Guido",
"Title":"Il Cavaliere dello Spirito Santo. Storia di una giornata",
"Cities":"Milano",
"Publisher":"Baldini e Castoldi",
"Years":1915,
"Fund":"BTB Segn. 349",
"Segni":"Nota di possesso autografa di Enrico Gadda in data 07.1917.",
"Category":"IL"
},{
"Unnamed: 0":797.0,
"Authors":"Da Verona, Guido",
"Title":"Colei che non si deve amare",
"Cities":"Milano",
"Publisher":"Baldini e Castoldi",
"Years":1915,
"Fund":"BTB Segn. 350",
"Segni":"Nota di possesso autografa di Enrico Gadda in data 3.08.1916.",
"Category":"IL"
},{
"Unnamed: 0":798.0,
"Authors":"Da Verona, Guido",
"Title":"La vita comincia domani",
"Cities":"Milano",
"Publisher":"Baldini e Castoldi",
"Years":1913,
"Fund":"BTB Segn. 351",
"Segni":"Nota di possesso autografa di EnricoGadda in data 02.1916.",
"Category":"IL"
},{
"Unnamed: 0":799.0,
"Authors":"Davidsohn, Roberto",
"Title":"Storia di Firenze",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1910,
"Fund":"BTB Segn. 1511-1512",
"Segni":"Intonsi.",
"Category":"S"
},{
"Unnamed: 0":800.0,
"Authors":"Dawson, Christopher",
"Title":"La formazione dell\u2019unit\u00e0 europea. Dal secolo V al XI",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1939,
"Fund":"BTB Segn. 1746",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":801.0,
"Authors":"D\u2019Azeglio, Massimo",
"Title":"I miei ricordi",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1924,
"Fund":"BTB Segn. 352",
"Segni":"Parzialmente intonso.",
"Category":"L"
},{
"Unnamed: 0":802.0,
"Authors":"Deakin, Frederick William",
"Title":"Storia della Repubblica di Sal\u00f2",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1963,
"Fund":"BTB Segn. 1513",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":803.0,
"Authors":"Debenedetti, Giacomo",
"Title":"Radiorecita su Proust",
"Cities":"Roma",
"Publisher":"Macchia",
"Years":1952,
"Fund":"BTB Segn. 353",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":804.0,
"Authors":"Debenedetti, Giacomo",
"Title":"Saggi critici",
"Cities":"Firenze",
"Publisher":"Edizioni di Solaria",
"Years":1929,
"Fund":"BTB Segn. 788",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":805.0,
"Authors":"Debenedetti, Giacomo",
"Title":"Saggi critici",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1955,
"Fund":"BTB Segn. 789",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":806.0,
"Authors":"De Beranger, Pierre-Jean",
"Title":"\u0152uvres completes de Pierre-Jean de Beranger",
"Cities":"Paris",
"Publisher":"Perrotin",
"Years":1927,
"Fund":"BAL",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":807.0,
"Authors":"De Biasi, Mario \u2013 Gadda Conti, Piero",
"Title":"La Brianza",
"Cities":"Roma",
"Publisher":"Edizioni dell\u2019Automobilista",
"Years":1966,
"Fund":"BTB Segn. 2267",
"Segni":"Dedica di Piero Gadda Conti in data15.6. 1967.",
"Category":"IL"
},{
"Unnamed: 0":808.0,
"Authors":"De Di\u00e9guez, Manuel",
"Title":"Rabelais par lui-m\u00eame",
"Cities":"Paris",
"Publisher":"Seuil",
"Years":1960,
"Fund":"BAL",
"Segni":"Postille.",
"Category":"FL"
},{
"Unnamed: 0":809.0,
"Authors":"De Feo, Sandro",
"Title":"I cattivi pensieri",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1967,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore in data 3.1967.",
"Category":"IL"
},{
"Unnamed: 0":810.0,
"Authors":"De Filippis, Salvatore",
"Title":"Il Fucino ed il suo prosciugamento",
"Cities":"Citt\u00e0 di Castello",
"Publisher":"Lapi",
"Years":1893,
"Fund":"BTB Segn. Op. 82",
"Segni":"Sottolineature e postille.",
"Category":"T"
},{
"Unnamed: 0":811.0,
"Authors":"Defoe, Daniel",
"Title":"Fortune e sfortune della famosaMoll Flanders",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1938,
"Fund":"BTB Segn. 1251",
"Segni":null,
"Category":null
},{
"Unnamed: 0":812.0,
"Authors":"Defoe, Daniel",
"Title":"La peste a Londra",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1939,
"Fund":"BTB Segn. 1250",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":813.0,
"Authors":"Defoe, Daniel",
"Title":"Robinson Cruso\u00e8",
"Cities":"Milano",
"Publisher":"Rizzoli",
"Years":1950,
"Fund":"BTB Segn. 1252",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":814.0,
"Authors":"De Giorgi, Elsa",
"Title":"Un coraggio splendente",
"Cities":"Milano",
"Publisher":"Sugar",
"Years":1964,
"Fund":"BTB Segn. 355",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":815.0,
"Authors":"De Giorgi, Elsa",
"Title":"L\u2019innocenza",
"Cities":"Venezia",
"Publisher":"Sodalizio del libro",
"Years":1960,
"Fund":"BTB Segn. 356 e BAL",
"Segni":"Dedica autografa dell\u2019autrice in data 16.12.60.",
"Category":"IL"
},{
"Unnamed: 0":816.0,
"Authors":"De Giorgi, Elsa",
"Title":"Sangue + fango = logos passione",
"Cities":"Roma",
"Publisher":"Giuntoli",
"Years":1973,
"Fund":"BTB Segn. Op. 19",
"Segni":"Dedica dell\u2019autrice.",
"Category":"IL"
},{
"Unnamed: 0":817.0,
"Authors":"De Giorgi, Elsa",
"Title":"Il sole e il vampiro",
"Cities":"Citt\u00e0 di Castello",
"Publisher":"Edizioni di Opera aperta",
"Years":1969,
"Fund":"BAL",
"Segni":"Dedica autografa dell\u2019autrice in data 5.1970.",
"Category":"IL"
},{
"Unnamed: 0":818.0,
"Authors":"De Giorgi, Elsa",
"Title":"Storia di una bella donna",
"Cities":"Roma",
"Publisher":"La nuova sinistra",
"Years":1970,
"Fund":"BAL",
"Segni":"Dedica autografa dell\u2019autrice in data 5.1970.",
"Category":"IL"
},{
"Unnamed: 0":819.0,
"Authors":"De Gironcoli, Franco",
"Title":"Altris poesiis",
"Cities":"Treviso",
"Publisher":"s.e.",
"Years":1945,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":820.0,
"Authors":"De Gironcoli, Franco",
"Title":"Elegie in friulano",
"Cities":"Treviso",
"Publisher":"Edizioni di Treviso-Libreria Canova",
"Years":1951,
"Fund":"BTB Segn. 430",
"Segni":"Dedica dell\u2019autore. Intonso.",
"Category":"IL"
},{
"Unnamed: 0":821.0,
"Authors":"De Gironcoli, Franco",
"Title":"V\u00f2t poesiis",
"Cities":"Treviso",
"Publisher":"s.e.",
"Years":1944,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":822.0,
"Authors":"De La Bruy\u00e8re, Jean",
"Title":"\u0152uvres compl\u00e8tes",
"Cities":"Paris",
"Publisher":"Gallimard",
"Years":1951,
"Fund":"BAL",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":823.0,
"Authors":"De La Rochefoucauld, Fran\u00e7ois",
"Title":"\u0152uvres completes",
"Cities":"Paris",
"Publisher":"Gallimard",
"Years":1950,
"Fund":"BAL",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":824.0,
"Authors":"De Leva, Giuseppe",
"Title":"Sommario della storia dei popoli antichi",
"Cities":"Padova",
"Publisher":"Bianchi",
"Years":1855,
"Fund":"BTB Segn. 1453",
"Segni":"Nota di possesso autografa di Adele Gadda Lehr. Sottolineature e postille.",
"Category":"S"
},{
"Unnamed: 0":825.0,
"Authors":"Delfini, Antonio",
"Title":"Misa Bovetti e altre cronache",
"Cities":"Milano",
"Publisher":"All\u2019insegna del Pesce d\u2019Oro",
"Years":1960,
"Fund":"BTB Segn. 357",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":826.0,
"Authors":"Delfini, Antonio",
"Title":"Modena 1831, citt\u00e0 della Chartreuse",
"Cities":"Milano",
"Publisher":"All\u2019insegna del Pesce d\u2019Oro",
"Years":1962,
"Fund":"BTB Segn. 358",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":827.0,
"Authors":"Delfini, Antonio",
"Title":"I racconti",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1963,
"Fund":"BTB Segn. 359",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":828.0,
"Authors":"Delfini, Antonio",
"Title":"Il ricordo della Basca",
"Cities":"Firenze",
"Publisher":"Parenti",
"Years":1938,
"Fund":"BTB Segn. 360",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":829.0,
"Authors":"Delfini, Antonio",
"Title":"Ritorno in citt\u00e0",
"Cities":"Milano",
"Publisher":"Guanda",
"Years":1933,
"Fund":null,
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":830.0,
"Authors":"De Libero, Libero",
"Title":"Eclisse",
"Cities":"Rom",
"Publisher":"Edizioni della Cometa",
"Years":1940,
"Fund":"BTB Segn. 361",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":831.0,
"Authors":"Della Casa, Giovanni",
"Title":"Se s\u2019abbia a prender moglie",
"Cities":"Firenze",
"Publisher":"Le Monnier",
"Years":1946,
"Fund":"BTB Segn. 362",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":832.0,
"Authors":"Della Montagna, Lupo",
"Title":"Il Trentino, la Venezia Giulia e la Dalmazia nel Risorgimento italiano",
"Cities":"Milano",
"Publisher":"Risorgimento.",
"Years":1914,
"Fund":"BTB Segn. 1531",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":833.0,
"Authors":"Della Pergola, Paola",
"Title":"I Carracci",
"Cities":"Roma",
"Publisher":"Istituto Nazionale L.U.C.E.",
"Years":1932,
"Fund":"BTB Segn. 2177",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":834.0,
"Authors":"Dell\u2019Arco, Mario",
"Title":"Er gusto mio",
"Cities":"Roma",
"Publisher":"Tip. Bardi",
"Years":1953,
"Fund":"BTB Segn. 363",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":835.0,
"Authors":"Dell\u2019Arco, Mario",
"Title":" Marziale per un mese",
"Cities":"Roma",
"Publisher":"Andreocci",
"Years":1963,
"Fund":"BTB Segn. 364",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":836.0,
"Authors":"Dell\u2019Arco, Mario",
"Title":"Omaggio a Esopo",
"Cities":"Roma",
"Publisher":"Il Nuovo Belli",
"Years":1959,
"Fund":"BTB Segn. 365",
"Segni":"Dedica dell\u2019autore. Postille.",
"Category":"IL"
},{
"Unnamed: 0":837.0,
"Authors":"Dell\u2019Arco, Mario",
"Title":" La peste a Roma",
"Cities":"Roma",
"Publisher":"Tip. Bardi",
"Years":1952,
"Fund":"BTB Segn. 366",
"Segni":"Dedica dell\u2019autore in data 10.1953.",
"Category":"IL"
},{
"Unnamed: 0":838.0,
"Authors":"Dell\u2019Arco, Mario",
"Title":" Taja ch\u2019\u00e8 rosso. Poesie romanesche",
"Cities":"Roma",
"Publisher":"Migliaresi",
"Years":"s.d.",
"Fund":"BTB Segn. 367",
"Segni":"Dedica dell\u2019autore in data 05.1947.",
"Category":"IL"
},{
"Unnamed: 0":839.0,
"Authors":"Dell\u2019Arco, Mario",
"Title":"Tormarancio",
"Cities":"Roma",
"Publisher":"Tip. Bardi",
"Years":1950,
"Fund":"BTB Segn. 368",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":840.0,
"Authors":"Del Pizzo, Giovanni",
"Title":"L\u2019iconicella. Nuovi idilli",
"Cities":"Modena",
"Publisher":"Guanda",
"Years":1941,
"Fund":"BTB Segn. 369",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":841.0,
"Authors":"Del Pizzo, Giovanni",
"Title":"Passeggeri del colle. Idilli",
"Cities":"Modena",
"Publisher":"Guanda",
"Years":1937,
"Fund":"BTB Segn. 370",
"Segni":"Dedica dell\u2019autore ad A. Gargiulo. Sottolineature e postille.",
"Category":"IL"
},{
"Unnamed: 0":842.0,
"Authors":"Del Pizzo, Giovanni",
"Title":"Trapasso di stagione",
"Cities":"Modena",
"Publisher":"Guanda",
"Years":1951,
"Fund":"BTB Segn. 371",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":843.0,
"Authors":"Del Re, Niccol\u00f2",
"Title":"La curia romana. Lineamenti storico-giuridici",
"Cities":"Roma",
"Publisher":"Edizioni di Storia e Letteratura",
"Years":1952,
"Fund":"BTB Segn. 1514",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":844.0,
"Authors":"De Luca, Giuseppe",
"Title":"Atlante geografico: ad uso delle scuole ginnasiali liceali e tecniche",
"Cities":"Napoli",
"Publisher":"Morano",
"Years":1881,
"Fund":null,
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":845.0,
"Authors":"De Luca, Pasquale",
"Title":"Visioni italiche",
"Cities":"Bergamo",
"Publisher":"Istituto Italiano D\u2019Arti Grafiche",
"Years":1913,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":846.0,
"Authors":"De Martino, Ernesto",
"Title":"Sud e magia",
"Cities":"Milano",
"Publisher":"Feltrinelli",
"Years":1959,
"Fund":"BTB Segn. 2158",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":847.0,
"Authors":"De Mattei, Rodolfo",
"Title":"Polvere di Roma",
"Cities":"Firenze",
"Publisher":"Parenti",
"Years":1938,
"Fund":"BTB Segn. 372",
"Segni":"Intonso.",
"Category":"IL"
},{
"Unnamed: 0":848.0,
"Authors":"De Mirecourt, Eugene",
"Title":"Saint Beuve",
"Cities":"Paris",
"Publisher":"Faure",
"Years":1867,
"Fund":"BAL",
"Segni":"Postille.",
"Category":"FL"
},{
"Unnamed: 0":849.0,
"Authors":"De Napoli, Ferdinando",
"Title":"La bisessualit\u00e0 latente",
"Cities":"Roma",
"Publisher":"Anonima Romana Editoriale",
"Years":1934,
"Fund":null,
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":850.0,
"Authors":"Denis, Ferdinando",
"Title":"Portogallo",
"Cities":"Venezia",
"Publisher":"Antonelli",
"Years":1850,
"Fund":"BTB Segn. 3259",
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":851.0,
"Authors":"De Pereda, Jos\u00e8 Maria",
"Title":"Sotileza",
"Cities":"Milano-Verona",
"Publisher":"Mondadori",
"Years":1935,
"Fund":"BAL",
"Segni":null,
"Category":"SL"
},{
"Unnamed: 0":852.0,
"Authors":"De Pisis, Filippo",
"Title":"Il marchesino pittore",
"Cities":"Milano",
"Publisher":"Longanesi",
"Years":1969,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":853.0,
"Authors":"De Pisis, Filippo",
"Title":"Poesie",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1942,
"Fund":"BTB Segn. 373",
"Segni":"Parzialmente intonso.",
"Category":"IL"
},{
"Unnamed: 0":854.0,
"Authors":"Not found",
"Title":"La Deposizione. Beato Angelico",
"Cities":"Firenze",
"Publisher":"Electa",
"Years":1948,
"Fund":"BTB Segn. 2217",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":855.0,
"Authors":"De Rabutin \u2013 Chantal, Marie marquise de S\u00e9vign\u00e9",
"Title":"Lettres choisies de Madame de S\u00e9vign\u00e9",
"Cities":"Paris",
"Publisher":"Garnier Fr\u00e8res",
"Years":1872,
"Fund":"BAL",
"Segni":"Dediche ad Adele Gadda Lehr in data 2.1905.",
"Category":"FL"
},{
"Unnamed: 0":856.0,
"Authors":"De Rabutin \u2013 Chantal, Marie marquise de S\u00e9vign\u00e9",
"Title":"Lettres choisies de Madame de S\u00e9vign\u00e9",
"Cities":"Paris",
"Publisher":"Nelson editeurs",
"Years":1945,
"Fund":"BAL",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":857.0,
"Authors":"De Roberto, Federico",
"Title":"I Vicer\u00e9",
"Cities":"Milano",
"Publisher":"Treves",
"Years":1920,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":858.0,
"Authors":"De Roberto, Federico",
"Title":"I Vicer\u00e9",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1959,
"Fund":"BTB Segn. 374",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":859.0,
"Authors":"De Rubejs, Jean Baptiste",
"Title":"De\u2019 ritratti, ossia Trattato per cogliere le fisionomie",
"Cities":"Paris",
"Publisher":"Bertrand Artrus",
"Years":1809,
"Fund":"BAL",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":860.0,
"Authors":"De Robertis, Giuseppe",
"Title":"Saggio sul Leopardi",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1944,
"Fund":"BTB Segn. 790",
"Segni":"Dedica dell\u2019autore in data 3.1944.",
"Category":"IL"
},{
"Unnamed: 0":861.0,
"Authors":"De Ruggiero, Guido",
"Title":"L\u2019esistenzialismo. Aggiunta allaprima edizione dei Filosofi del Novecento",
"Cities":"Bari",
"Publisher":"Laterza",
"Years":1943,
"Fund":"BTB Segn. 1939",
"Segni":null,
"Category":"F  "
},{
"Unnamed: 0":862.0,
"Authors":"De Ruggiero, Guido",
"Title":"La filosofia contemporanea",
"Cities":"Bari",
"Publisher":"Laterza",
"Years":1942,
"Fund":"BTB Segn. 1940",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":863.0,
"Authors":"De Sanctis, Francesco",
"Title":"Mazzini e la scuola democratica",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1951,
"Fund":"BTB Segn. 794",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":864.0,
"Authors":"De Sanctis, Francesco",
"Title":"Saggi critici. Saggi, nuovi saggi,scritti critici e vari raccolti in quattro volumi",
"Cities":"Milano",
"Publisher":"Treves",
"Years":1924,
"Fund":"BTB Segn. 797-799",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":865.0,
"Authors":"De Sanctis, Francesco",
"Title":"Saggio critico sul Petrarca",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1952,
"Fund":"BTB Segn. 796",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":866.0,
"Authors":"De Sanctis, Francesco",
"Title":"La scuola cattolico-liberale e il Romanticismo a Napoli",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1953,
"Fund":"BTB Segn. 795",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":867.0,
"Authors":"De Sanctis, Francesco",
"Title":"Storia della letteratura italiana",
"Cities":"Milano",
"Publisher":"Istituto Editoriale Italiano",
"Years":"s.d.",
"Fund":"BTB Segn. 791-793",
"Segni":"Nota di possesso autografa.",
"Category":"IL"
},{
"Unnamed: 0":868.0,
"Authors":"Descalzo, Giovanni",
"Title":"Paese e mito",
"Cities":"Milano",
"Publisher":"All\u2019insegna del pesce d\u2019oro",
"Years":1938,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":869.0,
"Authors":"Descartes, Ren\u00e9",
"Title":"Discorso sul metodo",
"Cities":"Bari",
"Publisher":"Laterza",
"Years":1913,
"Fund":"BTB Segn. 1826-1827",
"Segni":null,
"Category":"F "
},{
"Unnamed: 0":870.0,
"Authors":"Descartes, Ren\u00e9",
"Title":"I principi della filosofia",
"Cities":"Bari",
"Publisher":"Societ\u00e0 Tipografica Editrice Barese",
"Years":1914,
"Fund":"BTB Segn. 1828",
"Segni":"Parzialmente intonso.",
"Category":"F "
},{
"Unnamed: 0":871.0,
"Authors":"Not found",
"Title":"Descrizione delle sale accademiche al Boe del Liviano",
"Cities":"Padova",
"Publisher":"Officine grafiche STEDIV",
"Years":1950,
"Fund":"BTB Segn. 2308",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":872.0,
"Authors":"De Stefani, Livia",
"Title":"Gli affatturati",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1955,
"Fund":"BTB Segn. 375",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":873.0,
"Authors":"De Stefani, Livia",
"Title":".La vigna di uve nere",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1953,
"Fund":"BTB Segn. 376",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":874.0,
"Authors":"De Tullio, Giovanni",
"Title":"Manuale per l\u2019ufficiale in pacee in guerra",
"Cities":"Milano",
"Publisher":"Casati",
"Years":1914,
"Fund":"BTB Segn. 2168-2170",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":875.0,
"Authors":"Not found",
"Title":"Deutsch-Italienisches und Italienisch-Deutsches Handw\u00f6rterbuch. Nuovo dizionario portatile italiano-tedesco e tedesco-italiano",
"Cities":"Milano",
"Publisher":"Pirotta",
"Years":1836,
"Fund":"BTB Segn. 2474-2476",
"Segni":null,
"Category":"D"
},{
"Unnamed: 0":876.0,
"Authors":"Deutscher, Isaac",
"Title":"Il profeta disarmato: Leone Trotsky 1921-1929",
"Cities":"Milano",
"Publisher":"Longanesi",
"Years":1961,
"Fund":"BTB Segn. 1747",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":877.0,
"Authors":"De Viti De Marco, Antonio",
"Title":"La funzione della banca. Introduzione allo studio dei problemi monetari e bancari contemporanei",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1936,
"Fund":"BTB Segn. 2009",
"Segni":"Intonso.",
"Category":"T"
},{
"Unnamed: 0":878.0,
"Authors":"Devoto, Giacomo",
"Title":"Grammatiche",
"Cities":"Roma",
"Publisher":"La nuova antologia",
"Years":1941,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":879.0,
"Authors":"Devoto, Giacomo",
"Title":"Studi di stilistica",
"Cities":"Firenze",
"Publisher":"Le monnier",
"Years":1950,
"Fund":"BTM",
"Segni":"Parzialmente intonso. Sottolineature e postille.",
"Category":"L"
},{
"Unnamed: 0":880.0,
"Authors":"Devoto, Giacomo \u2013 Migliorini, Bruno \u2013 Schiaffini, Alfredo",
"Title":"Cento anni di lingua italiana",
"Cities":"Milano",
"Publisher":"All\u2019insegna del pesce d\u2019oro",
"Years":1962,
"Fund":"BAL",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":881.0,
"Authors":"Diano, Carlo",
"Title":"Forma ed Evento. Principi per unainterpretazione del mondo greco",
"Cities":"Venezia",
"Publisher":"Neri Pozza",
"Years":1952,
"Fund":"BTB Segn. 25-26",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":882.0,
"Authors":"D\u00edaz Gonz\u00e1lez, Joaquin",
"Title":"Scoperta d\u2019un grande segreto nel l\u2019arte del Giudizio Universale di Michelangelo",
"Cities":"Roma",
"Publisher":"Angelo Belardetti Editore",
"Years":1954,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore in data 16.12.1954.",
"Category":"SA"
},{
"Unnamed: 0":883.0,
"Authors":"Not found",
"Title":"Diccionario de la literatura espa\u00f1ola",
"Cities":"Madrid",
"Publisher":"Revista de Occidente",
"Years":1953,
"Fund":"BTB Segn. 937",
"Segni":null,
"Category":"D"
},{
"Unnamed: 0":884.0,
"Authors":"Not found",
"Title":"Diciottesima Esposizione Biennale Internazionale d\u2019Arte 1932: Catalogo",
"Cities":"s.l.",
"Publisher":"s.n.",
"Years":1932,
"Fund":"BTB Segn. 2208",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":885.0,
"Authors":"Dickens, Charles",
"Title":"Davide Copperfield",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1939,
"Fund":"BAL",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":886.0,
"Authors":"Dickens, Charles",
"Title":"Le magasin d\u2019antiquit\u00e9s",
"Cities":"Paris",
"Publisher":"Hachette",
"Years":1913,
"Fund":"BTB Segn. 1253-1254",
"Segni":"Nota di possesso autografa di Enrico Gadda in data 10.1917.",
"Category":"EL"
},{
"Unnamed: 0":887.0,
"Authors":"Dickinson, Emily",
"Title":"Poesie",
"Cities":"Milano",
"Publisher":"Denti",
"Years":"s.d.",
"Fund":"BTB Segn. 1255",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":888.0,
"Authors":"Dickson, Carter",
"Title":"The bowstring murders",
"Cities":"London",
"Publisher":"The British publisher guide",
"Years":1944,
"Fund":"BAL",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":889.0,
"Authors":"Not found",
"Title":"Dictionnaire de la langue fran\u00e7aise",
"Cities":"Paris",
"Publisher":"Hachette",
"Years":1873,
"Fund":"BTB Segn. 2411-2415",
"Segni":null,
"Category":"D"
},{
"Unnamed: 0":890.0,
"Authors":"Not found",
"Title":"]Dictionnaire fran\u00e7ais-grec, compos\u00e9 sur le plan des meilleurs dictionnaires fran\u00e7aislatins",
"Cities":"Paris-Bruxelles  ",
"Publisher":"Belin Mandar & Devaux",
"Years":1828,
"Fund":"BTB Segn. 2483",
"Segni":null,
"Category":"D"
},{
"Unnamed: 0":891.0,
"Authors":"Not found",
"Title":"Dictionnaire fran\u00e7aise-italienne",
"Cities":"Paris",
"Publisher":"Librairie Larousse",
"Years":1938,
"Fund":"BAL",
"Segni":"Timbro di possesso \u00abIng. Ettore Roscioni\u00bb.",
"Category":"D"
},{
"Unnamed: 0":892.0,
"Authors":"Diderot, Denis",
"Title":"\u0152uvres",
"Cities":"Paris",
"Publisher":"Gallimard",
"Years":1951,
"Fund":"BAL",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":893.0,
"Authors":"Diderot, Denis",
"Title":"La religiosa",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1945,
"Fund":"BTB Segn. 982",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":894.0,
"Authors":"Diehl, Charles",
"Title":"La civilt\u00e0 bizantina",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1962,
"Fund":"BTB Segn. 1454",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":895.0,
"Authors":"Diehl, Charles",
"Title":"Teodora imperatrice di Bisanzio",
"Cities":"Firenze",
"Publisher":"Beltrami",
"Years":1939,
"Fund":"BTB Segn. 1455",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":896.0,
"Authors":"Dieudonn\u00e9, Eug\u00e8ne",
"Title":"La vie des for\u00e7ats.",
"Cities":"Paris",
"Publisher":"NRFGallimard",
"Years":1934,
"Fund":"BTB Segn. 983",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":897.0,
"Authors":"Di Lauro, Raffaele",
"Title":"Le terre del Lago Tsana. Possibilit\u00e0 economiche attuali del Nord Ovest etiopico",
"Cities":"Roma",
"Publisher":"Societ\u00e0 Arti Grafiche",
"Years":1936,
"Fund":"BTB Segn. 2378",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":898.0,
"Authors":"Dimier, Louis",
"Title":"La vie raisonnable de Descartes",
"Cities":"Paris",
"Publisher":"Plon",
"Years":1926,
"Fund":"BTB Segn. 1123",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":899.0,
"Authors":"Di Pino, Guido",
"Title":"La polemica del Boccaccio",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1953,
"Fund":"BTB Segn. 2378",
"Segni":"Dedica dell\u2019autore.",
"Category":"L"
},{
"Unnamed: 0":900.0,
"Authors":"Not found",
"Title":"La Direttissima Bologna-Firenze",
"Cities":"Roma",
"Publisher":"Ministero Lavori Pubblici",
"Years":1934,
"Fund":"BTB Segn. 2268-2269",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":901.0,
"Authors":"Not found",
"Title":"Discorsi celebrativi dell\u2019entrata dell\u2019Italia nelle Nazioni Unite (Roma 31 gennaio 1956)",
"Cities":"Roma",
"Publisher":"ITI",
"Years":1956,
"Fund":"BAL",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":902.0,
"Authors":"Not found",
"Title":"Dizionario biografico universale",
"Cities":"Milano",
"Publisher":"Guigoni",
"Years":1867,
"Fund":"BTB Segn. 2468-2469",
"Segni":null,
"Category":"D"
},{
"Unnamed: 0":903.0,
"Authors":"Not found",
"Title":"Dizionario degli autori",
"Cities":"Milano",
"Publisher":"Fabbri",
"Years":1967,
"Fund":"BAL",
"Segni":null,
"Category":"D"
},{
"Unnamed: 0":904.0,
"Authors":"Not found",
"Title":"Dizionario della lingua italiana",
"Cities":"Torino",
"Publisher":"UTET",
"Years":1861,
"Fund":"BTB Segn. 2498-2504",
"Segni":"Postille.",
"Category":"D"
},{
"Unnamed: 0":905.0,
"Authors":"Not found",
"Title":"Dizionario delle battaglie.",
"Cities":null,
"Publisher":".",
"Years":null,
"Fund":"BTB Segn. Op. 81",
"Segni":null,
"Category":"D"
},{
"Unnamed: 0":906.0,
"Authors":"Not found",
"Title":"Dizionario Garzanti francese-italiano italiano-francese. Diretto da U. Salati per la redazione lessicografica Garzanti diretta da G. Cusatelli con la supervisione G",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1966,
"Fund":"BTB Segn. 2491",
"Segni":null,
"Category":"D"
},{
"Unnamed: 0":907.0,
"Authors":"Not found",
"Title":"Dizionario Garzanti franceseitaliano italiano-francese",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1966,
"Fund":"BTB Segn. Op. 12",
"Segni":null,
"Category":"D"
},{
"Unnamed: 0":908.0,
"Authors":"Not found",
"Title":"Dizionario inglese-italiano",
"Cities":"Milano",
"Publisher":"Bietti",
"Years":"s.d.",
"Fund":null,
"Segni":null,
"Category":"D"
},{
"Unnamed: 0":909.0,
"Authors":"Not found",
"Title":"Dizionario italiano-spagnolo spa gnolo-italiano",
"Cities":"Firenze",
"Publisher":"Barbera",
"Years":1945,
"Fund":"BTB Segn. 2478-2479",
"Segni":null,
"Category":"D"
},{
"Unnamed: 0":910.0,
"Authors":"Not found",
"Title":"Dizionario latino-italiano e italiano-latino",
"Cities":"Torino",
"Publisher":"Rosenberg e Sellier",
"Years":1895,
"Fund":null,
"Segni":null,
"Category":"D"
},{
"Unnamed: 0":911.0,
"Authors":"Not found",
"Title":"Dizionario letterario delle opere e dei personaggi di tutti i tempi e di tutte le letterature",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1947,
"Fund":"BAL",
"Segni":null,
"Category":"D"
},{
"Unnamed: 0":912.0,
"Authors":"Not found",
"Title":"Dizionario tascabile italianotedesco tedesco-italiano con indicazione della pronuncia secondo il sistema fonetico del metodo Toussaint-Langenschei dt",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1916,
"Fund":"BTB Segn. 2463-2464",
"Segni":null,
"Category":"D"
},{
"Unnamed: 0":913.0,
"Authors":"Dobelli, Ferdinando",
"Title":"I Papi da San Pietro a Pio IX",
"Cities":"Roma",
"Publisher":"F. Dobelli",
"Years":1889,
"Fund":null,
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":914.0,
"Authors":"Dobzhansky, Theodosius",
"Title":"L\u2019evoluzione della specie umana",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1965,
"Fund":"BTB Segn. 2119",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":915.0,
"Authors":"Not found",
"Title":"Die Dolomiten",
"Cities":"s.l.",
"Publisher":"s.e.",
"Years":"s.d.",
"Fund":"BAL",
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":916.0,
"Authors":"Dommarco, Alessandro",
"Title":"T\u00e8mbe st\u00f2rte. Poesie in dialetto abruzzese",
"Cities":"Roma",
"Publisher":"Tip. Edit. Romana",
"Years":1970,
"Fund":"BTB Segn. 377",
"Segni":"Intonso.",
"Category":"IL"
},{
"Unnamed: 0":917.0,
"Authors":"Doni, Anton Francesco",
"Title":"Le pi\u00f9 belle pagine",
"Cities":"Milano",
"Publisher":"Treves",
"Years":1932,
"Fund":"BTB Segn. 378",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":918.0,
"Authors":"Doniselli, Casimiro",
"Title":"La fisiologia del labirinto e i sensi generali matematici (spazio, tempo, numero). Estratto da \u00abArchivio di filosofia\u00bb, XI",
"Cities":null,
"Publisher":null,
"Years":1913,
"Fund":"BTM",
"Segni":"Nota di possesso e data 10.06.1924. Dono del prof. Casimiro Doniselli. Sottolineature e postille.",
"Category":"T"
},{
"Unnamed: 0":919.0,
"Authors":"Doniselli, Casimiro",
"Title":"Problemi di psicofisiologia dell\u2019udito e della fonazione. Estratto da \u00abAtti della Societ\u00e0 Italiana di Scienze Naturali\u00bb, IX (1921).",
"Cities":"Pavia",
"Publisher":"Premiata Tipografia successori Fratelli Fus",
"Years":1921,
"Fund":"BTM",
"Segni":"Nota di possesso e data 10.06.1924 Milano.",
"Category":"T"
},{
"Unnamed: 0":920.0,
"Authors":"Doplicher, Fabio",
"Title":"Il girochiuso",
"Cities":"Roma",
"Publisher":"Trevi",
"Years":1970,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":921.0,
"Authors":"Dorico, Enea",
"Title":"Guglielmo Tell il liberatore della Svizzera",
"Cities":"Milano",
"Publisher":"Carlo Barbini",
"Years":1889,
"Fund":"BAL",
"Segni":"Nota di possesso di Enrico Gadda.",
"Category":"S"
},{
"Unnamed: 0":922.0,
"Authors":"D\u2019Ors, Eugenio",
"Title":"Epopea della Spagna. Padovani",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1948,
"Fund":"BTB Segn. 1587",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":923.0,
"Authors":"D\u2019Ors, Eugenio",
"Title":"Gigiotti Zanini",
"Cities":"Milano",
"Publisher":"Alfieri & Lacroix",
"Years":1953,
"Fund":"BAL",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":924.0,
"Authors":"D\u2019Ors, Eugenio",
"Title":"La valle di Giosafat",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1945,
"Fund":"BTB Segn. 914",
"Segni":"Dedica del traduttore.",
"Category":"S"
},{
"Unnamed: 0":925.0,
"Authors":"Dos Passos, John",
"Title":"42e parall\u00e8le",
"Cities":"Paris",
"Publisher":"Grasset",
"Years":1933,
"Fund":"BTB Segn. 1256",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":926.0,
"Authors":"Dossi, Carlo",
"Title":"Dossi",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1944,
"Fund":"BTB Segn. 379",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":927.0,
"Authors":"Dostoevskij, F\u00ebdor Michajlovi\u010d",
"Title":"Delitto e castigo",
"Cities":"Milano",
"Publisher":"Sonzogno",
"Years":1930,
"Fund":"BTB Segn. 1360-1361",
"Segni":null,
"Category":"RL"
},{
"Unnamed: 0":928.0,
"Authors":"Dostoevskij, F\u00ebdor Michajlovi\u010d",
"Title":"Delitto e castigo",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1965,
"Fund":"BAL",
"Segni":null,
"Category":"RL"
},{
"Unnamed: 0":929.0,
"Authors":"Dostoevskij, F\u00ebdor Michajlovi\u010d",
"Title":"I demoni",
"Cities":"Torino",
"Publisher":"Slavia",
"Years":1929,
"Fund":"BTB Segn. 1358 bis-1359",
"Segni":null,
"Category":"RL"
},{
"Unnamed: 0":930.0,
"Authors":"Dostoevskij, F\u00ebdor Michajlovi\u010d",
"Title":"I fratelli Karamazov",
"Cities":"Torino",
"Publisher":"Slavia",
"Years":1926,
"Fund":"BTB Segn. 1363-1366",
"Segni":null,
"Category":"RL"
},{
"Unnamed: 0":931.0,
"Authors":"Dostoevskij, F\u00ebdor Michajlovi\u010d",
"Title":"I fratelli Karam\u00e0zov",
"Cities":"Milano",
"Publisher":"Corticelli",
"Years":1941,
"Fund":"BTB Segn. 1362",
"Segni":"Intonso.",
"Category":"RL"
},{
"Unnamed: 0":932.0,
"Authors":"Dostoevskij, F\u00ebdor Michajlovi\u010d",
"Title":"Il giocatore",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1941,
"Fund":"BTB Segn. 1367",
"Segni":null,
"Category":"RL"
},{
"Unnamed: 0":933.0,
"Authors":"Dostoevskij, F\u00ebdor Michajlovi\u010d",
"Title":"L\u2019idiota",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1942,
"Fund":"BTB Segn. 1359 bis",
"Segni":"Parzialmente intonso.",
"Category":"RL"
},{
"Unnamed: 0":934.0,
"Authors":"Dostoevskij, F\u00ebdor Michajlovi\u010d",
"Title":"Memorie di una casa morta",
"Cities":"Milano",
"Publisher":"Rizzoli",
"Years":1950,
"Fund":"BTB Segn. 1368",
"Segni":null,
"Category":"RL"
},{
"Unnamed: 0":935.0,
"Authors":"Dostoevskij, F\u00ebdor Michajlovi\u010d",
"Title":"Povera gente",
"Cities":"Lanciano",
"Publisher":"Carabba",
"Years":1917,
"Fund":"BTB Segn. 1369",
"Segni":"Nota di possesso autografa di Enrico Gadda in data 07.1917 S. Giustina.",
"Category":"RL"
},{
"Unnamed: 0":936.0,
"Authors":"Dostoevskij, F\u00ebdor Michajlovi\u010d",
"Title":"Racconti e romanzi.",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1948,
"Fund":"BTB Segn. 1370",
"Segni":null,
"Category":"RL"
},{
"Unnamed: 0":937.0,
"Authors":"Dostoevskij, F\u00ebdor Michajlovi\u010d",
"Title":"I Ragazzi",
"Cities":"Milano",
"Publisher":"Studio editoriale lombardo",
"Years":1915,
"Fund":"BAL",
"Segni":"Nota di possesso di Enrico Gadda in data 1917 Malpensa.",
"Category":"RL"
},{
"Unnamed: 0":938.0,
"Authors":"Dostoevskij, F\u00ebdor Michajlovi\u010d",
"Title":"Il sosia",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1966,
"Fund":"BAL",
"Segni":null,
"Category":"RL"
},{
"Unnamed: 0":939.0,
"Authors":"Dostoevskij, F\u00ebdor Michajlovi\u010d",
"Title":"Umiliati e offesi",
"Cities":"Sesto San Giovanni",
"Publisher":"Barion",
"Years":1933,
"Fund":"BTB Segn. 1371",
"Segni":"Parzialmente intonso.",
"Category":"RL"
},{
"Unnamed: 0":940.0,
"Authors":"Dostoevskij, F\u00ebdor Michajlovi\u010d",
"Title":"Umiliati e offesi",
"Cities":"Torino",
"Publisher":"Frassinelli",
"Years":1942,
"Fund":"BTB Segn. 1372",
"Segni":null,
"Category":"RL"
},{
"Unnamed: 0":941.0,
"Authors":null,
"Title":"Dove a Milano",
"Cities":"Milano",
"Publisher":"Societ\u00e0 Tipografica Milanese",
"Years":1965,
"Fund":"BTB Segn. 2353",
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":942.0,
"Authors":"D\u2019Ovidio, Francesco",
"Title":"Versificazione romanza. Poetica e poesia medioevale",
"Cities":"Napoli",
"Publisher":"Guida",
"Years":1932,
"Fund":"BTB Segn. 2428",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":943.0,
"Authors":"Dubois Janni, Th\u00e9r\u00e8se",
"Title":"August Strindberg. Una biografia",
"Cities":"Milano",
"Publisher":"Mazzotta",
"Years":1970,
"Fund":"BTB Segn. 1408",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":944.0,
"Authors":"Du Bos, Charles",
"Title":"Approximations: 4e s\u00e9rie",
"Cities":"Paris",
"Publisher":"Corr\u00e9a",
"Years":1948,
"Fund":"BTB Segn. 884",
"Segni":"Parzialmente intonso.",
"Category":"L"
},{
"Unnamed: 0":945.0,
"Authors":"Dubreuil, Hyacinthe",
"Title":"Nouveaux standards",
"Cities":"Paris",
"Publisher":"Grasset",
"Years":1931,
"Fund":"BTB Segn. 2010",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":946.0,
"Authors":"Ducati, Pericle",
"Title":"Lisippo",
"Cities":"Roma",
"Publisher":"Istituto Nazionale L.U.C.E.",
"Years":1930,
"Fund":"BTB Segn. 2178",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":947.0,
"Authors":"Ducati, Pericle",
"Title":" Il santuario di Olimpia",
"Cities":"Roma",
"Publisher":"Istituto Nazionale L.U.C.E.",
"Years":1932,
"Fund":"BTB Segn. 2179-2180",
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":948.0,
"Authors":"Ducati, Pericle",
"Title":" Storia d\u2019Italia illustrata. I. L\u2019Italia antica",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1936,
"Fund":"BTB Segn. 1566",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":949.0,
"Authors":"Duclos, Adolphe",
"Title":"Bruges en un jour",
"Cities":"Bruges",
"Publisher":"G.Gevens- Willaert",
"Years":1920,
"Fund":"BTB Segn. 2289",
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":950.0,
"Authors":"Dugas, Ludovic",
"Title":"Vocabulaire de psychologie",
"Cities":"Paris",
"Publisher":"Hachette",
"Years":1920,
"Fund":"BTB Segn. 1997",
"Segni":null,
"Category":"D"
},{
"Unnamed: 0":951.0,
"Authors":"Dulles, John Foster",
"Title":"Gli Stati Uniti e i problemi mondiali",
"Cities":" s.l",
"Publisher":"USIS",
"Years":1953,
"Fund":"BTB Segn. Op. 80",
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":952.0,
"Authors":"Dumas, Alexandre",
"Title":"I Borgia",
"Cities":"Milano",
"Publisher":"Aurora",
"Years":1936,
"Fund":"BTB Segn. 1515",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":953.0,
"Authors":"Dupouy, Auguste",
"Title":"G\u00e9ographie des lettres fran\u00e7aises",
"Cities":"Paris",
"Publisher":"Colin",
"Years":1942,
"Fund":"BTB Segn. 1124",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":954.0,
"Authors":"Duproix, Paul",
"Title":"Kant et Fichte et le probl\u00e8me de l\u2019\u00e9ducation",
"Cities":"Gen\u00e8ve",
"Publisher":"Georg & C.ie",
"Years":1895,
"Fund":"BTM",
"Segni":"Sottolineature e postille.",
"Category":"F "
},{
"Unnamed: 0":955.0,
"Authors":"Dupuy, Th\u00e9odore",
"Title":"Un moraliste sceptique et un po\u00e8te satirique du XVI si\u00e8cle. Michel Montaigne et Mathurin R\u00e9gnier",
"Cities":"Milan",
"Publisher":"Lombardi",
"Years":1886,
"Fund":"BTB Segn. 1125",
"Segni":"Dedica dell\u2019autore ad Adele Gadda Lehr.",
"Category":"FL"
},{
"Unnamed: 0":956.0,
"Authors":"Duran, Jorge Ga\u00edtan",
"Title":"El libertino",
"Cities":"Bogot\u00e0",
"Publisher":"Espiral",
"Years":1954,
"Fund":"BTB Segn. 915",
"Segni":"Dedica dell\u2019autore. Intonso.",
"Category":"SL"
},{
"Unnamed: 0":957.0,
"Authors":"Durrell, Lawrence",
"Title":"L\u2019ineffabile Antrobus",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1966,
"Fund":"BAL",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":958.0,
"Authors":"Dwelshauvers, Georges",
"Title":"La psychologie fran\u00e7aise contemporaine",
"Cities":"Paris",
"Publisher":"Alcan",
"Years":1920,
"Fund":"BTB Segn. 1998",
"Segni":"E",
"Category":"F "
},{
"Unnamed: 0":959.0,
"Authors":"Eckermann, Johann Peter",
"Title":"Colloqui con Goethe",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1947,
"Fund":"BTB Segn. 1224-1225",
"Segni":null,
"Category":"GL"
},{
"Unnamed: 0":960.0,
"Authors":"Eckermann, Johann Peter",
"Title":"Gespr\u00e4che mit Goethe",
"Cities":"Weimar",
"Publisher":"Riepenhauser",
"Years":1918,
"Fund":"BTB Segn. 1226",
"Segni":"Nota di possesso autografa in data 1918  Celle, Hannover. Sottolineature.",
"Category":"GL"
},{
"Unnamed: 0":961.0,
"Authors":"Eddington, Arthur Stanley",
"Title":"Luci dall\u2019infinito",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1933,
"Fund":"BTB Segn. 2067",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":962.0,
"Authors":"Einstein, Albert",
"Title":"La th\u00e9orie de la relativit\u00e9 restreinte et g\u00e9n\u00e9ralis\u00e9e (mise \u00e0 la port\u00e9e de tout le monde)",
"Cities":"Paris",
"Publisher":"GauthierVillars",
"Years":1927,
"Fund":"BTB Segn. 2069",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":963.0,
"Authors":"Not found",
"Title":"Gli Eleati: Frammenti",
"Cities":"Lanciano",
"Publisher":"Carabba",
"Years":"s.d.",
"Fund":"BTB Segn. 1829",
"Segni":"Nota di possesso autografa in data 9.03.1921.",
"Category":"F"
},{
"Unnamed: 0":964.0,
"Authors":"Not found",
"Title":"Electricity in Mining",
"Cities":"Berlino",
"Publisher":"SiemensSchuckertwerke",
"Years":1913,
"Fund":"BTB Segn. 2105",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":965.0,
"Authors":"Not found",
"Title":"Elenco degli allievi morti in guerra ai quali \u00e8 stata conferita la laurea ad honorem",
"Cities":"Milano",
"Publisher":"Istituti superiori di Milano",
"Years":1919,
"Fund":"BAL",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":966.0,
"Authors":"Not found",
"Title":"Elenco degli allievi morti in guerra ai quali \u00e8 stata conferita la laurea d\u2019onore 27 gennaio 1919",
"Cities":"Milano",
"Publisher":"Istituti superiori di Milano",
"Years":1919,
"Fund":"BAL",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":967.0,
"Authors":"Not found",
"Title":"Elenco dei soci 1912-1913- 1914-1915",
"Cities":"Milano",
"Publisher":"Circolo filologico milanese",
"Years":1912,
"Fund":"BAL",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":968.0,
"Authors":"Elfenhans, Theodor",
"Title":"Psychologie und Logik zur Einf\u00fc hrung in die Philosophie",
"Cities":"Leipzig",
"Publisher":"G\u00f6schen Verlag.",
"Years":1914,
"Fund":"BAL",
"Segni":"Nota di possesso autografa. Postille.",
"Category":"F"
},{
"Unnamed: 0":969.0,
"Authors":"Elia, Olga",
"Title":"Xenion: nature morte e paesaggi campani",
"Cities":"Pompei",
"Publisher":"Ipsi",
"Years":1958,
"Fund":"BAL",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":970.0,
"Authors":"Eliot, Thomas Stearns",
"Title":"Little Gidding",
"Cities":"s.l.",
"Publisher":"Edizioni Ali",
"Years":1944,
"Fund":"BTB Segn. 1257",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":971.0,
"Authors":"Not found",
"Title":"Enciclopedia britannica",
"Cities":"London",
"Publisher":"s.n.",
"Years":"s.d.",
"Fund":"BAL",
"Segni":null,
"Category":"D"
},{
"Unnamed: 0":972.0,
"Authors":"Not found",
"Title":"Enciclopedia Garzanti della letteratura",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1972,
"Fund":"BTB Segn. 2488-2489",
"Segni":null,
"Category":"D"
},{
"Unnamed: 0":973.0,
"Authors":"Not found",
"Title":"Enciclopedia italiana",
"Cities":"Roma",
"Publisher":"Istituto dell\u2019Enciclopedia Italiana",
"Years":1937,
"Fund":"BTB Segn. Op. 13",
"Segni":"Annotazione sull\u2019ultima pagina.",
"Category":"D"
},{
"Unnamed: 0":974.0,
"Authors":"Not found",
"Title":"Enciclopedia Treccani",
"Cities":"Milano",
"Publisher":"E. Bestetti",
"Years":1950,
"Fund":"BAL",
"Segni":null,
"Category":"D"
},{
"Unnamed: 0":975.0,
"Authors":"Not found",
"Title":"Energia atomica per la guerra?Per la pace? ",
"Cities":"Roma",
"Publisher":"U.S.I.S.",
"Years":1953,
"Fund":"BAL",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":976.0,
"Authors":"Not found",
"Title":"English-Italian and ItalianEnglish",
"Cities":"s.l.",
"Publisher":"s.e.",
"Years":"s.d.",
"Fund":"BAL",
"Segni":null,
"Category":"D"
},{
"Unnamed: 0":977.0,
"Authors":"Not found",
"Title":"English literature",
"Cities":"London",
"Publisher":"Enciclopedia Britannica",
"Years":1958,
"Fund":"BAL",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":978.0,
"Authors":"Enriques, Federigo \u2013 Amaldi, Ugo",
"Title":"Geometria elementare per lescuole secondarie superiori. Parteseconda. Geometria solida",
"Cities":"Bologna",
"Publisher":"Zanichelli",
"Years":1924,
"Fund":"BTB Segn. 2121",
"Segni":"Segnalibro inserito. Nota di possesso, Ing. C.E. Gadda 29.10.1924 Milano.",
"Category":"T"
},{
"Unnamed: 0":979.0,
"Authors":"Not found",
"Title":"Environs de Paris.",
"Cities":"Paris",
"Publisher":"Hachette",
"Years":1952,
"Fund":"BTB Segn. 2318",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":980.0,
"Authors":"Epitteto",
"Title":"Il manuale",
"Cities":"Milano",
"Publisher":"Istituto Editoriale Italiano",
"Years":1913,
"Fund":"BTB Segn. 1830",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":981.0,
"Authors":"Epitteto",
"Title":"Manuel traduit du grec, avec les Commentaires de Simplicius, le nouveau manuel et le Tableau de C\u00e9b\u00e8s",
"Cities":"Paris",
"Publisher":"Jean-Fran\u00e7ois Bastien",
"Years":1790,
"Fund":"BTB Segn. 1831",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":982.0,
"Authors":"Eraclito",
"Title":"Frammenti e testimonianze",
"Cities":"Lanciano",
"Publisher":"Carabba",
"Years":1919,
"Fund":"BTB Segn. 1832",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":983.0,
"Authors":"Ermini, Filippo",
"Title":"Benedetto da Norcia",
"Cities":"Roma",
"Publisher":"Form\u00ecggini",
"Years":1928,
"Fund":"BTB Segn. 1786",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":984.0,
"Authors":"Eschilo",
"Title":"Le Eumenidi",
"Cities":"Milano-Roma-Napoli",
"Publisher":"Dante Alighieri",
"Years":1929,
"Fund":"BTB Segn. 5",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":985.0,
"Authors":"Eschilo",
"Title":"Orestiade",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1949,
"Fund":"BTB Segn. 4",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":986.0,
"Authors":"Eschilo",
"Title":"I Persiani",
"Cities":"Bologna",
"Publisher":"Cappelli",
"Years":1954,
"Fund":"BTB Segn. 7",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":987.0,
"Authors":"Eschilo",
"Title":"Il Prometeo legato",
"Cities":"Milano",
"Publisher":"Dante Alighieri \u2013\nCitt\u00e0di Castello, Lapi",
"Years":1933,
"Fund":"BTB Segn. 1",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":988.0,
"Authors":"Eschilo",
"Title":"Le Suppliche",
"Cities":"Torino",
"Publisher":"Paravia",
"Years":1923,
"Fund":"BTB Segn. 6",
"Segni":"Intonso.",
"Category":"CL"
},{
"Unnamed: 0":989.0,
"Authors":"Eschilo",
"Title":"Le Supplici; I Persiani; I Settecontro Tebe; Prometeo legato",
"Cities":"Milano",
"Publisher":"Rizzoli",
"Years":1952,
"Fund":"BTB Segn. 2-3",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":990.0,
"Authors":"Esenin, Sergej Aleksandrovi\u010d",
"Title":"Canto liturgico",
"Cities":"Milano",
"Publisher":"All\u2019insegna del pesce d\u2019oro",
"Years":1938,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":991.0,
"Authors":"Esercito Italiano. Comando supremo",
"Title":"Addestramento dei riparti all\u2019attacco nella guerra di trincee",
"Cities":"s.l.",
"Publisher":"R. Esercito Italiano",
"Years":1916,
"Fund":"BTB Segn. Op. 125",
"Segni":"Intonso.",
"Category":"M"
},{
"Unnamed: 0":992.0,
"Authors":"Esercito Italiano. Comando supremo",
"Title":"Clima e acque dell\u2019Altipiano dei Sette Comuni",
"Cities":"s.l.",
"Publisher":"R. EsercitoItaliano",
"Years":1916,
"Fund":"BTB Segn. Op. 121",
"Segni":null,
"Category":"M"
},{
"Unnamed: 0":993.0,
"Authors":"Esercito Italiano. Comando supremo",
"Title":"Criteri d\u2019impiego della fanterianella guerra di trincee. s.l., R",
"Cities":"s.l.",
"Publisher":"R. Esercito Italiano",
"Years":1916,
"Fund":"BTB Segn. Op. 120",
"Segni":null,
"Category":"M"
},{
"Unnamed: 0":994.0,
"Authors":"Esercito Italiano. Comando supremo",
"Title":"Impiego delle mitragliatrici.s.l",
"Cities":"s.l.",
"Publisher":"R. Esercito Italiano",
"Years":1916,
"Fund":"BTB Segn. Op. 122",
"Segni":null,
"Category":"M"
},{
"Unnamed: 0":995.0,
"Authors":"Esercito Italiano. Comando supremo",
"Title":"Varianti provvisorie ai n. 107,113,114, 116, 117 e relativi allegati del Servizio in Guerra, parteI. s.l., R",
"Cities":"s.l.",
"Publisher":"R. Esercito Italiano",
"Years":1916,
"Fund":"BTB Segn. Op. 123-124",
"Segni":"Due copie, di cui una intonsa.",
"Category":"M"
},{
"Unnamed: 0":996.0,
"Authors":"Esiodo",
"Title":"Teogonia esiodea",
"Cities":"Bologna",
"Publisher":"Zanichelli",
"Years":1917,
"Fund":"BTB Segn. 1969",
"Segni":"Parzialmente intonso.",
"Category":"CL"
},{
"Unnamed: 0":997.0,
"Authors":"Esopo",
"Title":"Favole",
"Cities":"Milano",
"Publisher":"Rizzoli",
"Years":1951,
"Fund":"BTB Segn. 8",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":998.0,
"Authors":"Not found",
"Title":"Espagne",
"Cities":"Paris",
"Publisher":"Hachette",
"Years":1952,
"Fund":"BTB Segn. 2316",
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":999.0,
"Authors":"Not found",
"Title":"Espagne Michelin",
"Cities":"Paris",
"Publisher":"Pneu Michelin Services de tourisme",
"Years":1960,
"Fund":"BTB Segn. 2383",
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":1000.0,
"Authors":"Euripide",
"Title":"Alcesti; Il Ciclope",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1952,
"Fund":"BTB Segn. 9",
"Segni":"Postille.",
"Category":"CL"
},{
"Unnamed: 0":1001.0,
"Authors":"Evans, Ivor",
"Title":"The use of English",
"Cities":"London",
"Publisher":"Staples",
"Years":1949,
"Fund":"BAL",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":1002.0,
"Authors":"Not found",
"Title":"] Exhibition of Masterpieces of\nEuropean Painting XV-XVII Century. Catalogue",
"Cities":"Roma",
"Publisher":"Division of Fine Arts \u2013 Region IV \u2013 Allied Military Government",
"Years":1944,
"Fund":"BTB Segn. 2207",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":1003.0,
"Authors":"Fabre, Alessandro",
"Title":"Dizionarietto della mitologia greca e romana ad uso dell\u2019onesta giovent\u00f9 italiana con un\u2019appen-dice sulle principali divinit\u00e0 di altri popoli",
"Cities":"Torino",
"Publisher":"Tip. Salesiana",
"Years":1918,
"Fund":"BTB Segn. 119",
"Segni":null,
"Category":"D"
},{
"Unnamed: 0":1004.0,
"Authors":"Fagiolo Dell\u2019Arco, Maurizio",
"Title":"Rapporto 60. Le arti oggi in Italia",
"Cities":"Roma",
"Publisher":"Bulzoni",
"Years":1966,
"Fund":"BTB Segn. 2226",
"Segni":"Dedica dell\u2019autore.",
"Category":"SA"
},{
"Unnamed: 0":1005.0,
"Authors":"Fagiolo Dell\u2019Arco, Maurizio \u2013 Fagiolo, Marcello",
"Title":"Bernini: una introduzione al gran teatro del barocco",
"Cities":"Roma",
"Publisher":"Bulzoni",
"Years":1967,
"Fund":"BAL",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":1006.0,
"Authors":"Falangola, M.E.",
"Title":"Fanciulle, dame e mariti in Francia nel sec. XVI",
"Cities":"Roma",
"Publisher":"Anonima Romana Editoriale",
"Years":1935,
"Fund":"BTB Segn. Op. 3",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1007.0,
"Authors":"Faldella, Giovanni",
"Title":"Figurine",
"Cities":"Milano",
"Publisher":"Tipografia Editoriale Lombarda",
"Years":1875,
"Fund":"BTB Segn. 380",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1008.0,
"Authors":"Faldella, Giovanni",
"Title":"Le \u00abfigurine\u00bb",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1942,
"Fund":"BTB Segn. 381",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1009.0,
"Authors":"Falorsi, Guido",
"Title":"Storia antica. Storia greca",
"Cities":"Livorno",
"Publisher":"Giusti",
"Years":1901,
"Fund":"BTB Segn. 1456",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1010.0,
"Authors":"Falorsi, Guido",
"Title":"Storia antica. Storia romana",
"Cities":"Livorno",
"Publisher":"Giusti",
"Years":1901,
"Fund":"BTB Segn. 1457",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1011.0,
"Authors":"Falqui, Enrico",
"Title":"Magalottiana. Saggi tre",
"Cities":"Urbino",
"Publisher":"Istituto d\u2019arte di Urbino",
"Years":1949,
"Fund":"BTB Segn. 804",
"Segni":"Dedica dell\u2019autore in data 1952.",
"Category":"L"
},{
"Unnamed: 0":1012.0,
"Authors":"Falqui, Enrico",
"Title":"Piet\u00e0 per i vivi",
"Cities":"Catania",
"Publisher":"Camene",
"Years":1950,
"Fund":"BTB Segn. 382",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1013.0,
"Authors":"Fast, Howard",
"Title":"Spartacus",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1959,
"Fund":"BTB Segn. 1258",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":1014.0,
"Authors":"Fatta, Corrado",
"Title":"Il regno di Enrico VIII d\u2019Inghilterra",
"Cities":"Firenze",
"Publisher":"La Nuova Italia",
"Years":1938,
"Fund":"BTB Segn. 1715-1716",
"Segni":"Volume II intonso. Sottolineature e postille.",
"Category":"S"
},{
"Unnamed: 0":1015.0,
"Authors":"Favorini, Egiziaca",
"Title":"Simone Martini",
"Cities":"Roma",
"Publisher":"Istituto Nazionale L.U.C.E.",
"Years":1933,
"Fund":"BTB Segn. 2181",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":1016.0,
"Authors":"Fazio Allmayer, Vito",
"Title":"Lezioni sulla logica",
"Cities":"Firenze",
"Publisher":"Le Monnier",
"Years":1920,
"Fund":"BTB Segn. 1833",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":1017.0,
"Authors":"Fazio Allmayer, Vito",
"Title":"Lezioni sulla psicologia",
"Cities":"Firenze",
"Publisher":"Le Monnier",
"Years":1920,
"Fund":"BTB Segn. 1834",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":1018.0,
"Authors":"Fedro",
"Title":"Le favole",
"Cities":"Milano",
"Publisher":"Istituto Editoriale Italiano",
"Years":1929,
"Fund":"BTB Segn. 69",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":1019.0,
"Authors":"Fedro",
"Title":" Le favole esopiane",
"Cities":"Torino",
"Publisher":"Streglio",
"Years":"s.d.",
"Fund":"BTB Segn. 68",
"Segni":"Postille.",
"Category":"CL"
},{
"Unnamed: 0":1020.0,
"Authors":"Feller, Friedrich Ernest",
"Title":"Nouveau dictionnaire de poche fran\u00e7ais e allemand",
"Cities":"Leipzig",
"Publisher":"Teubner",
"Years":"s.d.",
"Fund":"BAL",
"Segni":"Postille.",
"Category":"D"
},{
"Unnamed: 0":1021.0,
"Authors":"F\u00e9n\u00e9lon, Fran\u00e7ois de Salignac dela Mothe",
"Title":"Les aventures de T\u00e9l\u00e9maque",
"Cities":"Turin",
"Publisher":"Org\u00e9as",
"Years":1807,
"Fund":"BTB Segn. 986",
"Segni":"Nota di possesso autografa di Adele Gadda Lehr.",
"Category":"FL"
},{
"Unnamed: 0":1022.0,
"Authors":"F\u00e9n\u00e9lon, Fran\u00e7ois de Salignac dela Mothe",
"Title":" Dialogues des morts. Suivi de quelques dialogues de Boileau, Fontenelle et D\u2019Alembert",
"Cities":"Paris",
"Publisher":"Hachette",
"Years":1847,
"Fund":"BTB Segn. 985",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":1023.0,
"Authors":"Fenoglio, Beppe",
"Title":"Il partigiano Johnny",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1968,
"Fund":"BTB Segn. 384",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1024.0,
"Authors":"Fenoglio, Beppe",
"Title":"Primavera di bellezza",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1959,
"Fund":"BTB Segn. 383",
"Segni":"Pieghe.",
"Category":"IL"
},{
"Unnamed: 0":1025.0,
"Authors":"Ferrabino, Aldo",
"Title":"Cesare",
"Cities":"Torino",
"Publisher":"UTET",
"Years":1941,
"Fund":"BTB Segn. 1458",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1026.0,
"Authors":"Ferrari, Giuseppe",
"Title":"Le pi\u00f9 belle pagine",
"Cities":"Milano",
"Publisher":"Treves",
"Years":1927,
"Fund":"BTB Segn. 385",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1027.0,
"Authors":"Ferrari, Giuseppe",
"Title":"Teoria dei periodi politici",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1874,
"Fund":"BTB Segn. 1748",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1028.0,
"Authors":"Ferraris, Galileo",
"Title":"Lezioni di elettrotecnica dettate nel R. Museo Industriale italiano in Torino da Galileo Ferraris e raccolte per cura della Famiglia e sotto gli auspi- cii dell\u2019A.E.I. Fondamenti scientifici dell\u2019elettrotecnica.",
"Cities":"Torino",
"Publisher":"S.T.E.N.",
"Years":1917,
"Fund":"BTM",
"Segni":"Nota di possesso e data alla sovraccoperta: Elettrotecnica G. Ferraris. 1920.",
"Category":"T"
},{
"Unnamed: 0":1029.0,
"Authors":"Ferraris, Galileo",
"Title":"Sulla teoria matematica della propagazione dell\u2019elettricit\u00e0 nei solidi omogenei",
"Cities":"Torino",
"Publisher":"Stamperia Reale",
"Years":1872,
"Fund":"BTB Segn. 2122",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":1030.0,
"Authors":"Ferraris, Galileo",
"Title":" Sulle differenze di fase nelle correnti, sul ritardo dell\u2019induzione e sulla dissipazione di energia nei trasformatori",
"Cities":"Torino",
"Publisher":"Loescher",
"Years":1887,
"Fund":"BTB Segn. 2106",
"Segni":"Intonso.",
"Category":"T"
},{
"Unnamed: 0":1031.0,
"Authors":"Ferraris, Galileo",
"Title":"Teoria geometrica dei campi vettori",
"Cities":"Torino",
"Publisher":"Clausen",
"Years":1897,
"Fund":"BTB Segn. 2107",
"Segni":"Intonso.",
"Category":"T"
},{
"Unnamed: 0":1032.0,
"Authors":"Ferraro, Pietro",
"Title":"La nuova industria italiana del\nmagnesio. Estratto da \u00abI quaderni\ndi Prospettive autarchiche\u00bb,II",
"Cities":null,
"Publisher":null,
"Years":1941,
"Fund":"BTB Segn. Op. 130-132",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":1033.0,
"Authors":"Ferrata, Giansiro \u2013 Vittorini, Elio",
"Title":"La tragica vicenda di Carlo III. 1848- 1858",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1939,
"Fund":"BTB Segn. 1516",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1034.0,
"Authors":"Ferravilla, Edoardo",
"Title":"La caccia del scior. Brugnell",
"Cities":"s.l.",
"Publisher":"s.e.",
"Years":"s.d.",
"Fund":"BAL",
"Segni":"Postille.",
"Category":"IL"
},{
"Unnamed: 0":1035.0,
"Authors":"Ferravilla, Edoardo",
"Title":"Il teatro di Ferravilla",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1961,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1036.0,
"Authors":"Ferrero, Ernesto",
"Title":"I gerghi della malavita dal Cinquecento ad oggi",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1972,
"Fund":"BAL",
"Segni":null,
"Category":"D"
},{
"Unnamed: 0":1037.0,
"Authors":"Ferrero, Guglielmo",
"Title":"Grandezza e decadenza di Roma. Vol. I. La conquista dell\u2019impero",
"Cities":"Milano",
"Publisher":"Treves",
"Years":1927,
"Fund":"BTB Segn. 1459",
"Segni":"Postille.",
"Category":"S"
},{
"Unnamed: 0":1038.0,
"Authors":"Ferrero, Guglielmo",
"Title":"Grandezza e decadenza di Roma. Vol. II. Giulio Cesare",
"Cities":"Milano",
"Publisher":"Treves",
"Years":1926,
"Fund":"BTB Segn. 1460",
"Segni":"Postille.",
"Category":"S"
},{
"Unnamed: 0":1039.0,
"Authors":"Ferrero, Guglielmo",
"Title":"Grandezza e decadenza di Roma. Vol. III. Da Cesare ad Augusto",
"Cities":"Milano",
"Publisher":"Treves",
"Years":1929,
"Fund":"BTB Segn. 1461",
"Segni":"Postille. Pieghe.",
"Category":"S"
},{
"Unnamed: 0":1040.0,
"Authors":"Ferrero, Mario",
"Title":"Piccolo dizionario di pedagogia didattica e storia della pedagogia",
"Cities":"Firenze",
"Publisher":"Vallardi",
"Years":1915,
"Fund":null,
"Segni":null,
"Category":"D"
},{
"Unnamed: 0":1041.0,
"Authors":"Ferretti, Giovanni",
"Title":"Pietro Giordani sino ai quaranta anni",
"Cities":"Roma",
"Publisher":"Edizioni di Storia e Letteratura",
"Years":1952,
"Fund":"BTB Segn. 805",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1042.0,
"Authors":"Ferrio, Luigi",
"Title":"Terminologia medica",
"Cities":"Torino",
"Publisher":"UTET",
"Years":1946,
"Fund":"BAL",
"Segni":null,
"Category":"D"
},{
"Unnamed: 0":1043.0,
"Authors":"Not found",
"Title":"Fiabe africane",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1955,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1044.0,
"Authors":"Not found",
"Title":"I fiamminghi e l\u2019Italia. Pittori italiani e fiamminghi dal XV al XVIII secolo",
"Cities":"Venezia",
"Publisher":"Ed. Arte Veneta",
"Years":1951,
"Fund":"BTB Segn. 2227",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":1045.0,
"Authors":"Fichte, Johann Gottlieb",
"Title":"I discorsi alla nazione tedesca",
"Cities":"Milano-Palermo-Napoli-Genova-Bologna",
"Publisher":"Sandron",
"Years":"s.d.",
"Fund":"BTM",
"Segni":"Nota di possesso e data 18.05.1924 Milano. Sottolineature e postille.",
"Category":"F"
},{
"Unnamed: 0":1046.0,
"Authors":"Fichte, Johann Gottlieb",
"Title":"Dottrina della scienza",
"Cities":"Bari",
"Publisher":"Laterza",
"Years":1910,
"Fund":"BTB Segn. 1835",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":1047.0,
"Authors":"Fichte, Johann Gottlieb",
"Title":"Sulla missione del dotto",
"Cities":"Lanciano",
"Publisher":"Carabba",
"Years":1912,
"Fund":"BTB Segn. 1836",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":1048.0,
"Authors":"Ficino, Marsilio",
"Title":"Sopra lo amore: Il convito",
"Cities":"Lanciano",
"Publisher":"Carabba",
"Years":1934,
"Fund":"BTB Segn. 1867",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":1049.0,
"Authors":"Filippini, Felice",
"Title":"Figaro ovvero Il primo torto \u00e8 quello di esser morto. Saggio sul celebre personaggio di Beaumarchais",
"Cities":"Lugano",
"Publisher":"Cenobio",
"Years":1952,
"Fund":"BTB Segn. 386",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":1050.0,
"Authors":"Filippini, Felice",
"Title":"Signore dei poveri morti",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1955,
"Fund":"BTB Segn. 387",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1051.0,
"Authors":"Filon, Augustin",
"Title":"Histoire de la litt\u00e9rature anglaise depuis ses origines jusqu\u2019\u00e0 nos jours",
"Cities":"Paris",
"Publisher":"Hachette",
"Years":1922,
"Fund":"BTB Segn. 1345",
"Segni":"Parzialmente intonso. Nota di possesso autografa in data 1925 Milano.",
"Category":"S"
},{
"Unnamed: 0":1052.0,
"Authors":"Not found",
"Title":"Filosofi americani contemporanei",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1939,
"Fund":"BTB Segn. 1962",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":1053.0,
"Authors":"Not found",
"Title":"Filosofi inglesi contemporanei",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1939,
"Fund":"BTB Segn. 1963",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":1054.0,
"Authors":"Fini, Rodolfo",
"Title":"La cremazione al servizio dello Stato nel mondo di domani",
"Cities":"Firenze",
"Publisher":"Societ\u00e0 per la Cremazione",
"Years":1964,
"Fund":"BTB Segn. Op. 73",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":1055.0,
"Authors":"Finzi, Giuseppe",
"Title":"  Principi di stilistica, versificazione e metrica italiana con un dizionarietto de\u2019 modi errati ad uso della 4\u00aa classe ginnasiale",
"Cities":"Firenze",
"Publisher":"Bemporad",
"Years":1905,
"Fund":null,
"Segni":null,
"Category":"D"
},{
"Unnamed: 0":1056.0,
"Authors":"Fiorani, Mario",
"Title":"Poesie",
"Cities":"s.l.",
"Publisher":"Il Balcone",
"Years":"s.d.",
"Fund":"BTB Segn. 388",
"Segni":"Dedica dell\u2019autore. Intonso.",
"Category":"IL"
},{
"Unnamed: 0":1057.0,
"Authors":"Fiore, Elio",
"Title":"Dialoghi per non morire",
"Cities":"Milano",
"Publisher":"Le Noci",
"Years":1964,
"Fund":"BTB Segn. 389",
"Segni":"Dedica dell\u2019autore in data 1970.",
"Category":"IL"
},{
"Unnamed: 0":1058.0,
"Authors":"Fiore, Elio",
"Title":"Dialoghi per non morire",
"Cities":"Milano",
"Publisher":"Le Noci",
"Years":1964,
"Fund":"BTB Segn. Op. 11",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1059.0,
"Authors":"Fiorentino, Francesco",
"Title":"Compendio di storia della filosofia",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1921,
"Fund":"BTB Segn. 1943-1945",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":1060.0,
"Authors":null,
"Title":"Fiorenzo Tomea",
"Cities":"s.l.",
"Publisher":"s.n.",
"Years":1968,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1061.0,
"Authors":"Fiori, Annibale",
"Title":"Handbuch der italienischen  und deutschen Konversationsprache",
"Cities":"Berlin-Sch\u00f6neberg-Milano",
"Publisher":"Langenscheidt Hoepli",
"Years":1910,
"Fund":"BTB Segn. 2432",
"Segni":"Nota di possesso autografa in data 4.02.1918 Rastatt (Friedrichsfeste). Sottolineature e postille.",
"Category":"D"
},{
"Unnamed: 0":1062.0,
"Authors":"Firenzuola, Agnolo",
"Title":"Le novelle",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1943,
"Fund":"BTB Segn. 390",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1063.0,
"Authors":"Fisher, Herbert Albert Laurens",
"Title":"Storia d\u2019Europa",
"Cities":"Bari",
"Publisher":"Laterza",
"Years":1948,
"Fund":"BTB Segn. 1749-1751",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1064.0,
"Authors":"Flaubert, Gustave",
"Title":"L\u2019educazione sentimentale. Storia di un giovane",
"Cities":"Milano",
"Publisher":"Longanesi",
"Years":1942,
"Fund":"BTB Segn. 987",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":1065.0,
"Authors":"Flaubert, Gustave",
"Title":"Madame Bovary. Moeurs de province. Suivie des r\u00e9quisitoires, plaidoirie et jugement du proc\u00e8s intent\u00e9 \u00e0 l\u2019Auteurdevant le Tribunal correctionnel de Paris, audiences des 31\/1 et 7\/2\/1857",
"Cities":"Paris",
"Publisher":"Fasquelle",
"Years":1936,
"Fund":"BTB Segn. 988",
"Segni":"Nota di possesso autografa in data 1939 Milano. Pieghe.",
"Category":"FL"
},{
"Unnamed: 0":1066.0,
"Authors":"Flaubert, Gustave",
"Title":"\u0152uvres",
"Cities":"Paris",
"Publisher":"Gallimard",
"Years":1946,
"Fund":"BAL",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":1067.0,
"Authors":"Flaubert, Gustave",
"Title":"La signora Bovary. Costumi di provincia",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1968,
"Fund":"BTB Segn. 989",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":1068.0,
"Authors":"Flora, Francesco",
"Title":"Dal romanticismo al futurismo",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1925,
"Fund":"BTB Segn. 806",
"Segni":"Nota di possesso autografa in data 1925.",
"Category":"IL"
},{
"Unnamed: 0":1069.0,
"Authors":"Flora, Francesco",
"Title":"Leonardo",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1952,
"Fund":"BTB Segn. 2196",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1070.0,
"Authors":"Foch, Ferdinand",
"Title":"De la conduite de la guerre. La man\u0153uvre pour la bataille",
"Cities":"Paris-Nancy",
"Publisher":"Berger",
"Years":1915,
"Fund":"BTB Segn. 2153",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":1071.0,
"Authors":"Fogazzaro, Antonio",
"Title":"Il mistero del poeta",
"Cities":"Milano",
"Publisher":"Baldini e Castoldi.",
"Years":1914,
"Fund":"BTB Segn. 391",
"Segni":"Nota di possesso autografa di Enrico Gadda in data 7.09.1917.",
"Category":"IL"
},{
"Unnamed: 0":1072.0,
"Authors":"Fogazzaro, Antonio",
"Title":"Piccolo mondo antico",
"Cities":"Milano",
"Publisher":"Baldini e Castoldi",
"Years":1916,
"Fund":"BTB Segn. 392",
"Segni":"Nota di possesso autografa di Enrico Gadda in data 09.1917, Longone al Segrino. Postille.",
"Category":"IL"
},{
"Unnamed: 0":1073.0,
"Authors":"Fogazzaro, Antonio",
"Title":"Piccolo mondo moderno",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1916,
"Fund":"BTB Segn. 393",
"Segni":"Nota di possesso autografa di Enrico Gadda in data 12.1917, Cascine Malpensa.",
"Category":"IL"
},{
"Unnamed: 0":1074.0,
"Authors":"Fogazzaro, Antonio",
"Title":"Il Santo",
"Cities":"Milano",
"Publisher":"Baldini e Castoldi",
"Years":1906,
"Fund":"BTB Segn. 394",
"Segni":"Nota di possesso autografa di Enrico Gadda in data 10.1917.",
"Category":"IL"
},{
"Unnamed: 0":1075.0,
"Authors":"Folengo, Teofilo",
"Title":"Il Baldo",
"Cities":"Milano",
"Publisher":"Feltrinelli",
"Years":1958,
"Fund":"BTB Segn. 398-399",
"Segni":"Dedica del traduttore.",
"Category":"IL"
},{
"Unnamed: 0":1076.0,
"Authors":"Folengo, Teofilo",
"Title":"Il Baldus e le altre opere latine e volgari",
"Cities":"Firenze",
"Publisher":"Le Monnier",
"Years":1941,
"Fund":"BTB Segn. 397",
"Segni":"Dedica del curatore in Firenze 16.11.1947. Parzialmente intonso. Postille.",
"Category":"IL"
},{
"Unnamed: 0":1077.0,
"Authors":"Folengo, Teofilo",
"Title":"Histoire maccaronique de Merlin Coccaie",
"Cities":"Paris",
"Publisher":"Garnier",
"Years":1876,
"Fund":"BTB Segn. 395",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1078.0,
"Authors":"Folengo, Teofilo",
"Title":"Le opere maccheroniche di Merlin Cocai",
"Cities":"s.l.",
"Publisher":"Mondovi",
"Years":1882,
"Fund":"BTB Segn. 396",
"Segni":"Sottolineature. Foglio inserito con annotazione in data 1957.",
"Category":"IL"
},{
"Unnamed: 0":1079.0,
"Authors":"Foot Moore, George",
"Title":"I libri del Vecchio Testamento",
"Cities":"Bari",
"Publisher":"Laterza",
"Years":1924,
"Fund":"BTB Segn. 1789",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1080.0,
"Authors":"] Forlati, Ferdinando \u2013 Gengaro, Maria Luisa",
"Title":"La chiesa degli Eremitani a Padova",
"Cities":"Firenze",
"Publisher":"Electa",
"Years":1945,
"Fund":"BTB Segn. Op. 127",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":1081.0,
"Authors":"Formaggio, Dino",
"Title":"Van Gogh",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1952,
"Fund":"BTB Segn. 2197",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":1082.0,
"Authors":"Formichi, Carlo",
"Title":"Grammatica razionale della lingua inglese ad uso delle scuole superiori e medie",
"Cities":"Milano",
"Publisher":"Vallardi",
"Years":1925,
"Fund":"BTB Segn. 2433-2434",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1083.0,
"Authors":"Forster, Edward Morgan",
"Title":"Casa Howard",
"Cities":"Milano",
"Publisher":"Feltrinelli",
"Years":1959,
"Fund":"BTB Segn. 1259",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":1084.0,
"Authors":"F\u00f6rster, Max",
"Title":"Manuale del costruttore",
"Cities":"Milano",
"Publisher":"Vallardi",
"Years":1919,
"Fund":"BTB Segn. 2139-2141",
"Segni":"Volume I con nota di possesso autografa in data 23.04.1920 Milano; volumeII con nota di possesso autografa in data 23.04.1922 Milano; volume III con nota di possesso autografa in data23.04.1925 Mi lano.",
"Category":"T"
},{
"Unnamed: 0":1085.0,
"Authors":"Foscolo, Ugo",
"Title":"Il gazzettino del bel mondo",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1942,
"Fund":"BTB Segn. 404",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1086.0,
"Authors":"Foscolo, Ugo",
"Title":"Le Grazie",
"Cities":"Roma",
"Publisher":"Garroni",
"Years":1911,
"Fund":"BAL",
"Segni":"Timbro di possesso di Enrico Gadda.",
"Category":"IL"
},{
"Unnamed: 0":1087.0,
"Authors":"Foscolo, Ugo",
"Title":"Opere complete",
"Cities":"Napoli",
"Publisher":"s.n.",
"Years":1860,
"Fund":"BTB Segn. 400-401",
"Segni":"Sottolineature e postille.",
"Category":"IL"
},{
"Unnamed: 0":1088.0,
"Authors":"Foscolo, Ugo",
"Title":"Prose",
"Cities":"Milano",
"Publisher":"Istituto Editoriale Italiano",
"Years":1915,
"Fund":"BTB Segn. 402",
"Segni":"Nota di possesso autografa di Enrico Gadda in data Udine, ottobre 1917.",
"Category":"IL"
},{
"Unnamed: 0":1089.0,
"Authors":"Foscolo, Ugo",
"Title":"Prose e poesie: Ortis; Odi; Sonetti; Poesie varie; I Sepolcri; Le Grazie; Prose biografiche e critiche",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1946,
"Fund":"BTB Segn. 403",
"Segni":"Postille.",
"Category":"IL"
},{
"Unnamed: 0":1090.0,
"Authors":"Foscolo, Ugo",
"Title":"I sepolcri",
"Cities":"Roma",
"Publisher":"Garroni",
"Years":1908,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1091.0,
"Authors":"Foscolo, Ugo",
"Title":"Ultime lettere di Jacopo Ortis",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1942,
"Fund":"BTB Segn. 405",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1092.0,
"Authors":"Foscolo, Ugo",
"Title":"Ultime lettere di Jacopo Ortis",
"Cities":"Milano",
"Publisher":"Rizzoli",
"Years":1949,
"Fund":"BAL e BTB Segn. 406",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1093.0,
"Authors":"Fouill\u00e9e, Alfred",
"Title":"Histoire de la philosophie. I, II.1, II.2",
"Cities":"Paris",
"Publisher":"Delagrave",
"Years":1940,
"Fund":"BTB Segn. 1946",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1094.0,
"Authors":"Fragmente der Vorsokratiker. Berlin,",
"Title":"Fragmente der Vorsokratiker",
"Cities":"Berlin",
"Publisher":"Weidmannsche Buchhan dlung",
"Years":1922,
"Fund":"BTB Segn. 1941-1942",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":1095.0,
"Authors":"Not found",
"Title":"Fragmente fr\u00fchgriechischerLyrik",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":"s.d.",
"Fund":"BTB Segn. 22",
"Segni":"Dedica del traduttore in data 14.1. 1944.",
"Category":"L"
},{
"Unnamed: 0":1096.0,
"Authors":"France, Anatole",
"Title":"L\u2019Ile des pingouins",
"Cities":"Paris",
"Publisher":"Calmann L\u00e9vy",
"Years":1926,
"Fund":"BTB Segn. 990",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":1097.0,
"Authors":null,
"Title":"France automobile en volume.",
"Cities":"Paris",
"Publisher":"Hachette",
"Years":1952,
"Fund":"BTB Segn. 2319",
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":1098.0,
"Authors":"Francesco d\u2019Assisi (San)",
"Title":"I fioretti di San Francesco",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1926,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1099.0,
"Authors":"Francesco d\u2019Assisi (San)",
"Title":"I fioretti di San Francesco",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1964,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1100.0,
"Authors":"Franchi, Luigi",
"Title":"Codice penale e nuovo Codice di procedura penale",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1919,
"Fund":"BTB Segn. 2036",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":1101.0,
"Authors":"Franchi, Raffaello",
"Title":"Massimo Campigli",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1944,
"Fund":"BTB Segn. 2190",
"Segni":"Dedica dell\u2019autore in data 14.9.1945.",
"Category":"S"
},{
"Unnamed: 0":1102.0,
"Authors":"Franchi, Raffaello",
"Title":"Memorie critiche",
"Cities":"Firenze",
"Publisher":"Parenti",
"Years":1938,
"Fund":"BTB Segn. 407",
"Segni":"Parzialmente intonso.",
"Category":"L"
},{
"Unnamed: 0":1103.0,
"Authors":"Frank, Tenney",
"Title":"Virgilio. L\u2019uomo e il poeta",
"Cities":"Lanciano",
"Publisher":"Carabba",
"Years":1930,
"Fund":"BTB Segn. 120",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1104.0,
"Authors":"Not found",
"Title":"Frankfurt a. M. und Umgebung",
"Cities":"Berlin",
"Publisher":"Goldschmidt",
"Years":1920,
"Fund":"BTB Segn. 2287",
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":1105.0,
"Authors":"Frassineti, Augusto",
"Title":"Misteri dei ministeri",
"Cities":"Modena",
"Publisher":"Guanda",
"Years":1952,
"Fund":"BTB Segn. 2173",
"Segni":"Dedica dell\u2019autore in data 14.10.1953.",
"Category":"IL"
},{
"Unnamed: 0":1106.0,
"Authors":"Frassineti, Augusto",
"Title":"Un capitano a riposo",
"Cities":"Milano",
"Publisher":"Feltrinelli",
"Years":1963,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1107.0,
"Authors":"Frassineti, Augusto",
"Title":"Una traduzione da Keats.",
"Cities":"Roma",
"Publisher":"Quaderni di Marsia",
"Years":1957,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1108.0,
"Authors":"Fr\u00e9naud, Andr\u00e9",
"Title":"Passage de la visitation",
"Cities":"Paris",
"Publisher":"GLM",
"Years":1956,
"Fund":"BTB Segn. 991",
"Segni":"Dedica dell\u2019autore in data 15.1.1961. Parialmente intonso.",
"Category":"FL"
},{
"Unnamed: 0":1109.0,
"Authors":"Freud, Sigmund",
"Title":"Il disagio della civilt\u00e0",
"Cities":"s.l.",
"Publisher":"Istituto Editoriale di Cultura",
"Years":"s.d.",
"Fund":"BTB Segn. 1991",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":1110.0,
"Authors":"Freud, Sigmund",
"Title":"Essais de psychanalyse",
"Cities":"Paris",
"Publisher":"Payot",
"Years":1929,
"Fund":"BTB Segn. 1993",
"Segni":"Sul frontespizio: \u00ab1942\u00bb. Pieghe, sottolineature e annotazioni.",
"Category":"F"
},{
"Unnamed: 0":1111.0,
"Authors":"Freud, Sigmund",
"Title":"Essais de psychanalyse appliqu\u00e9e",
"Cities":"Paris",
"Publisher":"Gallimard",
"Years":1933,
"Fund":"BTB Segn. 1990",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":1112.0,
"Authors":"Freud, Sigmund",
"Title":"Introduction \u00e0 la psychanalyse",
"Cities":"Paris",
"Publisher":"Payot",
"Years":1929,
"Fund":"BTB Segn. 1994",
"Segni":"Sottolineature.",
"Category":"F"
},{
"Unnamed: 0":1113.0,
"Authors":"Freud, Sigmund",
"Title":"Nuovi saggi di psicoanalisi. Al di l\u00e0 del principio del piacere. Psicologia delle masse e analisi dell\u2019io. Rivelazione dell\u2019inconscio: l\u2019Io e l\u2019Es",
"Cities":"Roma",
"Publisher":"Ed. Del Secolo",
"Years":1947,
"Fund":null,
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":1114.0,
"Authors":"Freud, Sigmund",
"Title":"La psychopathologie de la vie quotidienne. Application de la psychanalyse a l\u2019interpr\u00e9tation des actes de la vie courante",
"Cities":"Paris",
"Publisher":"Payot",
"Years":1926,
"Fund":"BTB Segn. 1995",
"Segni":"Parzialmente intonso.",
"Category":"F"
},{
"Unnamed: 0":1115.0,
"Authors":"Freud, Sigmund",
"Title":"Totem e tab\u00f9",
"Cities":"Bari",
"Publisher":"Laterza",
"Years":1946,
"Fund":"BTB Segn. 1992",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":1116.0,
"Authors":"Freycinet, Charles-Louis de Saulces de",
"Title":"Dell\u2019esperienza in geometria.",
"Cities":"Palermo",
"Publisher":"Libreria Internazionale ReberTip. De LucaLao",
"Years":1912,
"Fund":"BTB Segn. 2068",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":1117.0,
"Authors":"Freyre, Gilberto",
"Title":"Padroni e schiavi",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1965,
"Fund":"BTB Segn. 1736",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1118.0,
"Authors":"Friedmann, Sigismund",
"Title":"Avviamento allo studio del tedesco",
"Cities":"Milano",
"Publisher":"Trevisini",
"Years":"s.d.",
"Fund":null,
"Segni":null,
"Category":"GL"
},{
"Unnamed: 0":1119.0,
"Authors":"Friedmann, Sigismund",
"Title":" Grammatica tedesca: con esercizi, letture e vocabolario etimologico",
"Cities":"Torino",
"Publisher":"Loescher",
"Years":1912,
"Fund":null,
"Segni":null,
"Category":"GL"
},{
"Unnamed: 0":1120.0,
"Authors":"Frigerio, Federico",
"Title":"La cupola della cattedrale di Como e le sue vicende",
"Cities":"Como",
"Publisher":"Nani",
"Years":1935,
"Fund":"BTB Segn. Op. 128-129",
"Segni":"Dedica dell\u2019autore",
"Category":"SA"
},{
"Unnamed: 0":1121.0,
"Authors":"Frison-Roche, Roger",
"Title":"Il ponte di neve",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1953,
"Fund":"BTB Segn. 992",
"Segni":"Dedica del traduttore.",
"Category":"L"
},{
"Unnamed: 0":1122.0,
"Authors":"Frisoni, Ga\u00e9tan",
"Title":"Manuel de correspondance commerciale fran\u00e7aise. Accompagn\u00e9e de facsimil\u00e9s des diff\u00e9rents documents d\u2019usage quotidien",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1919,
"Fund":"BTB Segn. 2034",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":1123.0,
"Authors":"Fuchs, Paul",
"Title":"Clef de la grammaire russe",
"Cities":"Francfort",
"Publisher":"Jugel",
"Years":1874,
"Fund":"BTB Segn. 2437",
"Segni":null,
"Category":"GR"
},{
"Unnamed: 0":1124.0,
"Authors":"Fucini, Renato",
"Title":"Poesie. Cento sonetti in vernacolo pisano: nuove poesie",
"Cities":"Firenze",
"Publisher":"Barbera",
"Years":1876,
"Fund":"BTB Segn. 408",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1125.0,
"Authors":"Fucini, Renato",
"Title":"Le veglie di Neri",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1913,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1126.0,
"Authors":"Fucini, Renato",
"Title":"Le veglie di Neri",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1924,
"Fund":"BTB Segn. 410",
"Segni":"Intonso.",
"Category":"IL"
},{
"Unnamed: 0":1127.0,
"Authors":"Fucini, Renato",
"Title":"Le veglie di Neri. Paesi e figure della campagna toscana",
"Cities":"Milano",
"Publisher":"Trevisini",
"Years":1935,
"Fund":"BTB Segn. 409",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1128.0,
"Authors":"Fustel de Coulanges, NumaDenis",
"Title":"La citt\u00e0 antica. Studi sul culto, il diritto, le istituzioni di Grecia e di Roma",
"Cities":"Bari",
"Publisher":"Laterza",
"Years":1925,
"Fund":"BTB Segn. 1462-1463",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1129.0,
"Authors":"Not found",
"Title":"Le funzioni dell\u2019ente nazionale per la cellulosa e per la carta",
"Cities":"Roma",
"Publisher":"Federazione Italiana Editori Giornali",
"Years":1954,
"Fund":"BAL",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":1130.0,
"Authors":"Not found",
"Title":"Il Futurismo, il Novecentismo",
"Cities":"Torino",
"Publisher":"ERI",
"Years":1953,
"Fund":"BTB Segn. 803",
"Segni":"G",
"Category":"SA"
},{
"Unnamed: 0":1131.0,
"Authors":"Gadda, Carlo Emilio",
"Title":"L\u2019Adalgisa \u2013 disegni milanesi",
"Cities":"Firenze",
"Publisher":"Le Monnier",
"Years":1943,
"Fund":"BAL",
"Segni":"Nota di possesso autografa e postille.",
"Category":"IL"
},{
"Unnamed: 0":1132.0,
"Authors":"Gadda, Carlo Emilio",
"Title":"L\u2019Adalgisa. Disegni milanesi",
"Cities":"Firenze",
"Publisher":"Le Monnier",
"Years":1944,
"Fund":"BTM",
"Segni":"Postille per il tipografo in vista della ripubblicazione dell\u2019opera.",
"Category":"IL"
},{
"Unnamed: 0":1133.0,
"Authors":"Gadda, Carlo Emilio",
"Title":"L\u2019Adalgisa",
"Cities":"Firenze",
"Publisher":"Le Monnier",
"Years":1945,
"Fund":"BTM",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1134.0,
"Authors":"Gadda, Carlo Emilio",
"Title":"L\u2019Adalgisa",
"Cities":"Firenze",
"Publisher":"Le Monnier",
"Years":1945,
"Fund":"BAL",
"Segni":"Nota di possesso di Gadda in data 1970 Roma.",
"Category":"IL"
},{
"Unnamed: 0":1135.0,
"Authors":"Gadda, Carlo Emilio",
"Title":"L\u2019Adalgisa",
"Cities":"Firenze",
"Publisher":"Le Monnier",
"Years":1945,
"Fund":"BAL",
"Segni":"Due copie",
"Category":"IL"
},{
"Unnamed: 0":1136.0,
"Authors":"Gadda, Carlo Emilio",
"Title":"L\u2019Adalgisa",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1963,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1137.0,
"Authors":"Gadda, Carlo Emilio",
"Title":"Gli anni",
"Cities":"Firenze",
"Publisher":"Parenti",
"Years":1943,
"Fund":"BTM",
"Segni":"Postille.",
"Category":"IL"
},{
"Unnamed: 0":1138.0,
"Authors":"Gadda, Carlo Emilio",
"Title":"Gli anni",
"Cities":"Firenze",
"Publisher":"Parenti",
"Years":1943,
"Fund":"BAL",
"Segni":"Due copie.",
"Category":"IL"
},{
"Unnamed: 0":1139.0,
"Authors":"Gadda, Carlo Emilio",
"Title":"Il castello di Udine",
"Cities":"Firenze",
"Publisher":"Edizioni di Solaria",
"Years":1934,
"Fund":"BTM",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1140.0,
"Authors":"Gadda, Carlo Emilio",
"Title":"Il castello di Udine",
"Cities":"Firenze",
"Publisher":"Edizioni di Solaria",
"Years":1934,
"Fund":"BAL",
"Segni":"Nota di possesso di Gadda in data 28.1.1973 Roma.",
"Category":"IL"
},{
"Unnamed: 0":1141.0,
"Authors":"Gadda, Carlo Emilio",
"Title":"Il castello di Udine",
"Cities":"Firenze",
"Publisher":"Edizioni di Solaria",
"Years":1934,
"Fund":"BAL",
"Segni":"Due copie",
"Category":"IL"
},{
"Unnamed: 0":1142.0,
"Authors":"Gadda, Carlo Emilio",
"Title":"La centrale di Cornigliano",
"Cities":"Estratto da \u00abLa civilt\u00e0 delle macchine\u00bb",
"Publisher":null,
"Years":1953,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1143.0,
"Authors":"Gadda, Carlo Emilio",
"Title":"La cognizione del dolore",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1965,
"Fund":"BAC",
"Segni":"Menab\u00f2 per Einaudi spedito in busta con timbro postale del 3.7.1965.",
"Category":"IL"
},{
"Unnamed: 0":1144.0,
"Authors":"Gadda, Carlo Emilio",
"Title":"Eros e Priapo",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1967,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1145.0,
"Authors":"Gadda, Carlo Emilio",
"Title":"Giornale di guerra e di prigionia",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":"s.d.",
"Fund":"BTM",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1146.0,
"Authors":"Gadda, Carlo Emilio",
"Title":"Giornale di guerra e di prigionia",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1955,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1147.0,
"Authors":"Gadda, Carlo Emilio",
"Title":"Giornale di guerra e di prigionia",
"Cities":"Fi renze",
"Publisher":"Sansoni",
"Years":1955,
"Fund":"BAL",
"Segni":"Data autografa 2.7.1973 Roma.",
"Category":"IL"
},{
"Unnamed: 0":1148.0,
"Authors":"Gadda, Carlo Emilio",
"Title":"Giornale di guerra e di prigionia",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1965,
"Fund":"BAL",
"Segni":"Due copie",
"Category":"IL"
},{
"Unnamed: 0":1149.0,
"Authors":"Gadda, Carlo Emilio",
"Title":" Il guerriero, l\u2019amazzone, lo spirito della poesia nel verso immortale del Foscolo",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1967,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1150.0,
"Authors":"Gadda, Carlo Emilio",
"Title":"Gli impianti termoelettrici della Citt\u00e0  del Vaticano",
"Cities":"Milano",
"Publisher":"Alfieri & Lacroix",
"Years":1933,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1151.0,
"Authors":"Gadda, Carlo Emilio",
"Title":"I littoriali del lavoro",
"Cities":null,
"Publisher":null,
"Years":1904,
"Fund":"BAL",
"Segni":"Due copie",
"Category":"IL"
},{
"Unnamed: 0":1152.0,
"Authors":"Gadda, Carlo Emilio",
"Title":"La Madonna dei filosofi",
"Cities":"Firenze",
"Publisher":"Edizioni di Solaria",
"Years":1931,
"Fund":"BTM",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1153.0,
"Authors":"Gadda, Carlo Emilio",
"Title":"La Madonna dei filosofi",
"Cities":"Firenze",
"Publisher":"Edizioni di Solaria",
"Years":1931,
"Fund":"BAL",
"Segni":"Nota di possesso autografa in data 14.04.1931 Milano.",
"Category":"IL"
},{
"Unnamed: 0":1154.0,
"Authors":"Gadda, Carlo Emilio",
"Title":"La Madonna dei filosofi",
"Cities":"Firenze",
"Publisher":"Edizioni di Solaria",
"Years":1931,
"Fund":"BAL",
"Segni":"Nota di possesso di Gadda in data 14.11.1972.",
"Category":"IL"
},{
"Unnamed: 0":1155.0,
"Authors":"Gadda, Carlo Emilio",
"Title":"La Madonna dei filosofi",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1963,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1156.0,
"Authors":"Gadda, Carlo Emilio",
"Title":"Le meraviglie d\u2019Italia",
"Cities":"Firenze",
"Publisher":"Parenti",
"Years":1939,
"Fund":"BTM e BAL (due copie)",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1157.0,
"Authors":"Gadda, Carlo Emilio",
"Title":"Le meraviglie d\u2019Italia",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1964,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1158.0,
"Authors":"Gadda, Carlo Emilio",
"Title":"Le meraviglie d\u2019Italia",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1939,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1159.0,
"Authors":"Gadda, Carlo Emilio",
"Title":"La \u00abMostra leonardesca\u00bb di Milano",
"Cities":null,
"Publisher":null,
"Years":1618,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1160.0,
"Authors":"Gadda, Carlo Emilio",
"Title":"Norme per la redazione di un testo radiofonico",
"Cities":"Torino",
"Publisher":"ERI",
"Years":1953,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1161.0,
"Authors":"Gadda, Carlo Emilio",
"Title":"Norme per la redazione di un testo radiofonico",
"Cities":"Torino",
"Publisher":"ERI",
"Years":1973,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1162.0,
"Authors":"Gadda, Carlo Emilio",
"Title":"Norme per la redazione di un testo radiofonico",
"Cities":"Milano",
"Publisher":"ristampa IULM",
"Years":1973,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1163.0,
"Authors":"Gadda, Carlo Emilio",
"Title":"Novella seconda",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1970,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1164.0,
"Authors":"Gadda, Carlo Emilio",
"Title":"Novelle dal ducato in fiamme",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1953,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1165.0,
"Authors":"Gadda, Carlo Emilio",
"Title":"I nuovi borghi della Sicilia rurale",
"Cities":null,
"Publisher":null,
"Years":1941,
"Fund":"BAL e BTB Segn. Op. 87",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1166.0,
"Authors":"Gadda, Carlo Emilio",
"Title":"Il primo libro delle favole",
"Cities":"Venezia",
"Publisher":"Neri Pozza",
"Years":1952,
"Fund":"BAL",
"Segni":"Postille.",
"Category":"IL"
},{
"Unnamed: 0":1167.0,
"Authors":"Gadda, Carlo Emilio",
"Title":"Il primo libro delle favole",
"Cities":"Venezia",
"Publisher":"Neri Pozza",
"Years":1952,
"Fund":"BAL",
"Segni":"Due copie",
"Category":"IL"
},{
"Unnamed: 0":1168.0,
"Authors":"Gadda, Carlo Emilio",
"Title":"Il primo libro delle favole",
"Cities":"Milano",
"Publisher":"Il Saggiatore",
"Years":1969,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1169.0,
"Authors":"Gadda, Carlo Emilio",
"Title":"Quer pasticciaccio brutto de via Merulana",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1964,
"Fund":"BAL",
"Segni":"Fogli inseriti.",
"Category":"IL"
},{
"Unnamed: 0":1170.0,
"Authors":"Gadda, Carlo Emilio",
"Title":"I racconti",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1965,
"Fund":"BAL",
"Segni":"Due copie",
"Category":"IL"
},{
"Unnamed: 0":1171.0,
"Authors":"Gadda, Carlo Emilio",
"Title":"I sogni e la folgore",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1955,
"Fund":"BAL",
"Segni":"Data autografa di Gadda in data 20.01.1973 Roma.",
"Category":"IL"
},{
"Unnamed: 0":1172.0,
"Authors":"Gadda, Carlo Emilio",
"Title":"Tecnica e poesia",
"Cities":null,
"Publisher":null,
"Years":1637,
"Fund":"BAL",
"Segni":"Due copie",
"Category":"IL"
},{
"Unnamed: 0":1173.0,
"Authors":"Gadda, Carlo Emilio",
"Title":"Una poesia 1931-1932",
"Cities":"s.l.",
"Publisher":"s.e.",
"Years":"s.d.",
"Fund":"BAL",
"Segni":"Due copie.",
"Category":"IL"
},{
"Unnamed: 0":1174.0,
"Authors":"Gadda, Carlo Emilio",
"Title":"Una poesia",
"Cities":null,
"Publisher":null,
"Years":1963,
"Fund":"BAL",
"Segni":"Due copie",
"Category":"IL"
},{
"Unnamed: 0":1175.0,
"Authors":"Gadda, Carlo Emilio",
"Title":"Verso la Certosa",
"Cities":"Milano-Napoli",
"Publisher":"Ricciardi",
"Years":1961,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1176.0,
"Authors":"Gadda, Carlo Emilio",
"Title":"Verso la Certosa",
"Cities":"Milano-Napoli",
"Publisher":"Ricciardi",
"Years":1961,
"Fund":"BAL",
"Segni":"Nota di possesso di Gadda in data 1965.",
"Category":"IL"
},{
"Unnamed: 0":1177.0,
"Authors":"Gadda, Carlo Emilio",
"Title":"Verso la Certosa",
"Cities":"Milano-Napoli",
"Publisher":"Ricciardi",
"Years":1961,
"Fund":"BAL",
"Segni":"Nota di possesso di Gadda in data 11.06.1972.",
"Category":"IL"
},{
"Unnamed: 0":1178.0,
"Authors":"Gadda, Carlo Emilio",
"Title":"Viaggi di Gulliver cio\u00e8 del Gaddus alcune battute per il progettato libro",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1970,
"Fund":"BAL",
"Segni":"Cinque copie",
"Category":"IL"
},{
"Unnamed: 0":1179.0,
"Authors":"Gadda, Carlo Emilio",
"Title":"I viaggi la morte",
"Cities":"Milano  ",
"Publisher":"Garzanti",
"Years":1958,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1180.0,
"Authors":"Gadda, Giuseppe",
"Title":"L\u2019educazione equilibrata della giovent\u00f9",
"Cities":"Milano",
"Publisher":"Lanzani",
"Years":1905,
"Fund":"BTB Segn. Op. 88",
"Segni":"Omaggio.",
"Category":"IL"
},{
"Unnamed: 0":1181.0,
"Authors":"Gadda, Giuseppe",
"Title":"Poesie",
"Cities":"Milano-Napoli",
"Publisher":"Ricciardi",
"Years":1963,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1182.0,
"Authors":"Gadda, Giuseppe",
"Title":"Ricordi ed impressioni nella storia politica nel 1866-67",
"Cities":"Torino",
"Publisher":"Roux Frassati",
"Years":1899,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1183.0,
"Authors":"Gadda Conti, Piero",
"Title":"Adamira",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1956,
"Fund":"BTB Segn. 411",
"Segni":"Dedica dell\u2019autore in data 1956.",
"Category":"IL"
},{
"Unnamed: 0":1184.0,
"Authors":"Gadda Conti, Piero",
"Title":"Beati regni",
"Cities":"Milano",
"Publisher":"Ceschina",
"Years":1954,
"Fund":"BTB Segn. 412",
"Segni":"Dedica dell\u2019autore in data 1955.",
"Category":"IL"
},{
"Unnamed: 0":1185.0,
"Authors":"Gadda Conti, Piero",
"Title":"Carlo Linati nel suo tempo",
"Cities":"Milano",
"Publisher":"L\u2019osservatore politico letterario",
"Years":1970,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1186.0,
"Authors":"Gadda Conti, Piero",
"Title":"Gagliarda",
"Cities":"Milano",
"Publisher":"Ceschina",
"Years":1932,
"Fund":"BTB Segn. 415",
"Segni":"Dedica dell\u2019autore in data 1932. Sottolineature e postille.",
"Category":"IL"
},{
"Unnamed: 0":1187.0,
"Authors":"Gadda Conti, Piero",
"Title":"I mesi e le stagioni",
"Cities":"Milano",
"Publisher":"Edizioni di via Letizia",
"Years":1937,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1188.0,
"Authors":"Gadda Conti, Piero",
"Title":"Mozzo",
"Cities":"Milano",
"Publisher":"Ceschina",
"Years":1930,
"Fund":"BTB Segn. 416",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":1189.0,
"Authors":"Gadda Conti, Piero",
"Title":"La paura",
"Cities":"Milano",
"Publisher":"Ceschina",
"Years":1970,
"Fund":"BTB Segn. 413",
"Segni":"Dedica dell\u2019autore in data 1970.",
"Category":"IL"
},{
"Unnamed: 0":1190.0,
"Authors":"Gadda Conti, Piero",
"Title":"Ritorno in Italia",
"Cities":null,
"Publisher":null,
"Years":1938,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1191.0,
"Authors":"Gadda Conti, Piero",
"Title":"Vanterie adolescenti",
"Cities":"Padova",
"Publisher":"Rebellato",
"Years":1960,
"Fund":"BTB Segn. 414",
"Segni":"Dedica dell\u2019autore in data 1960.",
"Category":"IL"
},{
"Unnamed: 0":1192.0,
"Authors":"Gadda Conti, Piero",
"Title":"Vita e melodie di Giacomo Puccini",
"Cities":"Milano",
"Publisher":"Ceschina",
"Years":1955,
"Fund":null,
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1193.0,
"Authors":"Gaetani, Enrico",
"Title":"Apoph\u00f2reta",
"Cities":"Fiorentino",
"Publisher":"Napoli",
"Years":1956,
"Fund":null,
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1194.0,
"Authors":"Galante Garrone, Alessandro",
"Title":"Filippo Buonarroti e i rivoluzionari dell\u2019Ottocento",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1951,
"Fund":"BTB Segn. 1517",
"Segni":"Intonso.",
"Category":"S"
},{
"Unnamed: 0":1195.0,
"Authors":"Galiani, Ferdinando \u2013 Lorenzi, Giambattista",
"Title":"Socrate immaginario: commedia per musica",
"Cities":"Milano",
"Publisher":"Sonzogno",
"Years":1885,
"Fund":"BTB Segn. 417",
"Segni":"Parzialmente intonso.",
"Category":"IL"
},{
"Unnamed: 0":1196.0,
"Authors":"Galilei, Galileo",
"Title":"Galileo: pagine di scienza con introduzione, note e ritratti. II",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1925,
"Fund":"BTB Segn. 2149",
"Segni":"Dedica del curatore in data 1942.",
"Category":"T"
},{
"Unnamed: 0":1197.0,
"Authors":"Galilei, Galileo",
"Title":"Lettere a Cristina di Lorena sui rapporti tra l\u2019autorit\u00e0 della scrittura e la libert\u00e0 della scienza",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1943,
"Fund":"BTB Segn. 422",
"Segni":"Intonso.",
"Category":"T"
},{
"Unnamed: 0":1198.0,
"Authors":"Galilei, Galileo",
"Title":"Opere",
"Cities":"Milano-Roma",
"Publisher":"Rizzoli",
"Years":1938,
"Fund":"BTB Segn. 420-421",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":1199.0,
"Authors":"Galilei, Galileo",
"Title":"Opere",
"Cities":"Milano-Napoli",
"Publisher":"Ricciardi",
"Years":1953,
"Fund":"BTB Segn. 418",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":1200.0,
"Authors":"Galilei, Galileo",
"Title":"Il pensiero di Galileo Galilei: frammenti filosofici",
"Cities":"Lanciano",
"Publisher":"Carabba",
"Years":"s.d.",
"Fund":"BTB Segn. 419",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":1201.0,
"Authors":"Not found",
"Title":"Galleria d\u2019Arte Cairola. Il 18 febbraio 1943-XXI alle ore 17 inaugurazione della mostra personale di Fabrizio Clerici",
"Cities":"Milano",
"Publisher":"Officina d\u2019Arte grafica A. Lucini & C",
"Years":1943,
"Fund":"BTB Segn. Op. 133",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":1202.0,
"Authors":"Not found",
"Title":"Galleria degli Uffizi. Elenco dei dipinti",
"Cities":"Firenze",
"Publisher":"Giannini",
"Years":1920,
"Fund":"BTB Segn. 2211",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":1203.0,
"Authors":"Galli, Orazio",
"Title":"Gli schiavi nell\u2019antica Roma",
"Cities":"Roma",
"Publisher":"Anonima Romana Editoriale",
"Years":1934,
"Fund":null,
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1204.0,
"Authors":"Gallo, Ugo",
"Title":"Storia della letteratura ispanoamericana",
"Cities":"Milano",
"Publisher":"Nuova Accademia",
"Years":1954,
"Fund":"BTB Segn. 939",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1205.0,
"Authors":"Gallo, Ugo",
"Title":"Storia della letteratura spagnola",
"Cities":"Milano",
"Publisher":"Accademia",
"Years":1952,
"Fund":"BTB Segn. 940",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1206.0,
"Authors":"Gamo, Jos\u00e9 M. Alonso",
"Title":"Tus rosas frente al espejo",
"Cities":"Valencia",
"Publisher":"Tip. Moderna",
"Years":1952,
"Fund":"BTB Segn. 916",
"Segni":"Dedica dell\u2019autore in data 3.6.1953.",
"Category":"SL"
},{
"Unnamed: 0":1207.0,
"Authors":"Gamow, George",
"Title":"Trent\u2019anni che sconvolsero la fisica. La storia della Teoria dei Quanti",
"Cities":"Bologna",
"Publisher":"Zanichelli",
"Years":1966,
"Fund":"BTB Segn. 2075",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":1208.0,
"Authors":"Gandino, Giovanni Battista",
"Title":"Lo stile latino mostrato con temi di versione tratti da scrittori italiani del secolo 19. e corredati di regole ed osservazioni ad uso delle scuole",
"Cities":"Torino-Milano-Firenze-Roma-Napoli-Palermo",
"Publisher":"Paravia",
"Years":1925,
"Fund":"BTB Segn. 2438",
"Segni":"Nota di possesso autografa di Clara Gadda.",
"Category":"L"
},{
"Unnamed: 0":1209.0,
"Authors":"Garc\u00eca Lorca, Federico",
"Title":"Donna Rosita nubile",
"Cities":"Modena",
"Publisher":"Guanda",
"Years":1943,
"Fund":"BTB Segn. 917",
"Segni":null,
"Category":"SL"
},{
"Unnamed: 0":1210.0,
"Authors":"Garc\u00eca Lorca, Federico",
"Title":"Poesie",
"Cities":"Modena",
"Publisher":"Guanda",
"Years":1940,
"Fund":"BTB Segn. 918",
"Segni":null,
"Category":"SL"
},{
"Unnamed: 0":1211.0,
"Authors":"Gargiulo, Alfredo",
"Title":"Gabriele D\u2019Annunzio",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1941,
"Fund":"BTB Segn. 807",
"Segni":"Dedica dell\u2019autore in data 1941.",
"Category":"IL"
},{
"Unnamed: 0":1212.0,
"Authors":"Gargiulo, Alfredo",
"Title":"L\u2019opera di Enrico Pea",
"Cities":null,
"Publisher":null,
"Years":1453,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1213.0,
"Authors":"Gargiulo, Alfredo",
"Title":"Scritti di estetica",
"Cities":"Firenze",
"Publisher":"Le Monnier",
"Years":1952,
"Fund":"BTB Segn. 808",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":1214.0,
"Authors":"Garneri, Augusto",
"Title":"Gli ordini di architettura civile di Giacomo Barozzi da Vignola architetto",
"Cities":"o. Torino-Roma-Milano-FirenzeNapoli",
"Publisher":"Paravia",
"Years":1910,
"Fund":"BTB Segn. 2189",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":1215.0,
"Authors":"Garnier, Enrico",
"Title":"Un po\u2019 di calcolo sublime (analisi infinitesimale) reso accessibile alle persone di media cultura col mezzo dell\u2019immagine e del calcolo numerico",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1941,
"Fund":"BTB Segn. 2070-2071",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":1216.0,
"Authors":"Garrone, Dino",
"Title":"Giovanni Verga",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1941,
"Fund":"BTB Segn. 808 bis",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1217.0,
"Authors":"Garuffa, Egidio",
"Title":"Motori ad olio pesante, diesel, ecc",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1912,
"Fund":"BTB Segn. 2035",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":1218.0,
"Authors":"Gaskell, Elizabeth Cleghorn",
"Title":"Il paese delle nobili signore (Cranford)",
"Cities":"Milano",
"Publisher":"Rizzoli",
"Years":1950,
"Fund":"BTB Segn. 1260",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1219.0,
"Authors":"Gastaldi, Giovanni",
"Title":"Tavole di ragguaglio riguardanti le misure e i pesi in uso presso le principali citt\u00e0 italiane",
"Cities":"Novara",
"Publisher":"Tipografia fratelli Miglio",
"Years":1886,
"Fund":"BAL",
"Segni":"Nota di possesso in data 1905.",
"Category":"T"
},{
"Unnamed: 0":1220.0,
"Authors":"Gatti, Riccardo",
"Title":"Il genere grammaticale nell\u2019indoeuropeo. Studi e ricerche con riguardo anche ad altri gruppi linguistici",
"Cities":"Bologna",
"Publisher":"Treves",
"Years":1912,
"Fund":"BTB Segn. Op. 75",
"Segni":"Omaggio 25.6.1920",
"Category":"L"
},{
"Unnamed: 0":1221.0,
"Authors":"Gatti, Riccardo",
"Title":"Il parlare di Jesi e l\u2019italiano",
"Cities":"Jesi",
"Publisher":"Flori",
"Years":1926,
"Fund":"BTB Segn. Op. 83",
"Segni":"Omaggio dell\u2019autore 17.11.1929.",
"Category":"L"
},{
"Unnamed: 0":1222.0,
"Authors":"Gatto, Alfonso",
"Title":"Poesie (1929-1941)",
"Cities":"Firenza",
"Publisher":"Vallecchi",
"Years":1941,
"Fund":"BTB Segn. 423",
"Segni":"Dedica dell\u2019autore. Parzialmente intonso.",
"Category":"IL"
},{
"Unnamed: 0":1223.0,
"Authors":"Gauguin, Paul",
"Title":"Noa Noa e altri scritti (1891-1903)",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1941,
"Fund":"BTB Segn. 993",
"Segni":"Dedica del curatore.",
"Category":"FL"
},{
"Unnamed: 0":1224.0,
"Authors":"Gauthier, Maximilien",
"Title":"Daumier",
"Cities":"Paris",
"Publisher":"Braun",
"Years":"s.d.",
"Fund":"BTB Segn. 2203",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":1225.0,
"Authors":"Gautier, Th\u00e9ophile",
"Title":"Emaux et cam\u00e9es",
"Cities":"Milano",
"Publisher":"Martello",
"Years":1945,
"Fund":"BTB Segn. 994",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":1226.0,
"Authors":"Gavazzeni, Gianandrea",
"Title":"La casa di Arlecchino: prose memorie e un dialogo",
"Cities":"Milano",
"Publisher":"Ricordi",
"Years":1957,
"Fund":"BTB Segn. 424",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1227.0,
"Authors":"Gavazzeni, Gianandrea",
"Title":"Viaggio in paesi musicali",
"Cities":"Firenze",
"Publisher":"Parenti",
"Years":1939,
"Fund":"BTB Segn. 425",
"Segni":"Intonso.",
"Category":"IL"
},{
"Unnamed: 0":1228.0,
"Authors":"Gaxotte, Pierre",
"Title":"La France de Louis XIV",
"Cities":"Paris",
"Publisher":"Hachette",
"Years":1946,
"Fund":"BTB Segn. 1608",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1229.0,
"Authors":"Gaxotte, Pierre",
"Title":"La R\u00e9volution fran\u00e7aise",
"Cities":"Paris",
"Publisher":"Fayard",
"Years":1947,
"Fund":"BTB Segn. 1606",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1230.0,
"Authors":"Gaxotte, Pierre",
"Title":"La Rivoluzione francese",
"Cities":"Milano",
"Publisher":"Rizzoli",
"Years":1949,
"Fund":"BTB Segn. 1607",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1231.0,
"Authors":"Gaxotte, Pierre",
"Title":"Le si\u00e8cle de Louis XV",
"Cities":"Paris",
"Publisher":"Fayard",
"Years":1948,
"Fund":"BTB Segn. 1608",
"Segni":"Segnalibro inserito.",
"Category":"S"
},{
"Unnamed: 0":1232.0,
"Authors":"Gay, John",
"Title":"L\u2019opera dei mendicanti",
"Cities":"Torino",
"Publisher":"SET",
"Years":1943,
"Fund":"BTB Segn. 1261",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":1233.0,
"Authors":"Gay, Paul",
"Title":"J. F. Millet",
"Cities":"Paris",
"Publisher":"Braun",
"Years":1950,
"Fund":"BTB Segn. 2205",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1234.0,
"Authors":"Genet, Jean",
"Title":"Journal du voleur",
"Cities":"Paris ",
"Publisher":"NRFGallimard",
"Years":1949,
"Fund":"BTB Segn. 995",
"Segni":"Piega. Foglio inserito.",
"Category":"FL"
},{
"Unnamed: 0":1235.0,
"Authors":"Gentile, Iginio",
"Title":"Elementi di storia antica. I. L\u2019Oriente antico. Prospetto storico",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1890,
"Fund":"BTB Segn. 1464",
"Segni":"Nota di possesso autografa di Adele Gadda Lehr.",
"Category":"S"
},{
"Unnamed: 0":1236.0,
"Authors":"Gentile, Iginio",
"Title":"Storia romana dalle origini di Roma alla caduta dell\u2019Impero d\u2019Occidente. Compendio ad uso delle scuole secondarie",
"Cities":"Milano",
"Publisher":"Vallardi",
"Years":1885,
"Fund":"BTB Segn. 1465",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1237.0,
"Authors":"Gerla, Renzo",
"Title":"Renzo Gerla",
"Cities":"Ginevra",
"Publisher":"Maestri dell\u2019Architettura",
"Years":1931,
"Fund":"BTB Segn. 2228",
"Segni":"Dedica dell\u2019autore in data 24.10.1935.",
"Category":"L"
},{
"Unnamed: 0":1238.0,
"Authors":"Not found",
"Title":"Germanica. Raccolta di narratori dalle origini ai nostri giorni",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1942,
"Fund":"BTB Segn. 1162",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1239.0,
"Authors":"Gersbach, Markus",
"Title":"Carlo Emilio Gadda Wirklichkeit und Verzerrung",
"Cities":"Bern",
"Publisher":"Francke Verlag",
"Years":1969,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore in data 10.10.1969 e biglietto da visita.",
"Category":"L"
},{
"Unnamed: 0":1240.0,
"Authors":"Gessi, Leone",
"Title":"Nella casa del padre",
"Cities":"Citt\u00e0 del Vaticano",
"Publisher":"L\u2019Illustrazione Vaticana",
"Years":1933,
"Fund":"BAC",
"Segni":"Dedica dell\u2019autore in data 18.12.1933.",
"Category":"IL"
},{
"Unnamed: 0":1241.0,
"Authors":"Ghiselli, Luca",
"Title":"Diario",
"Cities":"Firenze",
"Publisher":"Parenti",
"Years":1942,
"Fund":"BTB Segn. 426",
"Segni":"Intonso.",
"Category":"IL"
},{
"Unnamed: 0":1242.0,
"Authors":"Ghiselli, Luca",
"Title":"Poesie: con un\u2019appendice di prose e racconti",
"Cities":"Firenze",
"Publisher":"Parenti",
"Years":1942,
"Fund":"BTB Segn. 427",
"Segni":"Intonso.",
"Category":"IL"
},{
"Unnamed: 0":1243.0,
"Authors":"Ghisleri, Arcangelo",
"Title":"Testo atlante del mondo antico \u2013 parte 1: Oriente e Grecia",
"Cities":"Bergamo",
"Publisher":"Istituto italiano d\u2019arti grafiche",
"Years":1913,
"Fund":"BAL",
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":1244.0,
"Authors":"Ghisleri, Arcangelo",
"Title":"Testo atlante \u2013 Medio Evo",
"Cities":"Bergamo",
"Publisher":"Istituto italiano d\u2019arti grafiche",
"Years":1911,
"Fund":"BAL",
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":1245.0,
"Authors":"Ghisleri, Arcangelo",
"Title":"Testo atlante \u2013 Evo moderno e contemporaneo",
"Cities":"Bergamo",
"Publisher":"Istituto italiano d\u2019arti grafiche",
"Years":1929,
"Fund":"BAL",
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":1246.0,
"Authors":"Giachetti, Cipriano",
"Title":"Il Congresso di Vienna",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1941,
"Fund":"BTB Segn. 1752",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1247.0,
"Authors":"Giachetti, Cipriano",
"Title":"La tragica avventura dei Concini. La fine del maresciallo d\u2019Ancre (1600-1617)",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1939,
"Fund":"BTB Segn. 1609",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1248.0,
"Authors":"Giampieri, Dante",
"Title":"Poesie",
"Cities":"Firenze",
"Publisher":"Il Fiore",
"Years":1943,
"Fund":"BTB Segn. 428",
"Segni":"Dedica dell\u2019autore in data 1946.",
"Category":"IL"
},{
"Unnamed: 0":1249.0,
"Authors":"Giampieri, Dante \u2013 Marcucci, Mario",
"Title":"5 dipinti di Mario Marcucci. 5 poesie di Dante Giampieri",
"Cities":"Firenze",
"Publisher":"Edizioni d\u2019Arte Galleria Santacroce",
"Years":1967,
"Fund":"BTB Segn. 2174",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1250.0,
"Authors":"Giannessi, Ferdinando",
"Title":"Il grande Carducci",
"Cities":"Treviso",
"Publisher":"Edizioni di Treviso",
"Years":1958,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":1251.0,
"Authors":"Giardini, Cesare",
"Title":"L\u2019affaire D\u2019Enghien",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1945,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1252.0,
"Authors":"Giardini, Cesare",
"Title":"Il tragico destino di Don Carlos (1545-1568)",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1953,
"Fund":"BTB Segn. 1588",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1253.0,
"Authors":"Gide, Andr\u00e9",
"Title":"Anthologie de la po\u00e8sie fran\u00e7aise",
"Cities":"Paris",
"Publisher":"Gallimard",
"Years":1949,
"Fund":"BAL",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":1254.0,
"Authors":"Gide, Andr\u00e9",
"Title":"Les caves du Vatican. Sotie",
"Cities":"Paris",
"Publisher":"NRFGallimard",
"Years":1922,
"Fund":"BTB Segn. 996",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":1255.0,
"Authors":"Gide, Andr\u00e9",
"Title":"Corydon. Quatre dialogues socratiques",
"Cities":"Paris",
"Publisher":"NRFGallimard",
"Years":1924,
"Fund":"BTB Segn. 997",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":1256.0,
"Authors":"Gide, Andr\u00e9",
"Title":"L\u2019\u00e9cole des femmes; Robert; Genevi\u00e8ve",
"Cities":"Paris",
"Publisher":"NRFGallimard",
"Years":1947,
"Fund":"BTB Segn. 998",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":1257.0,
"Authors":"Gide, Andr\u00e9",
"Title":"Incontri e pretesti",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1945,
"Fund":"BTB Segn. 999",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":1258.0,
"Authors":"Giglioli, Odoardo Hillyer",
"Title":"Masaccio",
"Cities":"Roma",
"Publisher":"Istituto Nazionale L.U.C.E.",
"Years":1930,
"Fund":"BTB Segn. 2182",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":1259.0,
"Authors":"Gilson, Etienne",
"Title":"La filosofia del Medioevo",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1932,
"Fund":"BTB Segn. 1838",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":1260.0,
"Authors":"Gilson, Etienne",
"Title":"La philosophie au Moyen Age. I. De Scot \u00c9rig\u00e8ne \u00e0 S. Bonaventure",
"Cities":"Paris",
"Publisher":"Payot",
"Years":1922,
"Fund":"BTB Segn. 1836 bis",
"Segni":"Foglio inserito.",
"Category":"F"
},{
"Unnamed: 0":1261.0,
"Authors":"Gilson, Etienne",
"Title":"La philosophie au Moyen Age. II. De S. Thomas d\u2019Aquin \u00e0 G. Occam",
"Cities":"Paris",
"Publisher":"Payot",
"Years":1922,
"Fund":"BTB Segn. 1837",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":1262.0,
"Authors":"Ginzburg, Natalia",
"Title":"Lessico famigliare",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1963,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1263.0,
"Authors":"Ginzburg, Natalia",
"Title":"Le piccole virt\u00f9",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1962,
"Fund":"BTB Segn. 429",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1264.0,
"Authors":"Giolitti, Antonio",
"Title":"Il comunismo in Europa",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1960,
"Fund":"BTB Segn. 1753",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1265.0,
"Authors":"Giordano-Orsini, Gian Napoleone",
"Title":"Corso elementare di lingua inglese ad uso delle scuole medie inferiori",
"Cities":"Firenze",
"Publisher":"La Nuova Italia",
"Years":1939,
"Fund":"BTB Segn. 2439",
"Segni":null,
"Category":"GR"
},{
"Unnamed: 0":1266.0,
"Authors":"Giorni, Carlo",
"Title":"Letture greche di prosa e di poesia secondo gli ultimi programmi",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1908,
"Fund":null,
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1267.0,
"Authors":"Not found",
"Title":"Giovanni Fattori",
"Cities":"Firenze",
"Publisher":"Electa",
"Years":1949,
"Fund":"BTB Segn. 2201",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":1268.0,
"Authors":"Giovenale, Decimo Giunio",
"Title":"Le satire",
"Cities":"Milano",
"Publisher":"Istituto Editoriale Italiano",
"Years":1930,
"Fund":"BTB Segn. 51",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":1269.0,
"Authors":"Giovenale, Decimo Giunio",
"Title":"Satires",
"Cities":"Paris",
"Publisher":"Les Belles Lettres",
"Years":1950,
"Fund":"BTB Segn. 102",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":1270.0,
"Authors":"Giraud, Edoardo",
"Title":"I duu ors",
"Cities":"s.l.",
"Publisher":"s.n.",
"Years":"s.d.",
"Fund":"BAL",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":1271.0,
"Authors":"Giraud, Edoardo",
"Title":" Minestron",
"Cities":"s.l.",
"Publisher":"s.n.",
"Years":"s.d.",
"Fund":"BAL",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":1272.0,
"Authors":"Giraud, Edoardo",
"Title":" Tecoppa brumista",
"Cities":"s.l.",
"Publisher":"s.n.",
"Years":"s.d.",
"Fund":"BAL",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":1273.0,
"Authors":"Giua, Stefano",
"Title":"Elogio dell\u2019ipocrisia",
"Cities":"Roma",
"Publisher":"La nuova grafica",
"Years":1960,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore.",
"Category":"L"
},{
"Unnamed: 0":1274.0,
"Authors":"Not found",
"Title":" Giuseppe Gioachino Belli e la Roma del suo tempo. Mostra nel centenario della morte del poeta\n(1863-1963). Palazzo Braschi, dicembre 1963-febbraio 1964",
"Cities":"Roma",
"Publisher":"De Luca",
"Years":1963,
"Fund":"BTB Segn. 760",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1275.0,
"Authors":"Giussani, Camillo",
"Title":"Chiacchiere di un alpinista",
"Cities":"Milano",
"Publisher":"Ceschina",
"Years":1961,
"Fund":"BTB Segn. 431",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1276.0,
"Authors":"Giusti, Giuseppe",
"Title":"Epistolario di Giuseppe Giusti",
"Cities":"Firenze",
"Publisher":"Le Monnier",
"Years":1863,
"Fund":"BAL",
"Segni":"Nota di possesso di Adele Gadda Lehr.",
"Category":"IL"
},{
"Unnamed: 0":1277.0,
"Authors":"Giusti, Giuseppe",
"Title":"Le poesie di Giuseppe Giusti",
"Cities":"Milano",
"Publisher":"Bietti.",
"Years":1914,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1278.0,
"Authors":"Giusti, Giuseppe",
"Title":"Poesie.",
"Cities":"Sesto San Giovanni",
"Publisher":"Barion",
"Years":1933,
"Fund":"BTB Segn. 432",
"Segni":"Parzialmente intonso.",
"Category":"IL"
},{
"Unnamed: 0":1279.0,
"Authors":"Giusti, Giuseppe",
"Title":"Prose di Giuseppe Giusti",
"Cities":"Firenze",
"Publisher":"Barbera",
"Years":1924,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1280.0,
"Authors":"Giusti, Giuseppe",
"Title":"Raccolta di proverbi toscani",
"Cities":"Firenze",
"Publisher":"Le Monnier",
"Years":1853,
"Fund":"BTB Segn. 434",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1281.0,
"Authors":"Giusti, Giuseppe",
"Title":"Versi editi e inediti",
"Cities":"Firenze",
"Publisher":"Le Monnier",
"Years":1890,
"Fund":"BTB Segn. 433",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1282.0,
"Authors":"Giusti, Wolf",
"Title":"Dostoewski e il mondo russo dell\u2019800",
"Cities":"Napoli",
"Publisher":"Edizioni Scientifiche Italiane",
"Years":1952,
"Fund":"BTB Segn. 1400",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1283.0,
"Authors":"Glotz, Gustave",
"Title":"La civilt\u00e0 egea",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1953,
"Fund":"BTB Segn. 1466",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1284.0,
"Authors":"Gnecchi, Alessandro",
"Title":"Le montagne dell\u2019Alta Valle Camonica",
"Cities":"Brescia",
"Publisher":"Stabilimento tipografico Luzzago",
"Years":1908,
"Fund":"BAL",
"Segni":"Nota di possesso Carlo Emilio Gadda 29 agosto 1915 Edolo 5\u00b0 reggimento alpini.",
"Category":"L"
},{
"Unnamed: 0":1285.0,
"Authors":"Goethe, Johann Wolfgang von",
"Title":"Autobiografia (Poesia e verit\u00e0)",
"Cities":"Milano",
"Publisher":"Sonzogno",
"Years":1938,
"Fund":"BTB Segn. 1177",
"Segni":"Intonso.",
"Category":"GL"
},{
"Unnamed: 0":1286.0,
"Authors":"Goethe, Johann Wolfgang von",
"Title":"La bella genovese",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1942,
"Fund":"BTB Segn. 1179",
"Segni":null,
"Category":"GL"
},{
"Unnamed: 0":1287.0,
"Authors":"Goethe, Johann Wolfgang von",
"Title":" La Campagna di Francia: L\u2019assedio di Magonza",
"Cities":"Milano",
"Publisher":"Sonzogno",
"Years":"s.d.",
"Fund":"BTB Segn. 1178",
"Segni":null,
"Category":"GL"
},{
"Unnamed: 0":1288.0,
"Authors":"Goethe, Johann Wolfgang von",
"Title":"I dolori del giovane Werther",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1938,
"Fund":"BTB Segn. 1180",
"Segni":"Intonso.",
"Category":"GL"
},{
"Unnamed: 0":1289.0,
"Authors":"Goethe, Johann Wolfgang von",
"Title":" Faust",
"Cities":"Leipzig",
"Publisher":"Reclam",
"Years":"s.d.",
"Fund":"BTB Segn. 1182",
"Segni":null,
"Category":"GL"
},{
"Unnamed: 0":1290.0,
"Authors":"Goethe, Johann Wolfgang von",
"Title":"  Faust",
"Cities":"Leipzig",
"Publisher":" Bibliographisches Institut",
"Years":"s.d.",
"Fund":null,
"Segni":null,
"Category":"GL"
},{
"Unnamed: 0":1291.0,
"Authors":"Goethe, Johann Wolfgang von",
"Title":"Faust",
"Cities":"Paris",
"Publisher":"Lemerre",
"Years":1938,
"Fund":"BTB Segn. 1181",
"Segni":"Pieghe.",
"Category":"GL"
},{
"Unnamed: 0":1292.0,
"Authors":"Goethe, Johann Wolfgang von",
"Title":"Gedichte",
"Cities":"LeipzigWien",
"Publisher":" Bibliographisches Institut",
"Years":"s.d.",
"Fund":"BTB Segn. 1176",
"Segni":"Nota di possesso autografa in data 10.10.1919.",
"Category":"GL"
},{
"Unnamed: 0":1293.0,
"Authors":"Goethe, Johann Wolfgang von",
"Title":"Opere",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1944,
"Fund":"BTB Segn. 1163-1165",
"Segni":null,
"Category":"GL"
},{
"Unnamed: 0":1294.0,
"Authors":"Goethe, Johann Wolfgang von",
"Title":"Poesie liriche",
"Cities":"Bologna",
"Publisher":"Zanichelli",
"Years":1917,
"Fund":"BTB Segn. 1183",
"Segni":"Nota di possesso autografa in data 31.05.1919. Dono di Adele Gadda Lehr.",
"Category":"GL"
},{
"Unnamed: 0":1295.0,
"Authors":"Goethe, Johann Wolfgang von",
"Title":"Viaggio in Italia",
"Cities":"Genova",
"Publisher":"Donath",
"Years":1895,
"Fund":"BTB Segn. 1184",
"Segni":"Nota di possesso autografa di Adele Gadda Lehr.",
"Category":"GL"
},{
"Unnamed: 0":1296.0,
"Authors":"Goethe, Johann Wolfgang von",
"Title":"Werke",
"Cities":"Berlin",
"Publisher":"Grote\u2019scheVerlagsbuch",
"Years":1870,
"Fund":"BTB Segn. 1166-1175",
"Segni":null,
"Category":"GL"
},{
"Unnamed: 0":1297.0,
"Authors":"Gogol\u2019, Nikolaj Vasil\u2019evic",
"Title":"Le avventure di Cicikov ovvero Le anime morte",
"Cities":"Torino",
"Publisher":"Slavia",
"Years":1932,
"Fund":"BTB Segn. 1375-1376",
"Segni":null,
"Category":"RL"
},{
"Unnamed: 0":1298.0,
"Authors":"Gogol\u2019, Nikolaj Vasil\u2019evic",
"Title":"Le avventure di Cicikov ovvero Le anime morte",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1941,
"Fund":"BTB Segn. 1373-1374",
"Segni":null,
"Category":"RL"
},{
"Unnamed: 0":1299.0,
"Authors":"Gogol\u2019, Nikolaj Vasil\u2019evic",
"Title":"Come Iv\u00e0n Ivanovich question\u00f2 con Iv\u00e0n Nik\u00ecforovich",
"Cities":"Roma",
"Publisher":"Bardi",
"Years":1923,
"Fund":"BTB Segn. 1377",
"Segni":null,
"Category":"RL"
},{
"Unnamed: 0":1300.0,
"Authors":"Gogol\u2019, Nikolaj Vasil\u2019evic",
"Title":"Racconti di Pietroburgo",
"Cities":"Milano-Roma",
"Publisher":"Rizzoli",
"Years":1941,
"Fund":"BTB Segn. 1378",
"Segni":null,
"Category":"RL"
},{
"Unnamed: 0":1301.0,
"Authors":"Gogol\u2019, Nikolaj Vasil\u2019evic",
"Title":"Taras Bulba",
"Cities":"Milano",
"Publisher":"Morreale",
"Years":1929,
"Fund":"BTB Segn. 1379",
"Segni":"Intonso.",
"Category":"RL"
},{
"Unnamed: 0":1302.0,
"Authors":"Gogol\u2019, Nikolaj Vasil\u2019evic",
"Title":"Taras Bulba",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1959,
"Fund":"BAL",
"Segni":null,
"Category":"RL"
},{
"Unnamed: 0":1303.0,
"Authors":"Goldoni, Carlo",
"Title":"Commedie: La locandiera; Gli innamorati; I rusteghi; Le baruffe chiozzotte",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1941,
"Fund":"BTB Segn. 435",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1304.0,
"Authors":"Goldoni, Carlo",
"Title":"Opere. Con appendice del teatro comico nel Settecento",
"Cities":"Milano-Napoli",
"Publisher":"Ricciardi",
"Years":1954,
"Fund":"BTB Segn. 436",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1305.0,
"Authors":"Goldoni, Carlo",
"Title":" Tutte le opere di Carlo Goldoni, vol. XI",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1951,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1306.0,
"Authors":"Goldoni, Carlo",
"Title":" Tutte le opere di Carlo Goldoni, vol. XII",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1952,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1307.0,
"Authors":"Goncarov, Ivan Aleksandrovic",
"Title":"Oblomov",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1941,
"Fund":"BTB Segn. 1380",
"Segni":null,
"Category":"RL"
},{
"Unnamed: 0":1308.0,
"Authors":"Goncourt, Edmond e Jules de",
"Title":"Journal des Goncourt: M\u00e9moires de la vie litt\u00e9raire",
"Cities":"Paris",
"Publisher":"Fasquelle",
"Years":1912,
"Fund":"BTB Segn. 1000-1008",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":1309.0,
"Authors":"G\u00f3ngora y Argote, Luis de",
"Title":"Sonetti funebri",
"Cities":"Milano",
"Publisher":"Ferriani",
"Years":1961,
"Fund":"BTB Segn. 919",
"Segni":"Dedica del curatore in data 14.8.1961.",
"Category":"SL"
},{
"Unnamed: 0":1310.0,
"Authors":"Gourmont, Remy De",
"Title":"Promenades litt\u00e9raires",
"Cities":"Paris",
"Publisher":"Gallimard",
"Years":"s.d.",
"Fund":null,
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":1311.0,
"Authors":"Govoni, Corrado",
"Title":"Antologia poetica (1903-1953)",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1953,
"Fund":"BTB Segn. 437",
"Segni":"Dedica dell\u2019autore in data 6.1953.",
"Category":"IL"
},{
"Unnamed: 0":1312.0,
"Authors":"Gozzano, Guido",
"Title":"I colloqui e altre poesie",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1951,
"Fund":"BTB Segn. 439",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1313.0,
"Authors":"Gozzano, Guido",
"Title":"Le poesie",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1960,
"Fund":"BTB Segn. 438",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1314.0,
"Authors":"Gozzano, Guido",
"Title":"La via del rifugio",
"Cities":"Milano  ",
"Publisher":"Garzanti",
"Years":1951,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1315.0,
"Authors":"Gozzi, Gasparo",
"Title":"Gazzetta veneta",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1943,
"Fund":"BTB Segn. 440-441",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1316.0,
"Authors":"Gradenigo, Sergio \u2013 Perco, Giovanni Andrea",
"Title":"Postumia e le sue celebri grotte",
"Cities":"Postumia",
"Publisher":"Amministrazione delle Grotte di Postumia",
"Years":1930,
"Fund":"BTB Segn. 2339",
"Segni":"Nota di possesso autografa in data 1931.",
"Category":"G "
},{
"Unnamed: 0":1317.0,
"Authors":"Graetz, LeoRossi, Carl",
"Title":" Le nuove teorie atomiche e la costituzione della materia",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1925,
"Fund":"BTM",
"Segni":"Nota di possesso e data 1925 Milano.",
"Category":"T"
},{
"Unnamed: 0":1318.0,
"Authors":"Not found",
"Title":"Gramatica de la lengua espa\u00f1ola",
"Cities":"Madrid",
"Publisher":"Espasa-Calpe",
"Years":1931,
"Fund":"BTB Segn. 2405",
"Segni":null,
"Category":"GR"
},{
"Unnamed: 0":1319.0,
"Authors":"Not found",
"Title":"Grammaire g\u00e9n\u00e9rale de Port Royal",
"Cities":"Paris",
"Publisher":"Hachette",
"Years":1846,
"Fund":"BTB Segn. 2440",
"Segni":null,
"Category":"GR"
},{
"Unnamed: 0":1320.0,
"Authors":"Not found",
"Title":"Grand dictionnaire fran\u00e7aisitalien italienfran\u00e7ais compos\u00e9 sur les dictionnaires de l\u2019Acad\u00e9mie Fran\u00e7aise et de la Crusca",
"Cities":"Milano",
"Publisher":"Nervetti",
"Years":1826,
"Fund":"BTB Segn. 2416-2417",
"Segni":null,
"Category":"D"
},{
"Unnamed: 0":1321.0,
"Authors":"Not found",
"Title":"La grande bonificazione ferrarese",
"Cities":"s.l.",
"Publisher":"Bonifica e Colonizzazione",
"Years":1938,
"Fund":"BTB Segn. Op. 74",
"Segni":"Sottolineature e postille.",
"Category":"T"
},{
"Unnamed: 0":1322.0,
"Authors":"Granelli Cerlini, Amalia",
"Title":"Un ministro del regno italico: Antonio Veneri",
"Cities":"Treviglio",
"Publisher":"Molina & Saccardo",
"Years":1927,
"Fund":null,
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1323.0,
"Authors":"Granville Baker, Harley",
"Title":"Introduzione all\u2019Amleto",
"Cities":"Bari",
"Publisher":"Laterza",
"Years":1959,
"Fund":"BAL",
"Segni":"Dedica del traduttore in data 11.6.1959.",
"Category":"L"
},{
"Unnamed: 0":1324.0,
"Authors":"Grasso, Gabriele",
"Title":"Sul significato geografico del nome \u00abcontra\u00bb in Italia",
"Cities":"Milano",
"Publisher":"Bernardoni",
"Years":1901,
"Fund":"BTB Segn. Op. 71",
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":1325.0,
"Authors":"Gray, Richard O.",
"Title":"Dizionario inglese-italiano e viceversa",
"Cities":"Milano",
"Publisher":"Treves",
"Years":1884,
"Fund":"BAL",
"Segni":null,
"Category":"D"
},{
"Unnamed: 0":1326.0,
"Authors":"Grazzini, Anton Francesco (detto il Lasca)",
"Title":"Le cene",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1943,
"Fund":"BTB Segn. 442-443",
"Segni":"Due copie.",
"Category":"L"
},{
"Unnamed: 0":1327.0,
"Authors":"Green, Julien",
"Title":"Adrienne Mesurat",
"Cities":"Paris",
"Publisher":"Plon",
"Years":1923,
"Fund":"BTB Segn. 1010",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1328.0,
"Authors":"Greene, Graham",
"Title":"Il nocciolo della questione",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1952,
"Fund":"BTB Segn. 1262",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1329.0,
"Authors":"Grimal, Pierre",
"Title":"Horace",
"Cities":"Tours",
"Publisher":"Edition du Seuil",
"Years":1958,
"Fund":"BAL",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":1330.0,
"Authors":"Grisi, Francesco",
"Title":"Incontri e occasioni",
"Cities":"Milano  ",
"Publisher":"Ceschina",
"Years":1965,
"Fund":"BTB Segn. 810",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1331.0,
"Authors":"Grisi, Francesco",
"Title":"Incontri in libreria (scrittori italiani d\u2019oggi)",
"Cities":"Milano",
"Publisher":"Ceschina",
"Years":1961,
"Fund":"BTB Segn. 811",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1332.0,
"Authors":"Groff Conklin, Edward",
"Title":"Racconti di fantascienza scritti daglii scienziati",
"Cities":"Milano",
"Publisher":"Rizzoli",
"Years":1965,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1333.0,
"Authors":"Grosso, Orlando",
"Title":"Genova e la Riviera ligure",
"Cities":"Roma",
"Publisher":"Libreria dello Stato",
"Years":1951,
"Fund":"BTB Segn. 2341",
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":1334.0,
"Authors":"Not found",
"Title":"Gruppo 63: la nuova letteratura. 34 scrittori, Palermo ottobre 1963.",
"Cities":"Milano",
"Publisher":"Feltrinelli",
"Years":1964,
"Fund":"BTB Segn. 809",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1335.0,
"Authors":"Not found",
"Title":"Gruppo Societ\u00e0 Adriatica di elettricit\u00e0 e la sua attivit\u00e0 economica dalle origini al 1929",
"Cities":"Roma",
"Publisher":"L\u2019Universale",
"Years":1929,
"Fund":"BTB Segn. 2110",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":1336.0,
"Authors":"Guarnieri, Silvio",
"Title":"Cinquant\u2019anni di narrativa in Italia",
"Cities":"Firenze",
"Publisher":"Parenti",
"Years":1955,
"Fund":"BTB Segn. 814",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1337.0,
"Authors":"Guarnieri, Silvio",
"Title":"Saggio su D\u2019Annunzio",
"Cities":"Firenze",
"Publisher":"Parenti",
"Years":1937,
"Fund":"BTB Segn. 812",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1338.0,
"Authors":"Guarnieri, Silvio",
"Title":"Lo spettatore appassionato",
"Cities":"Firenze",
"Publisher":"Solaria",
"Years":1934,
"Fund":"BTB Segn. 813",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1339.0,
"Authors":"Guerra, Antonio",
"Title":"Dopo i leoni",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1956,
"Fund":"BTB Segn. 445",
"Segni":"Intonso.",
"Category":"IL"
},{
"Unnamed: 0":1340.0,
"Authors":"Guerra, Antonio",
"Title":"Lunario",
"Cities":"Faenza",
"Publisher":"Benedetti",
"Years":1954,
"Fund":"BTB Segn. 444",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1341.0,
"Authors":"Not found",
"Title":"La Guerra",
"Cities":"Milano",
"Publisher":"Fratelli Treves",
"Years":1936,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1342.0,
"Authors":"Guerrazzi, Francesco Domenico",
"Title":"L\u2019assedio di Firenze",
"Cities":"Milano",
"Publisher":"Dante Alighieri",
"Years":1869,
"Fund":"BTB Segn. 1519",
"Segni":"Nota di possesso in data 14.11.1906. Pieghe.",
"Category":"S "
},{
"Unnamed: 0":1343.0,
"Authors":"Guerreschi, Giuseppe",
"Title":"Dipinti",
"Cities":"Comune di Ferrara",
"Publisher":null,
"Years":1969,
"Fund":"BAL",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":1344.0,
"Authors":"Guerrieri-Gonzaga, Carlo",
"Title":"Marco Minghetti. Commemorazione fatta alla R. Accademia Virgiliana il 5 giugno 1892",
"Cities":"Mantova",
"Publisher":"Segna",
"Years":1892,
"Fund":"BTB Segn. Op. 76",
"Segni":"Dedica dell\u2019autore a Giuseppe Gadda.",
"Category":"S"
},{
"Unnamed: 0":1345.0,
"Authors":"Guerzoni, Giuseppe",
"Title":"La vita di Nino Bixio",
"Cities":"Firenze",
"Publisher":"Barbera",
"Years":1875,
"Fund":"BTB Segn. 1520",
"Segni":"Nota di possesso autografa di Gadda.  Postille.",
"Category":"S"
},{
"Unnamed: 0":1346.0,
"Authors":"Gueux, Fran\u00e7ois",
"Title":"Storia dell\u2019istruzione e dell\u2019educazione",
"Cities":"Torino-Milano-Firenze-Roma-Napoli-Palermo ",
"Publisher":"Paravia",
"Years":1924,
"Fund":"BTB Segn. 2003-2004",
"Segni":"Nota di possesso autografa in data 18.05. 1924 Milano.",
"Category":"S"
},{
"Unnamed: 0":1347.0,
"Authors":"Guglielmi, Angelo",
"Title":"Avanguardia e sperimentalismo",
"Cities":"Milano",
"Publisher":"Feltrinelli",
"Years":1964,
"Fund":"BTB Segn. 815",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1348.0,
"Authors":"Guglielmi, Guido",
"Title":"Letteratura come sistema e come funzione",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1967,
"Fund":"BTB Segn. 816",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1349.0,
"Authors":"Guicciardini, Francesco",
"Title":"Istoria d\u2019Italia",
"Cities":"Firenze",
"Publisher":"Ricci",
"Years":1830,
"Fund":"BTB Segn. 1521-1528",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1350.0,
"Authors":"Guicciardini, Francesco",
"Title":"Ricordi politici e civili",
"Cities":"Milano",
"Publisher":"Longanesi",
"Years":1951,
"Fund":"BTB Segn. 446",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1351.0,
"Authors":"Not found",
"Title":"Guida artistica di Firenze e dintorni",
"Cities":"Firenze",
"Publisher":"Societ\u00e0 Editrice Fiorentina",
"Years":1919,
"Fund":"BTB Segn. 2303",
"Segni":null,
"Category":"F "
},{
"Unnamed: 0":1352.0,
"Authors":"Not found",
"Title":"Guida breve dell\u2019Italia Centrale",
"Cities":"s.l.",
"Publisher":"Consociazione Turistica Italiana",
"Years":1939,
"Fund":"BTB Segn. 2313",
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":1353.0,
"Authors":"Not found",
"Title":"Guida pratica e pianta della citt\u00e0di Torino",
"Cities":"Torino",
"Publisher":"Muletti",
"Years":1916,
"Fund":"BTB Segn. 2290",
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":1354.0,
"Authors":"Not found",
"Title":"Guida storico-artistica dell\u2019Ospedale maggiore di Milano.",
"Cities":"Milano",
"Publisher":"s.n.",
"Years":1857,
"Fund":"BTB Segn. 2375",
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":1355.0,
"Authors":"Guidacci, Margherita",
"Title":"Morte del ricco. Un oratorio",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1954,
"Fund":"BTB Segn. 447",
"Segni":"Dedica dell\u2019autrice.",
"Category":"IL"
},{
"Unnamed: 0":1356.0,
"Authors":"Guidacci, Margherita",
"Title":"La sabbia e l\u2019angelo",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1946,
"Fund":"BTB Segn. 448",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1357.0,
"Authors":"Not found",
"Title":"Guide pratique de Lyon et de sa r\u00e9gion.",
"Cities":"Lyon",
"Publisher":"Guides Pol",
"Years":"s.d.",
"Fund":"BTB Segn. 2306",
"Segni":"Nota di possesso autografa.",
"Category":"G"
},{
"Unnamed: 0":1358.0,
"Authors":"Guidi, Augusto",
"Title":"La civilt\u00e0 elisabettiana",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1962,
"Fund":"BTB Segn. 1717",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1359.0,
"Authors":"Gundolf, Friedrich",
"Title":"Caesar. Storia della sua fama",
"Cities":"Milano",
"Publisher":"Treves",
"Years":1934,
"Fund":"BTB Segn. 1467",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1360.0,
"Authors":"Guttmacher, Alan Frank",
"Title":"Come si crea la vita",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1944,
"Fund":"BTB Segn. 2072",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":1361.0,
"Authors":"Guttmacher, Alan Frank",
"Title":"Come si crea la vita",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1954,
"Fund":null,
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":1362.0,
"Authors":"Guzzo, Augusto",
"Title":"Il pensiero di Spinoza",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":"s.d.",
"Fund":"BTM",
"Segni":"Sottolineature e postille.",
"Category":"F"
},{
"Unnamed: 0":1363.0,
"Authors":"Hamelin, Octave",
"Title":"Le syst\u00e8me d\u2019Aristote",
"Cities":"Paris",
"Publisher":"Alcan",
"Years":1920,
"Fund":"BTB Segn. 1947",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":1364.0,
"Authors":"Hare, Frederick Kenneth",
"Title":"L\u2019atmosfera in movimento",
"Cities":"Milano",
"Publisher":"Feltrinelli",
"Years":1958,
"Fund":"BTB Segn. 2076",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":1365.0,
"Authors":"Hauptmann, Gerhart",
"Title":"Die versunkene Glocke",
"Cities":"Berlin",
"Publisher":"Fischer",
"Years":1917,
"Fund":"BTB Segn. 1185",
"Segni":null,
"Category":"GL"
},{
"Unnamed: 0":1366.0,
"Authors":"Hawthorne, Nathaniel",
"Title":"La lettera scarlatta",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1937,
"Fund":"BAL",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":1367.0,
"Authors":"Hayward, Wyatt W.",
"Title":"Mitchell\u2019s revised English course",
"Cities":"Buenos Aires",
"Publisher":"Mitchell",
"Years":1913,
"Fund":"BTB Segn. 2444",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":1368.0,
"Authors":"Hebbel, Christian Friedrich",
"Title":"Giuditta",
"Cities":"Firenze",
"Publisher":"Casa Editrice Italiana",
"Years":1910,
"Fund":"BTB Segn. 1186",
"Segni":"Nota di possesso autografa di Enrico Gadda. Sottolineature.",
"Category":"GL"
},{
"Unnamed: 0":1369.0,
"Authors":"Hedin, Steve",
"Title":"Il lago errante",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1941,
"Fund":"BTB Segn. 1404",
"Segni":"Intonso.",
"Category":"GL"
},{
"Unnamed: 0":1370.0,
"Authors":"Hegel, Georg Wilhelm Friedrich",
"Title":"Enciclopedia delle scienze filosofiche",
"Cities":"Bari",
"Publisher":"Laterza",
"Years":1907,
"Fund":"BTB Segn. 1839",
"Segni":null,
"Category":"D"
},{
"Unnamed: 0":1371.0,
"Authors":"Heine, Heinrich",
"Title":"Buch der Lieder; Neue Gedichte",
"Cities":"Leipzig",
"Publisher":"Reclam",
"Years":"s.d.",
"Fund":"BTB Segn. 1187",
"Segni":"Nota di possesso autografa in data 10.10.1919 Milano.",
"Category":"GL"
},{
"Unnamed: 0":1372.0,
"Authors":"Heine, Heinrich",
"Title":" Che cosa \u00e8 la Germania: analisi e profezie.",
"Cities":"Milano",
"Publisher":"Sonzogno",
"Years":"s.d.",
"Fund":"BTB Segn. 1188",
"Segni":"Nota di possesso autografa di Adele Gadda Lehr.",
"Category":"GL"
},{
"Unnamed: 0":1373.0,
"Authors":"Heine, Heinrich",
"Title":"Pagine autobiografiche",
"Cities":"Roma",
"Publisher":"Form\u00ecggini",
"Years":1926,
"Fund":"BTB Segn. 1189",
"Segni":null,
"Category":"GL"
},{
"Unnamed: 0":1374.0,
"Authors":"Heisenberg, Werner",
"Title":"Natura e fisica moderna",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1957,
"Fund":"BTB Segn. 2077",
"Segni":null,
"Category":"GL"
},{
"Unnamed: 0":1375.0,
"Authors":"Heldrich, Jerry Wald",
"Title":"Un milione di anni adesso",
"Cities":"Roma",
"Publisher":"Alpha Centauri",
"Years":1970,
"Fund":"BAL",
"Segni":null,
"Category":"GL"
},{
"Unnamed: 0":1376.0,
"Authors":"Hergesheimer, Joseph",
"Title":"Java Head",
"Cities":"London",
"Publisher":"William Heinemann",
"Years":1919,
"Fund":"BAL",
"Segni":null,
"Category":"GL"
},{
"Unnamed: 0":1377.0,
"Authors":"Herland, Louis",
"Title":"Corneille par luim\u00eame",
"Cities":"Paris",
"Publisher":"Seuil",
"Years":1961,
"Fund":"BTB Segn. 1126",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":1378.0,
"Authors":"Hermanin, Federico",
"Title":"Alberto D\u00fcrer",
"Cities":"Roma",
"Publisher":"Istituto Nazionale L.U.C.E.",
"Years":1930,
"Fund":"BTB Segn. 2183",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":1379.0,
"Authors":"Hersch, Jeanne",
"Title":"L\u2019illusione della filosofia",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1942,
"Fund":"BTB Segn. 1840",
"Segni":" Intonso.",
"Category":"F"
},{
"Unnamed: 0":1380.0,
"Authors":"Herzen, Aleksandr",
"Title":"Garibaldi a Londra",
"Cities":"Milano",
"Publisher":"Universale Economica",
"Years":1950,
"Fund":"BTB Segn. 1529",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1381.0,
"Authors":"Hibben, John Grier",
"Title":"La logica di Hegel (saggio d\u2019interpretazione)",
"Cities":"Torino-Milano-Roma",
"Publisher":"Bocca",
"Years":1910,
"Fund":"BTB Segn. 1948",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":1382.0,
"Authors":"Not found",
"Title":"Histoire de France depuis les origines jusqu\u2019\u00e0 la R\u00e9volution",
"Cities":"Paris",
"Publisher":"Hachette",
"Years":1900,
"Fund":"BTB Segn. 1620-1646",
"Segni":"Sottolineature al volume 8\/II.",
"Category":"S"
},{
"Unnamed: 0":1383.0,
"Authors":"Not found",
"Title":"Histoire de la France pour tous les Fran\u00e7ais",
"Cities":"Paris",
"Publisher":"Hachette",
"Years":1950,
"Fund":"BTB Segn. 1649-1650",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1384.0,
"Authors":"H\u00f6ffding, Harald",
"Title":"Storia della filosofia moderna. Esposizione della storia della filosofia dalla fine del Rinascimento fino ai giorni nostri",
"Cities":"Torino ",
"Publisher":"Bocca",
"Years":1913,
"Fund":"BTB Segn. 1950-1951",
"Segni":"Postille.",
"Category":"F"
},{
"Unnamed: 0":1385.0,
"Authors":"Hoffman, Frederick J.",
"Title":"Il romanzo in America 1900-1950",
"Cities":"Roma",
"Publisher":"Edizioni di Storia e Letteratura",
"Years":1953,
"Fund":"BTB Segn. 1346",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":1386.0,
"Authors":"Hoffmann, Ernst Theodor Amadeus",
"Title":"La principessa Brambilla",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1940,
"Fund":"BTB Segn. 1191",
"Segni":"Sottolineature e postille.",
"Category":"GL"
},{
"Unnamed: 0":1387.0,
"Authors":"Hoffmann, Ernst Theodor Amadeus",
"Title":"Racconti",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1946,
"Fund":"BTB Segn. 1192",
"Segni":null,
"Category":"GL"
},{
"Unnamed: 0":1388.0,
"Authors":"Hofmannsthal, Hugo von",
"Title":"Ognuno: Il dramma della morte del ricco",
"Cities":"Firenze ",
"Publisher":"Fussi-Sansoni",
"Years":1953,
"Fund":"BTB Segn. 1193",
"Segni":null,
"Category":"GL"
},{
"Unnamed: 0":1389.0,
"Authors":"Hogg, James",
"Title":"Confessioni di un peccatore",
"Cities":"Parma",
"Publisher":"Guanda",
"Years":"s.d.",
"Fund":"BTB Segn. 1263",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":1390.0,
"Authors":"H\u00f6lderlin, Friedrich",
"Title":"Alcune poesie",
"Cities":"Firenze",
"Publisher":"Parenti",
"Years":1941,
"Fund":"BTB Segn. 1194",
"Segni":null,
"Category":"GL"
},{
"Unnamed: 0":1391.0,
"Authors":"H\u00f6llerer, Walter",
"Title":"Systeme: Neue Gedichte",
"Cities":"Berlin  ",
"Publisher":"Literarische Colloquium",
"Years":1969,
"Fund":"BTB Segn. 1190",
"Segni":null,
"Category":"GL"
},{
"Unnamed: 0":1392.0,
"Authors":"Not found",
"Title":"Hommage \u00e0 Marcel Proust 1871-1922. Souvenirs \u2013 L\u2019\u0152uvre \u2013 T\u00e9moignages \u00e9trangers \u2013 La Prisonni\u00e8re (fragments in\u00e9dits) \u2013 Bibliographie. Documents. Portraits",
"Cities":"Paris",
"Publisher":"NRF-Gallimard",
"Years":1923,
"Fund":"BTB Segn. 1136",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":1393.0,
"Authors":"Homo, L\u00e9on",
"Title":"Nouvelle histoire romaine",
"Cities":"Roma",
"Publisher":"Fayard",
"Years":1949,
"Fund":"BTB Segn. 1468",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":1394.0,
"Authors":"Hopkins Lochridge, Betsey",
"Title":"Blue river",
"Cities":"Paris",
"Publisher":"Opere Nuove",
"Years":1960,
"Fund":"BTB Segn. 1264",
"Segni":" Intonso.",
"Category":"L"
},{
"Unnamed: 0":1395.0,
"Authors":"Hubert, Henri",
"Title":"Les Celtes depuis l\u2019\u00e9poque de la T\u00e8ne et la civilisation celtique",
"Cities":"Paris",
"Publisher":"Michel",
"Years":1950,
"Fund":"BTB Segn. 1610",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":1396.0,
"Authors":"Hughes, Ernest Richard",
"Title":"La Cina e il mondo occidentale",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1942,
"Fund":"BTB Segn. 1754",
"Segni":"Intonso.",
"Category":"G"
},{
"Unnamed: 0":1397.0,
"Authors":"Hugo, Victor",
"Title":"Napoleone il piccolo",
"Cities":"Milano   ",
"Publisher":"Universale Economica",
"Years":1952,
"Fund":"BTB Segn. 1011-1012",
"Segni":"Postille.",
"Category":"FL"
},{
"Unnamed: 0":1398.0,
"Authors":"Hugo, Victor",
"Title":"Notre Dame de Paris.",
"Cities":"Milano  ",
"Publisher":"Rizzoli",
"Years":1951,
"Fund":"BTB Segn. 1013-1014",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":1399.0,
"Authors":"Hugo, Victor",
"Title":"Po\u00e9sies",
"Cities":"Paris",
"Publisher":"Hachette",
"Years":1950,
"Fund":"BTB Segn. 1015",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":1400.0,
"Authors":"Hugo, Victor",
"Title":" Quatrevingt-treize. ",
"Cities":"Paris",
"Publisher":"Nelson",
"Years":"s.d.",
"Fund":"BTB Segn. 1016",
"Segni":"Nota di possesso autografa di EnricoGadda in data 9.09.1917.",
"Category":"FL"
},{
"Unnamed: 0":1401.0,
"Authors":"Huizinga, Johan",
"Title":"L\u2019autunno del Medioevo",
"Cities":"Firenze  ",
"Publisher":"Sansoni",
"Years":1940,
"Fund":"BTB Segn. 1737",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1402.0,
"Authors":"Huizinga, Johan",
"Title":"La crisi della civilt\u00e0",
"Cities":"Torino  ",
"Publisher":"Einaudi",
"Years":1938,
"Fund":"BTB Segn. 1949",
"Segni":"Intonso.",
"Category":"S"
},{
"Unnamed: 0":1403.0,
"Authors":"Huizinga, Johan",
"Title":"Erasmo",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1941,
"Fund":"BTB Segn. 1738",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1404.0,
"Authors":"Hume, David",
"Title":"Ricerche sull\u2019intelletto umano",
"Cities":"Bari  ",
"Publisher":"Laterza",
"Years":1910,
"Fund":"BTB Segn. 1841",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":1405.0,
"Authors":"Not found",
"Title":"Hume e l\u2019illuminismo inglese",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1943,
"Fund":"BTB Segn. 1929",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":1406.0,
"Authors":"Huxley, Aldous Leonard",
"Title":"Contrepoint",
"Cities":"Paris",
"Publisher":"Plon",
"Years":1930,
"Fund":"BTB Segn. 1265-1266",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1407.0,
"Authors":"Huxley, Aldous Leonard",
"Title":"Dopo i fuochi d\u2019artificio",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1936,
"Fund":"BTB Segn. 1267",
"Segni":"Dedica dei traduttori.",
"Category":"EL"
},{
"Unnamed: 0":1408.0,
"Authors":"Huxley, Aldous Leonard",
"Title":"La Fin et les Moyens, ",
"Cities":"Paris  ",
"Publisher":"Plon",
"Years":1939,
"Fund":null,
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":1409.0,
"Authors":"Not found",
"Title":"Hydroelectric and steam powerplants",
"Cities":"New York",
"Publisher":"Viel\u00e9",
"Years":1917,
"Fund":"BTB Segn. 2108",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":1410.0,
"Authors":"Iacopone da Todi",
"Title":"Le pi\u00f9 belle pagine.",
"Cities":"Milano",
"Publisher":"Treves",
"Years":1931,
"Fund":"BTB Segn. 449",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1411.0,
"Authors":"Ignotus, Paul",
"Title":"La responsabilit\u00e0 degli intellettuali",
"Cities":"Roma  ",
"Publisher":"Associazione Italiana per la li bert\u00e0 della cultura",
"Years":"s.d.",
"Fund":"BTB Segn. Op. 85",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1412.0,
"Authors":"Not found",
"Title":"L\u2019Illustrazione italiana. 90 anni di storia. ",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1963,
"Fund":"BTB Segn. 2771",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":1413.0,
"Authors":"Not found",
"Title":"L\u2019imitazione di Cristo. Tradu zione di C. Guasti",
"Cities":"Firenze  ",
"Publisher":"L\u2019Ape",
"Years":1950,
"Fund":"BTB Segn. 1774",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":1414.0,
"Authors":"Not found",
"Title":"Importante vendita all\u2019asta di libri rari e legature d\u2019amatore in parte provenienti dalla raccolta di Claudio Argentieri",
"Cities":"Roma  ",
"Publisher":"Selecta Libri e Oggetti d\u2019Arte",
"Years":1956,
"Fund":"BTB Segn. Op. 17",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":1415.0,
"Authors":"Not found",
"Title":"Importante vendita di libri antichi e moderni: catalogo",
"Cities":"Roma",
"Publisher":"Selecta Galleria d\u2019Arte",
"Years":1955,
"Fund":"BTB Segn. Op. 16",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":1416.0,
"Authors":"Not found",
"Title":"In memoria dei soci del \u201cCircolo Filologico Milanese\u201d caduti in guerra 1915-1918",
"Cities":"Milano",
"Publisher":"Alfieri & Lacroix",
"Years":1920,
"Fund":"BAL",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":1417.0,
"Authors":"Not found",
"Title":"In memoria dei soci del \u201cCircolo Filologico Milanese\u201d caduti in guerra 1915-1918",
"Cities":"Milano",
"Publisher":"Alfieri & Lacroix",
"Years":1921,
"Fund":"BAL",
"Segni":"Fogli inseriti.",
"Category":"V"
},{
"Unnamed: 0":1418.0,
"Authors":"Not found",
"Title":"In Memoria del Cav. Ing. Pietro Gadda.",
"Cities":"s.l.",
"Publisher":"s.e.",
"Years":"s.d.",
"Fund":"BAC",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":1419.0,
"Authors":"Not found",
"Title":"In memoria di Giangiacomo Feltrinelli",
"Cities":"Milano",
"Publisher":"Feltrinelli",
"Years":1973,
"Fund":"BTB Segn. Op. 84",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":1420.0,
"Authors":"Not found",
"Title":"In memoria di Giuseppe Gadda.",
"Cities":"s.l.",
"Publisher":"s.e.",
"Years":1901,
"Fund":"BAC",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":1421.0,
"Authors":"Inama, Vigilio",
"Title":"Compendio ad uso dei ginnasi della grammatica greca \u2013 parte prima: etimologia",
"Cities":"Milano",
"Publisher":"Libreria editrice Domenico Briola",
"Years":1903,
"Fund":"BAL",
"Segni":"Sottolineature, disegni e note di possesso.",
"Category":"D"
},{
"Unnamed: 0":1422.0,
"Authors":"Not found",
"Title":"Inchiesta sul neorealismo.",
"Cities":"s.l.",
"Publisher":"Edizioni della Radio Italiana",
"Years":"s.d.",
"Fund":"BTM",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1423.0,
"Authors":"Not found",
"Title":"Inchiesta sulla terza pagina.",
"Cities":"Torino",
"Publisher":"ERI",
"Years":1953,
"Fund":"BTB Segn. Op. 140",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1424.0,
"Authors":"Not found",
"Title":"L\u2019inglese imparato da s\u00e9 con la pronuncia fonetica",
"Cities":"London",
"Publisher":"Marlborough",
"Years":1913,
"Fund":"BTB Segn. 2427",
"Segni":null,
"Category":"GR"
},{
"Unnamed: 0":1425.0,
"Authors":"Not found",
"Title":"La Inquisizione co\u2019 suoi strumenti di martirio e tortura esposta in modelli di grandezza naturale e perfettamente uguali agli originali.",
"Cities":"Torino  ",
"Publisher":"Dessort",
"Years":1880,
"Fund":"BTB Segn. Op. 34",
"Segni":"Nota di possesso di Adele Gadda Lehr.",
"Category":"V"
},{
"Unnamed: 0":1426.0,
"Authors":"Not found",
"Title":"Io, Milano.",
"Cities":"Bologna",
"Publisher":"Alfa",
"Years":1966,
"Fund":"BTB Segn. 2376",
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":1427.0,
"Authors":"Isella, Dante",
"Title":"La cultura italiana e la letteratura italiana",
"Cities":"Firenze",
"Publisher":"Olschki",
"Years":1970,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":1428.0,
"Authors":"Istrati, Panait",
"Title":"Kyra Kyralina",
"Cities":"Paris",
"Publisher":"Rieder",
"Years":1924,
"Fund":"BTB Segn. 1017",
"Segni":"Nota di possesso autografa.",
"Category":"L"
},{
"Unnamed: 0":1429.0,
"Authors":"Not found",
"Title":"Istruzioni secrete della Compagnia di Ges\u00f9 con aggiunte importanti",
"Cities":"Roma",
"Publisher":"Tip. della Propaganda",
"Years":"s.d.",
"Fund":null,
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":1430.0,
"Authors":"Not found",
"Title":"L\u2019Italia \u00e8 giovane.",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1961,
"Fund":"BAL",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":1431.0,
"Authors":"Italia. Esercito. Servizio Meteorologico",
"Title":"Clima e acque dell\u2019Altipiano dei SetteComuni",
"Cities":"s.l.",
"Publisher":"s.n.",
"Years":1916,
"Fund":"BTB Segn. Op. 36",
"Segni":null,
"Category":"M"
},{
"Unnamed: 0":1432.0,
"Authors":"Not found",
"Title":"Italienerz\u00e4hlt. Elf Erz\u00e4hlungen. ",
"Cities":"Frankfurt",
"Publisher":"Fischer",
"Years":1962,
"Fund":"BTB Segn. 818",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":1433.0,
"Authors":"Not found",
"Title":"Italienische Erz\u00e4hlerder Gegenwart. Eine Anthologie. ",
"Cities":"  Stuttgart",
"Publisher":"Reclam",
"Years":1964,
"Fund":"BTB Segn. 817",
"Segni":"J",
"Category":"V"
},{
"Unnamed: 0":1434.0,
"Authors":"Jachino, Angelo",
"Title":"Gaudo e Matapan",
"Cities":"Milano  ",
"Publisher":"Mondadori",
"Years":1957,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1435.0,
"Authors":"Jacobbi, Ruggero",
"Title":"Campo di Marte trent\u2019anni dopo 1938\/1968",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1969,
"Fund":"BTB Segn. 819",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1436.0,
"Authors":"Jacobi, Friedrich Heinrich",
"Title":"Sulla dottrina dello Spinoza",
"Cities":"Bari",
"Publisher":"Laterza",
"Years":1914,
"Fund":"BTB Segn. 1842",
"Segni":"Parzialmente intonso.",
"Category":"F"
},{
"Unnamed: 0":1437.0,
"Authors":"Jacobsen, Jens Peter",
"Title":"La signora F\u00f6nss e altre novelle",
"Cities":"Milano  ",
"Publisher":"Rizzoli",
"Years":1957,
"Fund":"BTB Segn. 1407",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1438.0,
"Authors":"Jaeger, Werner",
"Title":"Paideia",
"Cities":"Firenze",
"Publisher":"La Nuova Italia",
"Years":1943,
"Fund":"BTB Segn. 1407",
"Segni":null,
"Category":"GL"
},{
"Unnamed: 0":1439.0,
"Authors":"Jaffe, Bernard",
"Title":"La conquista della materia. Dall\u2019alchimia alla radioattivit\u00e0 artificiale",
"Cities":"Milano  ",
"Publisher":"Mondadori",
"Years":1937,
"Fund":"BTB Segn. 2078",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":1440.0,
"Authors":"Jahn, Lila",
"Title":"Bianca Maria duchessa di Milano",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1941,
"Fund":"BTB Segn. 1530",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1441.0,
"Authors":"James, Henry",
"Title":"L\u2019americano",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1934,
"Fund":"BTB Segn. 1268",
"Segni":"Dedica del traduttore in data 17.10.1934.",
"Category":"EL"
},{
"Unnamed: 0":1442.0,
"Authors":"James, Henry",
"Title":"Profili di donne",
"Cities":"Milano  ",
"Publisher":"Garzanti",
"Years":1962,
"Fund":"BAL",
"Segni":"Firma della traduttrice Argia Brunacci Michettoni.",
"Category":"EL"
},{
"Unnamed: 0":1443.0,
"Authors":"James, Henry",
"Title":"Ritratto di signora",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1943,
"Fund":"BTB Segn. 1269",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":1444.0,
"Authors":"James, Henry",
"Title":"The Turn of the Screw",
"Cities":"Harmondsworth  ",
"Publisher":"Penguin",
"Years":1946,
"Fund":"BTB Segn. 1270",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":1445.0,
"Authors":"Janner, Arminio",
"Title":"Luigi Pirandello",
"Cities":"Firenze  ",
"Publisher":"La Nuova Italia",
"Years":1948,
"Fund":"BTB Segn. 820",
"Segni":"Intonso.",
"Category":"L"
},{
"Unnamed: 0":1446.0,
"Authors":"Jean Paul (Richter, Johann Paul Friedrich)",
"Title":"Levana",
"Cities":"Torino",
"Publisher":"UTET",
"Years":1932,
"Fund":"BTB Segn. 1211",
"Segni":null,
"Category":"GL"
},{
"Unnamed: 0":1447.0,
"Authors":"Jeanson, Francis",
"Title":"Sartre par lui-m\u00eame",
"Cities":"Paris",
"Publisher":"Seuil",
"Years":1958,
"Fund":"BTB Segn. 1127",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":1448.0,
"Authors":"Jemolo, Carlo Arturo",
"Title":"Chiesa e stato in Italia negli ultimi cento anni",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1963,
"Fund":"BAL",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1449.0,
"Authors":"Jerome, Jerome Klapka",
"Title":"Appunti di romanzo",
"Cities":"Milano",
"Publisher":"Bietti",
"Years":1939,
"Fund":"BTB Segn. 1271",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1450.0,
"Authors":"Jerome, Jerome Klapka",
"Title":"Tre uomini a zonzo",
"Cities":"Milano  ",
"Publisher":"Rizzoli",
"Years":1950,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1451.0,
"Authors":"Jespersen, Otto",
"Title":"Growth and Structure of the English language",
"Cities":"Oxford  ",
"Publisher":"Basil Blackwell",
"Years":1956,
"Fund":"BAL",
"Segni":null,
"Category":"GR"
},{
"Unnamed: 0":1452.0,
"Authors":"Jona, Emanuela",
"Title":"Cavi telegrafici sottomarini. Costruzione, immersione, riparazione",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1896,
"Fund":"BTB Segn. 2037",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":1453.0,
"Authors":"Jouhandeau, Marcel",
"Title":"Monsieur Godeau intime",
"Cities":"Paris  ",
"Publisher":"NRF Gallimard",
"Years":1943,
"Fund":"BTB Segn. 1018",
"Segni":"Parzialmente intonso.",
"Category":"FL"
},{
"Unnamed: 0":1454.0,
"Authors":"Joyce, James",
"Title":"Dedalus. ",
"Cities":"Torino  ",
"Publisher":"Frassinelli",
"Years":1933,
"Fund":"BTB Segn. 1272",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":1455.0,
"Authors":"Joyce, James",
"Title":"Dubliners",
"Cities":"Hamburg-Paris-Milano",
"Publisher":"Albatross",
"Years":1932,
"Fund":"BTB Segn. 1273",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":1456.0,
"Authors":"Joyce, James",
"Title":"Gente di Dublino. ",
"Cities":"Milano",
"Publisher":"Corbaccio",
"Years":1933,
"Fund":"BTB Segn. 1274",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":1457.0,
"Authors":"Joyce, James",
"Title":"Ulysse.",
"Cities":"Paris  ",
"Publisher":"NRF-Gallimard",
"Years":1948,
"Fund":"BTB Segn. 1275",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":1458.0,
"Authors":"Jung, Carl Gustav",
"Title":"  Il problema dell\u2019inconscio nella psicologia moderna, ",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1942,
"Fund":null,
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":1459.0,
"Authors":"Kafka, Franz",
"Title":"La metamorfosi",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1934,
"Fund":"BTB Segn. 1195",
"Segni":"Intonso.",
"Category":"GL"
},{
"Unnamed: 0":1460.0,
"Authors":"Kafka, Franz",
"Title":"Il processo",
"Cities":"Torino",
"Publisher":"Frassinelli",
"Years":1933,
"Fund":"BTB Segn. 1196",
"Segni":null,
"Category":"GL"
},{
"Unnamed: 0":1461.0,
"Authors":"Kant, Immanuel",
"Title":"Antropologia prammatica",
"Cities":"Torino",
"Publisher":"Paravia",
"Years":1925,
"Fund":"BTB Segn. 1845",
"Segni":"Nota di possesso autografa in data 05.1925 Milano.",
"Category":"F"
},{
"Unnamed: 0":1462.0,
"Authors":"Kant, Immanuel",
"Title":"Critica del giudizio",
"Cities":"Bari",
"Publisher":"Laterza",
"Years":1907,
"Fund":"BTB Segn. 1846",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":1463.0,
"Authors":"Kant, Immanuel",
"Title":" Critica della ragion pratica. ",
"Cities":"Bari",
"Publisher":"Laterza",
"Years":1909,
"Fund":"BTB Segn. 1847",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":1464.0,
"Authors":"Kant, Immanuel",
"Title":" Critique de la raison pure",
"Cities":"Paris",
"Publisher":"Flammarion",
"Years":"s.d.",
"Fund":"BTM",
"Segni":"Nota di possesso, al primo tomo, di Clara Gadda in data 1914; nel secondo, C.E. Gadda in data 1925 Milano \u00ab(da Clara 1915)\u00bb. In entrambi i tomi sottolineature e postille. Alcuni, a penna, riconducibili a Clara; la maggior parte degli altri, a matita e a penna, a Carlo Emilio.",
"Category":"F"
},{
"Unnamed: 0":1465.0,
"Authors":"Kant, Immanuel",
"Title":"Fondazione della metafisica dei costumi",
"Cities":"Pavia",
"Publisher":"Mattei Speroni",
"Years":1910,
"Fund":"BTB Segn. 1848",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":1466.0,
"Authors":"Kant, Immanuel",
"Title":"La pedagogia",
"Cities":"Torino-Milano-FirenzeRoma-Napoli-Palermo",
"Publisher":"Paravia",
"Years":1923,
"Fund":"BTB Segn. 1849",
"Segni":"Nota di possesso autografa in data 18.05.1924. Sottolineature e postille.",
"Category":"F"
},{
"Unnamed: 0":1467.0,
"Authors":"Kant, Immanuel",
"Title":" Prolegomeni ad ogni futura metafisica.",
"Cities":"Lanciano",
"Publisher":"Carabba",
"Years":1914,
"Fund":"BTB Segn. 1850",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":1468.0,
"Authors":"Kant, Immanuel",
"Title":"Prolegomeni ad ogni metafisica futura che vorr\u00e0 presentarsi come scienza",
"Cities":"Milano-Torino-Roma ",
"Publisher":"Fratelli Bocca Editori",
"Years":1913,
"Fund":"BTM",
"Segni":"Sottolineature e postille.",
"Category":"F"
},{
"Unnamed: 0":1469.0,
"Authors":"Kant, Immanuel",
"Title":"La religion dans les limites de la raison",
"Cities":"Paris",
"Publisher":"Alcan",
"Years":1913,
"Fund":"BTB Segn. 1851",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":1470.0,
"Authors":"Kant, Immanuel",
"Title":"Scritti politici. Lamanna",
"Cities":"Lanciano  ",
"Publisher":"Carabba",
"Years":1917,
"Fund":"BTB Segn. 1852",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":1471.0,
"Authors":"Kant, Immanuel",
"Title":" Werke",
"Cities":"Berlin",
"Publisher":"Weichert",
"Years":"s.d.",
"Fund":"BTB Segn. 1843-1844",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":1472.0,
"Authors":"Karman, Theodor von \u2013 Biot,",
"Title":"Metodi matematici nell\u2019ingegneria",
"Cities":"Torino  ",
"Publisher":"Einaudi",
"Years":1951,
"Fund":"BTB Segn. 2142",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":1473.0,
"Authors":"Kataev, Valentin",
"Title":"Il direttore d\u2019orchestra",
"Cities":"Firenze",
"Publisher":"SAG",
"Years":1943,
"Fund":"BTB Segn. 1381",
"Segni":"Parzialmente intonso.",
"Category":"L"
},{
"Unnamed: 0":1474.0,
"Authors":"Kavafis, Constantinos",
"Title":"Cinquantacinque poesie. Risi",
"Cities":"Torino  ",
"Publisher":"Einaudi",
"Years":1968,
"Fund":"BTB Segn. 1406",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1475.0,
"Authors":"Keith, Arthur",
"Title":"Darwin",
"Cities":"Milano",
"Publisher":"Feltrinelli",
"Years":1959,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1476.0,
"Authors":"Keller, Gottfried",
"Title":"Keller",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1942,
"Fund":"BTB Segn. 1197",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1477.0,
"Authors":"Kipling, Rudyard",
"Title":"Il libro della giungla",
"Cities":"Milano",
"Publisher":"Rizzoli",
"Years":1950,
"Fund":"BTB Segn. 1276",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":1478.0,
"Authors":"Kipling, Rudyard",
"Title":"Qualcosa di me. Per i miei amici noti e ignoti",
"Cities":"Torino  ",
"Publisher":"Einaudi",
"Years":1938,
"Fund":"BTB Segn. 1277",
"Segni":"Intonso.",
"Category":"EL"
},{
"Unnamed: 0":1479.0,
"Authors":"Klabund (Pseud. di Alfred Henschke)",
"Title":" Moreau",
"Cities":"Milano",
"Publisher":"Sperling & Kupfer",
"Years":1930,
"Fund":"BTB Segn. 1198",
"Segni":null,
"Category":"GL"
},{
"Unnamed: 0":1480.0,
"Authors":"Kleist, Heinrich von",
"Title":"Racconti. ",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1945,
"Fund":"BTB Segn. 1199",
"Segni":null,
"Category":"GL"
},{
"Unnamed: 0":1481.0,
"Authors":"Koenig, Edmund",
"Title":"Guglielmo Wundt psicologo e filosofo.",
"Cities":"Milano-Palermo-Napoli",
"Publisher":"Sandron",
"Years":1914,
"Fund":"BTB Segn. 1952",
"Segni":"Nota di possesso autografa in data 03.1925.",
"Category":"GL"
},{
"Unnamed: 0":1482.0,
"Authors":"Koenig, Klaus Giovanni",
"Title":"Architettura in Toscana",
"Cities":"Torino",
"Publisher":"ERI",
"Years":1968,
"Fund":"BAL",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":1483.0,
"Authors":"Not found",
"Title":"Das K\u00f6nigsportal von Chartres",
"Cities":"M\u00fcnchen",
"Publisher":"Piper",
"Years":1962,
"Fund":"BAL",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":1484.0,
"Authors":"Kristeller, Paul Oskar",
"Title":"Il pensiero filosofico di Marsilio Ficino",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1953,
"Fund":"BTB Segn. 1953",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":1485.0,
"Authors":"Kuby, Erich",
"Title":"I russi a Berlino",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1966,
"Fund":"BTB Segn. 1739",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1486.0,
"Authors":"K\u00fchn, Alfred",
"Title":"La teoria dell\u2019ereditariet\u00e0",
"Cities":"Torino  ",
"Publisher":"Einaudi",
"Years":1942,
"Fund":"BTB Segn. 2123",
"Segni":"Intonso.",
"Category":"T"
},{
"Unnamed: 0":1487.0,
"Authors":"Kunstler, Charles",
"Title":"  La vie quotidienne sous Louis XV, ",
"Cities":"Paris",
"Publisher":"Hachette",
"Years":1953,
"Fund":null,
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1488.0,
"Authors":"Kunstler, Charles",
"Title":"La vie quotidienne sous Louis XVI",
"Cities":"Paris",
"Publisher":"Hachette",
"Years":1950,
"Fund":"BTB Segn. 1613",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1489.0,
"Authors":"Kunstler, Charles",
"Title":"La vita privata di Maria Antonietta",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1939,
"Fund":"BTB Segn. 1740",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1490.0,
"Authors":"Laberthonni\u00e8re, Lucien",
"Title":"Il realismo cristiano e l\u2019idealismo greco",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1931,
"Fund":"BTB Segn. 1954",
"Segni":"Piega.",
"Category":"L"
},{
"Unnamed: 0":1491.0,
"Authors":"Laclos, Pierre-Ambroise \u2013 Fran\u00e7ois Choderlos de",
"Title":"Amicizie pericolose",
"Cities":"Milano  ",
"Publisher":"Mondadori",
"Years":1944,
"Fund":"BTB Segn. 1020",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":1492.0,
"Authors":"Laclos, Pierre-Ambroise \u2013 Fran\u00e7ois Choderlos de",
"Title":"Amicizie pericolose",
"Cities":"Milano  ",
"Publisher":"Mondadori",
"Years":1959,
"Fund":"BTB Segn. 1019",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":1493.0,
"Authors":"Lacour-Gayet, Georges",
"Title":"Talleyrand",
"Cities":"Paris",
"Publisher":"Payot",
"Years":1947,
"Fund":"BTB Segn. 1614-1616",
"Segni":"Postille su foglietti inseriti.",
"Category":"FL"
},{
"Unnamed: 0":1494.0,
"Authors":"Lafayette, Madame de",
"Title":"La principessa di Cl\u00e8ves",
"Cities":"Milano  ",
"Publisher":"Rizzoli",
"Years":1957,
"Fund":"BTB Segn. 1026-1027",
"Segni":"Due copie.",
"Category":"FL"
},{
"Unnamed: 0":1495.0,
"Authors":"La Fontaine, Jean de",
"Title":"Fables",
"Cities":"Torino",
"Publisher":"Paravia",
"Years":1902,
"Fund":"BTB Segn. 1027 bis",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":1496.0,
"Authors":"Lafue, Pierre",
"Title":"Louis XV. La victoire de l\u2019unit\u00e9 monarchique",
"Cities":"Paris  ",
"Publisher":"Hachette",
"Years":1952,
"Fund":"BTB Segn. 1617",
"Segni":"Postille su foglietti inseriti.",
"Category":"S"
},{
"Unnamed: 0":1497.0,
"Authors":"Lafue, Pierre",
"Title":"La vie priv\u00e9e de Fr\u00e9d\u00e9ric II",
"Cities":"Paris",
"Publisher":"Hachette",
"Years":1939,
"Fund":"BTB Segn. 1741",
"Segni":"Parzialmente intonso.",
"Category":"S"
},{
"Unnamed: 0":1498.0,
"Authors":"Laing, Ronald David",
"Title":"L\u2019io diviso. Studio di psichiatria esistenziale. ",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1969,
"Fund":"BTB Segn. 1996",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":1499.0,
"Authors":"Lamarche, Angel Rafael",
"Title":"Los cuentosque N. York no sabe",
"Cities":"Mexico",
"Publisher":"Tip. La Carpeta",
"Years":1949,
"Fund":"BTB Segn. 920",
"Segni":null,
"Category":"SL"
},{
"Unnamed: 0":1500.0,
"Authors":"Lamartine, Alphonse de",
"Title":"Histoire des Girondins.",
"Cities":"BruxellesLivourne-Leipzig",
"Publisher":"Meline, Cans et C.ie",
"Years":1851,
"Fund":"BTB Segn. 1618",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1501.0,
"Authors":"Lamartine, Alphonse de",
"Title":"\u0152uvres",
"Cities":"Paris",
"Publisher":"Gosselin",
"Years":1832,
"Fund":"BTB Segn. 1022-1025",
"Segni":"Nota di possesso autografa di Adele Gadda Lehr.",
"Category":"S"
},{
"Unnamed: 0":1502.0,
"Authors":"L\u00e4mmel, Rodolfo",
"Title":"I fondamenti della teoria della relativit\u00e0",
"Cities":"Bologna",
"Publisher":"Zanchelli",
"Years":"s.d.",
"Fund":"BTM",
"Segni":"Nota di possesso e data 10.06.1925 Milano.",
"Category":"T"
},{
"Unnamed: 0":1503.0,
"Authors":"Landolfi, Tommaso",
"Title":"Le due zittelle",
"Cities":"Milano  ",
"Publisher":"Bompiani",
"Years":1946,
"Fund":"BTB Segn. 450",
"Segni":"Dedica dell\u2019autore in data 26.1.1947.",
"Category":"IL"
},{
"Unnamed: 0":1504.0,
"Authors":"Landolfi, Tommaso",
"Title":"Il mar delle blatte",
"Cities":"Roma  ",
"Publisher":"Edizioni della Cometa",
"Years":1939,
"Fund":null,
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1505.0,
"Authors":"Lanson, Gustave",
"Title":"Histoire Illustr\u00e9e de la Litt\u00e9rature Fran\u00e7aise",
"Cities":"Paris",
"Publisher":"Hachette",
"Years":1922,
"Fund":null,
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1506.0,
"Authors":"Lanternari, Vittorio",
"Title":"Movimenti religiosi di libert\u00e0 e di salvezza dei popoli oppressi",
"Cities":"Milano",
"Publisher":"Feltrinelli",
"Years":1960,
"Fund":"BAL",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1507.0,
"Authors":"Lardaas, Henri",
"Title":"La vie priv\u00e9e de Mirabeau",
"Cities":"Paris  ",
"Publisher":"Hachette",
"Years":1949,
"Fund":"BTB Segn. 1619 Postille.",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1508.0,
"Authors":"La Rocca, Gianni Nunzio",
"Title":"Barbare sentenze, vol. III",
"Cities":"Bergamo",
"Publisher":"Gli amici dei sacri lari",
"Years":1969,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1509.0,
"Authors":"] Larousse, Pierre-Athanase",
"Title":" Exercises d\u2019ortographe",
"Cities":"Paris  ",
"Publisher":"La rousse",
"Years":"s.d.",
"Fund":"BTB Segn. 2441",
"Segni":null,
"Category":"GR"
},{
"Unnamed: 0":1510.0,
"Authors":"Not found",
"Title":"Grammaire sup\u00e9rieure",
"Cities":"Paris  ",
"Publisher":"La rousse",
"Years":"s.d.",
"Fund":"BTB Segn. 2442",
"Segni":"Nota di possesso autografa in data 20.05.1909.",
"Category":"GR"
},{
"Unnamed: 0":1511.0,
"Authors":"Lavagnino, Emilio",
"Title":"Brunellesco.",
"Cities":"Roma",
"Publisher":"Istituto Nazionale L.U.C.E.",
"Years":1931,
"Fund":"BTB Segn. 2184",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":1512.0,
"Authors":"Not found",
"Title":"Lazarillo de Tormes",
"Cities":"Madrid",
"Publisher":"Espasa-Calpe",
"Years":1960,
"Fund":"BTB Segn. 921",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1513.0,
"Authors":"Lazzeri, Giulio",
"Title":"Manuale di trigonometria sferica",
"Cities":"Livorno",
"Publisher":"Giusti",
"Years":1918,
"Fund":"BTB Segn. 2045",
"Segni":"Nota di possesso autografa in data 1920.",
"Category":"T"
},{
"Unnamed: 0":1514.0,
"Authors":"Le Bas, Philippe",
"Title":"Svezia e Norvegia",
"Cities":"Venezia",
"Publisher":"Antonelli",
"Years":1841,
"Fund":null,
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":1515.0,
"Authors":"Leclerc de Buffon, GeorgesLouis",
"Title":"Naturgeschichte",
"Cities":"Stuttgart",
"Publisher":"Muller",
"Years":1854,
"Fund":null,
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":1516.0,
"Authors":"Le Dantec, F\u00e9lix",
"Title":"L\u2019ateismo",
"Cities":"Milano",
"Publisher":"Ed. sociale",
"Years":1925,
"Fund":"BTB Segn. 1787",
"Segni":"Intonso.",
"Category":"F"
},{
"Unnamed: 0":1517.0,
"Authors":"Lefebvre, Georges",
"Title":"Il Direttorio",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1952,
"Fund":"BTB Segn. 1647",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1518.0,
"Authors":"Lefebvre, Georges",
"Title":"\u00c9tudes sur la r\u00e9volution fran\u00e7aise",
"Cities":"Paris",
"Publisher":"Presses Universitaires de France",
"Years":1954,
"Fund":"BTB Segn. 1648",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1519.0,
"Authors":"Lefebvre, Georges",
"Title":"La grande paura del 1789",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1953,
"Fund":"BTB Segn. 1651",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1520.0,
"Authors":"Lefebvre, Georges",
"Title":"L\u2019Ottantanove",
"Cities":"Torino  ",
"Publisher":"Einaudi",
"Years":1949,
"Fund":"BTB Segn. 1652",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1521.0,
"Authors":"Lefebvre, Georges",
"Title":"I Termidoriani",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1952,
"Fund":"BTB Segn. 1653",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1522.0,
"Authors":"Lehr, Adele",
"Title":"Contributo alla storia romana dalla morte di Giulio Cesare alla morte di Cicerone",
"Cities":"Grosseto",
"Publisher":"Tip. Dell\u2019Ombrone",
"Years":1890,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1523.0,
"Authors":"Lehr, Adele",
"Title":"Giuseppe Parini poeta civile",
"Cities":"Milano",
"Publisher":"Stabilimento tipografico Agnelli",
"Years":1887,
"Fund":"BAL",
"Segni":"Tre copie",
"Category":"L"
},{
"Unnamed: 0":1524.0,
"Authors":"Leibniz, Gottfried Wilhelm",
"Title":"Choix de Textes. Paris, LouisMichaud, s.d",
"Cities":"Paris",
"Publisher":"Louis-Michaud",
"Years":1911,
"Fund":"BTB Segn. 1855",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":1525.0,
"Authors":"Leibniz, Gottfried Wilhelm",
"Title":"La monadologia e altri scritti",
"Cities":"Milano",
"Publisher":"Edizioni Athena",
"Years":1926,
"Fund":"BTM",
"Segni":"Sottolineature e postille.",
"Category":"F"
},{
"Unnamed: 0":1526.0,
"Authors":"Leibniz, Gottfried Wilhelm",
"Title":"Nouveaux essais sur l\u2019entendement humain",
"Cities":"Paris",
"Publisher":"Hachette",
"Years":1886,
"Fund":"BTB Segn. 1858",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":1527.0,
"Authors":"Leibniz, Gottfried Wilhelm",
"Title":" Nuovi saggi sull\u2019intelletto umano. Parte I (Libri III). ",
"Cities":"Bari",
"Publisher":"Laterza.",
"Years":1911,
"Fund":"BTM",
"Segni":"Sottolineature e postille.",
"Category":"F"
},{
"Unnamed: 0":1528.0,
"Authors":"Leibniz, Gottfried Wilhelm",
"Title":"Nuovi saggi sull\u2019intelletto umano. Parte II (Libri IIIIV)",
"Cities":"Bari  ",
"Publisher":"Laterza",
"Years":1844,
"Fund":"BTM",
"Segni":"Sottolineature e postille.",
"Category":"F"
},{
"Unnamed: 0":1529.0,
"Authors":"Leibniz, Gottfried Wilhelm",
"Title":"\u0152uvres. 1e s\u00e9rie.",
"Cities":"Paris",
"Publisher":"Charpentier",
"Years":1844,
"Fund":"BTB Segn. 1853",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":1530.0,
"Authors":"Leibniz, Gottfried Wilhelm",
"Title":"\u0152uvres. 2e s\u00e9rie. ",
"Cities":"Paris",
"Publisher":"Charpentier",
"Years":1844,
"Fund":"BTB Segn. 1857",
"Segni":null,
"Category":null
},{
"Unnamed: 0":1531.0,
"Authors":"Leibniz, Gottfried Wilhelm",
"Title":"Opere varie",
"Cities":"Bari",
"Publisher":"Laterza",
"Years":1912,
"Fund":"BTB Segn. 1854",
"Segni":null,
"Category":null
},{
"Unnamed: 0":1532.0,
"Authors":"Le Normand, Marie-Anne Adela\u00efde",
"Title":"Memoires historiques et secrets de l\u2019Imp\u00e9ratrice Jos\u00e9phine",
"Cities":"Paris  ",
"Publisher":"Imprimerie de Mme Jeunhomme",
"Years":1820,
"Fund":"BTB Segn. 1611",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1533.0,
"Authors":"Not found",
"Title":"Leonardo. Pagine di scienza con introduzione, note e ritratti. I",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1926,
"Fund":"BTB Segn. 2148",
"Segni":"Dedica del curatore.",
"Category":"T"
},{
"Unnamed: 0":1534.0,
"Authors":"Leonardo da Vinci",
"Title":"Del moto e misura dell\u2019acqua libri nove. ",
"Cities":"Bologna",
"Publisher":"Zanichelli",
"Years":1923,
"Fund":"BTB Segn. 2124",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":1535.0,
"Authors":"Leonardo da Vinci",
"Title":"Frammenti letterari e filosofici",
"Cities":"Firenze",
"Publisher":"Barbera",
"Years":1912,
"Fund":"BTB",
"Segni":"Nota di possesso in data 11.1915.",
"Category":null
},{
"Unnamed: 0":1536.0,
"Authors":"Leonardo da Vinci",
"Title":"Scritti letterari",
"Cities":"Milano",
"Publisher":"Rizzoli",
"Years":1952,
"Fund":"BTB Segn. 451",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":1537.0,
"Authors":"Leonardo da Vinci",
"Title":"L\u2019uomo e la natura",
"Cities":"Milano",
"Publisher":"Universale economica",
"Years":1952,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1538.0,
"Authors":"Lelj, Caterina",
"Title":"William Blake",
"Cities":"Milano ",
"Publisher":"Industrie grafiche Vera",
"Years":1938,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1539.0,
"Authors":"Lelj, Massimo",
"Title":"Ichnusa",
"Cities":"Milano ",
"Publisher":"All\u2019insegna del pesce d\u2019oro",
"Years":1937,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1540.0,
"Authors":"Leonetti, Francesco",
"Title":"Fumo, fuoco, dispetto",
"Cities":"Torino  ",
"Publisher":"Einaudi",
"Years":1956,
"Fund":"BTB Segn. 452",
"Segni":"Intonso.",
"Category":"L"
},{
"Unnamed: 0":1541.0,
"Authors":"Leoni, Leonetto",
"Title":"Il Garzella",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1967,
"Fund":"BTB Segn. 453",
"Segni":"Dedica dell\u2019autore in data 12.9.1967. Postille.",
"Category":"L"
},{
"Unnamed: 0":1542.0,
"Authors":"Leopardi, Giacomo",
"Title":"Attraverso lo \u00abZibaldone\u00bb",
"Cities":"Torino",
"Publisher":"UTET",
"Years":1920,
"Fund":"BTB Segn. 462-463",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1543.0,
"Authors":"Leopardi, Giacomo",
"Title":"Canti",
"Cities":"Roma",
"Publisher":"Garroni",
"Years":1912,
"Fund":"BAL",
"Segni":"Timbro di possesso di Enrico Gadda.",
"Category":"IL"
},{
"Unnamed: 0":1544.0,
"Authors":"Leopardi, Giacomo",
"Title":"I canti",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1920,
"Fund":"BTB Segn. 457",
"Segni":"Nota di possesso autografa in data 1922 Milano.",
"Category":"IL"
},{
"Unnamed: 0":1545.0,
"Authors":"Leopardi, Giacomo",
"Title":"Canti. ",
"Cities":"Firenze",
"Publisher":"Rinascimento del Libro",
"Years":1936,
"Fund":"BTB Segn. 456",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1546.0,
"Authors":"Leopardi, Giacomo",
"Title":"Crestomazia italiana. La prosa",
"Cities":"Torino  ",
"Publisher":"Einaudi",
"Years":1968,
"Fund":"BTB Segn. 458",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1547.0,
"Authors":"Leopardi, Giacomo",
"Title":" Opere: Canti, Operette morali, Pensieri, Bruto minore e Teofrasto, Volgarizzamenti, Martirio de\u2019 santi padri, Paralipomeni della Batracomiomachia, Saggi giovanili ed altri scritti non compresi nelle opere, Carte na poletane con giunte inedite o poco note : testo riscontrato con le migliori stampe e con gli autografi",
"Cities":"Milano  ",
"Publisher":"Officina tipografica gregoriana",
"Years":1935,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1548.0,
"Authors":"Leopardi, Giacomo",
"Title":" Operette morali. ",
"Cities":"Strasburgo",
"Publisher":"Heitz",
"Years":1913,
"Fund":"BTB Segn. 460",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1549.0,
"Authors":"Leopardi, Giacomo",
"Title":"Le prose morali di Giacomo Leopardi.",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1895,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1550.0,
"Authors":"Leopardi, Giacomo",
"Title":"Studi filologici. ",
"Cities":"Firenze ",
"Publisher":"Le Monnier",
"Years":1853,
"Fund":"BTB Segn. 461",
"Segni":"Nota di possesso autografa di Adele Gadda Lehr.",
"Category":"IL"
},{
"Unnamed: 0":1551.0,
"Authors":"Leopardi, Giacomo",
"Title":"Tutte le opere: Zibaldone",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1938,
"Fund":"BTB Segn. 454-455",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1552.0,
"Authors":"Le Roy, Edouard",
"Title":"Scienza e filosofia",
"Cities":"Lanciano  ",
"Publisher":"Carabba",
"Years":1919,
"Fund":"BTB Segn. 1856",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":1553.0,
"Authors":"Lesage, Alain-Ren\u00e9",
"Title":"Histoire de Gil Blas de Santillane",
"Cities":"Paris  ",
"Publisher":"Garnier",
"Years":"s.d.",
"Fund":"BTB Segn. 1028",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1554.0,
"Authors":"Leskov, Nikolaj Sem\u00ebnovic",
"Title":"La donna bellicosa. Racconti",
"Cities":"Torino",
"Publisher":"Slavia",
"Years":1929,
"Fund":"BTB Segn. 1383",
"Segni":"Intonso.",
"Category":"RL"
},{
"Unnamed: 0":1555.0,
"Authors":"Leskov, Nikolaj Sem\u00ebnovic",
"Title":"Il viaggiatore incantato",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1942,
"Fund":"BTB Segn. 1382",
"Segni":"Piega.",
"Category":"RL"
},{
"Unnamed: 0":1556.0,
"Authors":"Not found",
"Title":"Letteratura, critica e societ\u00e0 del Novecento",
"Cities":"Napoli  ",
"Publisher":"Loffredo",
"Years":1971,
"Fund":"BTB Segn. 858",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1557.0,
"Authors":"Not found",
"Title":"La letteratura Europea degli anni Settanta",
"Cities":"Milano",
"Publisher":"Marzorati",
"Years":1972,
"Fund":"BTB Segn. Op. 113",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1558.0,
"Authors":"Not found",
"Title":"Letture per i giovani. Scelte dai migliori scrittori",
"Cities":"Lanciano  ",
"Publisher":"Carabba",
"Years":1904,
"Fund":"BTB Segn. 930",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1559.0,
"Authors":"Levi, Alis",
"Title":"L\u2019instant quelconque.",
"Cities":"s.l.",
"Publisher":"Istituto Tipografico Editoriale",
"Years":1952,
"Fund":"BTB Segn. 1029",
"Segni":"Postille.",
"Category":"FL"
},{
"Unnamed: 0":1560.0,
"Authors":"Levi, Carlo",
"Title":"Cristo si \u00e8 fermato a Eboli",
"Cities":"Torino  ",
"Publisher":"Einaudi",
"Years":1946,
"Fund":"BTB Segn. 464",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1561.0,
"Authors":"Levi, Ezio",
"Title":"Poeti antichi lombardi",
"Cities":"Milano  ",
"Publisher":"Cogliati",
"Years":1921,
"Fund":"BTB Segn. 612",
"Segni":"Intonso.",
"Category":"IL"
},{
"Unnamed: 0":1562.0,
"Authors":"Lilith, Maria",
"Title":"Fate morgane",
"Cities":"Milano",
"Publisher":"Schwarz",
"Years":1956,
"Fund":"BTB Segn. 465",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1563.0,
"Authors":"Limentani, Ludovico",
"Title":"Il positivismo italiano 1870-1920.",
"Cities":"Napoli  ",
"Publisher":"Perrella",
"Years":1924,
"Fund":"BTB Segn. 37",
"Segni":"Dedica dell\u2019autore in data 9.1928.",
"Category":"IL"
},{
"Unnamed: 0":1564.0,
"Authors":"Linati, Carlo",
"Title":"Memorie a zigzag",
"Cities":"Torino  ",
"Publisher":"Buratti",
"Years":1929,
"Fund":"BTB Segn. 466",
"Segni":"Dedica dell\u2019autore in data 6.11.1936. Postille.",
"Category":"IL"
},{
"Unnamed: 0":1565.0,
"Authors":"Linati, Carlo",
"Title":"Passeggiate lariane",
"Cities":"Milano  ",
"Publisher":"Garzanti",
"Years":1939,
"Fund":"BTB Segn. 467",
"Segni":"Parzialmente intonso. Pieghe.",
"Category":"IL"
},{
"Unnamed: 0":1566.0,
"Authors":"Linati, Carlo",
"Title":"Scrittori angloamericani d\u2019oggi",
"Cities":"Milano",
"Publisher":"Corticelli",
"Years":1932,
"Fund":"BTB Segn. 1347",
"Segni":"Dedica dell\u2019autore",
"Category":"IL"
},{
"Unnamed: 0":1567.0,
"Authors":"Not found",
"Title":"Lirica italiana",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1943,
"Fund":"BTB Segn. 468",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1568.0,
"Authors":"Not found",
"Title":"Lirici greci. ",
"Cities":"Milano  ",
"Publisher":"Corrente",
"Years":1940,
"Fund":"BTB Segn. 632",
"Segni":"Dedica del traduttore.",
"Category":"CL"
},{
"Unnamed: 0":1569.0,
"Authors":"Not found",
"Title":"Lirici nuovi",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1943,
"Fund":"BTB Segn. 744",
"Segni":"Dedica del curatore.",
"Category":"CL"
},{
"Unnamed: 0":1570.0,
"Authors":"Lissoni, Osvaldo",
"Title":"La Certosa di Pavia",
"Cities":"Milano  ",
"Publisher":"Lissoni",
"Years":1930,
"Fund":"BTB Segn. 2291",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1571.0,
"Authors":"Not found",
"Title":"Listino generale primavera 1965",
"Cities":"Milano",
"Publisher":"Mursia",
"Years":1965,
"Fund":"BTB Segn. Op. 14",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":1572.0,
"Authors":"Not found",
"Title":"Das literarische Profil von Rom",
"Cities":"Berlin ",
"Publisher":"Literarische Colloquium",
"Years":1970,
"Fund":"BTB Segn. 761",
"Segni":null,
"Category":"GL"
},{
"Unnamed: 0":1573.0,
"Authors":"Liuzzi, Ferruccio",
"Title":"Arturo Rimbaud",
"Cities":"Roma  ",
"Publisher":"Form\u00ecggini",
"Years":1926,
"Fund":"BTB Segn. 1128",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1574.0,
"Authors":"Livi, Grazia",
"Title":"Gli scapoli di Londra",
"Cities":"Firenze  ",
"Publisher":"Sansoni",
"Years":1959,
"Fund":"BTB Segn. 469",
"Segni":"Dedica dell\u2019autrice.",
"Category":"IL"
},{
"Unnamed: 0":1575.0,
"Authors":"Livi, Francesco",
"Title":"Albert Camus",
"Cities":"Firenze",
"Publisher":"La Nuova Italia",
"Years":1971,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1576.0,
"Authors":"Livio, Tito",
"Title":"Ab urbe condita liber VII",
"Cities":"Roma-Milano  ",
"Publisher":"Albrighi",
"Years":1905,
"Fund":"BTB Segn. 82",
"Segni":"Parzialmente intonso. Postille.",
"Category":"CL"
},{
"Unnamed: 0":1577.0,
"Authors":"Livio, Tito",
"Title":"Ab urbe condita liber XXII",
"Cities":"Torino-Milano-FirenzeNapoli-Roma-Palermo",
"Publisher":"Paravia",
"Years":1928,
"Fund":"BTB Segn. 83",
"Segni":" Sottolineature e postille.",
"Category":"CL"
},{
"Unnamed: 0":1578.0,
"Authors":"Livio, Tito",
"Title":"Ab urbe condita libri pars I fasc. II lib. IV-VI. ",
"Cities":"Leipzig  ",
"Publisher":"Teubner",
"Years":1906,
"Fund":"BTB Segn. 80 ",
"Segni":"Sottolineature e postille.",
"Category":"CL"
},{
"Unnamed: 0":1579.0,
"Authors":"Livio, Tito",
"Title":"Ab urbe condita libri pars IV fasc. I lib. XXXI-XXXV. ",
"Cities":"Leipzig",
"Publisher":"Teubner",
"Years":1906,
"Fund":"BTB Segn. 81",
"Segni":"Nota di possesso autografa. Postille.",
"Category":"CL"
},{
"Unnamed: 0":1580.0,
"Authors":"Livio, Tito",
"Title":" Delle istorie dalla fondazione di Roma. Libri XXIII-XXIV.",
"Cities":"Torino-Milano-Firenze-Napoli-RomaPalermo ",
"Publisher":"Paravia",
"Years":"s.d.",
"Fund":"BTB Segn. 84",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":1581.0,
"Authors":"Livio, Tito",
"Title":" Patavinihistoriam. ",
"Cities":"s.l.",
"Publisher":"s.n.",
"Years":"s.d.",
"Fund":"BAL",
"Segni":"Dedica",
"Category":"CL"
},{
"Unnamed: 0":1582.0,
"Authors":"Livio, Tito",
"Title":"La storia di Roma dalle sue origini: libro XXII",
"Cities":"Milano-Roma-Napoli  ",
"Publisher":"Albrighi",
"Years":1927,
"Fund":"BTB Segn. 79",
"Segni":"Sottolineature.",
"Category":"CL"
},{
"Unnamed: 0":1583.0,
"Authors":"Locatelli-Milesi, Sereno",
"Title":"Bergamo vecchia e nuova",
"Cities":"Bergamo",
"Publisher":"Orobiche",
"Years":1941,
"Fund":"BTB Segn. 2382",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":1584.0,
"Authors":"Locke, John",
"Title":"Essai philosophique concernant l\u2019entendement humain, o\u00f9 l\u2019on montre quelle est l\u2019entendue de non connossainces certaines, & la maniere dont nous y parvenons",
"Cities":"Amsterdam ",
"Publisher":"aux d\u00e9pens de la Compagnie",
"Years":1758,
"Fund":"BTB Segn. 1859-1862",
"Segni":null,
"Category":"F "
},{
"Unnamed: 0":1585.0,
"Authors":"Locke, John",
"Title":"Saggio sull\u2019intelletto umano",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1924,
"Fund":"BTB Segn. 1863",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":1586.0,
"Authors":"Lodispoto, Alberto",
"Title":"Una malattia del maresciallo Radetzky",
"Cities":"Roma",
"Publisher":"Arti grafiche E. Cossidente",
"Years":1962,
"Fund":"BTB Segn. Op. 38",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1587.0,
"Authors":"Loisy, Alfred",
"Title":"Le origini del cristianesimo",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1942,
"Fund":"BTB Segn. 1742",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1588.0,
"Authors":"Not found",
"Title":"Lombardia. Parte I",
"Cities":"Milano",
"Publisher":null,
"Years":1931,
"Fund":"BTB Segn. 2278-2279",
"Segni":null,
"Category":"G "
},{
"Unnamed: 0":1589.0,
"Authors":"Lombrassa, Domenico \u2013 Vecchietti, Giorgio",
"Title":"Davide. Antologia italiana per le scuole di avviamento professionale",
"Cities":"Firenze",
"Publisher":"Le Monnier",
"Years":1958,
"Fund":"BTB Segn. 821-823",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1590.0,
"Authors":"Lombroso, Giacomo \u2013 Besana,Davide",
"Title":"Storia di dodici anni narrata al popolo italiano, ",
"Cities":"Milano",
"Publisher":"Fravega",
"Years":1861,
"Fund":null,
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1591.0,
"Authors":"Longhi, Roberto",
"Title":"Caravaggio.",
"Cities":"s.l.",
"Publisher":"s.n.",
"Years":"s.d.",
"Fund":"BAL",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":1592.0,
"Authors":"Longhi, Roberto",
"Title":"Officina ferrarese",
"Cities":"Roma  ",
"Publisher":"Le Edizioni d\u2019Italia",
"Years":1934,
"Fund":"BTB Segn. 2229",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":1593.0,
"Authors":"Longhi, Roberto",
"Title":"Piero della Francesca",
"Cities":"Milano  ",
"Publisher":"Hoepli",
"Years":1946,
"Fund":"BAL",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":1594.0,
"Authors":"Longo Sofista",
"Title":"Gli amori pastorali di Dafni e Cloe",
"Cities":"Milano  ",
"Publisher":"Rizzoli",
"Years":1950,
"Fund":"BTB Segn. 15",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":1595.0,
"Authors":"Lorand, Sandor \u2013 Balint, Michael",
"Title":"Perversioni sessuali. Psicodinamica e terapia",
"Cities":"Milano",
"Publisher":"Feltrinelli",
"Years":1965,
"Fund":"BAL",
"Segni":null,
"Category":"P "
},{
"Unnamed: 0":1596.0,
"Authors":"Lorenz, Konrad",
"Title":"L\u2019anello di re Salomone",
"Cities":"Milano  ",
"Publisher":"Adelphi",
"Years":1967,
"Fund":"BTB Segn. 2152",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1597.0,
"Authors":"Lorenzo Lotto",
"Title":" Estratto da catalogo di mostra",
"Cities":null,
"Publisher":null,
"Years":1953,
"Fund":"BTB Segn. Op. 20",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":1598.0,
"Authors":"Loria, Arturo",
"Title":"Il cieco e la bellona",
"Cities":"Firenze  ",
"Publisher":"Edizioni di Solaria",
"Years":1928,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":1599.0,
"Authors":"Loria, Arturo",
"Title":"Davide Ricardo",
"Cities":"Roma  ",
"Publisher":"Form\u00ecggini",
"Years":1926,
"Fund":"BTB Segn. 2011",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1600.0,
"Authors":"Loria, Arturo",
"Title":"La scuola di ballo",
"Cities":"Firenze  ",
"Publisher":"Edizioni di Solaria",
"Years":1932,
"Fund":"BTB Segn. 470",
"Segni":"Dedica dell\u2019autore in data 21.5.1932. Parzialmente intonso.",
"Category":"IL"
},{
"Unnamed: 0":1601.0,
"Authors":"Losacco, Michele",
"Title":"Schelling",
"Cities":"Milano-Palermo-NapoliGenova",
"Publisher":"Sandron",
"Years":1914,
"Fund":"BTB Segn. 1955",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1602.0,
"Authors":"Losini, Francesco",
"Title":"Dostoievski",
"Cities":"Milano",
"Publisher":"Bietti",
"Years":1941,
"Fund":null,
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1603.0,
"Authors":"Loubet, Guillaume",
"Title":"L\u2019Hydre",
"Cities":"Paris",
"Publisher":"Seuil",
"Years":1959,
"Fund":"BTB Segn. 1030",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":1604.0,
"Authors":"Lowe, Hudson",
"Title":"Il contromemoriale di Sant\u2019Elena (1830)",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1838,
"Fund":"BTB Segn. 1718",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1605.0,
"Authors":"Lucas-Dubreton, Jean",
"Title":"Louis Philippe",
"Cities":"Paris",
"Publisher":"Fayard",
"Years":1938,
"Fund":"BTB Segn. 1654",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":1606.0,
"Authors":"Lucchese, Romeo",
"Title":"Alcune precisazioni sulla \u201cScuola romana\u201d",
"Cities":"Roma ",
"Publisher":"Istituto Grafico Tiberino",
"Years":1964,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1607.0,
"Authors":"Lucertini, Mario",
"Title":"Etica della cibernetica",
"Cities":null,
"Publisher":null,
"Years":1968,
"Fund":"BTB Segn. 2125",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":1608.0,
"Authors":"Luciano di Samosata",
"Title":"Dialogues satyriques, philosophiques et divers, petits trait\u00e9s",
"Cities":"Paris  ",
"Publisher":"Lef\u00e8vre",
"Years":1841,
"Fund":"BTB Segn. 16",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":1609.0,
"Authors":"Lucrezio Caro, Tito",
"Title":"De rerum natura libri sex. ",
"Cities":"Milano  ",
"Publisher":"Mondadori",
"Years":1939,
"Fund":"BTB Segn. 54",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":1610.0,
"Authors":"Lucrezio Caro, Tito",
"Title":"De rerum natura libri sex. Vol. 1: Studi lucreziani",
"Cities":"Torino",
"Publisher":"Loescher",
"Years":1896,
"Fund":"BTB Segn. 53",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":1611.0,
"Authors":"Lucrezio Caro, Tito",
"Title":"Ho vegliato le notti serene",
"Cities":"Firenze  ",
"Publisher":"Sansoni",
"Years":1950,
"Fund":"BTB Segn. 52",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":1612.0,
"Authors":"Lugli, Vittorio",
"Title":"Racine",
"Cities":"Roma",
"Publisher":"Form\u00ecggini",
"Years":1926,
"Fund":"BTB Segn. 1129",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1613.0,
"Authors":"Luisi, Luciano",
"Title":"Piazza Grande. ",
"Cities":"Bologna",
"Publisher":"Cappelli",
"Years":1953,
"Fund":"BTB Segn. 471",
"Segni":"Dedica dell\u2019autore in data 11.1953.",
"Category":"IL"
},{
"Unnamed: 0":1614.0,
"Authors":"Not found",
"Title":"La luna nel corso. Pagine milanesi. ",
"Cities":"Milano",
"Publisher":"Corrente",
"Years":1941,
"Fund":"BTB Segn. 472",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1615.0,
"Authors":"Lupo, Ettore",
"Title":"Nelson e la Hamilton: i loro delitti a Napoli nel 1799",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1941,
"Fund":"BAL",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1616.0,
"Authors":"Luti, Giorgio",
"Title":"Cronache letterarie tra le due guerre1920\/1940",
"Cities":"Bari",
"Publisher":"Laterza",
"Years":1966,
"Fund":"BTB Segn. 824",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1617.0,
"Authors":"Luzi, Mario",
"Title":"Avvento notturno",
"Cities":"Firenze  ",
"Publisher":"Vallecchi",
"Years":1940,
"Fund":"BTB Segn. 473",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1618.0,
"Authors":"Luzi, Mario",
"Title":"Biografia a Ebe",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1942,
"Fund":"BTB Segn. 474",
"Segni":"Dedica dell\u2019autore in data 12.1942.",
"Category":"IL"
},{
"Unnamed: 0":1619.0,
"Authors":"Luzi, Mario",
"Title":"Il giusto della vita",
"Cities":"Milano  ",
"Publisher":"Garzanti",
"Years":1960,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1620.0,
"Authors":"Luzi, Mario",
"Title":"Quaderno gotico",
"Cities":"Firenze  ",
"Publisher":"Vallecchi",
"Years":1947,
"Fund":"BTB Segn. 476",
"Segni":"Dedica dell\u2019autore in data 5.1947.",
"Category":"IL"
},{
"Unnamed: 0":1621.0,
"Authors":"Luzi, Mario",
"Title":"Studio su Mallarm\u00e9",
"Cities":"Firenze  ",
"Publisher":"Sansoni",
"Years":1952,
"Fund":"BTB Segn. 1130",
"Segni":"Invio.",
"Category":"IL"
},{
"Unnamed: 0":1622.0,
"Authors":"Luzi, Mario",
"Title":"Un\u2019illusione platonica e altri saggi",
"Cities":"Firenze",
"Publisher":"Rivoluzione",
"Years":1941,
"Fund":"BTB Segn. 475",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1623.0,
"Authors":"Lycurgus",
"Title":"L\u2019orazione contro Leocrate",
"Cities":"Milano  ",
"Publisher":"Segati e C.",
"Years":1901,
"Fund":"BAL",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":1624.0,
"Authors":"Macaulay Trevelyan, Giorgio",
"Title":"Storia d\u2019Inghilterra",
"Cities":"Milano  ",
"Publisher":"Garzanti",
"Years":1938,
"Fund":"BAL",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1625.0,
"Authors":"Maccari, Mino",
"Title":"Il trastullo di Strapaese: canzoncine e legni incisi",
"Cities":"Firenze  ",
"Publisher":"Vallecchi",
"Years":1928,
"Fund":null,
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1626.0,
"Authors":"Macchia, Giovanni",
"Title":"Baudelaire e la poetica della malinconia",
"Cities":"Napoli ",
"Publisher":"Edizioni Scientifiche Italiane",
"Years":1946,
"Fund":"BTB Segn. 1131",
"Segni":"Dedica dell\u2019autore. Intonso.",
"Category":"IL"
},{
"Unnamed: 0":1627.0,
"Authors":"Macchia, Giovanni",
"Title":"Il mito di Parigi",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1965,
"Fund":"BTB Segn. 1132",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":1628.0,
"Authors":"Macchia, Giovanni",
"Title":"I moralisti classici. Da Machiavelli a La Bruy\u00e8re",
"Cities":"Milano  ",
"Publisher":"Garzanti",
"Years":1961,
"Fund":"BTB Segn. 1133",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1629.0,
"Authors":"Macchia, Giovanni",
"Title":" Vita, avventure e morte di Don Giovanni",
"Cities":"Bari",
"Publisher":"Laterza",
"Years":1966,
"Fund":"BTB Segn. 825",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1630.0,
"Authors":"Mac\u00e9, Jean (pseud. di Jean",
"Title":"Histoire d\u2019une bouch\u00e9e de pain",
"Cities":"Paris  ",
"Publisher":"Hetzel",
"Years":"s.d.",
"Fund":"BTB Segn. 2079",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":1631.0,
"Authors":"Machiavelli, Niccol\u00f2",
"Title":"La mandragola; Clizia; ",
"Cities":"Roma",
"Publisher":"Form\u00ecggini",
"Years":1927,
"Fund":"BTB Segn. 486",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1632.0,
"Authors":"Machiavelli, Niccol\u00f2",
"Title":"La Mandragola; Belfagor",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1943,
"Fund":"BTB Segn. 485",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1633.0,
"Authors":"Machiavelli, Niccol\u00f2",
"Title":"Opere complete",
"Cities":"Firenze ",
"Publisher":"Passigli e Borghi",
"Years":1831,
"Fund":"BTB Segn. 481-484",
"Segni":"Postille.",
"Category":"IL"
},{
"Unnamed: 0":1634.0,
"Authors":"Machiavelli, Niccol\u00f2",
"Title":"Opere istoriche e politiche. Tomi terzo e quarto",
"Cities":"Filadelfia  ",
"Publisher":"nella Stamperia delle Provincie Unite",
"Years":1818,
"Fund":"BTB Segn. 479-480",
"Segni":"Volume II parzialmente intonso.",
"Category":"IL"
},{
"Unnamed: 0":1635.0,
"Authors":"Machiavelli, Niccol\u00f2",
"Title":" Il Principe.",
"Cities":"s.l.",
"Publisher":"s.n.",
"Years":"s.d.",
"Fund":"BAL",
"Segni":"Sottolineature.",
"Category":"IL"
},{
"Unnamed: 0":1636.0,
"Authors":"Machiavelli, Niccol\u00f2",
"Title":" Il Principe. ",
"Cities":"Roma",
"Publisher":"Garroni",
"Years":"s.d.",
"Fund":"BAL",
"Segni":"Timbro di possesso di Enrico Gadda.",
"Category":"IL"
},{
"Unnamed: 0":1637.0,
"Authors":"Machiavelli, Niccol\u00f2",
"Title":"Il Principe.",
"Cities":"Firenze ",
"Publisher":"Rinascimento del Libro",
"Years":1939,
"Fund":"BTB Segn. 487",
"Segni":"Esemplare n. 275\/1000.",
"Category":"IL"
},{
"Unnamed: 0":1638.0,
"Authors":"Machiavelli, Niccol\u00f2",
"Title":"Tutte le opere. ",
"Cities":"Milano  ",
"Publisher":"Mondadori",
"Years":1949,
"Fund":"BTB Segn. 477-478",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1639.0,
"Authors":"Madelin, Louis",
"Title":"Napol\u00e9on",
"Cities":"Paris",
"Publisher":"Dunod",
"Years":1935,
"Fund":"BTB Segn. 1655",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":1640.0,
"Authors":"Maeterlinck, Maurice",
"Title":"Th\u00e9\u00e2tre",
"Cities":"Paris",
"Publisher":"Fasquelle",
"Years":1918,
"Fund":"BTB Segn. 1031-1033",
"Segni":"Nota di possesso autografa in data 17.09.1919 Milano.",
"Category":"FL"
},{
"Unnamed: 0":1641.0,
"Authors":"Maffei, Scipione",
"Title":"La Merope. Tragedia",
"Cities":"Verona",
"Publisher":"Romanzini",
"Years":1745,
"Fund":"BTB Segn. 488",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1642.0,
"Authors":"Magalotti, Lorenzo",
"Title":"Saggi di naturali esperienze fatte nell\u2019Accademia del Serenissimo Principe Leopoldo di Toscana e descritte dal segretario di essa Accademia.",
"Cities":"Roma",
"Publisher":"Colombo",
"Years":1947,
"Fund":"BTB Segn. 489",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":1643.0,
"Authors":"Magalotti, Lorenzo",
"Title":"Scritti di corte e di mondo",
"Cities":"Roma",
"Publisher":"Colombo",
"Years":1945,
"Fund":"BTB Segn. 490",
"Segni":"Dedica del curatore.",
"Category":"T"
},{
"Unnamed: 0":1644.0,
"Authors":"Maggi, Carlo Maria",
"Title":"Il teatro milanese",
"Cities":"Torino  ",
"Publisher":"Einaudi",
"Years":1964,
"Fund":"BAL",
"Segni":"Postille.",
"Category":"IL"
},{
"Unnamed: 0":1645.0,
"Authors":"Magliocco, Vito",
"Title":"India da zero all\u2019infinito",
"Cities":"Milano",
"Publisher":"Le nuove edizioni d\u2019Italia",
"Years":1962,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1646.0,
"Authors":"Magliocco, Vito",
"Title":"Il monastero di Santa Caterina nel Sinai",
"Cities":"Milano ",
"Publisher":"Le Nuove Edizioni d\u2019Italia",
"Years":1964,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1647.0,
"Authors":"Magnaghi, Alberto",
"Title":"Amerigo Vespucci",
"Cities":"Milano",
"Publisher":"Treves",
"Years":1926,
"Fund":"BTB Segn. 1532",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1648.0,
"Authors":"Magnani, Luigi",
"Title":"Le frontiere della musica. Da Monteverdi a Sch\u00f6nberg",
"Cities":"Milano-Napoli ",
"Publisher":"Ricciardi",
"Years":1962,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":1649.0,
"Authors":"Magnani, Luigi",
"Title":"L\u2019idea della Chartreuse",
"Cities":"Firenze  ",
"Publisher":"Sansoni",
"Years":1953,
"Fund":"BTB Segn. Op. 39",
"Segni":"Dedica dell\u2019autore in data 26.1.1952. Pieghe e postille.",
"Category":"IL"
},{
"Unnamed: 0":1650.0,
"Authors":"Magne, Emile",
"Title":"La vie quotidienne au temps de Louis XIII",
"Cities":"Paris",
"Publisher":"Hachette",
"Years":1942,
"Fund":"BTB Segn. 1656",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1651.0,
"Authors":"Magnino, Bianca",
"Title":"Federico Schiller",
"Cities":"Roma  ",
"Publisher":"Form\u00ecggini",
"Years":1929,
"Fund":"BTB Segn. 1228",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1652.0,
"Authors":"Mahnke, Dietrich",
"Title":"Leibnizens Synthese von Universal mathematik und Individual metaphysik",
"Cities":"Halle  ",
"Publisher":"Niemeyer",
"Years":1925,
"Fund":"BTB Segn. 1956",
"Segni":null,
"Category":"F "
},{
"Unnamed: 0":1653.0,
"Authors":"Maier, Bruno",
"Title":"Introduzione a Italo Svevo",
"Cities":"Milano",
"Publisher":"Dall\u2019Oglio",
"Years":1959,
"Fund":"BTB Segn. 826",
"Segni":"Dedica dell\u2019autore in data 1963.",
"Category":"IL"
},{
"Unnamed: 0":1654.0,
"Authors":"Maier, Bruno",
"Title":"Il mito letterario d\u2019un nuovo Decamerone e la novellistica italiana del Cinquecento",
"Cities":"Milano  ",
"Publisher":"Club del Libro",
"Years":1962,
"Fund":"BTB Segn. 827",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":1655.0,
"Authors":"Maier, Bruno",
"Title":"La personalit\u00e0 e l\u2019opera di Italo Svevo",
"Cities":"Milano",
"Publisher":"Mursia",
"Years":1961,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1656.0,
"Authors":"Maironi, Carlo",
"Title":"Il prete oggi",
"Cities":"Modena",
"Publisher":"Guanda",
"Years":1951,
"Fund":"BTB Segn. 2172",
"Segni":"Intonso.",
"Category":"V "
},{
"Unnamed: 0":1657.0,
"Authors":"Maistre, Xavier de",
"Title":"Viaggi in casa. Mussino",
"Cities":"Roma",
"Publisher":"Form\u00ecggini",
"Years":1922,
"Fund":"BTB Segn. 1034",
"Segni":"Intonso.",
"Category":"L"
},{
"Unnamed: 0":1658.0,
"Authors":"Malamud, Bernard",
"Title":"L\u2019uomo di Kiev",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1968,
"Fund":"BTB Segn. 1278",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":1659.0,
"Authors":"Malaparte, Curzio",
"Title":"Kaputt",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1968,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1660.0,
"Authors":"Malaparte, Curzio",
"Title":"Maledetti toscani",
"Cities":"Firenze  ",
"Publisher":"Vallecchi",
"Years":1956,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1661.0,
"Authors":"Malaparte, Curzio",
"Title":"La pelle",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1967,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1662.0,
"Authors":"Malaparte, Curzio",
"Title":"Tecnica del colpo di stato",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1948,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1663.0,
"Authors":"Malato, Enrico",
"Title":"La poesia dialettale napoletana. ",
"Cities":"Napoli  ",
"Publisher":"Edizioni Scientifiche Italiane",
"Years":1960,
"Fund":"BTB Segn. 828-829",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1664.0,
"Authors":"Malebranche, Nicolas",
"Title":"De la recherche de la v\u00e9rit\u00e9. ",
"Cities":"Paris  ",
"Publisher":"Delagrave",
"Years":1885,
"Fund":"BTB Segn. 1865",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":1665.0,
"Authors":"Malebranche, Nicolas",
"Title":"\u0152uvres. I\u00e8res\u00e9rie.",
"Cities":"Paris",
"Publisher":"Fasquelle",
"Years":1842,
"Fund":"BTB Segn. 1864",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":1666.0,
"Authors":"Malebranche, Nicolas",
"Title":"Pensieri metafisici",
"Cities":"Lanciano",
"Publisher":"Carabba",
"Years":1911,
"Fund":"BTB Segn. 1866",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":1667.0,
"Authors":"Malerba, Luigi",
"Title":"Salto mortale. ",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1968,
"Fund":"BTB Segn. 491",
"Segni":"Prima bozza impaginata. Postille.",
"Category":"IL"
},{
"Unnamed: 0":1668.0,
"Authors":"Malerba, Luigi",
"Title":"Salto mortale",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1968,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1669.0,
"Authors":"Malipiero, Gian Francesco",
"Title":"Anton Francesco Doni musico",
"Cities":"Venezia",
"Publisher":"La Caravella",
"Years":1946,
"Fund":"BTB Segn. 1429",
"Segni":"Dedica dell\u2019autore in data 20.11.1946.",
"Category":"IL"
},{
"Unnamed: 0":1670.0,
"Authors":"Mallarm\u00e9, St\u00e9phane",
"Title":"L\u2019apr\u00e8smidi d\u2019un faune. Preceduto dalla genesi dell\u2019\u00abApr\u00e8smidi d\u2019un faune\u00bb di C. Gujot",
"Cities":"Firenze ",
"Publisher":"Il Fiore",
"Years":1945,
"Fund":"BTB Segn. 1036",
"Segni":"Dedica del traduttore in data 10.1945.         Postille del traduttore.",
"Category":"FL"
},{
"Unnamed: 0":1671.0,
"Authors":"Mallarm\u00e9, St\u00e9phane",
"Title":"Monologo; Improvviso; Pomeriggio d\u2019un fauno",
"Cities":"Firenze",
"Publisher":"Fussi",
"Years":1951,
"Fund":"BTB Segn. 1037",
"Segni":"Dedica del traduttore in data 11.1951. Postille.",
"Category":"FL"
},{
"Unnamed: 0":1672.0,
"Authors":"Mallarm\u00e9, St\u00e9phane",
"Title":" Po\u00e9sies. ",
"Cities":"Paris",
"Publisher":"NRF-Gallimard.",
"Years":1914,
"Fund":"BTB Segn. 1035",
"Segni":"Nota di possesso autografa in data 18.09.1919 Milano.",
"Category":"FL"
},{
"Unnamed: 0":1673.0,
"Authors":"Malraux, Andr\u00e9",
"Title":"La condition humaine",
"Cities":"Paris  ",
"Publisher":"NRF-Gallimard",
"Years":1933,
"Fund":"BTB Segn. 1038",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":1674.0,
"Authors":"Manchester, William",
"Title":"Morte di un presidente",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1967,
"Fund":"BTB Segn. 1743",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":1675.0,
"Authors":"Manganelli, Giorgio",
"Title":"Nuovo commento",
"Cities":"Torino  ",
"Publisher":"Einaudi",
"Years":1969,
"Fund":"BTB Segn. 492",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1676.0,
"Authors":"Mann, Thomas",
"Title":"Altezza reale",
"Cities":"Milano  ",
"Publisher":"Corbaccio",
"Years":1933,
"Fund":"BTB Segn. 1200",
"Segni":null,
"Category":"GL"
},{
"Unnamed: 0":1677.0,
"Authors":"Mann, Thomas",
"Title":"I Buddenbrook. Decadenza di una famiglia",
"Cities":"Milano  ",
"Publisher":"Istituto Editoriale Italiano",
"Years":1945,
"Fund":"BTB Segn. 1201",
"Segni":null,
"Category":"GL"
},{
"Unnamed: 0":1678.0,
"Authors":"Mann, Thomas",
"Title":"Le confessioni di un cavaliere d\u2019industria",
"Cities":"Milano  ",
"Publisher":"Garzanti",
"Years":1948,
"Fund":"BTB Segn. 1201",
"Segni":"Dedica di Alberto Savini in data 28.10.1952.",
"Category":"GL"
},{
"Unnamed: 0":1679.0,
"Authors":"Mann, Thomas",
"Title":"Doctor Faustus. La vita del compositore tedesco Adrian Leverk\u00fchn narrata da un amico.",
"Cities":"Milano  ",
"Publisher":"Mondadori",
"Years":1949,
"Fund":"BTB Segn. 1204",
"Segni":null,
"Category":"GL"
},{
"Unnamed: 0":1680.0,
"Authors":"Mann, Thomas",
"Title":" Mario e il mago. Una tragica esperienza di viaggio.  ",
"Cities":"Firenze",
"Publisher":"Barbera",
"Years":"s.d.",
"Fund":"BTB Segn. 1203",
"Segni":"Dedica del curatore in data 16.7.1945.",
"Category":"GL"
},{
"Unnamed: 0":1681.0,
"Authors":"Mann, Thomas",
"Title":"La montagne magique",
"Cities":"Paris",
"Publisher":"Fayard",
"Years":1938,
"Fund":"BTB Segn. 1205-1206",
"Segni":"Parzialmente intonsi.",
"Category":"GL"
},{
"Unnamed: 0":1682.0,
"Authors":"Mann, Thomas",
"Title":"La morte a Venezia; Le confessioni di un cavaliere d\u2019industria. ",
"Cities":"Milano",
"Publisher":"Treves",
"Years":1930,
"Fund":"BTB Segn. 1207",
"Segni":"Pieghe.",
"Category":"GL"
},{
"Unnamed: 0":1683.0,
"Authors":"Mann, Thomas",
"Title":"Fisiologia del dolore",
"Cities":"Firenze  ",
"Publisher":"Bemporad",
"Years":1930,
"Fund":"BTB Segn. 494",
"Segni":"Intonso.",
"Category":"GL"
},{
"Unnamed: 0":1684.0,
"Authors":"Mantegazza, Paolo",
"Title":"Fisiologia dell\u2019amore",
"Cities":"Firenze  ",
"Publisher":"Bemporad",
"Years":1930,
"Fund":"BTB Segn. 493",
"Segni":"Intonso.",
"Category":"IL"
},{
"Unnamed: 0":1685.0,
"Authors":"Mantegazza, Paolo",
"Title":"Fisiologia del piacere",
"Cities":"Firenze  ",
"Publisher":"Bemporad",
"Years":1930,
"Fund":"BTB Segn. 495",
"Segni":"Intonso.",
"Category":"IL"
},{
"Unnamed: 0":1686.0,
"Authors":"Mantegazza, Paolo",
"Title":"Igiene dell\u2019amore",
"Cities":"Firenze  ",
"Publisher":"Bemporad",
"Years":1930,
"Fund":"BTB Segn. 497",
"Segni":"Parzialmente intonso.",
"Category":"IL"
},{
"Unnamed: 0":1687.0,
"Authors":"Mantegazza, Paolo",
"Title":"Un giorno a Madera",
"Cities":"Firenze  ",
"Publisher":"Bemporad",
"Years":1930,
"Fund":"BTB Segn. 496",
"Segni":"Intonso.",
"Category":"IL"
},{
"Unnamed: 0":1688.0,
"Authors":"Mantegazza, Vico",
"Title":"L\u2019assedio di Macall\u00e8",
"Cities":"Firenze  ",
"Publisher":"Le Monnier",
"Years":1896,
"Fund":"BTB Segn. 1533",
"Segni":"Nota di possesso autografa di Adele Gadda Lehr.",
"Category":"IL"
},{
"Unnamed: 0":1689.0,
"Authors":"Mantovani, Tancredi",
"Title":"Carlo Gozzi",
"Cities":"Roma",
"Publisher":"Form\u00ecggini",
"Years":1926,
"Fund":"BTB Segn. 831",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1690.0,
"Authors":"Not found",
"Title":"Manuale dell\u2019ingegnere civile",
"Cities":"Roma  ",
"Publisher":"Perrella",
"Years":1952,
"Fund":"BTB Segn. 2058",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":1691.0,
"Authors":"Manuale introduttivo alla",
"Title":"Manuale introduttivo alla storia del cristianesimo. Vol. 1: Il Cristianesimo antico. Parte 1: I primi tre secoli",
"Cities":"Foligno  ",
"Publisher":"Campitelli",
"Years":1925,
"Fund":"BTB Segn. 1788",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":1692.0,
"Authors":"Not found",
"Title":"Manuale tecnico per l\u2019applicazione di caldaie Lollar, radiatori Lollar, raccordi Lollar 1913-1914",
"Cities":"Milano",
"Publisher":"Societ\u00e0 Commerciale Buderus",
"Years":1913,
"Fund":"BTB Segn. 2050",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":1693.0,
"Authors":"Manucci, Aldo",
"Title":"Le azioni di Castruccio Castracane degli Anteminelli signore di Lucca con la genealogia della famiglia",
"Cities":"Lucca",
"Publisher":"Tip. Guidotti",
"Years":1843,
"Fund":"BTB Segn. 1534",
"Segni":"Nota di possesso autografa di Adele Gadda  Lehr.",
"Category":"IL"
},{
"Unnamed: 0":1694.0,
"Authors":"Not found",
"Title":"Manuel de l\u2019ing\u00e9nieur: Planches",
"Cities":null,
"Publisher":null,
"Years":null,
"Fund":"BTB Segn. 2134",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":1695.0,
"Authors":"Manzini, Gianna",
"Title":"Allegro con disperazione",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1965,
"Fund":"BAL",
"Segni":"Dedica autografa dell\u2019autrice in data 20.10.1965.",
"Category":null
},{
"Unnamed: 0":1696.0,
"Authors":"Manzini, Gianna",
"Title":"Boscovivo",
"Cities":"Milano-Roma  ",
"Publisher":"Treves",
"Years":1932,
"Fund":"BTB Segn. 498",
"Segni":"Postille.",
"Category":null
},{
"Unnamed: 0":1697.0,
"Authors":"Manzini, Gianna",
"Title":"Forte come un leone",
"Cities":"Milano  ",
"Publisher":"Mondadori",
"Years":1947,
"Fund":"BTB Segn. 500",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1698.0,
"Authors":"Manzini, Gianna",
"Title":"Ho visto il tuo cuore",
"Cities":"Milano  ",
"Publisher":"Mondadori",
"Years":1950,
"Fund":"BTB Segn. 501",
"Segni":"Dedica dell\u2019autrice in data 28.3.1950.",
"Category":"IL"
},{
"Unnamed: 0":1699.0,
"Authors":"Manzini, Gianna",
"Title":"Rive remote. Racconti",
"Cities":"Milano  ",
"Publisher":"Mondadori",
"Years":1940,
"Fund":"BTB Segn. 50",
"Segni":"Dedica dell\u2019autrice in data 5.3.1940.",
"Category":"IL"
},{
"Unnamed: 0":1700.0,
"Authors":"Manzini, Gianna",
"Title":"Tempo innamorato",
"Cities":"Milano  ",
"Publisher":"Mondadori",
"Years":1943,
"Fund":"BTB Segn. 503",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1701.0,
"Authors":"Manzini, Gianna",
"Title":"Un filo di brezza",
"Cities":"Milano  ",
"Publisher":"Panorama",
"Years":1936,
"Fund":"BTB Segn. 499",
"Segni":"Dedica dell\u2019autrice in data 20.12.1936.  Postille.",
"Category":"IL"
},{
"Unnamed: 0":1702.0,
"Authors":"Manzini, Gianna",
"Title":"Venti racconti. ",
"Cities":"Milano  ",
"Publisher":"Mondadori",
"Years":1941,
"Fund":"BTB Segn. 504",
"Segni":"Dedica dell\u2019autrice in data 11.1941.",
"Category":"IL"
},{
"Unnamed: 0":1703.0,
"Authors":"Manzoni, Alessandro",
"Title":"The Betrothed",
"Cities":"London-New YorkCincinnati-Chicago",
"Publisher":"Burns & Oates",
"Years":1867,
"Fund":"BTB Segn. 510",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1704.0,
"Authors":"Manzoni, Alessandro",
"Title":"Il cinque maggio. Ventisette traduzioni in varie lingue del Cinque Maggio di Alessandro Manzoni raccolte da C.A. Meschia. Col testo dell\u2019ode",
"Cities":"Foligno  ",
"Publisher":"Stabilimento Feliciano Campitelli",
"Years":1883,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1705.0,
"Authors":"Manzoni, Alessandro",
"Title":"Inni sacri e altre poesie",
"Cities":"Roma  ",
"Publisher":"Garroni",
"Years":1911,
"Fund":"BAL",
"Segni":"Timbro di possesso di Enrico Gadda.",
"Category":"IL"
},{
"Unnamed: 0":1706.0,
"Authors":"Manzoni, Alessandro",
"Title":"Le opere II: Gli sposi promessi",
"Cities":"Milano  ",
"Publisher":"Dante Alighieri",
"Years":1943,
"Fund":"BTB Segn. 509",
"Segni":"Postille.",
"Category":"IL"
},{
"Unnamed: 0":1707.0,
"Authors":"Manzoni, Alessandro",
"Title":"Opere varie I.",
"Cities":"Milano  ",
"Publisher":"Casa del Manzoni",
"Years":1942,
"Fund":"BTB Segn. 505",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1708.0,
"Authors":"Manzoni, Alessandro",
"Title":"Opere varie II. Ghisalberti",
"Cities":"Milano  ",
"Publisher":"Casa del Manzoni",
"Years":1943,
"Fund":"BTB Segn. 506",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1709.0,
"Authors":"Manzoni, Alessandro",
"Title":"Postille al vocabolario della Crusca nell\u2019edizione veronese. A cura di D. Isella",
"Cities":"Milano-Napoli  ",
"Publisher":"Ricciardi",
"Years":1964,
"Fund":"BTB Segn. 507",
"Segni":"Intonso.",
"Category":"IL"
},{
"Unnamed: 0":1710.0,
"Authors":"Manzoni, Alessandro",
"Title":"I Promessi Sposi",
"Cities":"London ",
"Publisher":" Burns and  Oates",
"Years":1829,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1711.0,
"Authors":"Manzoni, Alessandro",
"Title":"I Promessi Sposi",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1908,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1712.0,
"Authors":"Manzoni, Alessandro",
"Title":"I promessi sposi. Storia della colonna infame",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1934,
"Fund":null,
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1713.0,
"Authors":"Manzoni, Alessandro",
"Title":"I promessi sposi. Storia milanese del secolo XVII scoperta e rifatta da Alessandro Manzoni. ",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1960,
"Fund":"BTB Segn. 508",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1714.0,
"Authors":"Manzoni, Alessandro",
"Title":"La rivoluzione francese del 1789 e la rivoluzione italiana del 1859.",
"Cities":"Firenze",
"Publisher":"Barbera",
"Years":1923,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1715.0,
"Authors":"Manzoni, Alessandro",
"Title":"Scritti sulla lingua italiana",
"Cities":"Firenze",
"Publisher":"Barbera",
"Years":1923,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1716.0,
"Authors":"Manzoni, Alessandro",
"Title":" Storia della Colonna infame, e alcune lettere; con le Osservazioni sulla tortura di Pietro Verri",
"Cities":"Firenze",
"Publisher":"Barbera",
"Years":1923,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1717.0,
"Authors":"Manzoni, Alessandro",
"Title":"Storia della colonna infame",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1942,
"Fund":null,
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1718.0,
"Authors":"Manzoni, Alessandro",
"Title":"Tragedie. In appendice le correzioni del 1845, gli appunti per \u00abSpartaco\u00bb, la \u00abLettre a M. Chauvet\u00bb e una scelta di lettere attinenti alle tragedie",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1965,
"Fund":"BTB Segn. 514",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1719.0,
"Authors":"Manzoni, Alessandro",
"Title":"Tragedie e poesie",
"Cities":"Milano  ",
"Publisher":"Trevisini",
"Years":1886,
"Fund":"BAL",
"Segni":"Dono di Adele Gadda Lehr a C.E. Gaddail 28.01.1905.",
"Category":"IL"
},{
"Unnamed: 0":1720.0,
"Authors":"Manzoni, Alessandro",
"Title":"Die Verlobten",
"Cities":"s.l.",
"Publisher":"s.e.",
"Years":"s.d.",
"Fund":"BAC",
"Segni":"Nota di C.E. Gadda \u00abPezzo di una copia dei \u201cPromessi Sposi, tradotti in tedesco, trovati nei posti nemici sull\u2019Altipiano dei Sette Comuni, estate 1916, da me C.E. Gadda nell\u2019avanzata da Magnaboschi verso la Val D\u2019Assa \u2013 Nota del riordino. 1933. Eguale edizione abbiamo in due esemplari (2x2voll.) nella biblioteca, da mia mamma.\u2013 C.E. Gadda\u00bb.",
"Category":"IL"
},{
"Unnamed: 0":1721.0,
"Authors":"Manzoni, Alessandro",
"Title":"Die Verlobten",
"Cities":"Leipzig",
"Publisher":"Reclam",
"Years":"s.d.",
"Fund":"BTB Segn. 511-512",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1722.0,
"Authors":"Maraini, Dacia",
"Title":"Crudelt\u00e0 all\u2019aria aperta",
"Cities":"Milano  ",
"Publisher":"Feltrinelli",
"Years":1966,
"Fund":"BTB Segn. 515",
"Segni":"Dedica dell\u2019autrice.",
"Category":"IL"
},{
"Unnamed: 0":1723.0,
"Authors":"Maranini, Lorenza",
"Title":"Proust, arte e conoscenza",
"Cities":"Firenze",
"Publisher":"Novissima Editrice",
"Years":1933,
"Fund":"BTB Segn. 1134",
"Segni":"Pieghe.",
"Category":"IL"
},{
"Unnamed: 0":1724.0,
"Authors":"Mara\u00f1on, Gregorio",
"Title":"Amiel, o della timidezza",
"Cities":"Torino  ",
"Publisher":"Einaudi",
"Years":1938,
"Fund":"BTB Segn. 1135",
"Segni":"Intonso.",
"Category":"SL"
},{
"Unnamed: 0":1725.0,
"Authors":"Maraschini, Maria",
"Title":"Alain Fournier. Ed altri saggi",
"Cities":"Milano",
"Publisher":"La Lampada",
"Years":1942,
"Fund":"BTB Segn. 1137",
"Segni":"Intonso.",
"Category":"L"
},{
"Unnamed: 0":1726.0,
"Authors":"Marchesi, Concetto",
"Title":"Divagazioni",
"Cities":"Venezia  ",
"Publisher":"Neri Pozza",
"Years":1951,
"Fund":"BTB Segn. 516",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1727.0,
"Authors":"Marchesi, Concetto",
"Title":"Storia della letteratura latina",
"Cities":"Messina-Milano",
"Publisher":"Principato",
"Years":1939,
"Fund":"BTB Segn. 121-122",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1728.0,
"Authors":"Marchi, Gian Paolo",
"Title":"Un nuovo documento su Vittorino da Feltre",
"Cities":null,
"Publisher":null,
"Years":1965,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1729.0,
"Authors":"Marcolongo, Roberto",
"Title":"Leonardo Da Vinci \u2013 artista scienziato",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1950,
"Fund":"BAL",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":1730.0,
"Authors":"Marcolongo, Roberto",
"Title":"Meccanica razionale",
"Cities":"Milano  ",
"Publisher":"Hoepli",
"Years":1917,
"Fund":"BTB Segn. 2027-2028",
"Segni":"Solo al volume I: nota di possesso autografa. Sottolineature e postille.",
"Category":"T"
},{
"Unnamed: 0":1731.0,
"Authors":"Not found",
"Title":"Marco Polo: celebrazione del settimo centenario della nascita, 1254-1954",
"Cities":"Venezia",
"Publisher":"Comune di Venezia",
"Years":1954,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1732.0,
"Authors":"Marcus Aurelius Antoninus",
"Title":"Ricordi dell\u2019imperatore Marc\u2019Aurelio Antonino",
"Cities":"Firenze",
"Publisher":"Barbera",
"Years":1924,
"Fund":"BAL",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":1733.0,
"Authors":"Margueritte, Victor",
"Title":"Le compagnon",
"Cities":"Paris  ",
"Publisher":"Flammarion",
"Years":1923,
"Fund":"BTB Segn. 1039",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":1734.0,
"Authors":"Mariani, Gaetano",
"Title":"La giovane narrativa italiana tra documento e poesia",
"Cities":"Firenze ",
"Publisher":"Le Monnier",
"Years":1962,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1735.0,
"Authors":"Mariani, Valerio",
"Title":"Bartolomeo Pinelli. ",
"Cities":"Roma",
"Publisher":"Istituto Nazionale L.U.C.E.",
"Years":1931,
"Fund":"BTB Segn. 2186-2187",
"Segni":"Due copie.",
"Category":"SA"
},{
"Unnamed: 0":1736.0,
"Authors":"Mariani, Valerio",
"Title":" Il Caravaggio. ",
"Cities":"Roma",
"Publisher":"Istituto Nazionale L.U.C.E.",
"Years":1930,
"Fund":"BTB Segn. 2185",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":1737.0,
"Authors":"Not found",
"Title":"Marianische Gebetbuch.",
"Cities":"s.l.",
"Publisher":"s.e.",
"Years":"s.d.",
"Fund":"BAL",
"Segni":"Segnalibri.",
"Category":"V"
},{
"Unnamed: 0":1738.0,
"Authors":"Marin, Biagio",
"Title":"I delfini di Scipio Slataper",
"Cities":"Milano ",
"Publisher":"All\u2019insegna del Pesce d\u2019Oro",
"Years":1965,
"Fund":"BTB Segn. 832",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1739.0,
"Authors":"Marinelli, Giuseppe",
"Title":"La terra. Trattato popolare di geografia universale. ",
"Cities":"MilanoNapoli-Bologna-Firenze-RomaTorino",
"Publisher":"Vallardi",
"Years":"s.d.",
"Fund":"BTB Segn. 2250-2262",
"Segni":"Al volume II, pieghe. Al volume IV, nota di possesso autografa di Adele Gadda Lehr. Al volume VII, sottolineature e postille.",
"Category":"V"
},{
"Unnamed: 0":1740.0,
"Authors":"Marino, Antonio",
"Title":"Il meccanico frigorista. Manuale teoricopratico",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1929,
"Fund":"BTB Segn. 2038",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":1741.0,
"Authors":"Marino, Giambattista",
"Title":"La strage degli innocenti",
"Cities":"Roma  ",
"Publisher":"Garroni",
"Years":1913,
"Fund":"BAL",
"Segni":"Nota di possesso di Enrico Gadda Chiantis ottobre 17.",
"Category":"IL"
},{
"Unnamed: 0":1742.0,
"Authors":"Martinetti, Piero",
"Title":"Antologia kantiana",
"Cities":"Torino-Milano-Firenze-Roma-NapoliPalermo",
"Publisher":"Paravia",
"Years":1925,
"Fund":"BTB Segn. 1957",
"Segni":"Dedica dell\u2019autore in data 14.11.1925. Nota di possesso autografa in data 14.11.1925 Milano.",
"Category":"F "
},{
"Unnamed: 0":1743.0,
"Authors":"Martinetti, Piero",
"Title":"Antologia platonica",
"Cities":"Torino-Milano-Firenze-Roma-NapoliPalermo",
"Publisher":"Paravia",
"Years":1939,
"Fund":"BTB Segn. 1958",
"Segni":null,
"Category":"F "
},{
"Unnamed: 0":1744.0,
"Authors":"Martinetti, Piero",
"Title":"Il compito della filosofia nell\u2019ora presente",
"Cities":"Milano ",
"Publisher":"Bertieri e Vanzetti",
"Years":1920,
"Fund":"BTB Segn. 1869",
"Segni":"Sottolineature.",
"Category":"F "
},{
"Unnamed: 0":1745.0,
"Authors":"Martinetti, Piero",
"Title":"Discorso ufficiale pronunciato al 3\u00b0 convegno tenuto in Castellamonte il 19 settembre 1926 nella Casa della Musica \u00abF. Romana\u00bb.",
"Cities":"s.l.",
"Publisher":"s.n.",
"Years":1926,
"Fund":"BTB Segn. Op. 40",
"Segni":"Dedica dell\u2019autore in data 16.3.1928.",
"Category":"F "
},{
"Unnamed: 0":1746.0,
"Authors":"Martinetti, Piero",
"Title":"Ges\u00f9 Cristo e il cristianesimo",
"Cities":"Milano ",
"Publisher":"Edizioni della \u00abRivista di Filosofia\u00bb",
"Years":1934,
"Fund":"BTB Segn. 1873",
"Segni":null,
"Category":"F "
},{
"Unnamed: 0":1747.0,
"Authors":"Martinetti, Piero",
"Title":"Introduzione alla metafisica",
"Cities":"Milano",
"Publisher":"Libreria Editrice Lombarda",
"Years":1929,
"Fund":"BTB Segn. 1870",
"Segni":"Intonso.",
"Category":"F "
},{
"Unnamed: 0":1748.0,
"Authors":"Martinetti, Piero",
"Title":"La libert\u00e0",
"Cities":"Milano ",
"Publisher":"Libreria Editrice Lombarda",
"Years":1928,
"Fund":"BTB Segn. 1871",
"Segni":"Intonso.",
"Category":"F "
},{
"Unnamed: 0":1749.0,
"Authors":"Martinetti, Piero",
"Title":"Ragione e fede",
"Cities":"Milano  ",
"Publisher":"Edizioni della Rivista di Filosofia",
"Years":1934,
"Fund":"BTB Segn. 1875",
"Segni":null,
"Category":"F "
},{
"Unnamed: 0":1750.0,
"Authors":"Martinetti, Piero",
"Title":"Ragione e fede",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1942,
"Fund":"BTB Segn. 1874",
"Segni":null,
"Category":"F "
},{
"Unnamed: 0":1751.0,
"Authors":"Martini, Arturo",
"Title":"Lettere",
"Cities":"Treviso  ",
"Publisher":"Edizioni di Treviso-Libreria editrice Canova",
"Years":1954,
"Fund":"BTB Segn. 517",
"Segni":"Intonso.",
"Category":"IL"
},{
"Unnamed: 0":1752.0,
"Authors":"Martini, Ferdinando",
"Title":"Nell\u2019Africa italiana",
"Cities":"Milano",
"Publisher":"Treves",
"Years":1896,
"Fund":"BTB Segn. 2272",
"Segni":"Nota di possesso autografa in data 1.01.1905. Pieghe.",
"Category":"G"
},{
"Unnamed: 0":1753.0,
"Authors":"Martini, Quinto",
"Title":"I giorni sono lunghi.",
"Cities":"Milano-Roma  ",
"Publisher":"Avanti",
"Years":1957,
"Fund":"BTB Segn. 519",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":1754.0,
"Authors":"Martini, Quinto",
"Title":"La pioggia: bassorilievi e disegni di Quinto Martini.",
"Cities":"Arezzo",
"Publisher":"Badiali",
"Years":1967,
"Fund":"BTB Segn. 2212",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1755.0,
"Authors":"Martini-Zuccagni, Aroldo",
"Title":"Algebra complementare. ",
"Cities":"Livorno",
"Publisher":"Giusti ",
"Years":1914,
"Fund":"BTB Segn. 2047",
"Segni":"Nota di possesso autografa di Enrico Gadda in data 3.1917 Centocelle.",
"Category":"T"
},{
"Unnamed: 0":1756.0,
"Authors":"Martini-Zuccagni, Aroldo",
"Title":"Guida pratica per la risoluzione degli esercizi di trigonometria.",
"Cities":"Livorno",
"Publisher":"Giusti",
"Years":1921,
"Fund":"BTB Segn. 2048",
"Segni":"Nota di possesso autografa in data 12.1924                Milano. Postille.",
"Category":"T"
},{
"Unnamed: 0":1757.0,
"Authors":"Martini-Zuccagni, Aroldo",
"Title":"Guida pratica per la risoluzione delle equazioni di 1 e 2 grado",
"Cities":"Livorno",
"Publisher":"Giusti",
"Years":1908,
"Fund":"BTB Segn. 2046",
"Segni":"Postille.",
"Category":"T"
},{
"Unnamed: 0":1758.0,
"Authors":"Marx, Karl",
"Title":"Il capitale. Critica dell\u2019economia politica. Libro primo, parte prima",
"Cities":"Roma  ",
"Publisher":"Avanzini e Torraca",
"Years":1965,
"Fund":"BTB Segn. 2012",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":1759.0,
"Authors":"Marziale, Marco Valerio",
"Title":"Epigrammes. Izaac",
"Cities":"Paris",
"Publisher":"Les Belles Lettres",
"Years":1930,
"Fund":"BTB Segn. 103",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":1760.0,
"Authors":"Mascheroni, Lorenzo",
"Title":"Invito a Lesbia Cidonia ed altre poesie",
"Cities":"Milano",
"Publisher":"Sonzogno",
"Years":1929,
"Fund":"BTB Segn. 518",
"Segni":"Parzialmente intonso.",
"Category":"IL"
},{
"Unnamed: 0":1761.0,
"Authors":"Masi, Ernesto",
"Title":"Nell\u2019Ottocento. Idee e figure del XIX secolo",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1941,
"Fund":"BTB Segn. 1582",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1762.0,
"Authors":"Masuccio Salernitano (Masuccio Guardati, detto)",
"Title":"Novelle",
"Cities":"Roma",
"Publisher":"Form\u00ecggini",
"Years":1929,
"Fund":"BTB Segn. 520",
"Segni":"Intonso.",
"Category":"IL"
},{
"Unnamed: 0":1763.0,
"Authors":"Mathiez, Albert",
"Title":"Carovita e lotte sociali sotto il Terrore. ",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1949,
"Fund":"BTB Segn. 1657",
"Segni":"Parzialmente intonso.",
"Category":"S"
},{
"Unnamed: 0":1764.0,
"Authors":"Mathiez, Albert",
"Title":"La r\u00e9volution fran\u00e7aise",
"Cities":"Paris  ",
"Publisher":"Colin",
"Years":1946,
"Fund":"BTB Segn. 1658-1660",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1765.0,
"Authors":"Not found",
"Title":"Il matrimonio nell\u2019antica Roma.",
"Cities":"Roma  ",
"Publisher":"Anonima Romana Editoriale",
"Years":1935,
"Fund":"BTB Segn. Op. 6",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1766.0,
"Authors":"Mattioli, Pietro Antonio",
"Title":"Compendium de plantis omnibus",
"Cities":"Venezia",
"Publisher":"Valgrisi",
"Years":1571,
"Fund":"BTB Segn. Ed. Cinq. 242",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":1767.0,
"Authors":"Maupassant, Guy de",
"Title":"Opere scelte",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1942,
"Fund":"BTB Segn. 1041",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":1768.0,
"Authors":"Maupassant, Guy de",
"Title":"Il vagabondo",
"Cities":"Milano  ",
"Publisher":"Sonzogno",
"Years":1928,
"Fund":"BTB Segn. 1040",
"Segni":"Parzialmente intonso.",
"Category":"FL"
},{
"Unnamed: 0":1769.0,
"Authors":"Mauriac, Claude",
"Title":"Proust par lui-m\u00eame",
"Cities":"Paris",
"Publisher":"Seuil",
"Years":1957,
"Fund":"BTB Segn. 1138",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":1770.0,
"Authors":"Mauro, Walter",
"Title":"Sciascia",
"Cities":"Firenze  ",
"Publisher":"La Nuova Italia",
"Years":1970,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1771.0,
"Authors":"Maurois, Andr\u00e9",
"Title":"A la recherche de Marcel Proust",
"Cities":"Paris",
"Publisher":"Hachette",
"Years":1949,
"Fund":"BAL",
"Segni":"Due copie.",
"Category":"FL"
},{
"Unnamed: 0":1772.0,
"Authors":"Maurois, Andr\u00e9",
"Title":"Histoire d\u2019Angleterre",
"Cities":"Paris  ",
"Publisher":"Fayard",
"Years":1939,
"Fund":"BTB Segn. 1719",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1773.0,
"Authors":"Maurois, Andr\u00e9",
"Title":"Histoire de la France",
"Cities":"Paris  ",
"Publisher":"Wapler",
"Years":1947,
"Fund":"BTB Segn. 1661",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1774.0,
"Authors":"Maurois, Andr\u00e9",
"Title":"Storia degli Stati Uniti (1492-1946).",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1953,
"Fund":"BTB Segn. 1744",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1775.0,
"Authors":"Mautino, Aldo",
"Title":"La formazione della filosofia politica di Benedetto Croce",
"Cities":"Torino  ",
"Publisher":"Einaudi",
"Years":1941,
"Fund":"BTB Segn. 1960",
"Segni":"Intonso.",
"Category":"F"
},{
"Unnamed: 0":1776.0,
"Authors":"Mazzini, Giuseppe",
"Title":"Note autobiografiche",
"Cities":"Firenze  ",
"Publisher":"Le Monnier",
"Years":1943,
"Fund":"BTB Segn. 521",
"Segni":"Intonso.",
"Category":"IL"
},{
"Unnamed: 0":1777.0,
"Authors":"Mazzini, Giuseppe",
"Title":"Opere",
"Cities":"Milano-Roma",
"Publisher":"Rizzoli",
"Years":1939,
"Fund":"BTB Segn. 522-523",
"Segni":"Intonsi.",
"Category":"IL"
},{
"Unnamed: 0":1778.0,
"Authors":"Mazzini, Giuseppe",
"Title":"Scritti",
"Cities":"Bologna",
"Publisher":"Zanichelli",
"Years":1920,
"Fund":"BTB Segn. 524",
"Segni":"Nota di possesso autografa in data 29.06.1921. Intonso.",
"Category":"IL"
},{
"Unnamed: 0":1779.0,
"Authors":"Mazzocchi, Manlio",
"Title":"Avvolgimenti delle macchine elettriche a corrente continua ed alternata.      Costruzione \u2013 riparazione \u2013 anorma lit\u00e0 \u2013 localizzazione dei guasti",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1922,
"Fund":"BTB Segn. 2039",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":1780.0,
"Authors":"Mazzucchetti, Lavinia",
"Title":"Goethe e il cenacolo di Leonardo",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1939,
"Fund":"BAL",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":1781.0,
"Authors":"Mazzucchetti, Lavinia",
"Title":"La vita di Goethe seguita nell\u2019epistolario",
"Cities":"Milano  ",
"Publisher":"Sperling & Kupfer",
"Years":1942,
"Fund":"BTB Segn. 1229",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1782.0,
"Authors":"Medici, Lorenzo de\u2019",
"Title":"Le pi\u00f9 belle pagine",
"Cities":"Milano-Roma  ",
"Publisher":"Treves",
"Years":1933,
"Fund":"BTB Segn. 525",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1783.0,
"Authors":"Medici, Lorenzo de\u2019",
"Title":"Poesie",
"Cities":"Firenze",
"Publisher":"Barbera",
"Years":1932,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1784.0,
"Authors":"Not found",
"Title":"Il Mediterraneo pittoresco. Descritto da celebri viaggiatori ed illustrato dai migliori artisti",
"Cities":"Milano",
"Publisher":"Sonzogno",
"Years":1892,
"Fund":"BTB Segn. 2273",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":1785.0,
"Authors":"Medri, Gualtiero",
"Title":"Ferrara brevemente illustrata nei suoi principali monumenti",
"Cities":"Ferrara",
"Publisher":"E.P.T.",
"Years":1953,
"Fund":"BTB Segn. 2307",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":1786.0,
"Authors":"Melville, Herman",
"Title":"Benito Cereno",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1940,
"Fund":"BTB Segn. 1280",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":1787.0,
"Authors":"Melville, Herman",
"Title":"Moby Dick o la balena",
"Cities":"Torino  ",
"Publisher":"Frassinelli",
"Years":1941,
"Fund":"BTB Segn. 1281",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":1788.0,
"Authors":"Melville, Herman",
"Title":"Pierre o delle ambiguit\u00e0",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1942,
"Fund":"BTB Segn. 1282",
"Segni":"Intonso.",
"Category":"EL"
},{
"Unnamed: 0":1789.0,
"Authors":"Melville, Herman",
"Title":"La storia di Billy Budd",
"Cities":"Milano  ",
"Publisher":"Bompiani",
"Years":1942,
"Fund":"BTB Segn. 1279",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":1790.0,
"Authors":"Meneghello, Luigi",
"Title":"Libera nos a malo",
"Cities":"Milano  ",
"Publisher":"Feltrinelli",
"Years":1963,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1791.0,
"Authors":"Men\u00e9ndez Pidal, Ram\u00f2n",
"Title":"De Cervantes y Lope de Vega",
"Cities":"Madrid  ",
"Publisher":"Espasa-Calpe",
"Years":1958,
"Fund":"BTB Segn. 922",
"Segni":null,
"Category":"SL"
},{
"Unnamed: 0":1792.0,
"Authors":"Meredith, George",
"Title":"L\u2019egoista.",
"Cities":"Torino  ",
"Publisher":"Einaudi",
"Years":1942,
"Fund":"BTB Segn. 1283",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":1793.0,
"Authors":"Merim\u00e9e, Prosper",
"Title":"Chronique du r\u00e8gne de Charles IX",
"Cities":"Paris  ",
"Publisher":"Nelson-Calmann-L\u00e9vy",
"Years":"s.d.",
"Fund":"BTB Segn. 1042",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":1794.0,
"Authors":"La Messa nella musica. Dalle",
"Title":"La Messa nella musica. Dalle origini al nostro tempo. ",
"Cities":"Torino",
"Publisher":"ERI",
"Years":1950,
"Fund":"BTB Segn. 1430",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1795.0,
"Authors":"Messeri, Antonio",
"Title":"Breve storia moderna",
"Cities":"Firenze  ",
"Publisher":"Sansoni",
"Years":1910,
"Fund":"BTB Segn. 1755-1756",
"Segni":"Sottolineature.",
"Category":"IL"
},{
"Unnamed: 0":1796.0,
"Authors":"Messina, Francesco",
"Title":"Il Garofano",
"Cities":"Milano  ",
"Publisher":"All\u2019insegna del  pesce d\u2019oro",
"Years":1942,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1797.0,
"Authors":"Mestica, Enrico",
"Title":"Compendio storico della letteratura italiana",
"Cities":"Livorno",
"Publisher":"Giusti",
"Years":1919,
"Fund":"BTB Segn. 834-836",
"Segni":"Note di possesso autografe. Parzialmente intonsi.",
"Category":"IL"
},{
"Unnamed: 0":1798.0,
"Authors":"Metalious, Grace",
"Title":"I peccati di Peyton Place",
"Cities":"Milano  ",
"Publisher":"Longanesi",
"Years":1958,
"Fund":"BAL",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":1799.0,
"Authors":"Metternich-Winnenburg, Klemens Wenzel Lothar von",
"Title":"Memorie",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1943,
"Fund":"BTB Segn. 1757",
"Segni":null,
"Category":"GL"
},{
"Unnamed: 0":1800.0,
"Authors":"Meucci, Carlo",
"Title":"Casanova finanziere",
"Cities":"Milano  ",
"Publisher":"Mondadori",
"Years":1932,
"Fund":"BTB Segn. 837",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1801.0,
"Authors":"Not found",
"Title":"Mezzo secolo (Il progresso scientifico)",
"Cities":"Torino",
"Publisher":"ERI",
"Years":1951,
"Fund":"BTB Segn. Op. 135-36",
"Segni":"Due copie.",
"Category":"T"
},{
"Unnamed: 0":1802.0,
"Authors":"Not found",
"Title":"Mezzo secolo. (Vita pensiero ed arte). ",
"Cities":"Torino",
"Publisher":"ERI",
"Years":1951,
"Fund":"BTB Segn. Op. 137-39",
"Segni":"Tre copie.",
"Category":"T"
},{
"Unnamed: 0":1803.0,
"Authors":"Michelet, Jules",
"Title":"Histoire de France",
"Cities":"Paris  ",
"Publisher":"Flammarion",
"Years":1869,
"Fund":"BTB Segn. 1662-1671",
"Segni":"All\u2019ultimo tomo, postille su segnalibri inseriti.",
"Category":"S"
},{
"Unnamed: 0":1804.0,
"Authors":"Michelet, Jules",
"Title":"Histoire de la R\u00e9volution Fran\u00e7aise",
"Cities":"Paris  ",
"Publisher":"CalmannL\u00e9vy",
"Years":1925,
"Fund":"BTB Segn. 1672-1681",
"Segni":"Intonsi i volumi I, II, III, IV, V, VII e X.",
"Category":"S"
},{
"Unnamed: 0":1805.0,
"Authors":"Michelet, Jules",
"Title":"Histoire de la R\u00e9volution Fran\u00e7aise",
"Cities":"Paris",
"Publisher":"Gallimard",
"Years":1952,
"Fund":"BAL",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1806.0,
"Authors":"Migliorini, Bruno",
"Title":"Che cos\u2019\u00e8 un vocabolario? ",
"Cities":"Firenze  ",
"Publisher":"Le Monnier",
"Years":1951,
"Fund":null,
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1807.0,
"Authors":"Migliorini, Bruno",
"Title":"Storia della lingua italiana",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1960,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1808.0,
"Authors":"Milani, Milena",
"Title":"La ragazza di nome Giulio",
"Cities":"Milano ",
"Publisher":"Longanesi",
"Years":1964,
"Fund":"BAL",
"Segni":"Dedica autografa dell\u2019autrice in data 9.6.1964. Disegni.",
"Category":"IL"
},{
"Unnamed: 0":1809.0,
"Authors":"Not found",
"Title":"Milano.",
"Cities":"Milano  ",
"Publisher":"Ripalta",
"Years":1927,
"Fund":"BTB Segn. 2377",
"Segni":null,
"Category":"G "
},{
"Unnamed: 0":1810.0,
"Authors":"Not found",
"Title":"Milano",
"Cities":"Milano",
"Publisher":"Ottino",
"Years":1881,
"Fund":"BTB Segn. 1535",
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":1811.0,
"Authors":"Not found",
"Title":"Milano en 1906",
"Cities":"Milano",
"Publisher":"Tip. U. Allegretti",
"Years":1906,
"Fund":"BTB Segn. 2384",
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":1812.0,
"Authors":"Not found",
"Title":"Milano nel 1906",
"Cities":"Milano",
"Publisher":"Tip. U. Allegretti",
"Years":1906,
"Fund":"BTB Segn. 2385",
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":1813.0,
"Authors":"Not found",
"Title":"Milano, i secoli e una nostalgia. Appunti iconografici, storici e letterari.",
"Cities":"Milano",
"Publisher":"Fiera di Milano",
"Years":1971,
"Fund":"BTB Segn. Op. 105",
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":1814.0,
"Authors":"Not found",
"Title":"Milano presente e avvenire.",
"Cities":"Milano-Roma-Napoli",
"Publisher":"Vallardi",
"Years":1893,
"Fund":"BTB Segn. Op. 69",
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":1815.0,
"Authors":"Milano, Paolo",
"Title":"Il lettore di professione",
"Cities":"Milano  ",
"Publisher":"Feltrinelli",
"Years":1960,
"Fund":"BTB Segn. 838",
"Segni":"Dedica dell\u2019autore in data 1962.",
"Category":"IL"
},{
"Unnamed: 0":1816.0,
"Authors":"Not found",
"Title":"Il Milione: enciclopedia di geografia, usi e costumi, belle arti, storia, cultura; volume nono Asia: Vietnam, Malesia, Singapore; Arcipelago Indonesiano, Indonesia, Borneo, Timor, Filippine; Arcipelago Giapponese, Giappone, Ryukyu, Bonin, Volcano; Asia",
"Cities":"Novara  ",
"Publisher":"Istituto geografico De Agostini",
"Years":1962,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1817.0,
"Authors":"Miller, Henry",
"Title":"Tropico del Cancro. Tropico del Capricorno",
"Cities":"Milano",
"Publisher":"Feltrinelli",
"Years":1962,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore in data 5.1962.",
"Category":"EL"
},{
"Unnamed: 0":1818.0,
"Authors":"Millhouse, John",
"Title":"Corso graduato e completo di lingua inglese, parte II",
"Cities":"Milano  ",
"Publisher":"Millhouse",
"Years":1851,
"Fund":"BAL",
"Segni":"Postille.",
"Category":"GR"
},{
"Unnamed: 0":1819.0,
"Authors":"Milton, John",
"Title":"Il paradiso perduto",
"Cities":"Milano  ",
"Publisher":"Sonzogno",
"Years":1881,
"Fund":"BAL",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":1820.0,
"Authors":"Miolati, Arturo",
"Title":"L\u2019ammoniaca sintetica ed il processoCasale. Redazione ampliata di una conferenza tenuta il 17 febbraio 1927all\u2019Istituto di chimica della scuola Politecnica di Praga",
"Cities":"Roma",
"Publisher":"L\u2019Universale Tipografica Poliglotta",
"Years":1927,
"Fund":"BTB Segn. Op. 41-42",
"Segni":"Due copie.",
"Category":"T"
},{
"Unnamed: 0":1821.0,
"Authors":"Mirskij, Dmitrij Petrovi\u010d Svjatopolk",
"Title":"Storia della letteratura russa",
"Cities":"Milano  ",
"Publisher":"Garzanti",
"Years":1965,
"Fund":"BTB Segn. 1401",
"Segni":null,
"Category":"RL"
},{
"Unnamed: 0":1822.0,
"Authors":"Not found",
"Title":"Miscellanea di studi in onore di Bonaventura Tecchi",
"Cities":"Roma  ",
"Publisher":"Edizioni dell\u2019Ateneo",
"Years":1969,
"Fund":"BTB Segn. 1230-1231",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1823.0,
"Authors":"Not found",
"Title":"Mistici del Duecento e Trecento.",
"Cities":"Milano-Roma  ",
"Publisher":"Rizzoli",
"Years":1935,
"Fund":"BTB Segn. 526",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1824.0,
"Authors":"Mitford, Nancy",
"Title":"Madame de Pompadour (1721- 64).",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1955,
"Fund":"BTB Segn. 1682",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":1825.0,
"Authors":"Modorati, Luigi",
"Title":"L\u2019Arengario. ",
"Cities":"Monza",
"Publisher":"Soc. Tip. Monzese",
"Years":1923,
"Fund":"BTB Segn. 2386",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1826.0,
"Authors":"Modorati, Luigi",
"Title":" Descrizione storica della basilica di S. Giovanni Battista in Monza. ",
"Cities":"Monza",
"Publisher":"Soc. Tip. Monzese",
"Years":"s.d.",
"Fund":"BTB Segn. 2387",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":1827.0,
"Authors":"Moli\u00e8re (Jean-Baptiste Poquelin, detto)",
"Title":"\u0152uvres completes de Moli\u00e8re",
"Cities":"Paris",
"Publisher":"Marescq et ci.e",
"Years":1853,
"Fund":"BAL",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":1828.0,
"Authors":"Moli\u00e8re (Jean-Baptiste Poquelin, detto)",
"Title":"Th\u00e9\u00e2tre",
"Cities":"Paris",
"Publisher":"Hachette",
"Years":1949,
"Fund":"BTB Segn. 1043-1047",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":1829.0,
"Authors":"Momigliano, Arnaldo",
"Title":"L\u2019opera dell\u2019imperatore Claudio",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1932,
"Fund":"BTB Segn. 1470",
"Segni":"Pieghe.",
"Category":"S"
},{
"Unnamed: 0":1830.0,
"Authors":"Momigliano, Attilio",
"Title":"Carlo Porta",
"Cities":"Roma",
"Publisher":"Form\u00ecggini",
"Years":1923,
"Fund":"BTB Segn. 839",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1831.0,
"Authors":"Momigliano, Attilio",
"Title":"Storia della letteratura italiana",
"Cities":"Messina-Milano",
"Publisher":"Principato",
"Years":1938,
"Fund":"BTB Segn. 840",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1832.0,
"Authors":"Mommsen, Theodor",
"Title":"Storia di Roma. ",
"Cities":"Roma",
"Publisher":"Aequa",
"Years":1936,
"Fund":"BTB Segn. 1471-1478",
"Segni":"Volumi II e IV, intonsi; volume III parzial mente intonso.",
"Category":"S"
},{
"Unnamed: 0":1833.0,
"Authors":"Monaco, Domenico",
"Title":"Guida alle antichit\u00e0 del Museo Nazionale di Napoli",
"Cities":"Napoli  ",
"Publisher":"La Tipografica",
"Years":1915,
"Fund":"BTB Segn. 2292",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":1834.0,
"Authors":"Monchablon, E. J.",
"Title":" Dizionario compendiato di antichit\u00e0 per maggiore intelligenza dell\u2019istoria antica, sacra e profana, e dei classici greci e latini",
"Cities":"Firenze",
"Publisher":"Marenigh",
"Years":1821,
"Fund":"BAL",
"Segni":"Nota di possesso di Adele Gadda Lehr.",
"Category":"D"
},{
"Unnamed: 0":1835.0,
"Authors":"Mondini, Maria",
"Title":"Frammenti relativi ad una divisione ereditaria",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1915,
"Fund":"BTB Segn. Op. 27",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1836.0,
"Authors":"Mondini, Maria",
"Title":"Lettere femminili nei papiri grecoegizi.",
"Cities":"Milano",
"Publisher":"Scuola TipoLitogr. Figli della Provvidenza",
"Years":1917,
"Fund":"BTB Segn. Op. 44",
"Segni":"Parzialmente intonso.",
"Category":"IL"
},{
"Unnamed: 0":1837.0,
"Authors":"Monelli, Paolo",
"Title":"Mussolini piccolo borghese",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1950,
"Fund":"BTB Segn. 1536",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1838.0,
"Authors":"Monelli, Paolo",
"Title":"Mussolini piccolo borghese",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1968,
"Fund":"BAL",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1839.0,
"Authors":"Monelli, Paolo",
"Title":"Roma 1943",
"Cities":"Roma",
"Publisher":"Migliaresi",
"Years":1945,
"Fund":"BTB Segn. 1537",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1840.0,
"Authors":"Mongr\u00e9dien, Georges",
"Title":"La vie priv\u00e9e de Louis XIV",
"Cities":"Paris",
"Publisher":"Hachette",
"Years":1958,
"Fund":"BTB Segn. 1683",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1841.0,
"Authors":"Mongr\u00e9dien, Georges",
"Title":"La vie quotidienne sous Louis XIV",
"Cities":"Paris",
"Publisher":"Hachette",
"Years":1938,
"Fund":"BTB Segn. 1684",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1842.0,
"Authors":"Not found",
"Title":"Monografia storica dei porti dell\u2019antichit\u00e0 nella penisola italiana. Introduzione di A.G. Barrili",
"Cities":"Roma  ",
"Publisher":"Ministero della Marina",
"Years":1905,
"Fund":"BTB Segn. 2270",
"Segni":"Parzialmente intonso.",
"Category":"S"
},{
"Unnamed: 0":1843.0,
"Authors":"Montaigne, Michel Eyquem de",
"Title":"Essais",
"Cities":"Paris",
"Publisher":"Gallimard",
"Years":1946,
"Fund":"BAL",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":1844.0,
"Authors":"Montaigne, Michel Eyquem de",
"Title":"Journal de voyage en Italie en 1580 et 1581 par la Suisse et l\u2019Allemagne.",
"Cities":"Paris",
"Publisher":"Garnier Fr\u00e8res",
"Years":1955,
"Fund":"BAL",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":1845.0,
"Authors":"Montaigne, Michel Eyquem",
"Title":"Viaggio in Italia (1580-1581)",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1942,
"Fund":"BTB Segn. 1048",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1846.0,
"Authors":"Montale, Eugenio",
"Title":"Auto da f\u00e9",
"Cities":"Milano",
"Publisher":"il Saggiatore",
"Years":1966,
"Fund":"BTB Segn. 841",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1847.0,
"Authors":"Montale, Eugenio",
"Title":"La bufera e altro",
"Cities":"Venezia  ",
"Publisher":"Neri Pozza",
"Years":1956,
"Fund":null,
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1848.0,
"Authors":"Montale, Eugenio",
"Title":"La casa dei doganieri e altri versi",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1931,
"Fund":null,
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1849.0,
"Authors":"Montale, Eugenio",
"Title":"Choix de po\u00e8mes. Avalle e S. Hotelier",
"Cities":"Gen\u00e8ve",
"Publisher":"Continent",
"Years":1946,
"Fund":"BTB Segn. 527",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1850.0,
"Authors":"Montale, Eugenio",
"Title":"Farfalla di Dinard",
"Cities":"Venezia  ",
"Publisher":"Neri Pozza",
"Years":1956,
"Fund":null,
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1851.0,
"Authors":"Montale, Eugenio",
"Title":"Farfalla di Dinard. ",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1960,
"Fund":"BTB Segn. 528",
"Segni":"Dedica dell\u2019autore in data 10.1942.",
"Category":"IL"
},{
"Unnamed: 0":1852.0,
"Authors":"Montale, Eugenio",
"Title":"Finisterre.",
"Cities":"Firenze",
"Publisher":"Barbera",
"Years":1945,
"Fund":null,
"Segni":"Dedica dell\u2019autore in data 25.06.1945",
"Category":"IL"
},{
"Unnamed: 0":1853.0,
"Authors":"Montale, Eugenio",
"Title":"Le occasioni",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1939,
"Fund":null,
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":1854.0,
"Authors":"Montale, Eugenio",
"Title":"Le occasioni",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1942,
"Fund":"BTB Segn. 529",
"Segni":"Dedica dell\u2019autore in data 10.1942",
"Category":"IL"
},{
"Unnamed: 0":1855.0,
"Authors":"Montale, Eugenio",
"Title":"Ossi di seppia. ",
"Cities":"Torino",
"Publisher":"F.lli Ribera",
"Years":1928,
"Fund":null,
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1856.0,
"Authors":"Montale, Eugenio",
"Title":"Xenia 1964-1968",
"Cities":"s.l.",
"Publisher":"s.n.",
"Years":"s.d.",
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1857.0,
"Authors":"Montalenti, Giuseppe",
"Title":"L\u2019evoluzione",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1965,
"Fund":"BTB Segn. 2080",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1858.0,
"Authors":"Montesquieu, Charles-Louis de Secondat",
"Title":"Consid\u00e9rations sur les causes de la grandeur romaine",
"Cities":"Paris",
"Publisher":"Hachette",
"Years":1865,
"Fund":"BTB Segn. 1049",
"Segni":"Nota di possesso autografa di Adele Gadda           Lehr. Sottolineature.",
"Category":"F "
},{
"Unnamed: 0":1859.0,
"Authors":"Montesquieu, Charles-Louis de Secondat",
"Title":"De l\u2019esprit des lois",
"Cities":"Paris  ",
"Publisher":"Flammarion",
"Years":"s.d.",
"Fund":"BTB Segn. 1051-1052",
"Segni":"Pieghe, sottolineature e postille.",
"Category":"F "
},{
"Unnamed: 0":1860.0,
"Authors":"Montesquieu, Charles-Louis de Secondat",
"Title":"Lettere persiane",
"Cities":"Milano",
"Publisher":"Rizzoli",
"Years":1952,
"Fund":"BTB Segn. 1050",
"Segni":null,
"Category":"F "
},{
"Unnamed: 0":1861.0,
"Authors":"Montesquieu, Charles-Louis de Secondat",
"Title":" Lettres persanes. ",
"Cities":"Paris",
"Publisher":"Flammarion",
"Years":"s.d.",
"Fund":"BTB Segn. 1053",
"Segni":"Sottolineature e postille.",
"Category":"F "
},{
"Unnamed: 0":1862.0,
"Authors":"Montesquieu, Charles-Louis de Secondat",
"Title":"\u0152uvres completes",
"Cities":"Paris  ",
"Publisher":"Gallimard",
"Years":1949,
"Fund":"BAL",
"Segni":"Foglietto inserito.",
"Category":"FL"
},{
"Unnamed: 0":1863.0,
"Authors":"Montesquieu, Charles-Louis de Secondat",
"Title":"Riflessioni e pensieri inediti",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1943,
"Fund":"BTB Segn. 1876",
"Segni":"Intonso.",
"Category":"F"
},{
"Unnamed: 0":1864.0,
"Authors":"Monteverdi, Angelo",
"Title":"Testi volgari italiani dei primi tempi. ",
"Cities":"Modena",
"Publisher":"Societ\u00e0 Tipogr. Modenese",
"Years":1941,
"Fund":"BTB Segn. 842",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1865.0,
"Authors":"Montgomery, Florence",
"Title":"Incompreso",
"Cities":"Milano",
"Publisher":"Rizzoli",
"Years":1959,
"Fund":"BAL",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":1866.0,
"Authors":"Monti, Vincenzo",
"Title":"In morte di Lorenzo Mascheroni: aggiuntovi l\u2019invito a Lesbia",
"Cities":"Roma",
"Publisher":"Garroni.",
"Years":1909,
"Fund":"BAL",
"Segni":"Timbro di possesso di Enrico Gadda.",
"Category":"IL"
},{
"Unnamed: 0":1867.0,
"Authors":"Monti, Vincenzo",
"Title":"Opere. ",
"Cities":"Milano-Napoli  ",
"Publisher":"Ricciardi",
"Years":1953,
"Fund":"BTB Segn. 531",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1868.0,
"Authors":"Mor, Nando",
"Title":"Il balcone di pietra",
"Cities":"Roma-Lanciano   ",
"Publisher":"Carabba",
"Years":1948,
"Fund":"BTB Segn. 530",
"Segni":"Dedica dell\u2019autore in data 7.1953.",
"Category":"IL"
},{
"Unnamed: 0":1869.0,
"Authors":"Morand, Paul",
"Title":1900,
"Cities":"Parigi",
"Publisher":"Les editions de France",
"Years":1931,
"Fund":"BAL",
"Segni":"Sottolineature.",
"Category":"FL"
},{
"Unnamed: 0":1870.0,
"Authors":"Morandi, Carlo",
"Title":"Come nacque e come fin\u00ec la seconda guerra europea",
"Cities":"Firenze ",
"Publisher":"Il Mondo",
"Years":1945,
"Fund":"BTB Segn. 1758",
"Segni":"Dedica dell\u2019autore.",
"Category":"S"
},{
"Unnamed: 0":1871.0,
"Authors":"Morandi, Carlo",
"Title":"La sinistra al potere e altri saggi",
"Cities":"Fi renze",
"Publisher":"Barbera",
"Years":1944,
"Fund":"BTB Segn. 1538",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1872.0,
"Authors":"Moravia, Alberto",
"Title":"Il conformista",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1951,
"Fund":"BTB Segn. 532",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1873.0,
"Authors":"Moravia, Alberto",
"Title":"L\u2019epidemia",
"Cities":"Roma",
"Publisher":"Documento",
"Years":1944,
"Fund":"BTB Segn. 533",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":1874.0,
"Authors":"Moravia, Alberto",
"Title":"La noia",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1960,
"Fund":"BTB Segn. 534",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1875.0,
"Authors":"Moravia, Alberto",
"Title":"La speranza ossia cristianesimo e comunismo",
"Cities":"Roma  ",
"Publisher":"Documento Libraio         Editore",
"Years":1944,
"Fund":null,
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1876.0,
"Authors":"More, Thomas",
"Title":"L\u2019utopia",
"Cities":"Bari",
"Publisher":"Laterza",
"Years":1942,
"Fund":"BTB Segn. 1868",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":1877.0,
"Authors":"Morelli, Ettore",
"Title":"Costruzioni elettromeccaniche",
"Cities":"Torino",
"Publisher":"UTET",
"Years":1920,
"Fund":"BAL",
"Segni":"Nota di possesso autografa Carlo Emilio Gadda Milano 25 maggio 1920.",
"Category":"T"
},{
"Unnamed: 0":1878.0,
"Authors":"Morgan, Thomas Hunt",
"Title":"Embriologia e genetica",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1941,
"Fund":"BTB Segn. 2126",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":1879.0,
"Authors":"Morgana, Adalberto",
"Title":"Storia della pedagogia. ",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1912,
"Fund":"BTB Segn. 2040",
"Segni":"Nota di possesso autografa in data 18.05.1924 Milano.",
"Category":"F"
},{
"Unnamed: 0":1880.0,
"Authors":"Morin, Arthur",
"Title":"Lezioni di meccanica pratica (resistenza dei materiali)",
"Cities":"Milano",
"Publisher":"Salvi",
"Years":1854,
"Fund":"BTB Segn. 2138",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":1881.0,
"Authors":"Mornet, Daniel",
"Title":"La pens\u00e9e fran\u00e7aise au XVIIIe si\u00e8cle",
"Cities":"Paris",
"Publisher":"Colin",
"Years":1947,
"Fund":"BTB Segn. 1961",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":1882.0,
"Authors":"Morra, Umberto",
"Title":"Il messaggio di Piero Gobetti",
"Cities":"Roma",
"Publisher":"Associazione Italiana per la libert\u00e0 della cultura",
"Years":"s.d.",
"Fund":"BTB Segn. Op. 45",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1883.0,
"Authors":"Moscardelli, Nicola",
"Title":"Vita di Dostojewski tratta dalle sue lettere e da ricordi di testimoni",
"Cities":"Milano",
"Publisher":"Sperling & Kupfer",
"Years":1936,
"Fund":"BTB Segn. 1402",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1884.0,
"Authors":"Mosso, Angelo",
"Title":"La fatica",
"Cities":"Milano",
"Publisher":"Treves",
"Years":1921,
"Fund":null,
"Segni":"Nota di possesso in data 1925.",
"Category":"IL"
},{
"Unnamed: 0":1885.0,
"Authors":"Not found",
"Title":"Mostra colombiana internazionale. Catalogo (1950-1951).",
"Cities":"Genova",
"Publisher":"Societ\u00e0 d\u2019Arte Poligrafica",
"Years":1950,
"Fund":"BTB Segn. 2344",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":1886.0,
"Authors":"Not found",
"Title":"Mostra del Caravaggio e dei Caravaggeschi. Milano, Palazzo Reale aprile\/giugno 1951. Catalogo",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1951,
"Fund":"BTB Segn. 2231",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":1887.0,
"Authors":"Not found",
"Title":"Mostra del giardino italiano. Comune di Firenze. Palazzo Vecchio",
"Cities":"Firenze",
"Publisher":"Comune di Firenze",
"Years":"s.d.",
"Fund":"BTB Segn. 2342",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":1888.0,
"Authors":"Not found",
"Title":"La mostra del Tintoretto. Venezia Ca\u2019 Pesaro 1937 XV. Catalogo",
"Cities":"Venezia",
"Publisher":"Off. Grafiche Ferrar",
"Years":1937,
"Fund":"BTB Segn. 2233",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":1889.0,
"Authors":"Not found",
"Title":"Mostra della biblioteca di Lorenzo nella Biblioteca MediceoLaurenziana:",
"Cities":"Firenze  L\u2019Arte della Stampa",
"Publisher":"L\u2019Arte della Stampa",
"Years":1949,
"Fund":"BTB Segn. 2388",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":1890.0,
"Authors":"Not found",
"Title":"Mostra della pittura italiana del Sei e Settecento in Palazzo Pitti. Catalogo",
"Cities":"Roma-Milano-Firenze",
"Publisher":"Bestetti&Tumminelli",
"Years":1922,
"Fund":"BTB Segn. 2213",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":1891.0,
"Authors":"Not found",
"Title":"Mostra di capolavori della pittura francese dell\u2019Ottocento. Febbraio-marzo 1955. Palazzo delle esposizioni",
"Cities":"Roma",
"Publisher":"De Luca",
"Years":1955,
"Fund":"BTB Segn. 2222",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":1892.0,
"Authors":"Not found",
"Title":"Mostra di Giovanni Bellini. Catalogo illustrato della mostra. Palazzo Ducale Venezia 12 giugno-5 ottobre 1949",
"Cities":"Venezia",
"Publisher":"Alfieri",
"Years":1949,
"Fund":"BTB Segn. 2218",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":1893.0,
"Authors":"Not found",
"Title":"Mostra di Leonardo da Vinci, Milano, Palazzo dell\u2019arte 9 maggio-1 ottobre XVII: guida ufficiale",
"Cities":"Milano",
"Publisher":"S.A.M.E.",
"Years":1939,
"Fund":"BAL",
"Segni":"Due copie. Postille.",
"Category":"SA"
},{
"Unnamed: 0":1894.0,
"Authors":"Not found",
"Title":"Mostra di Lorenzo Lotto.",
"Cities":"Venezia  ",
"Publisher":"Casa editrice Arte Veneta",
"Years":1953,
"Fund":"BAL",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":1895.0,
"Authors":"Not found",
"Title":"Mostra di Paolo Veronese. Catalogo delle opere",
"Cities":"Venezia ",
"Publisher":"Ca\u2019 Giustinian",
"Years":1939,
"Fund":"BTB Segn. 2247",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":1896.0,
"Authors":"Not found",
"Title":"Mostra di pittura americana del XIX secolo. Galleria Nazionale d\u2019Arte Moderna Roma, 19 gennaio-7 gennaio 1954",
"Cities":"Roma",
"Publisher":"De Luca",
"Years":1954,
"Fund":"BTB Segn. 2239",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":1897.0,
"Authors":"Not found",
"Title":"Mostra di Tiziano. Catalogo delleopere. Venezia XXV aprile-IV novembre MCMXXXVXIII",
"Cities":"Venezia",
"Publisher":"Off. Grafiche Ferrari",
"Years":1935,
"Fund":"BTB Segn. 2234",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":1898.0,
"Authors":"Not found",
"Title":"Mostra personale del pittore Giu seppe Cesetti",
"Cities":"Firenze  ",
"Publisher":"Galleria Donatello",
"Years":1950,
"Fund":"BAL",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":1899.0,
"Authors":"Not found",
"Title":"Mostra personale di Pio Semeghini Circolo artistico di Cortina d\u2019Ampezzo",
"Cities":"Venezia",
"Publisher":"Neri Pozza",
"Years":1951,
"Fund":null,
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":1900.0,
"Authors":"Motta, Giacinto",
"Title":"Acqua, carbone, elettricit\u00e0: discorso pronunciato alla XX riunione della Societ\u00e0 Italiana per il progresso delle scienze (Milano, 18 settembre",
"Cities":"Milano",
"Publisher":" Arti grafiche E. Calamandrei",
"Years":1931,
"Fund":"BTB Segn. Op. 96",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":1901.0,
"Authors":"M\u00fcller, Otto",
"Title":"Tavole di logaritmi con cinque decimali",
"Cities":"Milano  ",
"Publisher":"Hoepli",
"Years":1924,
"Fund":"BTB Segn. 2020",
"Segni":"Nota di possesso autografa in data 1.11.1924 Milano.",
"Category":"T"
},{
"Unnamed: 0":1902.0,
"Authors":"Muratori, Ludovico Antonio",
"Title":"Annali d\u2019Italia ed altre opere varie",
"Cities":"Milano",
"Publisher":"Ubicini",
"Years":1837,
"Fund":"BTB Segn. 535-539",
"Segni":"Volume I parzialmente intonso; volume V             intonso.",
"Category":"S"
},{
"Unnamed: 0":1903.0,
"Authors":"Murry, John Middleton",
"Title":"Shakespeare",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1963,
"Fund":"BAL",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":1904.0,
"Authors":"Muscetta, Carlo",
"Title":"Cultura e poesia di Giuseppe Gioa chino Belli",
"Cities":"Milano  ",
"Publisher":"Feltrinelli",
"Years":1961,
"Fund":"BTB Segn. 843",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1905.0,
"Authors":"Not found",
"Title":"Museo del Prado: catalogo de los cuadros.",
"Cities":"Madrid  ",
"Publisher":"Publicaciones del Museo del  Prado",
"Years":1952,
"Fund":"BAL",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":1906.0,
"Authors":"Not found",
"Title":"Il Museo di Mosca. ",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1963,
"Fund":"BTB Segn. 2274",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":1907.0,
"Authors":"Not found",
"Title":"La musica nel 20\u00b0 secolo: convegno internazionale di musica contemporanea. Roma, 4-14 aprile 1954",
"Cities":"Torino",
"Publisher":"ERI",
"Years":1954,
"Fund":"BTB Segn. 1432",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":1908.0,
"Authors":"Musset, Alfred de",
"Title":"La confession d\u2019un enfant du si\u00e8cle",
"Cities":"Paris",
"Publisher":"Flammarion",
"Years":1915,
"Fund":"BTB Segn. 1054",
"Segni":"Nota di possesso autografa di Enrico Gadda in data 9.1917. Sottolineature e postille.",
"Category":"FL"
},{
"Unnamed: 0":1909.0,
"Authors":"Mussolini, Benito",
"Title":"Gli accordi del Laterano. Discorsi al Parlamento",
"Cities":"Roma  ",
"Publisher":"Libreria del Littorio",
"Years":1929,
"Fund":"BTB Segn. 1539",
"Segni":"Nota di possesso autografa in data 07.1929.  ",
"Category":"IL"
},{
"Unnamed: 0":1910.0,
"Authors":"Nabokov, Vladimir",
"Title":"Lolita",
"Cities":"Paris",
"Publisher":"Gallimard",
"Years":1959,
"Fund":"BAL",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":1911.0,
"Authors":"Not found",
"Title":"Narratori spagnoli. Raccolta di romanzi e racconti dalle origini ai nostri giorni",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1941,
"Fund":"BTM",
"Segni":"Sottolineature e postille.",
"Category":"SL"
},{
"Unnamed: 0":1912.0,
"Authors":"Not found",
"Title":"Natura facit saltus",
"Cities":"Torino",
"Publisher":"ERI",
"Years":1952,
"Fund":null,
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":1913.0,
"Authors":"Not found",
"Title":"Neera.",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1942,
"Fund":null,
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":1914.0,
"Authors":"Negri, Gaetano",
"Title":"L\u2019imperatore Giuliano l\u2019Apostata",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1902,
"Fund":"BTB Segn. 1479",
"Segni":"Nota di possesso autografa di Adele Gadda Lehr.",
"Category":"S"
},{
"Unnamed: 0":1915.0,
"Authors":"Negri, Gaetano",
"Title":" Segni dei tempi. Profili e bozzetti letterari. ",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1909,
"Fund":"BTB Segn. 844",
"Segni":"Intonso.",
"Category":"L"
},{
"Unnamed: 0":1916.0,
"Authors":"Negro, Silvio",
"Title":"Seconda Roma ",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1943,
"Fund":"BTB Segn. 540",
"Segni":"Parzialmente intonso.",
"Category":"S"
},{
"Unnamed: 0":1917.0,
"Authors":"Negro, Silvio",
"Title":"Vaticano minore",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1937,
"Fund":"BTB Segn. 541",
"Segni":"Dedica dell\u2019autore in data 28.5.1937. Postille.",
"Category":"S"
},{
"Unnamed: 0":1918.0,
"Authors":"Negroni, Carlo",
"Title":"Della vita e dei fatti di Quintino Sella. Discorso commemorativo",
"Cities":"Novara",
"Publisher":"Miglio",
"Years":1883,
"Fund":"BTB Segn. Op. 48",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1919.0,
"Authors":"Nemi, Orsola",
"Title":"I gioielli rubati",
"Cities":"Milano  ",
"Publisher":"Bompiani",
"Years":1958,
"Fund":"BTB Segn. 542",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1920.0,
"Authors":"Neppi, Alberto",
"Title":"Mantegna",
"Cities":"Milano",
"Publisher":"Bietti",
"Years":1915,
"Fund":"BTB Segn. 2192",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":1921.0,
"Authors":"Nicassio, Francesco",
"Title":"Facce di bronzo. Poesia e rivoluzione",
"Cities":"Padova",
"Publisher":"Rebellato",
"Years":1970,
"Fund":"BTB Segn. 543",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1922.0,
"Authors":"Nieri, Idelfonso",
"Title":"I caratteri",
"Cities":"Venezia",
"Publisher":"Neri Pozza",
"Years":1953,
"Fund":"BTB Segn. 544",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1923.0,
"Authors":"Nieri, Idelfonso",
"Title":"Cento racconti popolari lucchesi e altri racconti",
"Cities":"Firenze  ",
"Publisher":"Le Monnier",
"Years":1950,
"Fund":"BTB Segn. 545",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1924.0,
"Authors":"Nietzsche, Friedrich",
"Title":"Cos\u00ec parl\u00f2 Zarathustra. Un libro per tutti e per nessuno",
"Cities":"Piacenza  L\u2019arte bodoniana",
"Publisher":"L\u2019arte bodoniana",
"Years":1916,
"Fund":"BTB Segn. 1877",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":1925.0,
"Authors":"Nietzsche, Friedrich",
"Title":"La nascita della tragedia",
"Cities":"Bari  ",
"Publisher":"Laterza",
"Years":1925,
"Fund":"BTB Segn. 1878",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":1926.0,
"Authors":"Nietzsche, Friedrich",
"Title":"Nietzsche",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1940,
"Fund":"BTB Segn. 1965",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":1927.0,
"Authors":"Nievo, Ippolito",
"Title":"Le confessioni di un italiano",
"Cities":"Firenze  ",
"Publisher":"Le Monnier",
"Years":1934,
"Fund":"BTB Segn. 547",
"Segni":"Dedica del curatore in data 29.5.1934.",
"Category":"IL"
},{
"Unnamed: 0":1928.0,
"Authors":"Nievo, Ippolito",
"Title":"Le confessioni di un ottuagenario",
"Cities":"Milano",
"Publisher":"Monanni",
"Years":1931,
"Fund":"BTB Segn. 546",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1929.0,
"Authors":"Nievo, Ippolito",
"Title":"Quaderno di traduzioni",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1964,
"Fund":"BTB Segn. 548",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1930.0,
"Authors":"Nispi-Landi, Ciro",
"Title":"Bagni e toeletta presso i Romani",
"Cities":"Roma  ",
"Publisher":"Anonima Romana Editoriale",
"Years":1934,
"Fund":"BTB Segn. Op. 1-2",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1931.0,
"Authors":"Nixon, Richard",
"Title":"Testo del discorso radiotelevisivo del Presidente Nixon, in occasione della festa nazionale del 4-7-1972",
"Cities":"Roma",
"Publisher":"Istituto Grafico Tiberino",
"Years":1972,
"Fund":"BTB Segn. 1424",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":1932.0,
"Authors":"Nixon, Richard",
"Title":"Testo integrale del discorso televisivo sul Vietnam del presidente Richard Nixon la sera di luned\u00ec 8 maggio 1972",
"Cities":"Roma",
"Publisher":"Istituto Grafico Tiberino",
"Years":1972,
"Fund":"BTB Segn. 1423",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":1933.0,
"Authors":"Nixon, Richard",
"Title":"Traduzione letterale del discorso radiotelevisivo del presidente Nixon 28 maggio 1972 al popolo dell\u2019Unione Sovietica",
"Cities":"Roma",
"Publisher":"Istituto Grafico Tiberino",
"Years":1972,
"Fund":"BTB Segn. 1425",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":1934.0,
"Authors":"Nixon, Richard",
"Title":"Traduzione letterale del discorsorapporto del presidente Nixon 1 giugno 1972 sul \u00abvertice di Mosca\u00bb alle camere del Congresso riunite",
"Cities":"Roma",
"Publisher":"Istituto Grafico Tiberino",
"Years":1972,
"Fund":"BTB Segn. 1426",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":1935.0,
"Authors":"No\u00ebl, Fran\u00e7ois-Joseph-Michel \u2013 Chapsal, Charles-Pierre",
"Title":"Le\u00e7ons d\u2019analyse logique",
"Cities":"Paris ",
"Publisher":"Hachette",
"Years":1856,
"Fund":"BTB Segn. 2445",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1936.0,
"Authors":"Noferi Curioni, Adriana",
"Title":"I segni e le cose",
"Cities":"Padova",
"Publisher":"Rebellato",
"Years":1962,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1937.0,
"Authors":"Nolhac, Pierre de",
"Title":"Louis XV \u00e0 Versailles",
"Cities":"Paris  ",
"Publisher":"Flammarion",
"Years":1934,
"Fund":"BTB Segn. 1686",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1938.0,
"Authors":"Nolhac, Pierre de",
"Title":"Louis XV et Madame Pompadour",
"Cities":"Paris  ",
"Publisher":"CalmannL\u00e9vy",
"Years":1948,
"Fund":"BTB Segn. 1686",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1939.0,
"Authors":"Nordau, Max",
"Title":"Il senso della storia",
"Cities":"Sesto San Giovanni",
"Publisher":"Barion",
"Years":1915,
"Fund":"BTB Segn. 1759",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1940.0,
"Authors":"Nottola, Umberto",
"Title":"Disegno storico della letteratura romana",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1922,
"Fund":"BTB Segn. 124",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1941.0,
"Authors":"Not found",
"Title":"Nouveau petit Larousse illustr\u00e9",
"Cities":"Paris",
"Publisher":"Larousse",
"Years":1946,
"Fund":"BTB Segn. 2472",
"Segni":null,
"Category":"F "
},{
"Unnamed: 0":1942.0,
"Authors":"Novalis (Friedrich-Leopold von Hardenberg)",
"Title":"Cristianit\u00e0 o Europa",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1942,
"Fund":"BTB Segn. 1209",
"Segni":null,
"Category":"F "
},{
"Unnamed: 0":1943.0,
"Authors":"Novalis (Friedrich-Leopold von Hardenberg)",
"Title":"Novalis.",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1942,
"Fund":"BTB Segn. 1208",
"Segni":null,
"Category":"GL"
},{
"Unnamed: 0":1944.0,
"Authors":"Not found",
"Title":"Il Novecento. Antologia della critica letteraria e dei narratori e poeti italiani. ",
"Cities":"Torino",
"Publisher":"Petrini",
"Years":1971,
"Fund":"BTB Segn. 748",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1945.0,
"Authors":"Not found",
"Title":"Novelle americane moderne.",
"Cities":"Milano  ",
"Publisher":"Longanesi",
"Years":1951,
"Fund":"BTB Segn. 1284",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":1946.0,
"Authors":"Not found",
"Title":"Novellino",
"Cities":"Torino",
"Publisher":"UTET",
"Years":1948,
"Fund":"BTB Segn. 549",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1947.0,
"Authors":"Noventa, Giacomo",
"Title":"Il grande amore: in \u201cUomini e no\u201d di Elio Vittorini e in altri uomini e libri",
"Cities":"Milano  ",
"Publisher":"All\u2019insegna del pesce d\u2019oro",
"Years":1960,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1948.0,
"Authors":"Not found",
"Title":"Nozioni preliminari pratiche intorno all\u2019arte di edificare necessarie ai periti, capomastri e proprietarj",
"Cities":"Milano  ",
"Publisher":"Tamburini e Valdoni",
"Years":1840,
"Fund":"BTB Segn. 2060",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":1949.0,
"Authors":"Nulli, Sirio Attilio",
"Title":"I processi delle streghe",
"Cities":"Torino  ",
"Publisher":"Einaudi",
"Years":1939,
"Fund":null,
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1950.0,
"Authors":"Not found",
"Title":"La Nuova Pinacoteca Vaticana",
"Cities":"Roma",
"Publisher":"Tip. Pol.Vaticana",
"Years":1932,
"Fund":"BTB Segn. 2275",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":1951.0,
"Authors":"Not found",
"Title":"Nuovo dizionario geografico. ",
"Cities":"Milano",
"Publisher":"Bernardone",
"Years":1813,
"Fund":"BTB Segn. 2369-2372",
"Segni":null,
"Category":"G "
},{
"Unnamed: 0":1952.0,
"Authors":"Not found",
"Title":"Nuovo dizionario geografico: supplemento",
"Cities":"Milano  ",
"Publisher":"Bernardone",
"Years":1828,
"Fund":"BTB Segn. 2373",
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":1953.0,
"Authors":"Not found",
"Title":"Nuovo vocabolario grecoitaliano italiano-greco",
"Cities":"Milano  ",
"Publisher":"Albertari",
"Years":1868,
"Fund":"BTB Segn. 2471",
"Segni":null,
"Category":"D"
},{
"Unnamed: 0":1954.0,
"Authors":"Oberdorfer, Aldo",
"Title":"Il re folle Luigi II di Baviera",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1935,
"Fund":"BTB Segn. 1760",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1955.0,
"Authors":"O\u2019Brien, Flann",
"Title":"Il terzo poliziotto",
"Cities":"Torino  ",
"Publisher":"Einaudi",
"Years":1971,
"Fund":"BAL",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":1956.0,
"Authors":"O\u2019Brien, Flann",
"Title":"Una pinta d\u2019inchiostro irlandese",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1968,
"Fund":"BAL",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":1957.0,
"Authors":"Occioni-Bonaffons, Giuseppe",
"Title":"Ernesto Masi: La vita, i tempi, gli amici di Francesco Albergati, commediografo del secolo XVIII",
"Cities":"Bologna",
"Publisher":"Zanichelli",
"Years":1878,
"Fund":"BTB Segn. Op. 49",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1958.0,
"Authors":"Not found",
"Title":"Officine metallurgiche Togni: Specialit\u00e0 condotte forzate per impianti idroelettrici",
"Cities":"Milano-Parigi  ",
"Publisher":"Coen",
"Years":"s.d.",
"Fund":"BTB Segn. 2103",
"Segni":"Nota di possesso autografa in data 1920 Milano.",
"Category":"T"
},{
"Unnamed: 0":1959.0,
"Authors":"Offinger, H.",
"Title":"English-French-Italian-German Technical Pocket Dictionary. Part II. The leading language being English",
"Cities":"Stuttgart",
"Publisher":"Metzler",
"Years":1890,
"Fund":"BTB Segn. 2049",
"Segni":null,
"Category":"D"
},{
"Unnamed: 0":1960.0,
"Authors":"Ojetti, Ugo",
"Title":"Alla scoperta dei letterati",
"Cities":"Firenze  ",
"Publisher":"Le Monnier",
"Years":1946,
"Fund":"BTB Segn. 845",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1961.0,
"Authors":"Ole\u0161a, Jurij Karlovic",
"Title":"Invidia",
"Cities":"Roma",
"Publisher":"Documento",
"Years":1944,
"Fund":"BTB Segn. 1384",
"Segni":"Nota di possesso autografa in data 1944 Roma.",
"Category":"RL"
},{
"Unnamed: 0":1962.0,
"Authors":"Olobardi, Umberto",
"Title":"Saggi su Tozzi e Pea",
"Cities":"Pisa-Roma",
"Publisher":"Vallerini",
"Years":1940,
"Fund":"BTB Segn. 846",
"Segni":"Intonso.",
"Category":"IL"
},{
"Unnamed: 0":1963.0,
"Authors":"Not found",
"Title":"Omaggio a Corrado Alvaro",
"Cities":"Roma  ",
"Publisher":"Sindacato Nazionale Scrittori",
"Years":1957,
"Fund":"BTB Segn. 847",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1964.0,
"Authors":"Not found",
"Title":"Omaggio a Milano di poeti italiani contemporanei",
"Cities":"Milano  ",
"Publisher":"All\u2019insegna del pesce d\u2019oro",
"Years":1961,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1965.0,
"Authors":"Not found",
"Title":"Omaggio a Montale",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1966,
"Fund":"BTB Segn. 848",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1966.0,
"Authors":"Omero",
"Title":"Iliade. ",
"Cities":"Leipzig",
"Publisher":"Teubner",
"Years":1914,
"Fund":"BTB Segn. 11-12",
"Segni":"Solo al volume I, nota di possesso autografa in data 1914. Sottolineature.",
"Category":"CL"
},{
"Unnamed: 0":1967.0,
"Authors":"Omero",
"Title":"Il libro primo dell\u2019Iliade",
"Cities":"Milano",
"Publisher":"Dante Alighieri",
"Years":1911,
"Fund":"BTB Segn. 10",
"Segni":"Nota di possesso autografa. Postille.",
"Category":"CL"
},{
"Unnamed: 0":1968.0,
"Authors":"Omero",
"Title":" L\u2019Odissea.",
"Cities":"Milano",
"Publisher":"Albrighi e Segati e C.",
"Years":1900,
"Fund":"BAL",
"Segni":"Sottolineature.",
"Category":"CL"
},{
"Unnamed: 0":1969.0,
"Authors":"Omero",
"Title":"Odissea libro VII. ",
"Cities":"Leipzig",
"Publisher":"Teubner",
"Years":1912,
"Fund":"BTB Segn. 13-14",
"Segni":"Solo al volume I, nota di possesso autografa in data 1914. Intonso.",
"Category":"CL"
},{
"Unnamed: 0":1970.0,
"Authors":"Omero",
"Title":" Odissea libro IX. ",
"Cities":"Milano",
"Publisher":"Albrighi e Segati e C.",
"Years":1897,
"Fund":"BAL",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":1971.0,
"Authors":"Omodeo, Adolfo",
"Title":"Momenti della vita di guerra. Dai diari e dalle lettere dei caduti 1915-1918",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1968,
"Fund":"BTB Segn. 1540",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1972.0,
"Authors":"Omodeo, Adolfo",
"Title":"Il quarto evangelio",
"Cities":"Bari",
"Publisher":"Laterza",
"Years":1930,
"Fund":"BTB Segn. 1790",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1973.0,
"Authors":"O\u2019Neill, Eugene",
"Title":"Anna Christie",
"Cities":"Firenze",
"Publisher":"Parenti",
"Years":1938,
"Fund":"BTB Segn. 1285",
"Segni":"Intonso.",
"Category":"EL"
},{
"Unnamed: 0":1974.0,
"Authors":"Onelli, Onello",
"Title":"Estetica del Novecento. ",
"Cities":"Roma",
"Publisher":"Al Pescatore di Luna",
"Years":"s.d.",
"Fund":"BTB Segn. 2235",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1975.0,
"Authors":"Not found",
"Title":"Opere di medicina e chirurgia",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1853,
"Fund":"BAL ",
"Segni":"Postille",
"Category":"T"
},{
"Unnamed: 0":1976.0,
"Authors":"Oppizzi, Pietro",
"Title":"Trazione elettrica su ferrovie e tramvie. Costruzione ed esercizio delle elettrovie",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1921,
"Fund":"BTB Segn. 2041",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":1977.0,
"Authors":"Orengo, Renata",
"Title":"Diario del Cegliolo",
"Cities":"Milano  ",
"Publisher":"All\u2019insegna del pesce d\u2019oro",
"Years":1965,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1978.0,
"Authors":"Orazio Flacco, Quinto",
"Title":"Epistola terza del libro secondo ossia L\u2019arte poetica",
"Cities":"Milano-Roma-Napoli",
"Publisher":"Dante Alighieri",
"Years":1924,
"Fund":"BTB Segn. 49",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":1979.0,
"Authors":"Orazio Flacco, Quinto",
"Title":"Il libro delle Odi",
"Cities":"Roma",
"Publisher":"Albrighi e Segati",
"Years":1923,
"Fund":null,
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":1980.0,
"Authors":"Orazio Flacco, Quinto",
"Title":"Odes et \u00e9podes",
"Cities":"Paris",
"Publisher":"Les Belles Lettres",
"Years":1946,
"Fund":"BTB Segn. 100",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":1981.0,
"Authors":"Orazio Flacco, Quinto",
"Title":"Odi scelte e il carme secolare",
"Cities":"Milano",
"Publisher":"Carlo Signorelli",
"Years":1945,
"Fund":"BAL",
"Segni":"Postille.",
"Category":"CL"
},{
"Unnamed: 0":1982.0,
"Authors":"Orazio Flacco, Quinto",
"Title":"Opera omnia",
"Cities":"Milano",
"Publisher":"Albrighi e Segati e C.",
"Years":1908,
"Fund":"BAL",
"Segni":"Nota di possesso di Carlo Emilio Gadda. Postille.",
"Category":"CL"
},{
"Unnamed: 0":1983.0,
"Authors":"Orazio Flacco, Quinto",
"Title":"Le opere",
"Cities":"Como",
"Publisher":"Ostinelli",
"Years":1928,
"Fund":"BTB Segn. 46-47",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":1984.0,
"Authors":"Orazio Flacco, Quinto",
"Title":"I quattro libri delle Odi espurgati e l\u2019Inno secolare",
"Cities":"Milano-Roma-Napoli",
"Publisher":"Dante Alighieri",
"Years":1923,
"Fund":"BTB Segn. 44",
"Segni":"Sottolineature e postille.",
"Category":"CL"
},{
"Unnamed: 0":1985.0,
"Authors":"Orazio Flacco, Quinto",
"Title":"Le satire",
"Cities":"Milano  ",
"Publisher":"Istituto Editoriale Italiano",
"Years":1927,
"Fund":"BTB Segn. 50",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":1986.0,
"Authors":"Orazio Flacco, Quinto",
"Title":"Satire; Epistole; Arte poetica",
"Cities":null,
"Publisher":null,
"Years":null,
"Fund":"BTB Segn. 45",
"Segni":"Pieghe e postille.",
"Category":"CL"
},{
"Unnamed: 0":1987.0,
"Authors":"Orazio Flacco, Quinto",
"Title":"Le satire",
"Cities":"Milano ",
"Publisher":"Istituto editoriale italiano",
"Years":1929,
"Fund":"BAL",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":1988.0,
"Authors":"Orazio Flacco, Quinto",
"Title":"Satire",
"Cities":"Paris",
"Publisher":"Les belles lettres",
"Years":1946,
"Fund":null,
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":1989.0,
"Authors":"Orazio Flacco, Quinto",
"Title":"Satire, Epistole e Arte poetica",
"Cities":"s.l.",
"Publisher":"s.e.",
"Years":"s.d.",
"Fund":null,
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":1990.0,
"Authors":"Orazio Flacco, Quinto",
"Title":"Satires",
"Cities":"Paris",
"Publisher":"Les Belles Lettres",
"Years":1946,
"Fund":"BTB Segn. 101",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":1991.0,
"Authors":"Orazio Flacco, Quinto \u2013 Martinez de la Rosa, FranciscoTorti, Giovanni",
"Title":"Arte poetica esposta da Q. Orazio Flacco, Martinez de la Rosa, Giovanni Torti",
"Cities":"Savona",
"Publisher":"Sambolino",
"Years":1850,
"Fund":"BTB Segn. 48",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":1992.0,
"Authors":"Not found",
"Title":"L\u2019origine della vita",
"Cities":"Milano  ",
"Publisher":"Feltrinelli",
"Years":1962,
"Fund":"BTB Segn. 2082",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":1993.0,
"Authors":"Orlandi, Giuseppe",
"Title":"Glimpses of England: prime letture inglesi",
"Cities":"Milano",
"Publisher":"Carlo Signorelli",
"Years":1943,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":1994.0,
"Authors":"Ortese, Anna Maria",
"Title":"Il mare non bagna Napoli",
"Cities":"Torino  ",
"Publisher":"Einaudi",
"Years":1953,
"Fund":"BTB Segn. 550",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1995.0,
"Authors":"Ortese, Anna Maria",
"Title":". Poveri e semplici",
"Cities":"Firenze  ",
"Publisher":"Vallecchi",
"Years":1967,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":1996.0,
"Authors":"Ortolani, Giuseppe",
"Title":"Voci e visioni del Settecento vene ziano",
"Cities":"Bologna",
"Publisher":"Zanichelli",
"Years":1926,
"Fund":"BTB Segn. 849",
"Segni":"Invio a Clara Gadda.",
"Category":"IL"
},{
"Unnamed: 0":1997.0,
"Authors":"Ortolani, Sergio",
"Title":"Controcanto",
"Cities":"Genova  ",
"Publisher":"Circoli",
"Years":1932,
"Fund":"BTB Segn. 551",
"Segni":"Intonso.",
"Category":"IL"
},{
"Unnamed: 0":1998.0,
"Authors":"Ostrogorsky, Georg",
"Title":"Storia dell\u2019Impero bizantino",
"Cities":"Torino  ",
"Publisher":"Einaudi",
"Years":1968,
"Fund":"BTB Segn. 1480",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":1999.0,
"Authors":"Ostwald, Wilhelm",
"Title":"L\u2019\u00e9nergie",
"Cities":"Paris",
"Publisher":"Alcan",
"Years":1924,
"Fund":"BTM",
"Segni":"Nota di possesso Milano, agosto 1925. Sottolineature e postille.",
"Category":"T"
},{
"Unnamed: 0":2000.0,
"Authors":"Otto, Walter Friedrich",
"Title":"Gli dei della Grecia. L\u2019immagine del destino riflessa dallo spirito greco",
"Cities":"Firenze",
"Publisher":"La Nuova Italia",
"Years":1941,
"Fund":"BTB Segn. 1791",
"Segni":null,
"Category":"GL"
},{
"Unnamed: 0":2001.0,
"Authors":"Ovenden, Michael William",
"Title":"La vita nell\u2019universo: discussione scientifica del problema",
"Cities":"Bologna  ",
"Publisher":"Zanichelli",
"Years":1965,
"Fund":"BTB Segn. 2083",
"Segni":null,
"Category":"GL"
},{
"Unnamed: 0":2002.0,
"Authors":"Ovidio Nasone, Publio",
"Title":"L\u2019arte dell\u2019amore",
"Cities":"Milano ",
"Publisher":"Istituto Editoriale Italiano",
"Years":1933,
"Fund":"BTB Segn. 55",
"Segni":"Parzialmente intonso.",
"Category":"CL"
},{
"Unnamed: 0":2003.0,
"Authors":"Ovidio Nasone, Publio",
"Title":"Le Eroidi",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1966,
"Fund":"BTB Segn. 59",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":2004.0,
"Authors":"Ovidio Nasone, Publio",
"Title":"I fasti",
"Cities":"Milano",
"Publisher":"Notari",
"Years":1930,
"Fund":"BTB Segn. 56",
"Segni":"Postille.",
"Category":"CL"
},{
"Unnamed: 0":2005.0,
"Authors":"Ovidio Nasone, Publio",
"Title":"Le Metamorfosi",
"Cities":"Bologna",
"Publisher":"Zanichelli",
"Years":1939,
"Fund":"BTB Segn. 57-58",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":2006.0,
"Authors":"Ovidio Nasone, Publio",
"Title":"Metamorphoseon libri",
"Cities":"Milano  ",
"Publisher":"Albrighi-Segati",
"Years":1897,
"Fund":"BTB Segn. 61-62",
"Segni":"Postille.",
"Category":"CL"
},{
"Unnamed: 0":2007.0,
"Authors":"Ovidio Nasone, Publio",
"Title":" Metamorphoseon libri XV expurgati, et explanaticum Appendice de Diis, & Heroibus poeticis",
"Cities":"Parma",
"Publisher":"Borsi",
"Years":1763,
"Fund":"BTB Segn. 60",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":2008.0,
"Authors":"Ovidio Nasone, Publio",
"Title":"Les rem\u00e8des \u00e0 l\u2019amour; Les produits de beaut\u00e9 pour le visage de la femme",
"Cities":"Paris",
"Publisher":"Les Belles Lettres",
"Years":1930,
"Fund":"BTB Segn. 104",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":2009.0,
"Authors":"Ovidio Nasone, Publio \u2013 Tibullo, Albio",
"Title":" Elegie.",
"Cities":"Torino-Roma-Firenze-Napoli-Palermo",
"Publisher":"Paravia",
"Years":1907,
"Fund":"BTB Segn. 42",
"Segni":"Nota di possesso autografa. Postille.",
"Category":"CL"
},{
"Unnamed: 0":2010.0,
"Authors":"Ozanam, Jacques",
"Title":"R\u00e9cr\u00e9ations math\u00e9matiques physiques qui contiennent les Proet bl\u00eames & les Questions les plus remarquables, & les plus propres \u00e0 piquer la curiosit\u00e9, tant des Math\u00e9matiques que de la Physique; le tout trait\u00e9 d\u2019une maniere \u00e0 la port\u00e9e des Lecteurs qui ont seulement quelques connoissances l\u00e9geres de ces sciences",
"Cities":"Paris  ",
"Publisher":"Jombert",
"Years":1778,
"Fund":"BTB Segn. 2144-2147",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":2011.0,
"Authors":"Pacini, Renato",
"Title":"G.B. Piranesi.",
"Cities":"Roma",
"Publisher":"Istituto Nazionale L.U.C.E.",
"Years":1932,
"Fund":"BTB Segn. 2188",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2012.0,
"Authors":"Padoa, Emanuele",
"Title":"Storia della vita sulla terra. L\u2019evoluzione degli animali e delle piante",
"Cities":"Milano",
"Publisher":"Feltrinelli",
"Years":1959,
"Fund":"BTB Segn. 2130",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":2013.0,
"Authors":"Padovani, Giuseppe",
"Title":"Dizionario francese-italiano, ",
"Cities":"Firenze",
"Publisher":"Larousse",
"Years":1930,
"Fund":null,
"Segni":null,
"Category":"D"
},{
"Unnamed: 0":2014.0,
"Authors":"Not found",
"Title":"\u00abPagine istriane\u00bb. Numero speciale dedicato a Giani Stuparich",
"Cities":"Trieste",
"Publisher":"Edizioni Trieste",
"Years":1963,
"Fund":"BTB Segn. 1541",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":2015.0,
"Authors":"Painter, George D.",
"Title":"Marcel Proust. Di Giuro",
"Cities":"Milano",
"Publisher":"Feltrinelli",
"Years":1965,
"Fund":"BTB Segn. 1139",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2016.0,
"Authors":"Pais, Ettore",
"Title":"Storia di Roma. Dalle origini all\u2019inizio delle guerre puniche",
"Cities":"Roma",
"Publisher":"Optima",
"Years":1926,
"Fund":"BTB Segn. 1481-1485",
"Segni":"Volumi III e V intonsi.",
"Category":"S"
},{
"Unnamed: 0":2017.0,
"Authors":"Paladini, Carlo",
"Title":"Impero e libert\u00e0 nelle colonie inglesi. ",
"Cities":"Firenze",
"Publisher":"Bemporad",
"Years":1916,
"Fund":"BTB Segn. 1720",
"Segni":"Postille.",
"Category":"S"
},{
"Unnamed: 0":2018.0,
"Authors":"Palatini, Francesco",
"Title":"Algebra ad uso delle scuole medie superiori. ",
"Cities":"Torino",
"Publisher":"Petrini",
"Years":1923,
"Fund":"BTB Segn. 2127-2128",
"Segni":"Nota di possesso autografa in data 1925 Milano. Parzialmente intonsi.",
"Category":"T"
},{
"Unnamed: 0":2019.0,
"Authors":"Palazzeschi, Aldo",
"Title":"Bestie del \u2019900",
"Cities":"Firenze  ",
"Publisher":"Vallecchi",
"Years":1951,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2020.0,
"Authors":"Palazzeschi, Aldo",
"Title":"Il palio dei buffi",
"Cities":"Firenze  ",
"Publisher":"Vallecchi",
"Years":1943,
"Fund":"BTB Segn. 552",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2021.0,
"Authors":"Palazzeschi, Aldo",
"Title":"Tre imperi... mancati. Cronaca 1922-1945",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1945,
"Fund":null,
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2022.0,
"Authors":"Palazzi, Fernando",
"Title":"Novissimo dizionario della lingua italiana",
"Cities":"Milano",
"Publisher":"Ceschina",
"Years":1940,
"Fund":"BAL",
"Segni":null,
"Category":"D"
},{
"Unnamed: 0":2023.0,
"Authors":"Pal\u00e9ologue, Maurice",
"Title":"Alessandro I (1800-1825)",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1938,
"Fund":"BTB Segn. 1761",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":2024.0,
"Authors":"Pallavicino, Pietro Sforza",
"Title":"Lettere scelte",
"Cities":"Como",
"Publisher":"Ostinelli",
"Years":1825,
"Fund":"BTB Segn. 664",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2025.0,
"Authors":"Palmarocchi, Roberto",
"Title":"Letteratura francese contemporanea",
"Cities":"Roma  ",
"Publisher":"Societ\u00e0 Editrice La Voce",
"Years":1927,
"Fund":"BTB Segn. 1140",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2026.0,
"Authors":"Pancrazi, Pietro",
"Title":"Un amoroso incontro. Lettere e ricordi di G. Carducci e A. Vivanti",
"Cities":"Firenze",
"Publisher":"Le Monnier",
"Years":1951,
"Fund":"BTB Segn. 850",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2027.0,
"Authors":"Pane, Roberto",
"Title":"Bernini architetto",
"Cities":"Venezia  ",
"Publisher":"Neri Pozza",
"Years":1953,
"Fund":"BTB Segn. 2236",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":2028.0,
"Authors":"Panzini, Alfredo",
"Title":"La madonna di mam\u00e0",
"Cities":"Milano  ",
"Publisher":"Treves",
"Years":1916,
"Fund":"BTB Segn. 553",
"Segni":"Nota di possesso autografa di Enrico Gadda in data 10.08.1917 Campoformio.",
"Category":"IL"
},{
"Unnamed: 0":2029.0,
"Authors":"Panzini, Alfredo",
"Title":"Il padrone sono me",
"Cities":"Milano  ",
"Publisher":"Mondadori",
"Years":1922,
"Fund":"BTB Segn. 554",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2030.0,
"Authors":"Panzini, Alfredo",
"Title":"Semplici nozioni di grammatica italiana",
"Cities":"Firenze",
"Publisher":"Bemporad",
"Years":1930,
"Fund":"BTB Segn. 2446",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2031.0,
"Authors":"Panzini, Alfredo",
"Title":"La vera istoria dei tre colori",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1924,
"Fund":"BTB Segn. 555",
"Segni":"Nota di possesso autografa in data 10.06.1924 Milano.",
"Category":"IL"
},{
"Unnamed: 0":2032.0,
"Authors":"Paoli, Jacques",
"Title":"Trois idoles",
"Cities":"Firenze",
"Publisher":"s.n.",
"Years":1951,
"Fund":"BTB Segn. 2276",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":2033.0,
"Authors":"Paoli, Ugo Enrico",
"Title":"Uomini e cose del mondo antico",
"Cities":"Firenze",
"Publisher":"Le Monnier",
"Years":1947,
"Fund":"BTB Segn. 1486",
"Segni":"Dedica dell\u2019autore ad Arturo Loria in data 22.4.1947.",
"Category":"IL"
},{
"Unnamed: 0":2034.0,
"Authors":"Paolo Diacono",
"Title":"Dei fatti de\u2019 Longobardi libri sei",
"Cities":"Milano",
"Publisher":"Sonzogno",
"Years":1937,
"Fund":"BTB Segn. 63-64",
"Segni":"Parzialmente intonsi.",
"Category":"S"
},{
"Unnamed: 0":2035.0,
"Authors":"Papi, Roberto",
"Title":"Piccolo giudizio universale",
"Cities":"Venezia",
"Publisher":"Neri Pozza",
"Years":1950,
"Fund":"BTB Segn. 556",
"Segni":"Dedica dell\u2019autore in data 10.1950.",
"Category":"IL"
},{
"Unnamed: 0":2036.0,
"Authors":"Papini, Giovanni",
"Title":"Il mio futurismo. Con l\u2019aggiunta del discorso contro Firenze passatista",
"Cities":"Firenze",
"Publisher":"Lacerba.",
"Years":1914,
"Fund":"BTB Segn. 557",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2037.0,
"Authors":"Papini, Giovanni",
"Title":"Sant\u2019Agostino",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1930,
"Fund":"BTB Segn. 1792",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2038.0,
"Authors":"Paratore, Ettore",
"Title":"Virgilio",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1954,
"Fund":"BTB Segn. 125",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2039.0,
"Authors":"Parenti, Marino",
"Title":"Giulio Cesare Sansoni",
"Cities":"Firenze  ",
"Publisher":"Landi",
"Years":1955,
"Fund":"BTB Segn. 1542",
"Segni":"Intonso.",
"Category":"IL"
},{
"Unnamed: 0":2040.0,
"Authors":"Parenti, Marino",
"Title":"  Manzoni, Firenze e la \u201crisciacquatura\u201d",
"Cities":"Sarzana",
"Publisher":"Carpena",
"Years":1955,
"Fund":null,
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2041.0,
"Authors":"Pareto, Vilfredo",
"Title":"Compendio di sociologia generale",
"Cities":"Firenze  ",
"Publisher":"Barbera",
"Years":1920,
"Fund":"BTB Segn. 2014",
"Segni":"Nota di possesso autografa in data 1.01.1921.",
"Category":"V"
},{
"Unnamed: 0":2042.0,
"Authors":"Pareto, Vilfredo",
"Title":"Fatti e teorie",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1920,
"Fund":"BTB Segn. 2013",
"Segni":"Timbro della libreria italiana Alfredo Mele di Buenos Aires.",
"Category":"V"
},{
"Unnamed: 0":2043.0,
"Authors":"Pareyson, Luigi",
"Title":"La filosofia dell\u2019esistenza e C. Jaspers",
"Cities":"Napoli  ",
"Publisher":"Loffredo",
"Years":1940,
"Fund":"BTB Segn. 1875",
"Segni":null,
"Category":"F "
},{
"Unnamed: 0":2044.0,
"Authors":"Pariani, Carlo",
"Title":"Vite non romanzate di Dino Campana scrittore e di Evaristo Boncinelli scultore",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1938,
"Fund":"BTB Segn. 852",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2045.0,
"Authors":"Paribeni, Roberto",
"Title":"Storia d\u2019Italia illustrata. II. L\u2019Italia imperiale",
"Cities":"Milano  ",
"Publisher":"Mondadori",
"Years":1938,
"Fund":"BTB Segn. 1567",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":2046.0,
"Authors":"Parini, Giuseppe",
"Title":"Il giorno.",
"Cities":"s.l.",
"Publisher":"s.n.",
"Years":1884,
"Fund":"BAL",
"Segni":"Timbro e nota di possesso di Prosperini. Sottolineature.",
"Category":"IL"
},{
"Unnamed: 0":2047.0,
"Authors":"Parini, Giuseppe",
"Title":"Il giorno",
"Cities":"Milano",
"Publisher":"Feltrinelli",
"Years":1966,
"Fund":"BTB Segn. 560",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2048.0,
"Authors":"Parini, Giuseppe",
"Title":"Il giorno e odi scelte",
"Cities":"Torino-Milano-GenovaParma-Roma-Catania",
"Publisher":"SEI",
"Years":1942,
"Fund":"BTB Segn. 561",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2049.0,
"Authors":"Parini, Giuseppe",
"Title":"Le odi",
"Cities":"Roma",
"Publisher":"Garroni",
"Years":1908,
"Fund":"BAL",
"Segni":"Timbro di possesso di Enrico Gadda.",
"Category":"IL"
},{
"Unnamed: 0":2050.0,
"Authors":"Parini, Giuseppe",
"Title":"Poesie e prose. Con appendice di poeti satirici e didascalici del Settecento",
"Cities":"Milano-Napoli",
"Publisher":"Ricciardi",
"Years":1951,
"Fund":"BTB Segn. 558",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2051.0,
"Authors":"Parini, Giuseppe",
"Title":"Versi e prose. ",
"Cities":"Firenze  ",
"Publisher":"Le Monnier",
"Years":1860,
"Fund":"BTB Segn. 559",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2052.0,
"Authors":"Parini, Giuseppe",
"Title":"Versi e prose di Giuseppe Parini",
"Cities":"Napoli",
"Publisher":"Rondinella",
"Years":1833,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2053.0,
"Authors":"Not found",
"Title":"Paris",
"Cities":"Paris",
"Publisher":"Hachette",
"Years":1952,
"Fund":"BTB Segn. 2317",
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":2054.0,
"Authors":"Paris, Jean",
"Title":"James Joyce par lui-m\u00eame",
"Cities":"Paris",
"Publisher":"Seuil",
"Years":1957,
"Fund":"BTB Segn. 1349",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":2055.0,
"Authors":"Parise, Goffredo",
"Title":"L\u2019assoluto naturale",
"Cities":"Milano  ",
"Publisher":"Feltrinelli",
"Years":1967,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2056.0,
"Authors":"Parise, Goffredo",
"Title":"La grande vacanza",
"Cities":"Venezia  ",
"Publisher":"Neri Pozza",
"Years":1953,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2057.0,
"Authors":"Parise, Goffredo",
"Title":"Il padrone",
"Cities":"Milano",
"Publisher":"Feltrinelli",
"Years":1965,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2058.0,
"Authors":"Parise, Goffredo",
"Title":"Il ragazzo morto e le comete",
"Cities":"Milano",
"Publisher":"Feltrinelli",
"Years":1965,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2059.0,
"Authors":"Parise, Goffredo",
"Title":"Sillabario N. 1",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1972,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":2060.0,
"Authors":"Parrella, Michele",
"Title":"Poesia e pietra di Lucania",
"Cities":"Torino",
"Publisher":"Momenti",
"Years":1954,
"Fund":"BTB Segn. 562",
"Segni":"Intonso.",
"Category":"IL"
},{
"Unnamed: 0":2061.0,
"Authors":"Parronchi, Alessandro",
"Title":"Un\u2019attesa",
"Cities":"Modena",
"Publisher":"Guanda",
"Years":1949,
"Fund":"BTB Segn. 563",
"Segni":"Dedica dell\u2019autore in data 12.1941.",
"Category":"IL"
},{
"Unnamed: 0":2062.0,
"Authors":"Parronchi, Alessandro",
"Title":"I giorni sensibili",
"Cities":"Firenze  ",
"Publisher":"Vallecchi",
"Years":1941,
"Fund":"BTB Segn. 564",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":2063.0,
"Authors":"Parronchi, Alessandro",
"Title":"L\u2019incertezza amorosa",
"Cities":"Milano  ",
"Publisher":"Schwarz",
"Years":1952,
"Fund":"BTB Segn. 565",
"Segni":"Dedica dell\u2019autore in data 11.1952.",
"Category":"IL"
},{
"Unnamed: 0":2064.0,
"Authors":"Parronchi, Alessandro",
"Title":"Nomi della pittura italiana contemporanea",
"Cities":"Firenze",
"Publisher":"Arnaud",
"Years":1944,
"Fund":"BTB Segn. 2237",
"Segni":"Dedica dell\u2019autore in data 9.1945.",
"Category":"SA"
},{
"Unnamed: 0":2065.0,
"Authors":"Parronchi, Alessandro",
"Title":"Per strade di boschi e citt\u00e0",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1954,
"Fund":"BTB Segn. 566",
"Segni":"Dedica dell\u2019autore in data 5.1954.",
"Category":"IL"
},{
"Unnamed: 0":2066.0,
"Authors":"Parronchi, Alessandro",
"Title":"I visi",
"Cities":"Firenze",
"Publisher":"Rivoluzione",
"Years":1943,
"Fund":"BTB Segn. 567",
"Segni":"Dedica dell\u2019autore in data 7.1943.",
"Category":"IL"
},{
"Unnamed: 0":2067.0,
"Authors":"Pasanisi, Francesco Maria",
"Title":"Testo di geografia per le scuole secondarie superiori",
"Cities":"Milano-Roma",
"Publisher":"Dante Alighieri",
"Years":1905,
"Fund":"BTB Segn. 2374",
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":2068.0,
"Authors":"Pascal, Blaise",
"Title":"L\u2019\u0153uvre de Pascal",
"Cities":"Paris  ",
"Publisher":"Gallimard",
"Years":1941,
"Fund":"BAL",
"Segni":null,
"Category":"F "
},{
"Unnamed: 0":2069.0,
"Authors":"Pascal, Blaise",
"Title":"\u0152uvres compl\u00e8tes",
"Cities":"Paris  ",
"Publisher":"Hachette",
"Years":1866,
"Fund":"BTB Segn. 1880",
"Segni":null,
"Category":"F "
},{
"Unnamed: 0":2070.0,
"Authors":"Pascal, Blaise",
"Title":"Pens\u00e9es de M. Pascal sur la religion et quelques autres sujets",
"Cities":"Amsterdam",
"Publisher":"Wetstein",
"Years":1700,
"Fund":"BTB Segn. 1882",
"Segni":null,
"Category":"F "
},{
"Unnamed: 0":2071.0,
"Authors":"Pascal, Blaise",
"Title":"Pensieri. I",
"Cities":"Lanciano",
"Publisher":"Carabba",
"Years":1931,
"Fund":"BTB Segn. 1881",
"Segni":null,
"Category":"F "
},{
"Unnamed: 0":2072.0,
"Authors":"Pascal, Blaise",
"Title":"Pensieri",
"Cities":"Bari",
"Publisher":"Laterza",
"Years":1941,
"Fund":null,
"Segni":null,
"Category":"F "
},{
"Unnamed: 0":2073.0,
"Authors":"Pascal, Blaise",
"Title":" Les provinciales. ",
"Cities":"Paris",
"Publisher":"Flammarion",
"Years":"s.d.",
"Fund":"BTB Segn. 1055",
"Segni":"Sottolineature.",
"Category":"F "
},{
"Unnamed: 0":2074.0,
"Authors":"Pascal, Ernesto",
"Title":"Calcolo delle variazioni e calcolo delle differenze finite (III parte del Calcolo infinitesimale)",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1918,
"Fund":"BTB Segn. 2026",
"Segni":"Nota di possesso autografa in data 1919.",
"Category":"T"
},{
"Unnamed: 0":2075.0,
"Authors":"Pascal, Ernesto",
"Title":"Lezioni di calcolo infinitesimale",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1918,
"Fund":"BTB Segn. 2022-2024",
"Segni":"Nota di possesso autografa in data 1919.",
"Category":"T"
},{
"Unnamed: 0":2076.0,
"Authors":"Pascarella, Cesare",
"Title":"La scoperta de l\u2019America. ",
"Cities":"Spoleto",
"Publisher":"Tip. Cooperativa",
"Years":"s.d.",
"Fund":"BTB Segn. 568",
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":2077.0,
"Authors":"Pascoli, Giovanni",
"Title":"Lyra",
"Cities":"Livorno",
"Publisher":"Giusti",
"Years":1924,
"Fund":"BTB Segn. 126",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2078.0,
"Authors":"Pascoli, Giovanni",
"Title":"Myricae",
"Cities":"Livorno",
"Publisher":"Giusti",
"Years":1908,
"Fund":"BTB Segn. 569",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2079.0,
"Authors":"Pascoli, Giovanni",
"Title":"Poemetti",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1971,
"Fund":"BTB Segn. 570",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2080.0,
"Authors":"Pascoli, Giovanni",
"Title":"Poesie",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1945,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2081.0,
"Authors":"Pasolini, Pier Paolo",
"Title":"Accattone",
"Cities":"Roma",
"Publisher":"Edizioni FM",
"Years":1961,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2082.0,
"Authors":"Pasolini, Pier Paolo",
"Title":"Le ceneri di Gramsci (Poemetti)",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1957,
"Fund":"BTB Segn. 571",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2083.0,
"Authors":"Pasolini, Pier Paolo",
"Title":"Diarii",
"Cities":"Casarsa  ",
"Publisher":"Pubblicazioni dell\u2019Accademiuta",
"Years":1945,
"Fund":"BTB Segn. 572",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2084.0,
"Authors":"Pasolini, Pier Paolo",
"Title":"Dov\u2019\u00e8 la mia patria. ",
"Cities":"Casarsa  ",
"Publisher":"Pubblicazioni dell\u2019Accademiuta",
"Years":1949,
"Fund":"BTB Segn. 573",
"Segni":" Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":2085.0,
"Authors":"Pasolini, Pier Paolo",
"Title":"Empirismo eretico",
"Cities":"Milano  ",
"Publisher":"Garzanti",
"Years":1972,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":2086.0,
"Authors":"Pasolini, Pier Paolo",
"Title":"La meglio giovent\u00f9",
"Cities":"Firenze  ",
"Publisher":"Sansoni",
"Years":1954,
"Fund":"BTB Segn. 574",
"Segni":"Dedica dell\u2019autore in data 29.7.1954.",
"Category":"IL"
},{
"Unnamed: 0":2087.0,
"Authors":"Pasolini, Pier Paolo",
"Title":"Poesie a Casarsa",
"Cities":"Bologna  ",
"Publisher":"Libreria Antiquaria",
"Years":1942,
"Fund":"BTB Segn. 575",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2088.0,
"Authors":"Pasolini, Pier Paolo",
"Title":"Ragazzi di vita",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1955,
"Fund":"BTB Segn. 576",
"Segni":"Postille dell\u2019autore e di Gadda. Pieghe.",
"Category":"IL"
},{
"Unnamed: 0":2089.0,
"Authors":"Pasolini, Pier Paolo",
"Title":"Ragazzi di vita",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1959,
"Fund":"BTB Segn. 575",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2090.0,
"Authors":"Pasolini, Pier Paolo",
"Title":"Sonetto primaverile",
"Cities":"Milano  ",
"Publisher":"All\u2019insegna del Pesce d\u2019Oro",
"Years":1960,
"Fund":"BTB Segn. 578",
"Segni":"Dedica dell\u2019autore in data 2.1960.",
"Category":"IL"
},{
"Unnamed: 0":2091.0,
"Authors":"Pasolini, Pier Paolo",
"Title":" Tal cour di un frut. ",
"Cities":"Tricesimo",
"Publisher":"Ed. Lingua Friulana",
"Years":1953,
"Fund":"BTB Segn. 579",
"Segni":"Dedica dell\u2019autore in data 5.6.1953.",
"Category":"IL"
},{
"Unnamed: 0":2092.0,
"Authors":"Pasolini, Pier Paolo",
"Title":"Teorema",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1968,
"Fund":"BTB Segn. 580",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2093.0,
"Authors":"Pasolini, Pier Paolo",
"Title":"L\u2019usignolo della chiesa cattolica",
"Cities":"Milano",
"Publisher":"Longanesi",
"Years":1958,
"Fund":"BTB Segn. 581",
"Segni":"Dedica dell\u2019autore in data 9.1958.",
"Category":"IL"
},{
"Unnamed: 0":2094.0,
"Authors":"Pasolini, Pier Paolo",
"Title":"Una vita violenta",
"Cities":"Milano  ",
"Publisher":"Garzanti",
"Years":1959,
"Fund":"BAL",
"Segni":"Foglio con postille inserito.",
"Category":"IL"
},{
"Unnamed: 0":2095.0,
"Authors":"Pasquali, Giorgio",
"Title":"Stravaganze quarte e supreme",
"Cities":"Venezia",
"Publisher":"Neri Pozza",
"Years":1951,
"Fund":"BTB Segn. 854",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2096.0,
"Authors":"Paulsen, Friedrich",
"Title":"Introduzione alla filosofia",
"Cities":"Milano-Torino-Roma",
"Publisher":"Bocca",
"Years":1911,
"Fund":"BTB Segn. 1967",
"Segni":null,
"Category":"F "
},{
"Unnamed: 0":2097.0,
"Authors":"Paulsen, Friedrich",
"Title":"Kant. ",
"Cities":"a. Milano-Palermo-Napoli-Genova",
"Publisher":"Sandron",
"Years":1904,
"Fund":"BTB Segn. 1966",
"Segni":"Nota di possesso autografa in data 192425.",
"Category":"F "
},{
"Unnamed: 0":2098.0,
"Authors":"Pavese, Cesare",
"Title":"Ciau Masino",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1968,
"Fund":"BTB Segn. 582",
"Segni":"Dedica dell\u2019editore. Intonso.",
"Category":"IL"
},{
"Unnamed: 0":2099.0,
"Authors":"Pea, Enrico",
"Title":"Arie bifolchine",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1943,
"Fund":"BTB Segn. 583",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2100.0,
"Authors":"Pea, Enrico",
"Title":"Il forestiero",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1937,
"Fund":"BTB Segn. 584",
"Segni":"Intonso.",
"Category":"IL"
},{
"Unnamed: 0":2101.0,
"Authors":"Pea, Enrico",
"Title":" Il maggio in Versilia, in Lucchesia e in Lunigiana",
"Cities":"Firenze  ",
"Publisher":"Carpena",
"Years":1954,
"Fund":"BTB Segn. 588",
"Segni":"Dedica dell\u2019autore in data 6.1954.",
"Category":"IL"
},{
"Unnamed: 0":2102.0,
"Authors":"Pea, Enrico",
"Title":"Moscardino",
"Cities":"Milano",
"Publisher":"Treves",
"Years":1922,
"Fund":"BTB Segn. 585",
"Segni":"Dedica dell\u2019autore a Carlo Paccagnini. Piega.",
"Category":"IL"
},{
"Unnamed: 0":2103.0,
"Authors":"Pea, Enrico",
"Title":" La passione di Cristo. L\u2019anello del parente folle.",
"Cities":"Brescia",
"Publisher":"Morcelliana",
"Years":190,
"Fund":"BTB Segn. 586",
"Segni":"Intonso.",
"Category":"IL"
},{
"Unnamed: 0":2104.0,
"Authors":"Pea, Enrico",
"Title":"Solaio (storie di noi viventi)",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1941,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2105.0,
"Authors":"Pea, Enrico",
"Title":"Il trenino di sassi",
"Cities":"Firenze  ",
"Publisher":"Vallecchi",
"Years":1940,
"Fund":"BTB Segn. 587",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2106.0,
"Authors":"Pedini, Mario",
"Title":"Taccuino di una missione (Biafraprimavera 1969)",
"Cities":"Roma",
"Publisher":"Mae",
"Years":1970,
"Fund":"BTB Segn. Op. 50",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":2107.0,
"Authors":"Pedretti, Garibaldi",
"Title":"Il conducente d\u2019automobile (Chauffeur)",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1930,
"Fund":"BTB Segn. 2042",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":2108.0,
"Authors":"Pedrotti, Giovanni",
"Title":"Una famiglia di patrioti trentini",
"Cities":"Milano",
"Publisher":"Cordani",
"Years":1932,
"Fund":"BTB Segn. Op. 51",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":2109.0,
"Authors":"P\u00e9guy, Charles",
"Title":"La nostra ora",
"Cities":"Roma",
"Publisher":"Anonima Veritas",
"Years":1946,
"Fund":"BTB Segn. 1056",
"Segni":"Dedica del curatore in data 1.9.1952.",
"Category":"FL"
},{
"Unnamed: 0":2110.0,
"Authors":"Peillex, Georges",
"Title":"La pittura del XIX secolo",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1964,
"Fund":"BAL",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":2111.0,
"Authors":"Pellegrini, Alessandro",
"Title":"Baudelaire",
"Cities":"Milano",
"Publisher":"Treves",
"Years":1938,
"Fund":"BTB Segn. 1141",
"Segni":"Dedica dell\u2019autore.",
"Category":"L"
},{
"Unnamed: 0":2112.0,
"Authors":"Pellegrini, Carlo",
"Title":"La contessa d\u2019Albany e il salotto del Lungarno",
"Cities":"Napoli  ",
"Publisher":"Edizioni Scientifiche Italiane",
"Years":1951,
"Fund":"BTB Segn. 856",
"Segni":"Sottolineature.",
"Category":"L"
},{
"Unnamed: 0":2113.0,
"Authors":"Pellegrini, Rinaldo",
"Title":"Il caso Montesi",
"Cities":"Parma",
"Publisher":"Guanda",
"Years":1954,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2114.0,
"Authors":"Pellico Silvio",
"Title":"Meine Gef\u00e4ngnisse. ",
"Cities":"s.l.",
"Publisher":"s.e.",
"Years":"s.d.",
"Fund":"BAC",
"Segni":"Del volume si conservano le pp. 161208 pi\u00f9 1 non numerata.",
"Category":"IL"
},{
"Unnamed: 0":2115.0,
"Authors":"Pellico Silvio",
"Title":"Le mie prigioni",
"Cities":"Milano  ",
"Publisher":"Biblioteca Universale Rizzoli",
"Years":"s.d.",
"Fund":null,
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2116.0,
"Authors":"Penna, Sandro",
"Title":"Poesie",
"Cities":"Firenze",
"Publisher":"Parenti",
"Years":1939,
"Fund":null,
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2117.0,
"Authors":"Penna, Sandro",
"Title":"Poesie",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1957,
"Fund":null,
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2118.0,
"Authors":"Penna, Sandro",
"Title":"Tutte le poesie",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1970,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore in data 4.6.1970. Segnalibro inserito.",
"Category":"IL"
},{
"Unnamed: 0":2119.0,
"Authors":"Penna, Sandro",
"Title":"Una strana gioia di vivere",
"Cities":"Milano",
"Publisher":"All\u2019insegna del pesce d\u2019oro",
"Years":1956,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore in data 18.3.1956.",
"Category":"IL"
},{
"Unnamed: 0":2120.0,
"Authors":"Pennella, Giuseppe",
"Title":"Il vademecum dell\u2019allievo ufficiale di complemento. ",
"Cities":"Roma",
"Publisher":"Tip. del Senato",
"Years":1915,
"Fund":"BTB Segn. 2166",
"Segni":null,
"Category":"M"
},{
"Unnamed: 0":2121.0,
"Authors":"Pento, Bortolo",
"Title":"Gli orti dei poveri",
"Cities":"Roma",
"Publisher":"Bardi",
"Years":1956,
"Fund":"BTB Segn. 591",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2122.0,
"Authors":"Pepe, Gabriele",
"Title":"Il medioevo barbarico d\u2019Italia",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1941,
"Fund":"BTB Segn. 1543",
"Segni":null,
"Category":"S "
},{
"Unnamed: 0":2123.0,
"Authors":"Perini, Osvaldo",
"Title":"Storia delle societ\u00e0 secrete dalle prime origini agli ultimi tempi. I. Societ\u00e0 teofilosofiche",
"Cities":"Milano  ",
"Publisher":"Guglielmini",
"Years":1863,
"Fund":"BTB Segn. 1544",
"Segni":null,
"Category":"S "
},{
"Unnamed: 0":2124.0,
"Authors":"Peroni, Giovanna",
"Title":"Terra d\u2019uomini",
"Cities":"Milano",
"Publisher":"Pleion",
"Years":1955,
"Fund":"BTB Segn. 592",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2125.0,
"Authors":"Perosa, Sergio",
"Title":"Introduzione alla poesia di Emily Dickinson",
"Cities":"Milano  ",
"Publisher":"Nuova Accademia",
"Years":"s.d.",
"Fund":"BTB Segn. 1348",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2126.0,
"Authors":"Perroux, Fran\u00e7ois",
"Title":"Il capitalismo moderno",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1960,
"Fund":"BTB Segn. 2015",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":2127.0,
"Authors":"Pesce, Emilio",
"Title":"Bernari",
"Cities":"Firenze  ",
"Publisher":"La Nuova Italia",
"Years":1970,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2128.0,
"Authors":"Pesch, Tilmann",
"Title":"The catholic\u2019s manual",
"Cities":"London  ",
"Publisher":"Herder",
"Years":1913,
"Fund":"BAL",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":2129.0,
"Authors":"Pesciotti, Pietro",
"Title":"Parole e silenzio",
"Cities":"Napoli  ",
"Publisher":"Cymba",
"Years":1969,
"Fund":"BTB Segn. 593",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2130.0,
"Authors":"Pestelli, Leo",
"Title":"Racconto grammaticale",
"Cities":"Milano",
"Publisher":"Longanesi",
"Years":1967,
"Fund":"BTB Segn. 594",
"Segni":"Dedica dell\u2019autore in data 9.1967.",
"Category":"IL"
},{
"Unnamed: 0":2131.0,
"Authors":"Pestelli, Leo",
"Title":"Trattatello di rettorica",
"Cities":"Milano  ",
"Publisher":"Longanesi",
"Years":1969,
"Fund":"BTB Segn. 595",
"Segni":"Dedica dell\u2019autore in data 10.1969.",
"Category":"IL"
},{
"Unnamed: 0":2132.0,
"Authors":"Petit-Dutaillis, Charles",
"Title":"Les Communes fran\u00e7aises",
"Cities":"Paris",
"Publisher":"Michel",
"Years":1947,
"Fund":"BTB Segn. 1687",
"Segni":"Parzialmente intonso.",
"Category":"FL"
},{
"Unnamed: 0":2133.0,
"Authors":"Petrarca, Francesco",
"Title":"Il Canzoniere. ",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1964,
"Fund":"BTB Segn. 596",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2134.0,
"Authors":"Petrarca, Francesco",
"Title":"Dal \u00abCanzoniere\u00bb",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1944,
"Fund":"BTB Segn. 597",
"Segni":"Intonso.",
"Category":"IL"
},{
"Unnamed: 0":2135.0,
"Authors":"Petrarca, Francesco",
"Title":"Il mio segreto",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1943,
"Fund":"BTB Segn. 598",
"Segni":"Intonso.",
"Category":"IL"
},{
"Unnamed: 0":2136.0,
"Authors":"Petrarca, Francesco",
"Title":"Il Petrarca. Con l\u2019espositione di A. Velutello",
"Cities":"Venezia",
"Publisher":"Bertani",
"Years":1573,
"Fund":"BTB Segn. Ed. Cinq.243",
"Segni":"Omaggio di B. Fulgi",
"Category":"IL"
},{
"Unnamed: 0":2137.0,
"Authors":"Petrarca, Francesco",
"Title":"Le rime",
"Cities":"Firenze  ",
"Publisher":"Barbera",
"Years":"s.d.",
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2138.0,
"Authors":"Petrarca, Francesco",
"Title":"Le rime",
"Cities":"Firenze",
"Publisher":"Nemi",
"Years":1908,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2139.0,
"Authors":"Petrarca, Francesco",
"Title":"Le rime",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1931,
"Fund":"BTB Segn. 600",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2140.0,
"Authors":"Petrarca, Francesco",
"Title":"Le Rime di Francesco Petrarca di su gli originali",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1939,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2141.0,
"Authors":"Petrarca, Francesco",
"Title":"Le rime secondo l\u2019autografo",
"Cities":"Firenze  ",
"Publisher":"Sansoni",
"Years":1926,
"Fund":"BTB Segn. 599",
"Segni":"Intonso.",
"Category":"IL"
},{
"Unnamed: 0":2142.0,
"Authors":"Petrocchi, Giorgio",
"Title":"Scrittori piemontesi del secondo Ottocento",
"Cities":"Torino",
"Publisher":"De Silva",
"Years":1948,
"Fund":"BTB Segn. 857",
"Segni":"Dedica dell\u2019autore. Invio di Franco Antonicelli.",
"Category":"IL"
},{
"Unnamed: 0":2143.0,
"Authors":"Petroni, Guglielmo",
"Title":"Personaggi d\u2019elezione",
"Cities":"Firenze  ",
"Publisher":"Parenti",
"Years":1938,
"Fund":"BTB Segn. 601",
"Segni":"Parzialmente intonso.",
"Category":"IL"
},{
"Unnamed: 0":2144.0,
"Authors":"Petronio Arbitro",
"Title":"Romanzo satirico di Petronio Arbitro. ",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1930,
"Fund":"BTB Segn. 66",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2145.0,
"Authors":"Petronio Arbitro",
"Title":"Satyricon. Romanzo d\u2019avventure e di costumi. ",
"Cities":"Roma",
"Publisher":"Form\u00ecggini",
"Years":1920,
"Fund":"BTB Segn. 67",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":2146.0,
"Authors":"Petronio Arbitro",
"Title":"Satyricon. s.l",
"Cities":"s.l.",
"Publisher":"De Carlo",
"Years":1945,
"Fund":"BTB Segn. 65 Intonso.",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":2147.0,
"Authors":"Peyrefitte, Roger",
"Title":"Les ambassades",
"Cities":"Paris  ",
"Publisher":"Flammarion",
"Years":1951,
"Fund":"BTB Segn. 1057",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":2148.0,
"Authors":"Peyrefitte, Roger",
"Title":"Les amiti\u00e9s particuli\u00e8res",
"Cities":"Paris  ",
"Publisher":"Flammarion",
"Years":1945,
"Fund":"BTB Segn. 1058",
"Segni":"Intonso.",
"Category":"FL"
},{
"Unnamed: 0":2149.0,
"Authors":"Peyrefitte, Roger",
"Title":"Chevaliers de Malte",
"Cities":"Paris  ",
"Publisher":"Flammarion",
"Years":1957,
"Fund":"BTB Segn. 1059",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":2150.0,
"Authors":"Peyrefitte, Roger",
"Title":"Les cl\u00e9s de Saint Pierre",
"Cities":"Paris  ",
"Publisher":"Flammarion",
"Years":1955,
"Fund":"BTB Segn. 1060",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":2151.0,
"Authors":"Peyrefitte, Roger",
"Title":"La fin des ambassades",
"Cities":"Paris  ",
"Publisher":"Flammarion",
"Years":1953,
"Fund":"BTB Segn. 1061",
"Segni":"Intonso.",
"Category":"FL"
},{
"Unnamed: 0":2152.0,
"Authors":"Pia, Pascal",
"Title":"Baudelaire par lui-m\u00eame",
"Cities":"Paris  ",
"Publisher":"Seuil",
"Years":1961,
"Fund":"BTB Segn. 1142",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":2153.0,
"Authors":"Not found",
"Title":"Pianta di Milano.",
"Cities":"Milano",
"Publisher":"A. & G. Marco",
"Years":1942,
"Fund":"BTB Segn. Op. 68",
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":2154.0,
"Authors":"Piat, Clodius",
"Title":"Aristote",
"Cities":"Paris",
"Publisher":"Alcan",
"Years":1912,
"Fund":"BTB Segn. 1968",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2155.0,
"Authors":"Piazzolla, Marino",
"Title":"Gli occhi di Orfeo",
"Cities":"Roma  ",
"Publisher":"Edizioni dell\u2019Ippogrifo",
"Years":1964,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore in data 23.11.1964.",
"Category":"IL"
},{
"Unnamed: 0":2156.0,
"Authors":"Piccioni, Leone",
"Title":"Due saggi sulla poesia di Ungaretti",
"Cities":"Roma",
"Publisher":"Novagrafia",
"Years":1948,
"Fund":"BTB Segn. 602",
"Segni":"Dedica dell\u2019autore in data 15.12.1950.",
"Category":"IL"
},{
"Unnamed: 0":2157.0,
"Authors":"Piccioni, Leone",
"Title":"Lavagna bianca. Diario 1963, conagosto in URSS",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1964,
"Fund":"BTB Segn. 602 e BAL",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":2158.0,
"Authors":"Piccioni, Leone",
"Title":"Lettura leopardiana ed altri saggi",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1952,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore in data 28.7.1952.",
"Category":"IL"
},{
"Unnamed: 0":2159.0,
"Authors":"Piccioni, Leone",
"Title":"Maestri e amici",
"Cities":"Milano",
"Publisher":"Rizzoli",
"Years":1969,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore in data 23.9.1969.",
"Category":"IL"
},{
"Unnamed: 0":2160.0,
"Authors":"Piccioni, Leone",
"Title":"La narrativa italiana tra romanzo e racconti",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1959,
"Fund":"BTB Segn. 860",
"Segni":"Dedica dell\u2019autore in data 10.11.1959.",
"Category":"IL"
},{
"Unnamed: 0":2161.0,
"Authors":"Piccioni, Leone",
"Title":"Sui contemporanei",
"Cities":"Milano",
"Publisher":"Fabbri",
"Years":1953,
"Fund":"BTB Segn. 861",
"Segni":"Dedica dell\u2019autore in data 1953.",
"Category":"IL"
},{
"Unnamed: 0":2162.0,
"Authors":"Piccioni, Leone",
"Title":"Tradizione letteraria e idee correnti",
"Cities":"Milano",
"Publisher":"Fabbri",
"Years":1956,
"Fund":"BTB Segn. 862-863",
"Segni":"Dedica dell\u2019autore in data 1956.",
"Category":"IL"
},{
"Unnamed: 0":2163.0,
"Authors":"Piccioni, Leone",
"Title":" Troppa morte, troppa vita. Viaggi e pensieri intorno agli USA",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1969,
"Fund":"BTB Segn. 603",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":2164.0,
"Authors":"Picchi, Mario",
"Title":"Il muro torto",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1964,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2165.0,
"Authors":"Picchi, Mario",
"Title":"Roma di giorno",
"Cities":"Milano",
"Publisher":"Lerici",
"Years":1960,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2166.0,
"Authors":"Picchi, Mario",
"Title":"Storia di una notte",
"Cities":"Milano  ",
"Publisher":"Rizzoli",
"Years":1968,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore e foglietto con appunti  inserito.",
"Category":"IL"
},{
"Unnamed: 0":2167.0,
"Authors":"Piccoli Genovese, Alberto",
"Title":"Giovenale",
"Cities":"Firenze",
"Publisher":"Le Monnier",
"Years":1933,
"Fund":"BTB Segn. 127",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2168.0,
"Authors":"Not found",
"Title":"Piccolo vocabolario metodico della lingua greca compilato per le scuole secondarie",
"Cities":"Livorno",
"Publisher":"Giusti",
"Years":1906,
"Fund":"BTB Segn. 2487",
"Segni":null,
"Category":"GR"
},{
"Unnamed: 0":2169.0,
"Authors":"Pick, Felice",
"Title":"Pensieri controcorrente. ",
"Cities":"Roma",
"Publisher":"Ist. Graf. Tiberino",
"Years":1972,
"Fund":"BTB Segn. 1883",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2170.0,
"Authors":"Picon, Ga\u00ebtan",
"Title":"Panorama de la nouvelle litt\u00e9rature fran\u00e7aise.",
"Cities":"Paris  ",
"Publisher":"NRF-Gallimard",
"Years":1939,
"Fund":"BTB Segn. 1144",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":2171.0,
"Authors":"Pieri, Piero",
"Title":"L\u2019Italia nella prima guerra mondiale (1915-1918)",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1965,
"Fund":"BTB Segn. 1545",
"Segni":null,
"Category":"S "
},{
"Unnamed: 0":2172.0,
"Authors":"Not found",
"Title":"Piero della Francesca,",
"Cities":"Ivrea",
"Publisher":"Ing. Olivetti e C.",
"Years":1959,
"Fund":"BAL",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":2173.0,
"Authors":"Pignatti, Terisio",
"Title":"Lorenzo Lotto",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1953,
"Fund":"BTB Segn. 2195",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2174.0,
"Authors":"Pilon, Edmond",
"Title":"La vie de famille au dixhuiti\u00e8me si\u00e8cle. ",
"Cities":"Paris",
"Publisher":"Jonqui\u00e8res",
"Years":1928,
"Fund":"BTB Segn. 1688",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":2175.0,
"Authors":"Not found",
"Title":"Pinacoteca Querini-Stampalia: Catalogo",
"Cities":"Verona",
"Publisher":"Zanetti",
"Years":1925,
"Fund":"BTB Segn. 2293",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":2176.0,
"Authors":"Pincherle, Salvatore",
"Title":"Esercizi sulla geometria elementare",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1915,
"Fund":"BTB Segn. 2025",
"Segni":"Nota di possesso autografa in data 1.11.1924.",
"Category":"T"
},{
"Unnamed: 0":2177.0,
"Authors":"Pincherle, Salvatore",
"Title":"Geometria metrica e trigonometria",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1918,
"Fund":"BTB Segn. 2019",
"Segni":"Nota di possesso autografa in data 1919 Milano.",
"Category":"T"
},{
"Unnamed: 0":2178.0,
"Authors":"Pincherle, Salvatore",
"Title":"Geometria pura elementare con le figure sferiche",
"Cities":"Milano  ",
"Publisher":"Hoepli",
"Years":1922,
"Fund":"BTB Segn. 2018",
"Segni":"Nota di possesso autografa in data 1.11.1924.",
"Category":"T"
},{
"Unnamed: 0":2179.0,
"Authors":"Pinelli, Tullio",
"Title":"Re Hassan",
"Cities":"Milano",
"Publisher":"Ricordi",
"Years":1938,
"Fund":"BTB Segn. Op. 086",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":2180.0,
"Authors":"Pini, Gian Domenico",
"Title":"I santi martiri Sisinio, Martirio e Alessandro e il loro culto in Milano",
"Cities":"Milano",
"Publisher":"Wilmant",
"Years":1897,
"Fund":"BTB Segn. 1793",
"Segni":"Parzialmente intonso.",
"Category":"V"
},{
"Unnamed: 0":2181.0,
"Authors":"Piovene, Guido",
"Title":"I falsi redentori",
"Cities":"Milano  ",
"Publisher":"Garzanti",
"Years":1949,
"Fund":"BTB Segn. 604",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2182.0,
"Authors":"Pirandello, Luigi",
"Title":"In silenzio (Novelle per un anno vol. 6)",
"Cities":"Firenze",
"Publisher":"Bemporad",
"Years":1923,
"Fund":"BTB Segn. 605",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2183.0,
"Authors":"Pieri, Piero",
"Title":"Storia militare del Rinascimento: guerre e insurrezioni",
"Cities":"Torino  ",
"Publisher":"Einaudi",
"Years":1962,
"Fund":"BAL",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":2184.0,
"Authors":"Pirola, Floriano",
"Title":"La rabbia morta",
"Cities":"Milano  ",
"Publisher":"Gastaldi editore",
"Years":1967,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore in data 1967.",
"Category":"IL"
},{
"Unnamed: 0":2185.0,
"Authors":"Pisani, Vittore",
"Title":"Grammatica della lingua greca, fonetica e morfologia",
"Cities":"Milano ",
"Publisher":"Fratelli Fabbri",
"Years":"s.d.",
"Fund":"BAL",
"Segni":null,
"Category":"GR"
},{
"Unnamed: 0":2186.0,
"Authors":"Pisani, Vittore",
"Title":"Manuale storico della lingua greca",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1947,
"Fund":"BTB Segn. 2447",
"Segni":null,
"Category":"GR"
},{
"Unnamed: 0":2187.0,
"Authors":"Pisani, Vittore",
"Title":" Sintassi della lingua greca antica: con appendici sulla metrica e sui dialetti.",
"Cities":"Milano",
"Publisher":"Fratelli Fabbri",
"Years":"s.d.",
"Fund":"BAL",
"Segni":"Sottolineature e appunti.",
"Category":"GR"
},{
"Unnamed: 0":2188.0,
"Authors":"Pitagora (pseudo)",
"Title":"I versi aurei, i simboli, le lettere seguite da frammenti ed estratti di Porfirio, dell\u2019anonimo Foziano di Iamblico e di Ierocle relativi a Pitagora",
"Cities":"Lanciano",
"Publisher":"Carabba",
"Years":1919,
"Fund":"BTB Segn. 1884",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":2189.0,
"Authors":"Pittelli, Giuseppe",
"Title":"Aforismi",
"Cities":"Padova",
"Publisher":"Rebellato",
"Years":1971,
"Fund":"BTB Segn. 606",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2190.0,
"Authors":"Not found",
"Title":"La pittura bresciana del Rinascimento. Catalogo della mostra. Citt\u00e0 di Brescia. Maggiosettembre 1939-XVII",
"Cities":"Bergamo",
"Publisher":"Istituto Italiano d\u2019Arti Grafiche",
"Years":1939,
"Fund":"BTB Segn. 2241",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":2191.0,
"Authors":"Piva, Ugo Agide",
"Title":"La catalisi e le sue applicazioni industriali",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1924,
"Fund":"BTB Segn. 2053",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2192.0,
"Authors":"Pizzagalli, Angelo Mari",
"Title":"Buddha e i dogmi del budddhismo",
"Cities":null,
"Publisher":null,
"Years":1912,
"Fund":"BAL",
"Segni":null,
"Category":"F "
},{
"Unnamed: 0":2193.0,
"Authors":"Pizzagalli, Angelo Mari",
"Title":"La filosofia indiana",
"Cities":"Pavia  ",
"Publisher":"Mattei",
"Years":1913,
"Fund":"BAL",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":2194.0,
"Authors":"Pizzetti, Ippolito, Cocker Henry",
"Title":"Il libro dei fiori",
"Cities":"Milano  ",
"Publisher":"Garzanti",
"Years":1968,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2195.0,
"Authors":"Not found",
"Title":"Planimetria delle strade della citt\u00e0 di Milano al 31 dicembre 1901",
"Cities":"Milano",
"Publisher":"Vallardi",
"Years":1901,
"Fund":"BTB Segn. Op. 70",
"Segni":null,
"Category":"G "
},{
"Unnamed: 0":2196.0,
"Authors":"Platone",
"Title":"Apologia di Socrate. ",
"Cities":"Milano",
"Publisher":"Sonzogno",
"Years":"s.d.",
"Fund":"BTB Segn. 1885",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":2197.0,
"Authors":"Platone",
"Title":"Il Fedone. ",
"Cities":"Milano",
"Publisher":"Sonzogno",
"Years":1913,
"Fund":"BAL",
"Segni":"Nota di possesso di Gadda in data 18.5.24 Milano.",
"Category":"CL"
},{
"Unnamed: 0":2198.0,
"Authors":"Platone",
"Title":"Fedone",
"Cities":"Bari",
"Publisher":"Laterza",
"Years":1939,
"Fund":"BTB Segn. 1886",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":2199.0,
"Authors":"Platone",
"Title":" \u0152uvres compl\u00e8tes.",
"Cities":"Paris",
"Publisher":"Les Belles Lettres",
"Years":1925,
"Fund":"BTB Segn. 1888-1897",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":2200.0,
"Authors":"Platone",
"Title":"\u0152uvres compl\u00e8tes",
"Cities":"Paris  ",
"Publisher":"Gallimard",
"Years":1950,
"Fund":"BAL",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":2201.0,
"Authors":"Platone",
"Title":"Processo e morte di Socrate. Eutifrone. Apologia. Critone. Fedone",
"Cities":"Milano",
"Publisher":"Rizzoli",
"Years":1949,
"Fund":"BTB Segn. 1887",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":2202.0,
"Authors":"Platone",
"Title":"Il Protagora",
"Cities":"Milano  ",
"Publisher":"Sonzogno",
"Years":1910,
"Fund":"BAL",
"Segni":"Nota di possesso di Gadda in data 18.5.1924 Milano.",
"Category":"CL"
},{
"Unnamed: 0":2203.0,
"Authors":"Plauto, Tito Maccio",
"Title":"La commedia del fantasma; Il soldato smargiasso.",
"Cities":"Roma",
"Publisher":"Form\u00ecggini",
"Years":1933,
"Fund":"BTB Segn. 70",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":2204.0,
"Authors":"Plinio Cecilio Secondo il Giovane",
"Title":"Epistole scelte",
"Cities":"Venezia",
"Publisher":"Sorteni",
"Years":1912,
"Fund":"BTB Segn. 71",
"Segni":"Postille.",
"Category":"CL"
},{
"Unnamed: 0":2205.0,
"Authors":"Plutarco",
"Title":"Le vite parallele. Alessandro e Cesare",
"Cities":"Torino-Milano-Firenze-Roma-NapoliPlermo",
"Publisher":"Paravia",
"Years":1923,
"Fund":"BTB Segn. 17",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":2206.0,
"Authors":"Not found",
"Title":"Plutarque",
"Cities":"Paris",
"Publisher":"Gallimard",
"Years":1951,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2207.0,
"Authors":"Podadera, Luis Miranda",
"Title":"Un viaje a Toledo",
"Cities":"Madrid  ",
"Publisher":"Hernando",
"Years":1953,
"Fund":"BTB Segn. 2311",
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":2208.0,
"Authors":"Poe, Edgar Allan",
"Title":"Histoires extraordinaires. ",
"Cities":"Paris",
"Publisher":"Nelson",
"Years":"s.d.",
"Fund":"BTB Segn. 1287",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":2209.0,
"Authors":"Poe, Edgar Allan",
"Title":"Nouvelles histoires extraordinaires",
"Cities":"Paris  ",
"Publisher":"Calmann-L\u00e9vy",
"Years":1920,
"Fund":"BTB Segn. 956",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":2210.0,
"Authors":"Poe, Edgar Allan",
"Title":"Racconti del terrore",
"Cities":"Milano",
"Publisher":"Rizzoli",
"Years":1950,
"Fund":"BTB Segn. 1288",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":2211.0,
"Authors":"Poe, Edgar Allan",
"Title":" Racconti straordinari. ",
"Cities":"Milano",
"Publisher":"Facchi",
"Years":"s.d.",
"Fund":"BTB Segn. 1289",
"Segni":"Nota di possesso autografa in data 10.1924.",
"Category":"EL"
},{
"Unnamed: 0":2212.0,
"Authors":"Poe, Edgar Allan",
"Title":"Suggestione",
"Cities":"Roma",
"Publisher":"Lettere d\u2019oggi",
"Years":1942,
"Fund":"BTB Segn. 1286",
"Segni":"Parzialmente intonso.",
"Category":"EL"
},{
"Unnamed: 0":2213.0,
"Authors":"Not found",
"Title":"Poesia dialettale del Novecento.",
"Cities":"Parma",
"Publisher":"Guanda",
"Years":1952,
"Fund":"BTB Segn. 608",
"Segni":"Dedica di P.P. Pasolini in data 10.1.1953.",
"Category":"EL"
},{
"Unnamed: 0":2214.0,
"Authors":"Not found",
"Title":"La poesia popolare italiana",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1960,
"Fund":"BTB Segn. 609",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2215.0,
"Authors":"Not found",
"Title":"Poesia spagnola del Novecento.",
"Cities":"Parma",
"Publisher":"Guanda",
"Years":1952,
"Fund":"BTB Segn. 938",
"Segni":"Postille.",
"Category":"SL"
},{
"Unnamed: 0":2216.0,
"Authors":"Not found",
"Title":"Poesia straniera del Novecento",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1958,
"Fund":"BTB Segn. 1410",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2217.0,
"Authors":"Not found",
"Title":"Poesia straniera del Novecento",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1960,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2218.0,
"Authors":"Not found",
"Title":"Poeti del Dolce Stil Novo (GuidoGuinizelli, Guido Cavalcanti,Lapo Gianni, Gianni Alfani, DinoFrescobaldi, Cino da Pistoia)",
"Cities":"Roma  ",
"Publisher":"Collana italiana",
"Years":1944,
"Fund":"BTB Segn. 607",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2219.0,
"Authors":"Not found",
"Title":"Poeti del Duecento. ",
"Cities":"Milano-Napoli ",
"Publisher":"Ricciardi",
"Years":1960,
"Fund":"BTB Segn. 610-611",
"Segni":"Dedica del curatore.",
"Category":"IL"
},{
"Unnamed: 0":2220.0,
"Authors":"Not found",
"Title":"Poeti del Novecento italiani e stranieri. Antologia",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1960,
"Fund":"BTB Segn. 1411",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2221.0,
"Authors":"Not found",
"Title":"Poeti inglesi dell\u2019Ottocento.",
"Cities":"Firenze",
"Publisher":"Bemporad",
"Years":1925,
"Fund":"BTB Segn. 1290",
"Segni":"Intonso.",
"Category":"EL"
},{
"Unnamed: 0":2222.0,
"Authors":"Pohl, Robert Wichard",
"Title":"Elementi teoricopratici di elettrofisica moderna",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1928,
"Fund":"BTB Segn. 2131",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":2223.0,
"Authors":"Poliaghi, Nora",
"Title":"Tempesta a Torcello",
"Cities":"Parma",
"Publisher":"Guanda",
"Years":1952,
"Fund":"BTB Segn. 613",
"Segni":"Intonso.",
"Category":"IL"
},{
"Unnamed: 0":2224.0,
"Authors":"Poliziano (Agnolo Ambrogini detto il)",
"Title":"Rime. ",
"Cities":"Firenze ",
"Publisher":"Rinascimento del Libro",
"Years":1929,
"Fund":"BTB Segn. 615",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2225.0,
"Authors":"Poliziano (Agnolo Ambrogini detto il)",
"Title":" Le stanze, L\u2019Orfeo e le Rime",
"Cities":"Firenze  ",
"Publisher":"Le Monnier",
"Years":1932,
"Fund":"BAL",
"Segni":"Dedica del curatore in data 4.2.1942.",
"Category":"IL"
},{
"Unnamed: 0":2226.0,
"Authors":"Poliziano (Agnolo Ambrogini detto il)",
"Title":" Le stanze, L\u2019Orfeo e le Rime",
"Cities":"Torino",
"Publisher":"UTET",
"Years":1945,
"Fund":"BTB Segn. 614",
"Segni":"Sottolineature e postille.",
"Category":"IL"
},{
"Unnamed: 0":2227.0,
"Authors":"Poliziano (Agnolo Ambrogini detto il)",
"Title":"Stanze per la giostra \u2013 Oreste",
"Cities":"Roma",
"Publisher":"Garroni",
"Years":1912,
"Fund":"BAL",
"Segni":"Nota di possesso di Enrico Gadda in data 10.1917 Chiarotti.",
"Category":"IL"
},{
"Unnamed: 0":2228.0,
"Authors":"Polo, Marco",
"Title":"Il Milione",
"Cities":"Roma ",
"Publisher":"Donatello Di Luigi",
"Years":1944,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2229.0,
"Authors":"Pomeau, Ren\u00e9",
"Title":"Voltaire par lui-m\u00eame",
"Cities":"Paris  ",
"Publisher":"Seuil",
"Years":1963,
"Fund":"BTB Segn. 1143",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":2230.0,
"Authors":"Ponzini, Pier Carlo",
"Title":"Alla ricerca della passione",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1966,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2231.0,
"Authors":"Porena, Filippo",
"Title":"Guida di Roma e i suoi dintorni ossia itinerario del Nibby",
"Cities":"Torino",
"Publisher":"Loescher",
"Years":1894,
"Fund":null,
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":2232.0,
"Authors":"Porta, Carlo",
"Title":"El lava piatt del meneghin ch\u2019\u00e8 mort",
"Cities":"Milano-Napoli",
"Publisher":"Ricciardi",
"Years":1960,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2233.0,
"Authors":"Porta, Carlo",
"Title":"Poesie",
"Cities":"Firenze  ",
"Publisher":"La  Nuova Italia",
"Years":1954,
"Fund":"BTB Segn. 617-618",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2234.0,
"Authors":"Porta, Carlo",
"Title":"Poesie edite e inedite.",
"Cities":"Milano  ",
"Publisher":"Hoepli",
"Years":1946,
"Fund":"BTB Segn. 616",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2235.0,
"Authors":"Porta, Carlo \u2013 Grossi, Tommaso",
"Title":"Poesie milanesi",
"Cities":"Milano  ",
"Publisher":"Casa editrice Bietti",
"Years":"s.d.",
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2236.0,
"Authors":"Portaluppi, Piero",
"Title":"Aedilitia",
"Cities":"Milano",
"Publisher":"Bestetti",
"Years":1924,
"Fund":"BTB Segn. 2391",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2237.0,
"Authors":"Portaluppi, Piero",
"Title":"L\u2019architettura del Rinascimento nell\u2019ex ducato di Milano 1450- 1500",
"Cities":"Milano",
"Publisher":"Rizzoli",
"Years":1914,
"Fund":"BTB Segn. 2215",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":2238.0,
"Authors":"Portaluppi, Piero",
"Title":"La Casa degli Atellani",
"Cities":"Milano  ",
"Publisher":"Bestetti",
"Years":1922,
"Fund":"BTB Segn. 2390-2390 bis",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2239.0,
"Authors":"Portaluppi, Piero  \u2013 Pica, Agnoldomenico",
"Title":"La basilica porziana di S. Vittore al Corpo",
"Cities":"Milano",
"Publisher":"Off. graf. Esperia",
"Years":1934,
"Fund":"BTB Segn. 2389",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2240.0,
"Authors":"Portaluppi, Piero  \u2013 Pica, Agnoldomenico",
"Title":"Le Grazie",
"Cities":"Roma ",
"Publisher":"Casa Editrice Mediterranea",
"Years":1938,
"Fund":"BTB Segn. 2393",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2241.0,
"Authors":"Portaluppi, Piero  \u2013 Pica, Agnoldomenico \u2013 Semenza, Marco",
"Title":"Milano come \u00e8 ora e come sar\u00e0. Progetto per il piano regolatore della citt\u00e0 di Milano",
"Cities":"Milano  ",
"Publisher":"Bestetti",
"Years":1927,
"Fund":"BTB Segn. 2394",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2242.0,
"Authors":"Portmann, Adolf",
"Title":"Le forme degli animali",
"Cities":"Milano",
"Publisher":"Feltrinelli",
"Years":1960,
"Fund":"BTB Segn. 2084",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":2243.0,
"Authors":"Not found",
"Title":"Possedimenti e colonie.",
"Cities":"Milano",
"Publisher":"TCI",
"Years":1929,
"Fund":"BTB Segn. 2312",
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":2244.0,
"Authors":"Pouqueville, Fran\u00e7ois Charles Hugues",
"Title":"La Grecia",
"Cities":"Venezia",
"Publisher":"Antonelli",
"Years":1836,
"Fund":"BTB Segn. 2358",
"Segni":"Nota di possesso di Adele Gadda Lehr.",
"Category":"G"
},{
"Unnamed: 0":2245.0,
"Authors":"Power, Eileen",
"Title":"Vita nel Medioevo",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1966,
"Fund":"BAL",
"Segni":null,
"Category":"S "
},{
"Unnamed: 0":2246.0,
"Authors":"Pozza, Neri",
"Title":"Processo per eresia",
"Cities":"Firenze  ",
"Publisher":"Vallecchi",
"Years":1970,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore in data 3.4.1970.",
"Category":"IL"
},{
"Unnamed: 0":2247.0,
"Authors":"Pozzi, Gianni",
"Title":"La poesia italiana del Novecento",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1965,
"Fund":"BTB Segn. 864",
"Segni":"Dedica dell\u2019autore in data 1965.",
"Category":"IL"
},{
"Unnamed: 0":2248.0,
"Authors":"Pra, Raul (Roberto Pozzi)",
"Title":"Nel buio",
"Cities":"Roma",
"Publisher":"Pite",
"Years":1970,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore in data 13.5.70.",
"Category":"IL"
},{
"Unnamed: 0":2249.0,
"Authors":"Praechter, Karl \u2013 Ueberweg, Friedrich",
"Title":"Die Philosophie des Altertums",
"Cities":"Berlin",
"Publisher":"Mittler",
"Years":1926,
"Fund":null,
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":2250.0,
"Authors":"Praga, Emilio",
"Title":"Tavolozza",
"Cities":"Roma",
"Publisher":"Garroni",
"Years":1911,
"Fund":"BAL",
"Segni":"Nota di possesso di Enrico Gadda Chantis  6 ottobre 17.",
"Category":"IL"
},{
"Unnamed: 0":2251.0,
"Authors":"Prati, Angelico",
"Title":"Vocabolario etimologico italiano",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1951,
"Fund":"BAL",
"Segni":null,
"Category":"D"
},{
"Unnamed: 0":2252.0,
"Authors":"Pratolini, Vasco",
"Title":"Le amiche",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1943,
"Fund":"BTB Segn. 619",
"Segni":"Dedica dell\u2019autore in data 5.1943.",
"Category":"IL"
},{
"Unnamed: 0":2253.0,
"Authors":"Pratolini, Vasco",
"Title":"Cronache di poveri amanti",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1947,
"Fund":"BTB Segn. 620",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2254.0,
"Authors":"Pratolini, Vasco",
"Title":"Il tappeto verde",
"Cities":"Firenze  ",
"Publisher":"Vallecchi",
"Years":1941,
"Fund":"BTB Segn. 621",
"Segni":"Dedica dell\u2019autore in data 5.1941.",
"Category":"IL"
},{
"Unnamed: 0":2255.0,
"Authors":"Pratolini, Vasco",
"Title":"Via de\u2019 Magazzini",
"Cities":"Firenze  ",
"Publisher":"Vallecchi",
"Years":1942,
"Fund":"BTB Segn. 622",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":2256.0,
"Authors":"Praz, Mario",
"Title":"La carne, la morte e il diavolo nella letteratura romantica",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1942,
"Fund":"BTB Segn. 865",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2257.0,
"Authors":"Praz, Mario",
"Title":"Motivi e figure",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1945,
"Fund":null,
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2258.0,
"Authors":"Praz, Mario",
"Title":"Storia della letteratura inglese",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1937,
"Fund":"BTB Segn. 1350",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2259.0,
"Authors":"Not found",
"Title":"Premi assegnati dalla Reale Accademia d\u2019Italia nell\u2019Adunanza solenne in Campidoglio, 21 aprile 1942-XX",
"Cities":"Roma",
"Publisher":"Reale Accademia d\u2019Italia",
"Years":1942,
"Fund":"BAL e BTB Segn. Op. 23-24",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":2260.0,
"Authors":"Not found",
"Title":"Prima mostra del Cavallino. Campigli, Carr\u00e0, Cesetti, Marino, Romanelli, Rosai, Sironi, Tosi",
"Cities":"Venezia ",
"Publisher":"Edizioni del Cavallino",
"Years":1942,
"Fund":"BTB Segn. 2232",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":2261.0,
"Authors":"Procacci, Ugo",
"Title":"Mostra di opere d\u2019arte restaurate",
"Cities":"Firenze",
"Publisher":"Tip. Giuntina",
"Years":1946,
"Fund":"BAL",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":2262.0,
"Authors":"Not found",
"Title":"Processo Winckelmann",
"Cities":null,
"Publisher":null,
"Years":null,
"Fund":"BTB Segn. 2232",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":2263.0,
"Authors":"Not found",
"Title":"Programmi e attivit\u00e0",
"Cities":"Roma  ",
"Publisher":"Comitato Nazionale per l\u2019Energia Nucleare",
"Years":1968,
"Fund":"BAL",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":2264.0,
"Authors":"Properzio, Sesto",
"Title":"Le elegie",
"Cities":"Milano ",
"Publisher":"Istituto Editoriale Italiano",
"Years":1931,
"Fund":"BTB Segn. 73",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":2265.0,
"Authors":"Properzio, Sesto",
"Title":"El\u00e9gies",
"Cities":"Paris",
"Publisher":"Les Belles Lettres",
"Years":1947,
"Fund":"BTB Segn. 105",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":2266.0,
"Authors":"Not found",
"Title":"Prosatori latini del Quattrocento",
"Cities":"Milano-Napoli",
"Publisher":"Ricciardi",
"Years":1952,
"Fund":"BTB Segn. 623",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":2267.0,
"Authors":"Not found",
"Title":"Prose e poesie greche scelte e annotate ad uso dei licei",
"Cities":"Roma-Milano",
"Publisher":"Dante Alighieri",
"Years":1908,
"Fund":"BTB Segn. 23",
"Segni":"Nota di possesso autografa. Postille.",
"Category":"CL"
},{
"Unnamed: 0":2268.0,
"Authors":"Not found",
"Title":"Prospettive della letteratura francese da Corneille a Ch\u00e9nier",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1946,
"Fund":"BTB Segn. 1145",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":2269.0,
"Authors":"Proust, Marcel",
"Title":"\u00c0 la recherche du temps perdu. Tome I. Du c\u00f4t\u00e9 de chez Swann",
"Cities":"Paris  ",
"Publisher":"NRF-Gallimard",
"Years":1939,
"Fund":"BTB Segn. 1062-1063",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":2270.0,
"Authors":"Proust, Marcel",
"Title":" \u00c0 la recherche du temps perdu. Tome II \u00c0 l\u2019ombre des jeunes filles en fleur. ",
"Cities":"Paris  ",
"Publisher":"NRF-Gallimard",
"Years":1939,
"Fund":"BTB Segn. 1064-1066",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":2271.0,
"Authors":"Proust, Marcel",
"Title":"\u00c0 la recherche du temps perdu. Tome III. Le c\u00f4t\u00e9 de Guermantes",
"Cities":"Paris  ",
"Publisher":"NRF-Gallimard",
"Years":1934,
"Fund":"BTB Segn. 1067",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":2272.0,
"Authors":"Proust, Marcel",
"Title":"\u00c0 la recherche du temps perdu. Tome IV. Le c\u00f4t\u00e9 de Guermantes II. Sodome et Gomorrhe I",
"Cities":"Paris  ",
"Publisher":"NRF-Gallimard",
"Years":1941,
"Fund":"BTB Segn. 1068",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":2273.0,
"Authors":"Proust, Marcel",
"Title":"\u00c0 la recherche du temps perdu. Tome V. Sodome et Gomorrhe",
"Cities":"Paris  ",
"Publisher":"NRF-Gallimard",
"Years":1941,
"Fund":"BTB Segn. 1068",
"Segni":"Nota di possesso autografa.",
"Category":"FL"
},{
"Unnamed: 0":2274.0,
"Authors":"Proust, Marcel",
"Title":"\u00c0 la recherche du temps perdu. Tome VI. La prisonni\u00e8re (Sodome et Gomorrhe III)",
"Cities":"Paris  ",
"Publisher":"NRF-Gallimard",
"Years":1941,
"Fund":"BTB Segn. 1072-1073",
"Segni":"Nota di possesso autografa.",
"Category":"FL"
},{
"Unnamed: 0":2275.0,
"Authors":"Proust, Marcel",
"Title":"\u00c0 la recherche du temps perdu. Tome VII. Albertine disparue",
"Cities":"Paris  ",
"Publisher":"NRF-Gallimard",
"Years":1936,
"Fund":"BTB Segn. 1074-1075",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":2276.0,
"Authors":"Proust, Marcel",
"Title":"\u00c0 la recherche du temps perdu. Tome VIII. Le temps retrouv\u00e9",
"Cities":"Paris  ",
"Publisher":"NRF-Gallimard",
"Years":1940,
"Fund":"BTB Segn. 1076-1077",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":2277.0,
"Authors":"Proust, Marcel",
"Title":"\u00c0 la recherche du temps perdu",
"Cities":"Paris",
"Publisher":"Gallimard",
"Years":1955,
"Fund":"BAL",
"Segni":"Foglietto inserito.",
"Category":"FL"
},{
"Unnamed: 0":2278.0,
"Authors":"Proust, Marcel",
"Title":"Alla ricerca del tempo perduto",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1961,
"Fund":"BAL",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":2279.0,
"Authors":"Proust, Marcel",
"Title":"Contre Sainte-Beuve",
"Cities":"Paris ",
"Publisher":"Gallimard",
"Years":1965,
"Fund":"BAL",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":2280.0,
"Authors":"Proust, Marcel",
"Title":"Jean Santeuil",
"Cities":"Paris",
"Publisher":"Gallimard",
"Years":1952,
"Fund":"BAL",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":2281.0,
"Authors":"Pulci, Luigi",
"Title":"Morgante",
"Cities":"Firenze",
"Publisher":"Salani",
"Years":1930,
"Fund":"BTB Segn. 628",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2282.0,
"Authors":"Pulci, Luigi",
"Title":"Il Morgante",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1941,
"Fund":null,
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2283.0,
"Authors":"Pulci, Luigi",
"Title":" Il Morgante maggiore. Con un di scorso di U. Foscolo. ",
"Cities":"Milano",
"Publisher":"Istituto Editoriale Italiano",
"Years":"s.d.",
"Fund":"BTB Segn. 626-627",
"Segni":"Parzialmente intonsi.",
"Category":"IL"
},{
"Unnamed: 0":2284.0,
"Authors":"Punzo, Giorgio",
"Title":"Prolegomeni erotologici",
"Cities":"Napoli",
"Publisher":"Carlo Martello",
"Years":1961,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2285.0,
"Authors":"Pusckin, Aleksandr Sergeevic",
"Title":"La figlia del capitano; La donna di picche",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1942,
"Fund":"BTB Segn. 1385",
"Segni":null,
"Category":"RL"
},{
"Unnamed: 0":2286.0,
"Authors":"Putelli, Romolo",
"Title":"Intorno al castello di Breno. Storia di Valle Camonica, lago d\u2019Iseo e vicinanze da Federico Barbarossa a S. Carlo Borromeo",
"Cities":"Breno",
"Publisher":"Pro Valle Camonica",
"Years":1915,
"Fund":"BTB Segn. 2395",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":2287.0,
"Authors":"Quadrelli, Rodolfo",
"Title":"Apologhi e filastrocche",
"Cities":"Firenze  ",
"Publisher":"Vallecchi",
"Years":1972,
"Fund":"BTB Segn. 629",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2288.0,
"Authors":null,
"Title":"Quaglia: villa borghese",
"Cities":"Roma  ",
"Publisher":"Bestetti",
"Years":1964,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2289.0,
"Authors":"Quasimodo, Salvatore",
"Title":"Acque e terre",
"Cities":"Firenze  ",
"Publisher":"Edizioni di Solaria",
"Years":1930,
"Fund":null,
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2290.0,
"Authors":"Quasimodo, Salvatore",
"Title":"Ed \u00e8 subito sera. ",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1943,
"Fund":"BTB Segn. 631",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2291.0,
"Authors":"Quasimodo, Salvatore",
"Title":"Erato e Apollion.",
"Cities":"Milano",
"Publisher":"Scheiwiller",
"Years":1936,
"Fund":null,
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2292.0,
"Authors":"Quasimodo, Salvatore",
"Title":"Poesie. ",
"Cities":"Milano",
"Publisher":"Primi Piani",
"Years":1938,
"Fund":"BTB Segn. 630",
"Segni":"Dedica dell\u2019autore in data 11.1938.",
"Category":"IL"
},{
"Unnamed: 0":2293.0,
"Authors":"Not found",
"Title":"Quattro artisti",
"Cities":"Milano  ",
"Publisher":"Edizioni della colomba",
"Years":1938,
"Fund":"BAL e BTM",
"Segni":"Tre copie.",
"Category":"L"
},{
"Unnamed: 0":2294.0,
"Authors":"Queiros, Jos\u00e9 Maria E\u00e7a de",
"Title":"La colpa del prete Amaro",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1945,
"Fund":"BTB Segn. 943",
"Segni":null,
"Category":"SL"
},{
"Unnamed: 0":2295.0,
"Authors":"Quevedo y Villegas, Francisco G\u00f3mez de",
"Title":"Los sue\u00f1os",
"Cities":"Madrid  ",
"Publisher":"Espasa-Calpe",
"Years":1931,
"Fund":"BTB Segn. 925",
"Segni":null,
"Category":"SL"
},{
"Unnamed: 0":2296.0,
"Authors":"Quevedo y Villegas, Francisco G\u00f3mez de",
"Title":"Los sue\u00f1os",
"Cities":"Madrid  ",
"Publisher":"Espasa-Calpe",
"Years":1940,
"Fund":"BTB Segn. 923-924",
"Segni":"Nota di possesso autografa in data 9.06.1941. Volume I, sottolineature; volume II intonso.",
"Category":"SL"
},{
"Unnamed: 0":2297.0,
"Authors":"Not found",
"Title":"Vita del Pitocco. ",
"Cities":"Roma",
"Publisher":"Form\u00ecggini",
"Years":1927,
"Fund":"BTB Segn. 926",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2298.0,
"Authors":"] Quicherat, Louis-Marie",
"Title":"Petit trait\u00e9 de versification",
"Cities":"Paris  ",
"Publisher":"Hachette",
"Years":1886,
"Fund":"BTB Segn. 2448",
"Segni":"Nota di possesso autografa di Adele Gadda  Lehr.",
"Category":"FL"
},{
"Unnamed: 0":2299.0,
"Authors":"Quinet, Edgard",
"Title":"La rivoluzione",
"Cities":"Torino   ",
"Publisher":"Einaudi",
"Years":1953,
"Fund":"BTB Segn. 1689-1690",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2300.0,
"Authors":"Quintavalle, Armando Ottaviano",
"Title":" La Regia galleria di Parma",
"Cities":"Roma",
"Publisher":"Libreria dello Stato",
"Years":1939,
"Fund":"BTB Segn. 2396",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":2301.0,
"Authors":"Rabelais, Fran\u00e7ois",
"Title":"Gargantua",
"Cities":"Paris",
"Publisher":"Roches",
"Years":1929,
"Fund":"BAL",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":2302.0,
"Authors":"Rabelais, Fran\u00e7ois",
"Title":"\u0152uvres",
"Cities":"Paris   ",
"Publisher":"Lecon",
"Years":1854,
"Fund":"BTB Segn. 1079",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":2303.0,
"Authors":"Rabelais, Fran\u00e7ois",
"Title":"\u0152uvres",
"Cities":"Paris ",
"Publisher":"Librairies de la Biblioth\u00e8que Nationale",
"Years":1881,
"Fund":"BTB Segn. 1078",
"Segni":"Pieghe.",
"Category":"FL"
},{
"Unnamed: 0":2304.0,
"Authors":"Rabelais, Fran\u00e7ois",
"Title":"\u0152uvres compl\u00e8tes de Rabelais",
"Cities":"Paris   ",
"Publisher":"Roches",
"Years":1920,
"Fund":"BAL",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":2305.0,
"Authors":"Rabelais, Fran\u00e7ois",
"Title":"Pantagruel",
"Cities":"Paris",
"Publisher":"Roches",
"Years":1929,
"Fund":"BAL",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":2306.0,
"Authors":"Rabier, Elie",
"Title":"Le\u00e7ons de philosophie. I. Psychologie. Avec une appendice sur le r\u00f4le de la Philosophie dans l\u2019Education",
"Cities":"Paris  ",
"Publisher":"Hachette",
"Years":1919,
"Fund":"BTB Segn. 1898",
"Segni":"Intonso.",
"Category":"F "
},{
"Unnamed: 0":2307.0,
"Authors":"Rabier, Elie",
"Title":"Le\u00e7ons de philosophie. II. Logique",
"Cities":"Paris",
"Publisher":"Hachette",
"Years":1917,
"Fund":"BTB Segn. 1899",
"Segni":"Intonso.",
"Category":"F"
},{
"Unnamed: 0":2308.0,
"Authors":"Not found",
"Title":"Raccolta di voci e modi di dire inuso nella citt\u00e0 di Siena e nei suoi dintorni",
"Cities":"Siena  ",
"Publisher":"Accademia degli Intronati",
"Years":1944,
"Fund":"BTB Segn. Op. 25",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2309.0,
"Authors":"Not found",
"Title":"Racconti della Scapigliatura (1860-1910)",
"Cities":"Milanp",
"Publisher":"Bompiani",
"Years":1942,
"Fund":"BTB Segn. 633",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2310.0,
"Authors":"Not found",
"Title":"Racconti e novelle dell\u2019Otto cento",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1943,
"Fund":"BTB Segn. 851",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2311.0,
"Authors":"Not found",
"Title":"Racconti italiani 1967.",
"Cities":"Milano",
"Publisher":"Selezione dal Reader\u2019s Digest",
"Years":1967,
"Fund":"BTB Segn. 634",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2312.0,
"Authors":"Racine, Jean",
"Title":"Port Royal",
"Cities":"Roma",
"Publisher":"Einaudi",
"Years":1945,
"Fund":"BTB Segn. 1080",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":2313.0,
"Authors":"Racine, Jean",
"Title":"Th\u00e9\u00e2tre",
"Cities":"Paris",
"Publisher":"Flammarion",
"Years":1917,
"Fund":"BTB Segn. 1081",
"Segni":"Presente solo il II volume.",
"Category":"FL"
},{
"Unnamed: 0":2314.0,
"Authors":"Radet, Georges",
"Title":"Alessandro il Grande",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1942,
"Fund":"BTB Segn. 1487",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":2315.0,
"Authors":"Ramat, Raffaello",
"Title":"Morte dell\u2019adolescenza",
"Cities":"Ancona  ",
"Publisher":"All\u2019insegna del Conero",
"Years":1935,
"Fund":"BAC",
"Segni":"Dedica dell\u2019autore in data 24.6.1935.",
"Category":"IL"
},{
"Unnamed: 0":2316.0,
"Authors":"Ramat, Silvio",
"Title":"Montale",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1965,
"Fund":"BTB Segn. 866",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2317.0,
"Authors":"Ramat, Silvio",
"Title":"I se",
"Cities":"Roma",
"Publisher":"De Luca editore",
"Years":1966,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore in data 1966.",
"Category":"L"
},{
"Unnamed: 0":2318.0,
"Authors":"Ramorino, Felice",
"Title":"Mitologia classica illustrata ad uso delle scuole medie",
"Cities":"Milano  ",
"Publisher":"Hoepli",
"Years":1940,
"Fund":"BTB Segn. 128",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2319.0,
"Authors":"Ranieri, Antonio",
"Title":"Sette anni di sodalizio con Leopardi",
"Cities":"Milano",
"Publisher":"Gentile",
"Years":1944,
"Fund":"BTB Segn. 867",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2320.0,
"Authors":"Ranzoli, Cesare",
"Title":"Dizionario di scienze filosofiche",
"Cities":"Milano  ",
"Publisher":"Hoepli",
"Years":1916,
"Fund":"BTB Segn. 1970",
"Segni":null,
"Category":"D"
},{
"Unnamed: 0":2321.0,
"Authors":"Rapisardi, Mario",
"Title":"Lucifero",
"Cities":"Sesto San Giovanni  ",
"Publisher":"Madella",
"Years":1915,
"Fund":"BTB Segn. 635",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2322.0,
"Authors":"Raspail, Fran\u00e7ois Vincent",
"Title":"  Manuale della salute",
"Cities":"Milano  ",
"Publisher":null,
"Years":1862,
"Fund":null,
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2323.0,
"Authors":"Ravizza, Alessandrina",
"Title":"Sette anni di vita nella casa di lavoro. (Memorie inedite)",
"Cities":"Milano",
"Publisher":"Societ\u00e0 Umanitaria",
"Years":"s.d.",
"Fund":"BTB Segn. 636",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2324.0,
"Authors":"Ravizza, Filippo",
"Title":"Nuovo corso di lingua tedesca",
"Cities":"Milano  ",
"Publisher":"Treves",
"Years":1926,
"Fund":"BTB Segn. 2449",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2325.0,
"Authors":"Read, Herbert",
"Title":"Arte e alienazione: il ruolo dell\u2019artista nella societ\u00e0",
"Cities":"Milano",
"Publisher":"Mazzotta",
"Years":1968,
"Fund":"BAL",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":2326.0,
"Authors":"Read, Herbert",
"Title":"Scultura moderna",
"Cities":"Milano",
"Publisher":"Mazzotta",
"Years":1968,
"Fund":"BTB Segn. 2242",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":2327.0,
"Authors":"Real Academia espa\u00f1ola",
"Title":"Diccionario manual e ilustrado de la lengua espanola",
"Cities":"Madrid  ",
"Publisher":"Espasa-Calpe",
"Years":1927,
"Fund":null,
"Segni":null,
"Category":"GR"
},{
"Unnamed: 0":2328.0,
"Authors":"Reggiori, Ferdinando",
"Title":"La basilica di Sant\u2019Ambrogio a Milano",
"Cities":"Milano",
"Publisher":"Electa",
"Years":1945,
"Fund":"BTB Segn. 2277",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":2329.0,
"Authors":"Not found",
"Title":"Regia Parnassi",
"Cities":"Parma",
"Publisher":"Borsi",
"Years":1763,
"Fund":"BTB Segn. 2470",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":2330.0,
"Authors":"Not found",
"Title":"Regolamento del servizio in terno per le varie armi (esclusa quella dei carabinieri reali).",
"Cities":"Roma",
"Publisher":"Voghera",
"Years":1909,
"Fund":"BTB Segn. 2162-2163",
"Segni":null,
"Category":"M"
},{
"Unnamed: 0":2331.0,
"Authors":"Not found",
"Title":"Regolamento di disciplina militare.",
"Cities":"Roma",
"Publisher":"Voghera",
"Years":1907,
"Fund":"BAL",
"Segni":null,
"Category":"M"
},{
"Unnamed: 0":2332.0,
"Authors":"Not found",
"Title":"Regolamento di esercizi per la fanteria",
"Cities":"Roma",
"Publisher":"Voghera",
"Years":1914,
"Fund":"BTB Segn. 2165",
"Segni":"Nota di possesso autografa: \u00abCarlo Emilio Gadda, Duca di Sant\u2019Aquila. Campagna Austriaca 1915. Ponte di Legno (Valcamonica) 8 dicembre 1915\u00bb.",
"Category":"M"
},{
"Unnamed: 0":2333.0,
"Authors":"Remarque, Erich Maria",
"Title":"A l\u2019ouest rien de nouveau",
"Cities":"Paris",
"Publisher":"Stock",
"Years":1929,
"Fund":"BTB Segn. 1210",
"Segni":"Nota di possesso autografa in data 2.03.1931. Pieghe.",
"Category":"FL"
},{
"Unnamed: 0":2334.0,
"Authors":"R\u00e9musat, madame de (Claire Elisabeth Gravier de Vergennes detta)",
"Title":"Memorie",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1942,
"Fund":"BTB Segn. 1082",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":2335.0,
"Authors":"Renan, Ernest",
"Title":"Vita di Ges\u00f9",
"Cities":"Milano",
"Publisher":"Treves",
"Years":1931,
"Fund":"BTB Segn. 1083",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":2336.0,
"Authors":"Retz, Jean Fran\u00e7ois Paul",
"Title":"M\u00e8moires",
"Cities":"Paris",
"Publisher":"Gallimard",
"Years":1950,
"Fund":"BAL",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":2337.0,
"Authors":"Revelli, Paolo",
"Title":"Colombo",
"Cities":"Torino",
"Publisher":"UTET",
"Years":1941,
"Fund":"BTB Segn. 1547",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2338.0,
"Authors":"Revelli, Paolo",
"Title":"Il genovese",
"Cities":"Genova  ",
"Publisher":"Comitato Cittadino Celebrazioni Colombiane",
"Years":1951,
"Fund":"BTB Segn. 1548",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2339.0,
"Authors":"Not found",
"Title":"Le Rhin de Cologne jusqu\u2019\u00e0 Francfort",
"Cities":"Berlin",
"Publisher":"Goldschmidt",
"Years":1920,
"Fund":"BTB Segn. 2288",
"Segni":null,
"Category":"G "
},{
"Unnamed: 0":2340.0,
"Authors":"Ribot, Th\u00e9odule",
"Title":"La psychologie allemande contemporaine. Ecole exp\u00e9rimentale",
"Cities":"Paris",
"Publisher":"Cermer",
"Years":1879,
"Fund":"BTB Segn. 2000",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":2341.0,
"Authors":"Ribot, Th\u00e9odule",
"Title":"La psychologie anglaise",
"Cities":"Paris  ",
"Publisher":"Alcan",
"Years":1901,
"Fund":"BTB Segn. 1999",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":2342.0,
"Authors":"Richmond, Winifred V",
"Title":"Enciclopedia sessuale",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1943,
"Fund":"BTB Segn. 2095",
"Segni":null,
"Category":"D"
},{
"Unnamed: 0":2343.0,
"Authors":"Ridolfi, Roberto",
"Title":"Memorie di uno studioso",
"Cities":"Roma",
"Publisher":"Belardetti",
"Years":1956,
"Fund":"BTB Segn. 637",
"Segni":"Intonso.",
"Category":"L"
},{
"Unnamed: 0":2344.0,
"Authors":"Ridolfi, Roberto",
"Title":"Vita di Girolamo Savonarola",
"Cities":"Roma   ",
"Publisher":"Belardetti",
"Years":1952,
"Fund":"BTB Segn. 1549-1550",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2345.0,
"Authors":"Ridolfi, Roberto",
"Title":"Vita di Niccol\u00f2 Machiavelli",
"Cities":"Roma  ",
"Publisher":"Belardetti",
"Years":1954,
"Fund":"BTB Segn. 868",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2346.0,
"Authors":"Riggio Cinelli, Linda",
"Title":"Lettere commerciali e familiari",
"Cities":"Fi renze",
"Publisher":"Riggio",
"Years":1930,
"Fund":"BTB Segn. 2450",
"Segni":"Dedica dell\u2019autrice ad Adele Gadda Lehr.",
"Category":"L"
},{
"Unnamed: 0":2347.0,
"Authors":"Riggio Cinelli, Linda",
"Title":". A Short History of English Civilization and Literature",
"Cities":"Firenze  ",
"Publisher":"Carpigiani e Zipoli",
"Years":1926,
"Fund":"BTB Segn. 1343",
"Segni":"Dedica dell\u2019autrice ad Adele Gadda Lehr in data 10.1926. Postille.",
"Category":"L"
},{
"Unnamed: 0":2348.0,
"Authors":"Rigoni Stern, Mario",
"Title":"Il sergente nella neve",
"Cities":"Torino  ",
"Publisher":"Einaudi",
"Years":1964,
"Fund":"BTB Segn. 638",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2349.0,
"Authors":"Rigutini, Giuseppe",
"Title":"I neologismi buoni e cattivi",
"Cities":"Firenze",
"Publisher":"Barbera",
"Years":1969,
"Fund":"BTB Segn. 2451",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2350.0,
"Authors":"Rilke, Rainer Maria",
"Title":"Elegie duinesi",
"Cities":"Firenze",
"Publisher":"Parenti",
"Years":1937,
"Fund":"BTB Segn. 1212",
"Segni":null,
"Category":"GL"
},{
"Unnamed: 0":2351.0,
"Authors":"Rimbaud, Arthur",
"Title":"\u0152uvres compl\u00e8tes",
"Cities":"Paris  ",
"Publisher":"Gallimard",
"Years":1946,
"Fund":"BAL",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":2352.0,
"Authors":"Rimbaud, Arthur",
"Title":"Una stagione all\u2019inferno",
"Cities":"Milano  ",
"Publisher":"Longanesi",
"Years":1951,
"Fund":"BTB Segn. 1084",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":2353.0,
"Authors":"Not found",
"Title":"Il ritratto nella pittura lombarda dell\u2019Ottocento. ",
"Cities":"Milano",
"Publisher":"Ed. del Milione",
"Years":1953,
"Fund":"BTB Segn. 2243",
"Segni":"Dedica del curatore.",
"Category":"SA"
},{
"Unnamed: 0":2354.0,
"Authors":"Rivi\u00e8re, Jacques",
"Title":"Studi",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1945,
"Fund":"BTB Segn. 1146",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":2355.0,
"Authors":"Not found",
"Title":"La rivoluzione russa.",
"Cities":"Novara",
"Publisher":"Istituto geografico De Agostini",
"Years":1964,
"Fund":"BAL",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":2356.0,
"Authors":"Robecchi, Alessandro",
"Title":"Lomboartriti croniche",
"Cities":"Firenze  ",
"Publisher":"Vallecchi",
"Years":1942,
"Fund":"BTB Segn. 2086",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2357.0,
"Authors":"Robin, L\u00e9on",
"Title":"La th\u00e9orie platonicienne",
"Cities":"Paris  ",
"Publisher":"F\u00e9lix Alcan",
"Years":1908,
"Fund":"BTB Segn. 1971",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":2358.0,
"Authors":"Robiquet, Jean",
"Title":"La vie quotidienne au temps de la R\u00e9volution",
"Cities":"Paris",
"Publisher":"Hachette",
"Years":1938,
"Fund":"BTB Segn. 1691",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":2359.0,
"Authors":"Rodolico, Niccol\u00f2",
"Title":"Carlo Alberto 1843-1849.",
"Cities":"Firenze",
"Publisher":"Le Monnier",
"Years":1943,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore.",
"Category":"S"
},{
"Unnamed: 0":2360.0,
"Authors":"Rodolico, Niccol\u00f2",
"Title":"Il medioevo barbarico e il Rinascimento italiano",
"Cities":"Bologna  ",
"Publisher":"Zanichelli",
"Years":1917,
"Fund":"BTB Segn. 1488",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":2361.0,
"Authors":"Rodolico, Niccol\u00f2",
"Title":"Le societ\u00e0 antiche. Oriente Egitto Grecia Roma. Ad uso delle scuole normali",
"Cities":"Bologna  ",
"Publisher":"Zanichelli",
"Years":"s.d.",
"Fund":"BTB Segn. 1551",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":2362.0,
"Authors":"Rohlfs, Gerhard",
"Title":"Grammatica storica della lingua italiana e dei suoi dialetti",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1966,
"Fund":"BTB Segn. 2454",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2363.0,
"Authors":"Rolland, Romain",
"Title":"Printemps Romains (1889-90).",
"Cities":"Paris",
"Publisher":"Michel",
"Years":1954,
"Fund":"BTB Segn. 1085",
"Segni":"Dedica di Marie R. Rolland.",
"Category":"S"
},{
"Unnamed: 0":2364.0,
"Authors":"Rolland, Romain",
"Title":"Vita di Beethoven",
"Cities":"Milano  ",
"Publisher":"Rizzoli",
"Years":1949,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2365.0,
"Authors":"Rolland, Romain",
"Title":"Vita di Michelangelo",
"Cities":"Milano  ",
"Publisher":"Rizzoli",
"Years":1949,
"Fund":null,
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2366.0,
"Authors":"Rollone, Luigi",
"Title":"La provincia di Milano",
"Cities":"TorinoRoma-Milano-Firenze-Napoli",
"Publisher":"Paravia",
"Years":1905,
"Fund":"BTB Segn. 2294",
"Segni":"Intonso.",
"Category":"F"
},{
"Unnamed: 0":2367.0,
"Authors":"Romagnosi, Gian Domenico",
"Title":"Opuscoli filosofici",
"Cities":"Lanciano",
"Publisher":"Carabba",
"Years":1919,
"Fund":"BTB Segn. 1900",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":2368.0,
"Authors":"Romani, Felice",
"Title":"Norma",
"Cities":"Sesto San Giovanni  ",
"Publisher":"Barion",
"Years":1933,
"Fund":"BTB Segn. 1438",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2369.0,
"Authors":"Romani, Felice",
"Title":"La sonnambula. ",
"Cities":"Milano",
"Publisher":"ERTA",
"Years":1931,
"Fund":"BTB Segn. 1439",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2370.0,
"Authors":"Not found",
"Title":"Romanzi e racconti dell\u2019Ottocento",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1942,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2371.0,
"Authors":"Romeo, Nicol\u00f2",
"Title":"Sui triangoli con due bisettrici diseguali",
"Cities":"Bologna",
"Publisher":"Zanichelli",
"Years":1931,
"Fund":"BTB Segn. Op. 52",
"Segni":"Intonso.",
"Category":"T"
},{
"Unnamed: 0":2372.0,
"Authors":"Romussi, Carlo",
"Title":"Milano che sfugge",
"Cities":"Milano  ",
"Publisher":"Rechiedei",
"Years":1889,
"Fund":"BTB Segn. 2338",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2373.0,
"Authors":"Roncaglia, Aurelio",
"Title":"La Chanson de Roland. ",
"Cities":"Modena",
"Publisher":"Soc. Tip. Mod.",
"Years":1940,
"Fund":"BTB Segn. 974",
"Segni":"Nota di possesso autografa in data 22.01.1941.",
"Category":"L"
},{
"Unnamed: 0":2374.0,
"Authors":"Ronchi, Mario",
"Title":"Chi va al mulino s\u2019infarina.",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":"s.d.",
"Fund":"BTB Segn. 643",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2375.0,
"Authors":"Rosai, Ottone",
"Title":"Il libro di un teppista",
"Cities":"Firenze  ",
"Publisher":"Vallecchi",
"Years":1930,
"Fund":"BTB Segn. 639",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2376.0,
"Authors":"Rosai, Ottone",
"Title":"Via Toscanella",
"Cities":"Firenze  ",
"Publisher":"Vallecchi",
"Years":1930,
"Fund":"BTB Segn. 640",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2377.0,
"Authors":"Rosati, Salvatore",
"Title":"Storia della letteratura americana",
"Cities":"Torino",
"Publisher":"ERI",
"Years":1956,
"Fund":"BTB Segn. 1351",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":2378.0,
"Authors":"Rosato, Giuseppe",
"Title":"L\u2019acqua felice",
"Cities":"Milano  ",
"Publisher":"Schwarz",
"Years":1956,
"Fund":"BTB Segn. 641",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2379.0,
"Authors":"Roscioni, Gian Carlo",
"Title":"La disarmonia prestabilita: studio su                    Gadda",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1969,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2380.0,
"Authors":"Rosina, Tito",
"Title":"Noterelle dannunziane",
"Cities":"Genova  ",
"Publisher":"Sigla  Effe",
"Years":1958,
"Fund":"BTB Segn. 869",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":2381.0,
"Authors":"Rosina, Tito",
"Title":"Saggi dannunziani",
"Cities":"Genova ",
"Publisher":"Del Mastro",
"Years":1952,
"Fund":"BTB Segn. 870",
"Segni":"Dedica dell\u2019autrice.",
"Category":"IL"
},{
"Unnamed: 0":2382.0,
"Authors":"Rosselli, Aldo",
"Title":"Professione: mitomane",
"Cities":"Firenze  ",
"Publisher":"Vallecchi",
"Years":1971,
"Fund":"BTB Segn. 642",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2383.0,
"Authors":"Rossi, Gilberto",
"Title":"Mezzo contadino",
"Cities":"Venezia  ",
"Publisher":"Neri Pozza",
"Years":1952,
"Fund":"BTB Segn. 644",
"Segni":"Intonso.",
"Category":"IL"
},{
"Unnamed: 0":2384.0,
"Authors":"Rossi, Vittorio",
"Title":"Storia della letteratura italiana per uso dei licei",
"Cities":"Milano  ",
"Publisher":"Vallardi",
"Years":1940,
"Fund":"BTB Segn. 871-873",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2385.0,
"Authors":"Rostand, Jean",
"Title":"Lazzaro Spallanzani e le origini della biologia sperimentale",
"Cities":"Torino  ",
"Publisher":"Einaudi",
"Years":1963,
"Fund":"BTB Segn. 2087-2088",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2386.0,
"Authors":"Rotta, Paolo",
"Title":"Spinoza",
"Cities":"Milano",
"Publisher":"Athena",
"Years":1923,
"Fund":"BTB Segn. 1972",
"Segni":"Sottolineature.",
"Category":"F"
},{
"Unnamed: 0":2387.0,
"Authors":"Rouch\u00e9, Max",
"Title":"Herder pr\u00e9curseur de Darwin? ",
"Cities":"Paris",
"Publisher":"Les Belles Lettres",
"Years":1940,
"Fund":"BTB Segn. 1973",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":2388.0,
"Authors":"Rougemont, Denis de",
"Title":"Vivre en Am\u00e9rique",
"Cities":"Paris  ",
"Publisher":"Stock",
"Years":1947,
"Fund":"BTB Segn. 1086",
"Segni":"Dedica dell\u2019autore in data 29.1.53.",
"Category":"FL"
},{
"Unnamed: 0":2389.0,
"Authors":"Roujon, Jacques",
"Title":"Ce bon monsieur Danton",
"Cities":"Paris",
"Publisher":"Plon",
"Years":1929,
"Fund":"BTB Segn. 1147",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":2390.0,
"Authors":"Rousseau, Jean-Jacques",
"Title":"Les confessions",
"Cities":"Paris",
"Publisher":"Gallimard",
"Years":1931,
"Fund":"BAL",
"Segni":null,
"Category":"F "
},{
"Unnamed: 0":2391.0,
"Authors":"Rousseau, Jean-Jacques",
"Title":"Il contratto sociale",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1943,
"Fund":"BTB Segn. 1087",
"Segni":null,
"Category":"F "
},{
"Unnamed: 0":2392.0,
"Authors":"Rousseau, Jean-Jacques",
"Title":" Du contrat social ou principes de droit politique",
"Cities":"Paris",
"Publisher":"Flammarion",
"Years":"s.d.",
"Fund":"BTB Segn. 1088",
"Segni":"Postille.",
"Category":"F "
},{
"Unnamed: 0":2393.0,
"Authors":"Rousseau, Jean-Jacques",
"Title":" La nouvelle H\u00e9lo\u00efse.",
"Cities":"Paris",
"Publisher":"Didot",
"Years":"s.d.",
"Fund":"BTB Segn. 1089",
"Segni":"Nota di possesso autografa in data 02.1905.",
"Category":"F "
},{
"Unnamed: 0":2394.0,
"Authors":"Rousseau, Jean-Jacques",
"Title":"\u0152uvres compl\u00e8tes",
"Cities":"Bruxelles  ",
"Publisher":"Lejeune",
"Years":1828,
"Fund":"BTB Segn. 1090",
"Segni":"Presente solo il VI volume: Emile ou de l\u2019\u00e9ducation, libri III-IV: ivi, 1839.",
"Category":"F "
},{
"Unnamed: 0":2395.0,
"Authors":"Rousseau, Pierre",
"Title":"Storia dell\u2019atomo. La fisica del l\u2019atomo nella guerra e nella pace",
"Cities":"Roma",
"Publisher":"Casini",
"Years":1950,
"Fund":"BTB Segn. 2089",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":2396.0,
"Authors":"Roux, Onorato",
"Title":"Per diventar caporale. Manuale teoricopratico per i soldati delle armi di fanteria (linea, granatieri, bersaglieri, alpini) del genio e del corpo arconautico. Con le recenti varianti emanate dal Ministero della Guerra",
"Cities":"Milano",
"Publisher":"Trevisini",
"Years":1915,
"Fund":"BTB Segn. 2171",
"Segni":"Nota di possesso autografa in data 08.1915                   Edolo.",
"Category":"M"
},{
"Unnamed: 0":2397.0,
"Authors":"Roversi, Roberto",
"Title":"Ai tempi di re Gioachino",
"Cities":"Bologna",
"Publisher":"Palmaverde",
"Years":1952,
"Fund":"BTB Segn. 645",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":2398.0,
"Authors":"Rovetta, Gerolamo",
"Title":"La signorina",
"Cities":"Milano ",
"Publisher":"Baldini e Castoldi",
"Years":1912,
"Fund":"BTB Segn. 646",
"Segni":"Nota di possesso autografa di Enrico Gadda in data 25.01.1918 Gallarate.",
"Category":"IL"
},{
"Unnamed: 0":2399.0,
"Authors":"Royer, Louis Charles",
"Title":"L\u2019amour en Allemagne. Choses vues",
"Cities":"Paris",
"Publisher":"Les Editions de France",
"Years":1930,
"Fund":"BTB Segn. 1091",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":2400.0,
"Authors":"Rubagotti, Angelo",
"Title":"Giordano Bruno",
"Cities":"Roma",
"Publisher":"Dell\u2019Ara",
"Years":1888,
"Fund":"BTB Segn. 1974",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2401.0,
"Authors":"Not found",
"Title":"Rudolf Levy",
"Cities":"Firenze ",
"Publisher":" L\u2019Indiano Galleria d\u2019Arte",
"Years":1950,
"Fund":"BTB Segn. Op. 118",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2402.0,
"Authors":"Ruesch, Hans",
"Title":"Il numero uno",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1968,
"Fund":"BAL",
"Segni":null,
"Category":"GL"
},{
"Unnamed: 0":2403.0,
"Authors":"Ruesch, Hans",
"Title":"Il paese delle ombre lunghe",
"Cities":"Milano   ",
"Publisher":"Garzanti",
"Years":1968,
"Fund":"BAL",
"Segni":null,
"Category":"GL"
},{
"Unnamed: 0":2404.0,
"Authors":"Ruiz de Alarc\u00f3n, Juan",
"Title":"Teatro",
"Cities":"Madrid  ",
"Publisher":"Espasa-Calpe",
"Years":1937,
"Fund":"BTB Segn. 928",
"Segni":null,
"Category":"SL"
},{
"Unnamed: 0":2405.0,
"Authors":"Not found",
"Title":"Rules and Data on Pressure Pipelines",
"Cities":"Brescia",
"Publisher":"Tubi Togni",
"Years":1929,
"Fund":"BTB Segn. Op. 104",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":2406.0,
"Authors":"Runge, Enrico",
"Title":"La rinascita dell\u2019astrologia",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1951,
"Fund":"BAL",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":2407.0,
"Authors":"Rusconi, Antonio",
"Title":"Gli Ictimoli ed i Bessi nel Vercellese e nel Novarese",
"Cities":"Novara",
"Publisher":"Rusconi",
"Years":1877,
"Fund":"BTB Segn. Op. 53",
"Segni":"Nota di possesso autografa di Carlo Lehr.",
"Category":"GL"
},{
"Unnamed: 0":2408.0,
"Authors":"Rusconi, Antonio",
"Title":"Lodovico il Moro e sua cattura. Pagine di storia patria",
"Cities":"Novara  ",
"Publisher":"Rusconi",
"Years":1878,
"Fund":"BTB Segn. 1552",
"Segni":"Nota di possesso autografa di Carlo Lehr.",
"Category":"S"
},{
"Unnamed: 0":2409.0,
"Authors":"Rusconi, Antonio",
"Title":"Le origini novaresi. Parte I",
"Cities":"Novara",
"Publisher":"Rusconi",
"Years":1875,
"Fund":"BTB Segn. Op. 54",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":2410.0,
"Authors":"R\u00fcssel, Herbert Werner",
"Title":"Profilo d\u2019un umanesimo cristiano",
"Cities":"Roma",
"Publisher":"Einaudi",
"Years":1945,
"Fund":"BTB Segn. 1794",
"Segni":"Sottolineature e postille.",
"Category":"L"
},{
"Unnamed: 0":2411.0,
"Authors":"Russell, Bertrand",
"Title":"I principi della matematica",
"Cities":"Milano  ",
"Publisher":"Longanesi",
"Years":1951,
"Fund":"BTB Segn. 2090",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":2412.0,
"Authors":"Russell, Bertrand",
"Title":"I problemi della filosofia",
"Cities":"Milano",
"Publisher":"Sonzogno",
"Years":1922,
"Fund":"BTB Segn. 1901",
"Segni":"Postille.",
"Category":"T"
},{
"Unnamed: 0":2413.0,
"Authors":"Russell, Henry Norris",
"Title":"Il sistema solare",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1941,
"Fund":"BTB Segn. 2091",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":2414.0,
"Authors":"Russo, Carlo Ferdinand",
"Title":"Aristofane autore di teatro",
"Cities":"Firenze  ",
"Publisher":"Olschki",
"Years":1962,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2415.0,
"Authors":"Russo, Luigi",
"Title":"La critica letteraria contemporanea",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1967,
"Fund":"BTB Segn. 874",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2416.0,
"Authors":"Russo, Luigi",
"Title":"Machiavelli",
"Cities":"Bari  ",
"Publisher":"Laterza",
"Years":1966,
"Fund":"BTB Segn. 875",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2417.0,
"Authors":"Russo, Luigi",
"Title":"Personaggi dei Promessi Sposi",
"Cities":"Bari ",
"Publisher":"Laterza",
"Years":1965,
"Fund":"BTB Segn. 876",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2418.0,
"Authors":"Russo, Luigi",
"Title":"L\u2019Universit\u00e0 di Pisa e la situazione italiana ed europea",
"Cities":"Pisa-Roma",
"Publisher":"Vallerini",
"Years":1944,
"Fund":"BTB Segn. Op. 55",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2419.0,
"Authors":"Ruzante (Angelo Beolco)",
"Title":"L\u2019anconitana",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1970,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2420.0,
"Authors":"Ruzante (Angelo Beolco)",
"Title":"Due dialoghi",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1968,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2421.0,
"Authors":"Ruzante (Angelo Beolco)",
"Title":"La moscheta",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1970,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2422.0,
"Authors":"Ryan, Cornelius",
"Title":"L\u2019ultima battaglia",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1966,
"Fund":"BTB Segn. 1762",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2423.0,
"Authors":"Saba, Umberto",
"Title":"Preludio e canzonette",
"Cities":"Torino  ",
"Publisher":"Primo tempo",
"Years":1923,
"Fund":"BTB Segn. 647",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2424.0,
"Authors":"Sabart\u00e9s, Jaime",
"Title":"Picasso",
"Cities":"Milano",
"Publisher":"All\u2019insegna del pesce d\u2019oro",
"Years":1937,
"Fund":"BAL",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":2425.0,
"Authors":"Not found",
"Title":"Un sabotatore: Giorgio Lab\u00f2",
"Cities":"Milano",
"Publisher":"La Stampa Moderna",
"Years":1946,
"Fund":"BTB Segn. 1518",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2426.0,
"Authors":"Sacchetti, Francesco",
"Title":"Il libro delle trecento novelle",
"Cities":"Milano  ",
"Publisher":"Bompiani",
"Years":1946,
"Fund":"BTB Segn. 650",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2427.0,
"Authors":"Sacchetti, Francesco",
"Title":"Le novelle. Vol. II",
"Cities":"Firenze  ",
"Publisher":"Salani",
"Years":1925,
"Fund":"BTB Segn. 649",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2428.0,
"Authors":"Sacchetti, Francesco",
"Title":"Il trecentonovelle",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1946,
"Fund":"BTB Segn. 648",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2429.0,
"Authors":"Sachs, Maurice",
"Title":"Le Sabbat. Souvenirs d\u2019une jeunesse orageuse",
"Cities":"Nevers",
"Publisher":"Corr\u00e9a",
"Years":1947,
"Fund":"BTB Segn. 1092",
"Segni":"Nota di possesso autografa in data 1949.",
"Category":"L"
},{
"Unnamed: 0":2430.0,
"Authors":"Not found",
"Title":"La Sacra Bibbia.",
"Cities":"s.l.",
"Publisher":"s.n.",
"Years":1936,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2431.0,
"Authors":"Not found",
"Title":"La Sacra Bibbia.",
"Cities":"Firenze",
"Publisher":"Salani",
"Years":1943,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2432.0,
"Authors":"Not found",
"Title":"La Sacra Bibbia.",
"Cities":"Roma",
"Publisher":"Edizioni Paoline",
"Years":1964,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2433.0,
"Authors":"Not found",
"Title":"La Sacra Bibbia, che contiene il Vecchio e il Nuovo Testamento",
"Cities":"London",
"Publisher":"Watts",
"Years":1850,
"Fund":null,
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2434.0,
"Authors":"Not found",
"Title":"La Sacra Bibbia ossia l\u2019Antico e il Nuovo Testamento.",
"Cities":"Roma",
"Publisher":"Deposito sacre scritture",
"Years":1936,
"Fund":null,
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2435.0,
"Authors":"Sadler, Percy",
"Title":"Manuel de phrases fran\u00e7aises et anglaises \u00e0 l\u2019usage des classes \u00e9lementaires contenant de nombreux vocabulaires des mots les plus usit\u00e9s servis chacun de petites phrases servant d\u2019exercise. Accompagn\u00e9 de dialogues familiers",
"Cities":"Paris",
"Publisher":"Librairie Fran\u00e7aise",
"Years":1887,
"Fund":"BTB Segn. 2455",
"Segni":null,
"Category":"GR"
},{
"Unnamed: 0":2436.0,
"Authors":"Not found",
"Title":"Saffo poetessa di Lesbo.",
"Cities":"Roma  ",
"Publisher":"Anonima Romana Editoriale",
"Years":1934,
"Fund":"BTB Segn. Op. 5",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2437.0,
"Authors":"Saint-Exup\u00e9ry, Antoine de",
"Title":"Vol de nuit.",
"Cities":"Paris  ",
"Publisher":"NRF-Gallimard",
"Years":1931,
"Fund":"BTB Segn. 1095",
"Segni":"Intonso.",
"Category":"FL"
},{
"Unnamed: 0":2438.0,
"Authors":"Saint-Just, Louis-Antoine-L\u00e9on",
"Title":"Frammenti sulle istituzioni repubblicane. Seguito da testi inediti.",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1952,
"Fund":"BTB Segn. 1096",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":2439.0,
"Authors":"Saint-Simon, Claude-Henri de Rouvroy Comte de",
"Title":"La cour de Louis XIV",
"Cities":"Paris",
"Publisher":"Nelson",
"Years":"s.d.",
"Fund":"BTB Segn. 1097",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":2440.0,
"Authors":"Saint-Simon, Claude-Henri de Rouvroy Comte de",
"Title":" La cour du R\u00e9gent. ",
"Cities":"Paris",
"Publisher":"Cr\u00e8s",
"Years":"s.d.",
"Fund":"BTB Segn. 1098",
"Segni":"Postille.",
"Category":"S"
},{
"Unnamed: 0":2441.0,
"Authors":"Sainte-Beuve, Charles Augustin de",
"Title":"Ritratti",
"Cities":"Milano  ",
"Publisher":"Rizzoli",
"Years":1943,
"Fund":"BTB Segn. 1094",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":2442.0,
"Authors":"Sainte-Beuve, Charles Augustin de",
"Title":"Studio su Virgilio",
"Cities":"Bari",
"Publisher":"Laterza",
"Years":1939,
"Fund":"BTB Segn. 1093",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2443.0,
"Authors":"Saitta, Armando",
"Title":"Costituenti e costituzioni in Francia",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1952,
"Fund":"BTB Segn. 1692",
"Segni":"Parzialmente intonso.",
"Category":"S"
},{
"Unnamed: 0":2444.0,
"Authors":"Salas Barbadillo, Alonso Jeronimo de",
"Title":"Novelas. La hija de Celestina. La ingeniosa Elena.",
"Cities":"Strasbourg",
"Publisher":"Heitz",
"Years":"s.d.",
"Fund":"BTB Segn. 929",
"Segni":null,
"Category":"SL"
},{
"Unnamed: 0":2445.0,
"Authors":"Salimbene da Parma",
"Title":"La cronaca",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1964,
"Fund":"BTB Segn. 651",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2446.0,
"Authors":"Sallustio, Gaio Crispo",
"Title":"Sallustio",
"Cities":"Padova",
"Publisher":"Minerva",
"Years":1831,
"Fund":"BTB Segn. 74",
"Segni":"Nota di possesso Gadda 4.10.1921.",
"Category":"CL"
},{
"Unnamed: 0":2447.0,
"Authors":"Salmi, Mario",
"Title":"L\u2019abbazia di Pomposa",
"Cities":"Roma  ",
"Publisher":"Libreria dello Stato",
"Years":1950,
"Fund":"BTB Segn. 2295",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2448.0,
"Authors":"Salvatorelli, Luigi",
"Title":"Leggenda e realt\u00e0 di Napoleone",
"Cities":"Roma",
"Publisher":"De Silva",
"Years":1944,
"Fund":"BTB Segn. 1693",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":2449.0,
"Authors":"Salvatorelli, Luigi",
"Title":"Lineamenti di storia moderna recentissima (1919-1955)",
"Cities":"Firenze",
"Publisher":"Le Monnier",
"Years":1955,
"Fund":"BTB Segn. 1764",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":2450.0,
"Authors":"Salvatorelli, Luigi",
"Title":"Pensiero e azione del Risorgimento",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1944,
"Fund":"BTB Segn. 1553",
"Segni":"Pieghe.",
"Category":"S"
},{
"Unnamed: 0":2451.0,
"Authors":"Salvatorelli, Luigi",
"Title":"Il pensiero politico italiano dal 1700 al 1870",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1941,
"Fund":"BTB Segn. 1554",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":2452.0,
"Authors":"Salvatorelli, Luigi",
"Title":"Pio XI e la sua eredit\u00e0 pontificale",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1939,
"Fund":"BTB Segn. 1555",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":2453.0,
"Authors":"Salvatorelli, Luigi",
"Title":"Profilo della storia d\u2019Europa",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1942,
"Fund":"BTB Segn. 1765",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":2454.0,
"Authors":"Salvatorelli, Luigi",
"Title":"San Benedetto e l\u2019Italia del suo tempo",
"Cities":"Bari",
"Publisher":"Laterza",
"Years":1929,
"Fund":"BTB Segn. 1796",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":2455.0,
"Authors":"Salvatorelli, Luigi",
"Title":"Storia d\u2019Italia illustrata. III. L\u2019Italia medievale",
"Cities":"Milano  ",
"Publisher":"Mondadori",
"Years":"s.d.",
"Fund":"BTB Segn. 1568",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":2456.0,
"Authors":"Salvatorelli, Luigi",
"Title":"Storia d\u2019Italia illustrata. IV. L\u2019Italia comunale",
"Cities":"Milano  ",
"Publisher":"Mondadori",
"Years":1940,
"Fund":"BTB Segn. 1569",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":2457.0,
"Authors":"Salvatorelli, Luigi  \u2013 H\u00fchn, Eugen",
"Title":"La Bibbia",
"Cities":"Milano-Palermo  ",
"Publisher":"Sandron",
"Years":1915,
"Fund":"BTB Segn. 1770",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2458.0,
"Authors":"Salvemini, Gaetano \u2013 La Piana, Giorgio",
"Title":"La sorte dell\u2019Italia",
"Cities":"Roma-Firenze-Milano",
"Publisher":"Editrice Universitaria",
"Years":1945,
"Fund":"BTB Segn. 1556",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":2459.0,
"Authors":"Sanchez Canton, Francisco Javier",
"Title":"El Museo del Prado",
"Cities":"Madrid  ",
"Publisher":"Peninsular",
"Years":1951,
"Fund":"BTB Segn. 2380",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":2460.0,
"Authors":"Not found",
"Title":"Sancti Francisci regula anni 1223",
"Cities":"Roma",
"Publisher":"Edizioni di Storia e Letteratura,",
"Years":1950,
"Fund":"BTB Segn. Op. 46",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":2461.0,
"Authors":"Sandri, Giulio",
"Title":"Dizionario etimologicoscientifico diviso in due parti",
"Cities":"Verona  ",
"Publisher":"Societ\u00e0 tipografica",
"Years":1819,
"Fund":null,
"Segni":null,
"Category":"D"
},{
"Unnamed: 0":2462.0,
"Authors":"Sandry, G\u00e8o \u2013 Carr\u00e8re, Marcel",
"Title":"Dictionnaire de l\u2019Argot Moderne",
"Cities":"Paris",
"Publisher":"Dauphine",
"Years":1962,
"Fund":"BAL",
"Segni":"Foglio con appunti inserito.",
"Category":"D"
},{
"Unnamed: 0":2463.0,
"Authors":"Sanesi Tommaso",
"Title":"Vocabolario greco-italiano compilato ad uso delle scuole",
"Cities":"Pistoia",
"Publisher":"Fratelli Bracali",
"Years":1908,
"Fund":null,
"Segni":null,
"Category":"D"
},{
"Unnamed: 0":2464.0,
"Authors":"Not found",
"Title":"San Giorgio: Progetto per la ricostruzione delle zone distrutte in torno al Ponte Vecchio",
"Cities":"Firenze",
"Publisher":"Tip. L\u2019Impronta",
"Years":1946,
"Fund":"BTB Segn. Op. 98",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":2465.0,
"Authors":"Santangelo, Paolo Ettore",
"Title":"San Paolo",
"Cities":"Bari",
"Publisher":"Laterza",
"Years":1933,
"Fund":"BTB Segn. 1797",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2466.0,
"Authors":"Santarosa, Pietro (di)",
"Title":"Storia del tumulto dei Ciompi avvenuto in Firenze l\u2019anno 1378",
"Cities":"Torino",
"Publisher":"Pomba",
"Years":1843,
"Fund":"BAL",
"Segni":"Nota di possesso di Adele Gadda Lehr.",
"Category":"S"
},{
"Unnamed: 0":2467.0,
"Authors":"Santayana, George",
"Title":"Il pensiero americano e altri saggi.",
"Cities":"Milano  ",
"Publisher":"Bompiani",
"Years":1939,
"Fund":"BTB Segn. 1352",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":2468.0,
"Authors":"Santi, Piero",
"Title":"Diario (1943-1946)",
"Cities":"Venezia",
"Publisher":"Neri Pozza",
"Years":1950,
"Fund":"BTB Segn. 653",
"Segni":"Dedica dell\u2019autore in data 9.10.1950.",
"Category":"IL"
},{
"Unnamed: 0":2469.0,
"Authors":"Santi, Piero",
"Title":"Due di loro",
"Cities":"Firenze",
"Publisher":"Ca Bala",
"Years":1971,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":2470.0,
"Authors":"Santi, Piero",
"Title":"Libert\u00e0 condizionata",
"Cities":"Firenze ",
"Publisher":"Vallecchi",
"Years":1966,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore in data 9.5.1966.",
"Category":"IL"
},{
"Unnamed: 0":2471.0,
"Authors":"Santi, Piero",
"Title":"Ombre rosse",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1954,
"Fund":"BTB Segn. 654",
"Segni":"Dedica dell\u2019autore in data 13.7.1954.",
"Category":"IL"
},{
"Unnamed: 0":2472.0,
"Authors":"Santi, Piero",
"Title":"Tre storie brevi.",
"Cities":"Firenze",
"Publisher":"Il Fiore",
"Years":1945,
"Fund":"BTB Segn. 653",
"Segni":"Dedica dell\u2019autore in data 6.11.1945.",
"Category":"IL"
},{
"Unnamed: 0":2473.0,
"Authors":"Santini, Aldo",
"Title":"Breve curiosa storia del premio Viareggio",
"Cities":"Viareggio ",
"Publisher":"Il cavalluccio marino editore",
"Years":1961,
"Fund":"BAL",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":2474.0,
"Authors":"Not found",
"Title":"Il Santo Vangelo di nostro signore Ges\u00f9 Cristo e gli Atti degli Apostoli",
"Cities":"Alba  ",
"Publisher":"Pia societ\u00e0 San Paolo",
"Years":1925,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2475.0,
"Authors":"Sanvitale, Francesca",
"Title":"Il cuore borghese",
"Cities":"Firenze  ",
"Publisher":"Vallecchi",
"Years":1972,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2476.0,
"Authors":"Sapegno, Natalino",
"Title":"Compendio di storia della letteratura italiana",
"Cities":"Firenze ",
"Publisher":"Nuova Italia",
"Years":1959,
"Fund":"BTB Segn. 877-879",
"Segni":"Intonsi.",
"Category":"IL"
},{
"Unnamed: 0":2477.0,
"Authors":"Sapegno, Natalino",
"Title":"Il sentimento umanistico e la poesia del Poliziano",
"Cities":null,
"Publisher":null,
"Years":1581,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2478.0,
"Authors":"Sapienza, Goliarda",
"Title":"Lettera aperta",
"Cities":"Milano  ",
"Publisher":"Garzanti",
"Years":1967,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2479.0,
"Authors":"Sapori, Armando",
"Title":"Storia interna della compagnia dei Peruzzi",
"Cities":"Firenze",
"Publisher":"Olschki",
"Years":1935,
"Fund":"BTB Segn. Op. 57",
"Segni":"Dedica dell\u2019autore.",
"Category":"L"
},{
"Unnamed: 0":2480.0,
"Authors":"Not found",
"Title":"Sardegna.",
"Cities":"Milano",
"Publisher":"TCI",
"Years":1919,
"Fund":"BTB Segn. 2336",
"Segni":null,
"Category":"GR"
},{
"Unnamed: 0":2481.0,
"Authors":"Sarpi, Paolo",
"Title":"Storia degli Uscochi",
"Cities":"Milano",
"Publisher":"Bettoni",
"Years":1831,
"Fund":"BTB Segn. 1763",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":2482.0,
"Authors":"Sassetti, Filippo",
"Title":"Lettere indiane",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1942,
"Fund":"BTB Segn. 652",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2483.0,
"Authors":"Savinio, Alberto",
"Title":" Dico a te, Clio",
"Cities":"Roma ",
"Publisher":"Edizioni della Cometa",
"Years":1940,
"Fund":null,
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2484.0,
"Authors":"Savj-Lopez, Paolo",
"Title":"Le origini neolatine",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1920,
"Fund":"BTB Segn. 2054",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2485.0,
"Authors":"Sbarbaro, Camillo",
"Title":"Fuochi fatui",
"Cities":"Milano ",
"Publisher":"All\u2019insegna del pesce d\u2019oro",
"Years":1956,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2486.0,
"Authors":"Sbarbaro, Camillo",
"Title":"Pianissimo",
"Cities":"Venezia",
"Publisher":"Neri Pozza",
"Years":1954,
"Fund":"BTB Segn. 656",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2487.0,
"Authors":"Sbodio, Gaetano",
"Title":"Il duell del sur Panera.",
"Cities":"s.l.",
"Publisher":"s.n.",
"Years":"s.d.",
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2488.0,
"Authors":"Not found",
"Title":"Scaffaletto III: Teatro e musica. ",
"Cities":"Firenze",
"Publisher":"Sansoni Antiquariato",
"Years":"s.d.",
"Fund":"BTB Segn. Op. 15",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2489.0,
"Authors":"Not found",
"Title":"Scelta di poemi giocosi.",
"Cities":"Milano",
"Publisher":"Bettoni",
"Years":1833,
"Fund":"BTB Segn. 657",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":2490.0,
"Authors":"Schelling, Friedrich Wilhelm",
"Title":"Sistema dell\u2019idealismo trascendetale. Gentile",
"Cities":"Bari",
"Publisher":"Laterza",
"Years":1908,
"Fund":"BTB Segn. 1902",
"Segni":"Parzialmente intonso.",
"Category":"F"
},{
"Unnamed: 0":2491.0,
"Authors":"Schelsky, Helmut",
"Title":"Il sesso e la societ\u00e0.",
"Cities":"Milano  ",
"Publisher":"Garzanti",
"Years":1960,
"Fund":"BTB Segn. 2092",
"Segni":null,
"Category":"P"
},{
"Unnamed: 0":2492.0,
"Authors":"Schiaffini, Alfredo",
"Title":"I mille anni della lingua italiana",
"Cities":"Milano",
"Publisher":"All\u2019insegna del pesce d\u2019oro",
"Years":1961,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2493.0,
"Authors":"Schiarini, Pompilio",
"Title":"L\u2019offensiva austriaca nel Trentino",
"Cities":"Roma",
"Publisher":"Libreria del Littorio",
"Years":1928,
"Fund":"BTB Segn. 1557",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":2494.0,
"Authors":"Schiller, Friedrich",
"Title":"Guglielmo Tell.",
"Cities":"Treviglio",
"Publisher":"Tipografia sociale editrice",
"Years":"s.d.",
"Fund":"BTB Segn. 1214",
"Segni":"Parzialmente intonso.",
"Category":"GL"
},{
"Unnamed: 0":2495.0,
"Authors":"Schiller, Friedrich",
"Title":"Maria Stuart",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1913,
"Fund":"BAL",
"Segni":null,
"Category":"GL"
},{
"Unnamed: 0":2496.0,
"Authors":"Schiller, Friedrich",
"Title":"Il visionario; Ossiano; Memorie del conte . ",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1942,
"Fund":"BTB Segn. 1316",
"Segni":null,
"Category":"GL"
},{
"Unnamed: 0":2497.0,
"Authors":"Schlegel, Friedrich von",
"Title":"Storia della letteratura antica e moderna",
"Cities":"Milano  ",
"Publisher":"Dalla Societ\u00e0 Tipografica de\u2019 Classici Italiani",
"Years":1857,
"Fund":"BTB Segn. 1215",
"Segni":"Nota di possesso autografa di Adele Gadda Lehr. Sottolineature e postille di C.E. Gadda.",
"Category":"L"
},{
"Unnamed: 0":2498.0,
"Authors":"Schleiden, Matthias Jakob",
"Title":"Gl\u2019israeliti in rapporto alla scienza nel Medioevo",
"Cities":"Milano",
"Publisher":"Lombardi",
"Years":1878,
"Fund":"BTB Segn. 1798",
"Segni":"Invio ad Adele Gadda Lehr.",
"Category":"L"
},{
"Unnamed: 0":2499.0,
"Authors":"Schleiermacher, Friedrich Daniel Ernst",
"Title":"Monologhi",
"Cities":"Lanciano",
"Publisher":"Carabba",
"Years":1919,
"Fund":"BTB Segn. 1904",
"Segni":null,
"Category":"GL"
},{
"Unnamed: 0":2500.0,
"Authors":"Schmitz, Edmond \u2013 Jullien, Charles Edouard \u2013 Lorentz, Eric",
"Title":" Nouveau manuel complet de l\u2019ing\u00e9nieur civil ou Trait\u00e9 sur l\u2019application directe des sciences aux arts et manufactures",
"Cities":"Paris  ",
"Publisher":"Librairie Encyclop\u00e9dique Roret",
"Years":1845,
"Fund":"BTB Segn. 2055-2056",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":2501.0,
"Authors":"Schopenhauer, Arthur",
"Title":"Frammenti di storia della filosofia.",
"Cities":"Milano",
"Publisher":"Athena",
"Years":"s.d.",
"Fund":"BTB Segn. 1575",
"Segni":"Parzialmente intonso.",
"Category":"F"
},{
"Unnamed: 0":2502.0,
"Authors":"Schopenhauer, Arthur",
"Title":"La quadruplice ragione del principio di ragion sufficiente.",
"Cities":"Lanciano",
"Publisher":"Carabba",
"Years":"s.d.",
"Fund":"BTM",
"Segni":"Sottolineature e postille.",
"Category":"F"
},{
"Unnamed: 0":2503.0,
"Authors":"Schopenhauer, Arthur",
"Title":"Schopenhauer",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1941,
"Fund":"BTB Segn. 1959",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":2504.0,
"Authors":"] Schuchert, Charles \u2013 Dunbar,\nCarl O.",
"Title":"Outlines of Historical Geology",
"Cities":"Madison  ",
"Publisher":"United States Armed Forces Institute",
"Years":1944,
"Fund":"BTB Segn. 2133",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":2505.0,
"Authors":"Not found",
"Title":"Schul und ReiseTaschenW\u00f6rterbuch der italienischen und deutschen Sprache",
"Cities":"Liepzig  ",
"Publisher":"Tauchnitz",
"Years":"s.d.",
"Fund":"BTB Segn. 2465",
"Segni":"Nota di possesso autografa in data 14.07.1909.",
"Category":"D"
},{
"Unnamed: 0":2506.0,
"Authors":"Schultz, Ferdinand",
"Title":"Piccola grammatica latina",
"Cities":"Tornio",
"Publisher":"Einaudi",
"Years":1903,
"Fund":null,
"Segni":null,
"Category":"GR"
},{
"Unnamed: 0":2507.0,
"Authors":"Schumann, Robert",
"Title":"La musica romantica",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1942,
"Fund":"BTB Segn. 1434",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":2508.0,
"Authors":"Sciaccaluga, Giuseppe",
"Title":"Commemorazione di Camillo Corsanego tenuta in Genova il 14 giugno 1964",
"Cities":"Bari  ",
"Publisher":"Laterza",
"Years":1964,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2509.0,
"Authors":"Sciascia, Leonardo",
"Title":"Le parrocchie di Regalpetra",
"Cities":"Milano",
"Publisher":"Laterza",
"Years":1956,
"Fund":"BTB Segn. 658",
"Segni":"Dedica dell\u2019autore in data 6.12.1956.",
"Category":"L"
},{
"Unnamed: 0":2510.0,
"Authors":"Scillacio, Nicol\u00f2",
"Title":"L\u2019opuscolo De Insulis nuper inventis",
"Cities":"Milano",
"Publisher":"Cogliati",
"Years":1901,
"Fund":"BTB Segn. Op. 97",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2511.0,
"Authors":"Scimei, Futabatei",
"Title":"Mediocrit\u00e0",
"Cities":"Torino  ",
"Publisher":"Einaudi",
"Years":1941,
"Fund":"BTB Segn. 1405",
"Segni":"Intonso.",
"Category":"IL"
},{
"Unnamed: 0":2512.0,
"Authors":"Scipione (Gino Bonichi)",
"Title":"Le civette gridano",
"Cities":"Milano  ",
"Publisher":"All\u2019insegna del pesce d\u2019oro",
"Years":1938,
"Fund":"BAL",
"Segni":"Biglietto omaggio di Giovanni Scheiwiller.",
"Category":"IL"
},{
"Unnamed: 0":2513.0,
"Authors":"Scobel, Albert",
"Title":"Andrees allgemeiner Handatlas. Jubil\u00e4umsausgabe",
"Cities":"Leipzig  ",
"Publisher":"Velhagen e Klasing",
"Years":1907,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2514.0,
"Authors":"Scotti, Pietro",
"Title":"Etnologia",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1941,
"Fund":"BTB Segn. 2093",
"Segni":"Parzialmente intonso.",
"Category":"V"
},{
"Unnamed: 0":2515.0,
"Authors":"Not found",
"Title":"Scrittori latini cristiani. ",
"Cities":"Firenze  ",
"Publisher":"Vallecchi",
"Years":1941,
"Fund":"BTB Segn. 118",
"Segni":"Postille.",
"Category":"CL"
},{
"Unnamed: 0":2516.0,
"Authors":"Not found",
"Title":"Sculture di Alberto Sani. Disegni di Carlotta De Jurco",
"Cities":"Firenze",
"Publisher":"s.n.",
"Years":1949,
"Fund":"BTB Segn. Op. 117",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":2517.0,
"Authors":"Not found",
"Title":"Sculture italiane di tutti i tempi",
"Cities":"Bergamo  ",
"Publisher":"Istituto italiano di arti grafiche",
"Years":1915,
"Fund":"BAL",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":2518.0,
"Authors":"Not found",
"Title":"Scuola professionale macellai: lezioni del primo e del secondo corso. ",
"Cities":"Milano",
"Publisher":"C.M.M",
"Years":"s.d.",
"Fund":"BTB Segn. Op. 58-59",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":2519.0,
"Authors":"Not found",
"Title":"Un secolo di prosa. Panorama della prosa italiana dal 1850 ad oggi.",
"Cities":"Torino",
"Publisher":"Petrini",
"Years":1959,
"Fund":"BTB Segn. 855",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2520.0,
"Authors":"Segre, Cesare",
"Title":"La bilancetta filologica",
"Cities":"Genova  ",
"Publisher":"Itinerari",
"Years":1960,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":2521.0,
"Authors":"S\u00e9gur, Philippe-Paul",
"Title":"Storia di Napoleone e della Grande armata durante l\u2019anno 1812",
"Cities":"Milano",
"Publisher":"Rizzolil",
"Years":1950,
"Fund":"BTB Segn. 1694-1695",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":2522.0,
"Authors":"Sellitti, Gabriele",
"Title":"Pecch\u00e8?  ",
"Cities":null,
"Publisher":null,
"Years":null,
"Fund":"BTB Segn. Op. 99",
"Segni":"Con lettera dell\u2019autore a Gadda in data 9.1963 Salerno.",
"Category":"IL"
},{
"Unnamed: 0":2523.0,
"Authors":"Sellitti, Gabriele",
"Title":"Scrivere bene e scrivere male. Dattiloscritto",
"Cities":null,
"Publisher":null,
"Years":null,
"Fund":"BTB Segn. Op. 101",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2524.0,
"Authors":"Semenza, Carlo",
"Title":"Un caso caratteristico nella costruzione di grandi dighe",
"Cities":"Milano ",
"Publisher":"Societ\u00e0 Editrice Riviste Industrie Elettriche",
"Years":1940,
"Fund":"BTB Segn. Op. 119",
"Segni":"Dedica dell\u2019autore.",
"Category":"T"
},{
"Unnamed: 0":2525.0,
"Authors":"Seneca, Lucio Anneo",
"Title":"Opere morali.",
"Cities":"Pascal",
"Publisher":"Milano",
"Years":"s.d.",
"Fund":"BTB Segn. 1903",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":2526.0,
"Authors":"Senofonte",
"Title":"Anabasi e Ciropedia",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1962,
"Fund":"BAL",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":2527.0,
"Authors":"Serao, Matilde",
"Title":"I capelli di Sansone. ",
"Cities":"Firenze",
"Publisher":"Quattrini.",
"Years":1914,
"Fund":"BTB Segn. 659",
"Segni":"Nota di possesso autografa di Enrico Gadda in data 18.08.1917.",
"Category":"IL"
},{
"Unnamed: 0":2528.0,
"Authors":"Sereni, Vittorio",
"Title":"Diario d\u2019Algeria",
"Cities":"Firenze  ",
"Publisher":"Vallecchi",
"Years":1947,
"Fund":"BTB Segn. 661",
"Segni":"Dedica dell\u2019autore in data 5.1947.",
"Category":"IL"
},{
"Unnamed: 0":2529.0,
"Authors":"Sereni, Vittorio",
"Title":"Poesie",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1942,
"Fund":"BTB Segn. 660",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2530.0,
"Authors":"Serini, Paolo",
"Title":"Pascal",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1942,
"Fund":"BTB Segn. 661",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":2531.0,
"Authors":"Sermonti, Vittorio",
"Title":"La bambina Europa",
"Cities":"Firenze  ",
"Publisher":"Sansoni",
"Years":1954,
"Fund":"BTB Segn. 662",
"Segni":"Dedica dell\u2019autore in data 5.1954.",
"Category":"IL"
},{
"Unnamed: 0":2532.0,
"Authors":"Sermonti, Vittorio",
"Title":"Novella storica",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1968,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore in data 19.5.1968.",
"Category":"IL"
},{
"Unnamed: 0":2533.0,
"Authors":"Seroni, Adriano",
"Title":"Gadda",
"Cities":"Firenze",
"Publisher":"La Nuova Italia",
"Years":1969,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2534.0,
"Authors":"Serra, Renato",
"Title":"Scritti critici",
"Cities":"Roma ",
"Publisher":"La Voce Societ\u00e0 Anonima Editrice",
"Years":1923,
"Fund":"BTB Segn. 880",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2535.0,
"Authors":"Serra, Renato",
"Title":"Scritti inediti",
"Cities":"Roma",
"Publisher":"La Voce Societ\u00e0 Anonima Editrice",
"Years":1923,
"Fund":"BTB Segn. 881",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2536.0,
"Authors":"Serravalli, Luigi",
"Title":"42 poesie",
"Cities":"Bolzano  ",
"Publisher":"Centro di cultua  dell\u2019Alto Adige",
"Years":1963,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2537.0,
"Authors":"Serret, Joseph Alfred",
"Title":"Trattato di trigonometria",
"Cities":"Firenze",
"Publisher":"Le Monnier",
"Years":1922,
"Fund":"BTB Segn. 2132",
"Segni":"Nota di possesso autografa in data 1924 Milano. Postille",
"Category":"T"
},{
"Unnamed: 0":2538.0,
"Authors":"Not found",
"Title":"Servizio in guerra. Parte I. Servizio delle truppe",
"Cities":"Roma  ",
"Publisher":"Voghera",
"Years":"s.d.",
"Fund":"BTB Segn. 2164",
"Segni":null,
"Category":"M"
},{
"Unnamed: 0":2539.0,
"Authors":"Sessa, Giuseppe",
"Title":"  Dottrina popolare in quattro lingue (italiana, francese, Inglese, tedesca): espressioni famigliari e motti popolari; frasi commerciali; proverbi",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1891,
"Fund":null,
"Segni":null,
"Category":"GR"
},{
"Unnamed: 0":2540.0,
"Authors":"Not found",
"Title":"Sette sculture dal sec. V a.C. al sec. XV d.C.: opere esposte nelle mostre organizzate dal Centro Studi Piero della Francesca dal 1956 al 1971",
"Cities":"Milano",
"Publisher":"Esperia",
"Years":1971,
"Fund":"BTB Segn. Op. 126",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":2541.0,
"Authors":"Settembrini, Luigi",
"Title":"Ricordanze della mia vita.",
"Cities":"Napoli",
"Publisher":"Morano",
"Years":1907,
"Fund":"BTB Segn. 663",
"Segni":"Sottolineature.",
"Category":"IL"
},{
"Unnamed: 0":2542.0,
"Authors":"Shakespeare, William",
"Title":"Amleto",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1927,
"Fund":"BTB Segn. 1300",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":2543.0,
"Authors":"Shakespeare, William",
"Title":"Amleto",
"Cities":"Milano",
"Publisher":"Rizzoli",
"Years":1951,
"Fund":"BTB Segn. 1307",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":2544.0,
"Authors":"Shakespeare, William",
"Title":"The Complete Works. ",
"Cities":"Oxford  ",
"Publisher":"University Press",
"Years":1935,
"Fund":"BTB Segn. 1298",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":2545.0,
"Authors":"Shakespeare, William",
"Title":" Giulio Cesare.",
"Cities":"s.l.",
"Publisher":"s.n.",
"Years":"s.d.",
"Fund":"BAL",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":2546.0,
"Authors":"Shakespeare, William",
"Title":"Giulio Cesare",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1924,
"Fund":"BTB Segn. 1301",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":2547.0,
"Authors":"Shakespeare, William",
"Title":" Hamlet.",
"Cities":"London",
"Publisher":"J.M. Dent & Sons",
"Years":1919,
"Fund":"BTM",
"Segni":"Timbro in gomma al frontespizio: Mitchell\u2019s 580 Cangallo 578 Buenos Aires. Sotto lineature e postille.",
"Category":"EL"
},{
"Unnamed: 0":2548.0,
"Authors":"Shakespeare, William",
"Title":"Macbeth",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1924,
"Fund":"BTB Segn. 1302",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":2549.0,
"Authors":"Shakespeare, William",
"Title":"Macbeth",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1952,
"Fund":"BTB Segn. 1297",
"Segni":"Intonso.",
"Category":"EL"
},{
"Unnamed: 0":2550.0,
"Authors":"Shakespeare, William",
"Title":"La notte dell\u2019Epifania o Quel che volete",
"Cities":"Firenze  ",
"Publisher":"Sansoni",
"Years":1934,
"Fund":"BTB Segn. 1306",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":2551.0,
"Authors":"Shakespeare, William",
"Title":"Re Enrico VI. Con tutt\u2019intera la contesa fra le due famiglie di Lancaster e York",
"Cities":"Milano",
"Publisher":"Rizzoli",
"Years":1955,
"Fund":"BTB Segn. 1308",
"Segni":"Dedica del traduttore in data 5.1957.",
"Category":"EL"
},{
"Unnamed: 0":2552.0,
"Authors":"Shakespeare, William",
"Title":"Sogno di una notte d\u2019estate",
"Cities":"Firenze  ",
"Publisher":"Sansoni",
"Years":1934,
"Fund":"BTB Segn. 1303",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":2553.0,
"Authors":"Shakespeare, William",
"Title":"I sonetti",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1946,
"Fund":"BTB Segn. 1294",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":2554.0,
"Authors":"Shakespeare, William",
"Title":"Sonetti",
"Cities":"Torino  Einaudi",
"Publisher":"Einaudi",
"Years":1952,
"Fund":"BTB Segn. 1296",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":2555.0,
"Authors":"Shakespeare, William",
"Title":"Sonetti.",
"Cities":"Torino  ",
"Publisher":"Einaudi",
"Years":1966,
"Fund":"BTB Segn. 1295",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":2556.0,
"Authors":"Shakespeare, William",
"Title":"Teatro",
"Cities":"Firenze  ",
"Publisher":"Sansoni",
"Years":1943,
"Fund":"BTB Segn. 1291-1293",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":2557.0,
"Authors":"Shakespeare, William",
"Title":"Teatro. Introduzione di G. Melchiori",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1964,
"Fund":"BTB Segn. 1299",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":2558.0,
"Authors":"Shakespeare, William",
"Title":" La tempesta. ",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1933,
"Fund":"BTB Segn. 1304",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":2559.0,
"Authors":"Shakespeare, William",
"Title":"Th\u00e9\u00e2tre complet",
"Cities":"Paris  ",
"Publisher":"Gallimard",
"Years":1950,
"Fund":"BAL",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":2560.0,
"Authors":"Shakespeare, William",
"Title":"Troilo e Cressida",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1940,
"Fund":"BTB Segn. 1305",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":2561.0,
"Authors":"Shaw, George Bernard",
"Title":"Santa Giovanna.",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1949,
"Fund":"BTB Segn. 1309",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":2562.0,
"Authors":"Shelley, Percy Bysshe",
"Title":"La difesa della poesia",
"Cities":"Lanciano",
"Publisher":"Carabba",
"Years":1933,
"Fund":"BTB Segn. 1310",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":2563.0,
"Authors":"Shelley, Percy Bysshe",
"Title":" Liriche e frammenti",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1939,
"Fund":"BTB Segn. 1311",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":2564.0,
"Authors":"Shelley, Percy Bysshe",
"Title":"Prometheus Unbound",
"Cities":"London  ",
"Publisher":"Dent",
"Years":1898,
"Fund":"BTB Segn. 1312",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":2565.0,
"Authors":"Shikibu, Murasaki",
"Title":"Storia di Genji il principe splendente",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1957,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2566.0,
"Authors":"Not found",
"Title":"SIAE 1882\/1972",
"Cities":"Roma",
"Publisher":"SIAE",
"Years":1972,
"Fund":"BTB Segn. 2399",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":2567.0,
"Authors":"Sichirollo, Angelo",
"Title":"Garibaldi e i Mille da Quarto al Volturno",
"Cities":"Milano",
"Publisher":"Signorelli",
"Years":1910,
"Fund":"BTB Segn. Op. 60",
"Segni":"Nota di possesso autografa di Enrico Gadda in data 11.05.1910.",
"Category":"S"
},{
"Unnamed: 0":2568.0,
"Authors":"Not found",
"Title":"Sicilia",
"Cities":"Milano",
"Publisher":"TCI",
"Years":1919,
"Fund":"BTB Segn. 2337",
"Segni":null,
"Category":"G "
},{
"Unnamed: 0":2569.0,
"Authors":"Siciliano, Enzo",
"Title":"Autobiografia letteraria",
"Cities":"Milano  ",
"Publisher":"Garzanti",
"Years":1970,
"Fund":"BTB Segn. 665",
"Segni":"Dedica dell\u2019autore in data 27.3.1970. Parzialmente intonso.",
"Category":"IL"
},{
"Unnamed: 0":2570.0,
"Authors":"Siciliano, Enzo",
"Title":"La coppia",
"Cities":"Milano",
"Publisher":"Feltrinelli",
"Years":1966,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":2571.0,
"Authors":"Siciliano, Enzo",
"Title":"Dietro di me",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1971,
"Fund":"BTB Segn. 666",
"Segni":"Dedica dell\u2019autore in data 26.3.1971.",
"Category":"IL"
},{
"Unnamed: 0":2572.0,
"Authors":"Siciliano, Enzo",
"Title":"Rosa (pazza e disperata)",
"Cities":"Milano  ",
"Publisher":"Garzanti",
"Years":1973,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore in data 2.2.1973.",
"Category":"IL"
},{
"Unnamed: 0":2573.0,
"Authors":"Siciliano, Italo",
"Title":"Racine. La vita e le opere",
"Cities":"Padova",
"Publisher":"CEDAM",
"Years":1950,
"Fund":"BTB Segn. 1148",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2574.0,
"Authors":"Siebeck, Hermann",
"Title":"Aristotele",
"Cities":"Milano-Palermo-Napoli",
"Publisher":"Sandron",
"Years":"s.d.",
"Fund":"BTB Segn. 1977",
"Segni":"Sottolineature.",
"Category":"F"
},{
"Unnamed: 0":2575.0,
"Authors":"Siebzehner Vivanti, Giorgio",
"Title":"Dizionario della Divina Commedia",
"Cities":"Milano",
"Publisher":"Feltrinelli",
"Years":1965,
"Fund":"BAL",
"Segni":"Segnalibro.",
"Category":"IL"
},{
"Unnamed: 0":2576.0,
"Authors":"Sienkiewicz, Enrico",
"Title":"Quo vadis",
"Cities":"Milano  ",
"Publisher":"Bacchini",
"Years":1903,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2577.0,
"Authors":"Signorini, Telemaco",
"Title":"Caricaturisti e caricaturati al caff\u00e8 Michelangiolo. ",
"Cities":"Firenze ",
"Publisher":"Le Monnier",
"Years":1952,
"Fund":"BTB Segn. 2193",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":2578.0,
"Authors":"Silva, Pietro",
"Title":"Io difendo la monarchia",
"Cities":"Roma  ",
"Publisher":"De Fonseca",
"Years":1946,
"Fund":"BTB Segn. 1558",
"Segni":"Intonso.",
"Category":"IL"
},{
"Unnamed: 0":2579.0,
"Authors":"Silvestri, Mario",
"Title":"Isonzo 1917",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1965,
"Fund":"BTB Segn. 1559",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2580.0,
"Authors":"Simenon, Georges",
"Title":"L\u2019osteria dei due soldi",
"Cities":"Milano  Mon dadori",
"Publisher":"Isonzo",
"Years":1932,
"Fund":"BAL",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":2581.0,
"Authors":"Simeoni, Luigi",
"Title":"Verona",
"Cities":"Verona",
"Publisher":"Mondadori",
"Years":1913,
"Fund":"BTB Segn. 2296",
"Segni":"Nota di possesso autografa.",
"Category":"G"
},{
"Unnamed: 0":2582.0,
"Authors":"Simonet, Francisco Javier",
"Title":"Historia de los Moz\u00e1rabes de Espa\u00f1a deducida de los mejores y m\u00e1s aut\u00e9nticos testimonios de los escritores cristianos y arabes",
"Cities":"Madrid",
"Publisher":"Tello",
"Years":1897,
"Fund":"BTB Segn. 1589",
"Segni":"Parzialmente intonso.",
"Category":"S"
},{
"Unnamed: 0":2583.0,
"Authors":"Sinigaglia, Sandro",
"Title":"Il flauto e la bricolla",
"Cities":"Firenze  ",
"Publisher":"Sansoni",
"Years":1954,
"Fund":"BTB Segn. 667",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2584.0,
"Authors":"Sinisgalli, Leonardo",
"Title":"Campi Elisi",
"Cities":"Milano",
"Publisher":"All\u2019insegna dl  pesce d\u2019oro",
"Years":1939,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2585.0,
"Authors":"Sinisgalli, Leonardo",
"Title":"Campi Elisi",
"Cities":"Roma",
"Publisher":"Edizioni della Cometa",
"Years":1941,
"Fund":"BTB Segn. 668",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2586.0,
"Authors":"Sirchio, Giuseppe",
"Title":"Inno alla vita",
"Cities":"Milano",
"Publisher":"Schwarz",
"Years":1957,
"Fund":"BTB Segn. 669",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2587.0,
"Authors":"Sirovich, C.",
"Title":". Les conduites forc\u00e9es pour la plus haute chute du monde. ",
"Cities":"s.l.",
"Publisher":"L\u2019elettrotecnica",
"Years":1952,
"Fund":"BTB Segn. Op. 102",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":2588.0,
"Authors":"Smith, William",
"Title":"Storia greca. ",
"Cities":"s.l.",
"Publisher":"s.n.",
"Years":"s.n.",
"Fund":"BTB Segn. 1489",
"Segni":"Nota di possesso autografa di Adele Gadda Lehr.",
"Category":"S"
},{
"Unnamed: 0":2589.0,
"Authors":"Soavi, Giorgio",
"Title":"23 poesie",
"Cities":"Milano ",
"Publisher":"All\u2019insegna del pesce d\u2019oro",
"Years":1947,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2590.0,
"Authors":"Soavi, Giorgio",
"Title":"Le spalle coperte",
"Cities":"Venezia ",
"Publisher":"Neri Pozza",
"Years":1951,
"Fund":"BTB Segn. 670",
"Segni":"Dedica dell\u2019autore in data 11.1951.",
"Category":"IL"
},{
"Unnamed: 0":2591.0,
"Authors":"Not found",
"Title":"Societ\u00e0 Edison. Assemblea straordinaria del 18 settembre 1942",
"Cities":"Milano",
"Publisher":"Tip. Pizzi",
"Years":1942,
"Fund":"BTB Segn. Op. 72",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":2592.0,
"Authors":"Not found",
"Title":"Societ\u00e0 Geologica Italiana. Guida alle escursioni",
"Cities":"Milano-Como-Bergamo ",
"Publisher":"Societ\u00e0 Geologica Italiana",
"Years":1925,
"Fund":"BTB Segn. 2297",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":2593.0,
"Authors":"Soffici, Ardengo",
"Title":"Giornale di bordo",
"Cities":"Firenze  ",
"Publisher":"Vallecchi",
"Years":1948,
"Fund":"BTB Segn. 671",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2594.0,
"Authors":"Soffici, Ardengo",
"Title":"L\u2019uva e la croce",
"Cities":"Firenze  ",
"Publisher":"Vallecchi",
"Years":1951,
"Fund":"BTB Segn. 672",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2595.0,
"Authors":"Not found",
"Title":"I Sofisti: frammenti e testimonianze",
"Cities":"Bari",
"Publisher":"Laterza",
"Years":1923,
"Fund":"BTB Segn. 1905",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":2596.0,
"Authors":"Sofocle",
"Title":"Antigone.",
"Cities":"Torino",
"Publisher":"Loescher",
"Years":1914,
"Fund":"BTB Segn. 18",
"Segni":"Sottolineature e postille.",
"Category":"CL"
},{
"Unnamed: 0":2597.0,
"Authors":"Sofocle",
"Title":"Antigone",
"Cities":"Milano  ",
"Publisher":"Bompiani",
"Years":1943,
"Fund":"BTB Segn. 20 ",
"Segni":"Pieghe",
"Category":"CL"
},{
"Unnamed: 0":2598.0,
"Authors":"Sofocle",
"Title":"Elettra",
"Cities":"Torino",
"Publisher":"Loescher",
"Years":1910,
"Fund":"BTB Segn. 19 ",
"Segni":"Postille",
"Category":"CL"
},{
"Unnamed: 0":2599.0,
"Authors":"Sofocle",
"Title":"Elettra.",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1954,
"Fund":"BTB Segn. 21",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":2600.0,
"Authors":"Not found",
"Title":"\u00abSolaria\u00bb (Antologia di)",
"Cities":"Milano  ",
"Publisher":"Lerici",
"Years":1958,
"Fund":"BAL",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":2601.0,
"Authors":"Solaroli, Libero",
"Title":"Laclos",
"Cities":"Roma",
"Publisher":"Edizioni dell\u2019Ateneo",
"Years":1952,
"Fund":"BTB Segn. 1149",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2602.0,
"Authors":"Soldati, Mario",
"Title":"Il vero Silvestri",
"Cities":"Milano  ",
"Publisher":"Garzanti",
"Years":1957,
"Fund":"BTB Segn. 673",
"Segni":"Dedica dell\u2019autore in data 8.1957.",
"Category":"IL"
},{
"Unnamed: 0":2603.0,
"Authors":"Soldini, Adriano",
"Title":"Le strade rosse",
"Cities":"Lugano  ",
"Publisher":"Il Roccolo",
"Years":1951,
"Fund":"BTB Segn. 674",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2604.0,
"Authors":"Solgenitzyn, Aleksandr Isaevic",
"Title":"Discorso per il conferimento del premio Nobel",
"Cities":"Roma  ",
"Publisher":"Nuova Antologia",
"Years":1972,
"Fund":"BTB Segn. 1386",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":2605.0,
"Authors":"Solmi, Sergio",
"Title":"  Gigiotti Zanini",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1940,
"Fund":null,
"Segni":"Dedica dell\u2019autore in data 1941 Milano.",
"Category":"IL"
},{
"Unnamed: 0":2606.0,
"Authors":"Solmi, Sergio",
"Title":"Poesie",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1950,
"Fund":"BTB Segn. 675",
"Segni":"Dedica dell\u2019autore in data 31.10.1950.",
"Category":"IL"
},{
"Unnamed: 0":2607.0,
"Authors":"Solmi, Sergio",
"Title":"La salute di Montaigne e altri scritti di letteratura francese",
"Cities":"Firenze",
"Publisher":"Le Monnier",
"Years":1942,
"Fund":"BTB Segn. 1151",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2608.0,
"Authors":"Solmi, Sergio",
"Title":"La salute di Montaigne e altri scritti di letteratura francese",
"Cities":"Milano-Napoli",
"Publisher":"Ricciardi",
"Years":1952,
"Fund":"BTB Segn. 1150",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":2609.0,
"Authors":"Solmi, Sergio",
"Title":"Scrittori negli anni. Saggi e note sulla letteratura italiana del Novecento",
"Cities":"Milano",
"Publisher":"il Saggiatore",
"Years":1963,
"Fund":"BTB Segn. 884",
"Segni":"Sottolineature e postille.",
"Category":"IL"
},{
"Unnamed: 0":2610.0,
"Authors":"Spagnoletti, Giacinto",
"Title":"Tre poeti italiani del Novecento: Saba, Ungaretti, Montale",
"Cities":"Torino-Roma",
"Publisher":"ERI",
"Years":1956,
"Fund":"BTB Segn. 888",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2611.0,
"Authors":"Spallicci, Aldo",
"Title":"I medici e la medicina in Marziale",
"Cities":"Milano",
"Publisher":"La Siringa",
"Years":1934,
"Fund":"BTB Segn. 2094",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2612.0,
"Authors":"Spallicci, Aldo",
"Title":"La medicina in Lucano",
"Cities":"Milano  ",
"Publisher":"Scalcerle",
"Years":1937,
"Fund":"BTB Segn. 2096",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2613.0,
"Authors":"Spallicci, Aldo",
"Title":"La medicina in Plauto",
"Cities":"Milano",
"Publisher":"Scalcerle",
"Years":1936,
"Fund":"BTB Segn. 2097",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2614.0,
"Authors":"Spallicci, Aldo",
"Title":"La medicina in Plinio il naturalista",
"Cities":"Milano",
"Publisher":"Scalcerle",
"Years":1936,
"Fund":"BTB Segn. 2095",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2615.0,
"Authors":"Spellanzon, Cesare",
"Title":"Storia del Risorgimento e dell\u2019unit\u00e0 d\u2019Italia",
"Cities":"Milano",
"Publisher":"Rizzoli",
"Years":1933,
"Fund":"BTB Segn. 1560-1564",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":2616.0,
"Authors":"Spencer, Herbert",
"Title":"Le basi della morale",
"Cities":"Milano-Torino-Roma  ",
"Publisher":"Bocca",
"Years":1908,
"Fund":"BTB Segn. 1907",
"Segni":"Parzialmente intonso.",
"Category":"F"
},{
"Unnamed: 0":2617.0,
"Authors":"Spencer, Herbert",
"Title":" L\u2019evoluzione della morale",
"Cities":"MilanoTorino-Roma",
"Publisher":"Bocca",
"Years":1909,
"Fund":"BTB Segn. 1908",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":2618.0,
"Authors":"Spencer, Herbert",
"Title":"I primi principi. ",
"Cities":"Milano",
"Publisher":"Bruciati",
"Years":1915,
"Fund":"BTB Segn. 1906",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":2619.0,
"Authors":"Spinazzola, Vittorio",
"Title":"Federico De Roberto e il Verismo",
"Cities":"Milano",
"Publisher":"Feltrinelli",
"Years":1961,
"Fund":"BTB Segn. 889",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":2620.0,
"Authors":"Spinosa, Antonio",
"Title":"L\u2019ABC dello snobismo",
"Cities":"Milano  ",
"Publisher":"Longanesi",
"Years":1968,
"Fund":"BTB Segn. 676",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2621.0,
"Authors":"Spinoza, Baruch",
"Title":"Breve trattato su Dio, l\u2019uomo e la sua felicit\u00e0",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1953,
"Fund":"BTB Segn. 1916",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":2622.0,
"Authors":"Spinoza, Baruch",
"Title":" Dio.",
"Cities":"Lanciano",
"Publisher":"Carabba ",
"Years":1914,
"Fund":"BTB Segn. 1917",
"Segni":"Postille.",
"Category":"F"
},{
"Unnamed: 0":2623.0,
"Authors":"Spinoza, Baruch",
"Title":"\u00c9thique",
"Cities":"Paris  ",
"Publisher":"Flammarion \u00c8diteur",
"Years":1912,
"Fund":"BAL",
"Segni":"Nota di mano ignota \u00ab1er janvier 1920\u00bb.",
"Category":"F"
},{
"Unnamed: 0":2624.0,
"Authors":"Spinoza, Baruch",
"Title":"L\u2019etica",
"Cities":"Milano  ",
"Publisher":"Isti tuto Editoriale Italiano",
"Years":"s.d.",
"Fund":"BTM",
"Segni":"Sottolineature e postille.",
"Category":"F"
},{
"Unnamed: 0":2625.0,
"Authors":"Spinoza, Baruch",
"Title":"L\u2019etica",
"Cities":"Roma-Napoli-Palermo-TorinoMilano-Firenze",
"Publisher":"Paravia",
"Years":1928,
"Fund":"BTB Segn. 1918",
"Segni":"Pieghe.",
"Category":"F"
},{
"Unnamed: 0":2626.0,
"Authors":"Spinoza, Baruch",
"Title":" \u0152uvres. I, II, III",
"Cities":"Paris",
"Publisher":"Garnier",
"Years":1928,
"Fund":"BTB Segn. 1912-1914",
"Segni":"Volumi II e III parzialmente intonsi.",
"Category":"F"
},{
"Unnamed: 0":2627.0,
"Authors":"Spinoza, Baruch",
"Title":" Opera quae supersunt omnia, I",
"Cities":"Leipzig",
"Publisher":"Tauchnitz",
"Years":1843,
"Fund":"BTB Segn. 1915",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":2628.0,
"Authors":"Spinoza, Baruch",
"Title":" Opera. Quot-quot reperta sunt. I, II, III",
"Cities":"L\u2019Aja",
"Publisher":"Nijhoff",
"Years":1895,
"Fund":"BTB Segn. 1909-1911",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":2629.0,
"Authors":"Spir, Africano",
"Title":"Saggi di filosofia critica",
"Cities":"Milano  ",
"Publisher":"Libreria Editrice Milanese",
"Years":1913,
"Fund":"BTB Segn. 1919",
"Segni":"Postille e pieghe.",
"Category":"F"
},{
"Unnamed: 0":2630.0,
"Authors":"Spitzer, Leo",
"Title":"Marcel Proust e altri saggi di letteratura francese moderna.",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1959,
"Fund":"BTB Segn. 1152",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":2631.0,
"Authors":"Squarcia, Francesco",
"Title":"Scritti romantici",
"Cities":"Parma  ",
"Publisher":"Il Raccoglitore",
"Years":1952,
"Fund":"BTB Segn. 890",
"Segni":"Dedica dell\u2019autore.",
"Category":"L"
},{
"Unnamed: 0":2632.0,
"Authors":"Not found",
"Title":"Stagione sinfonica organizzata dalla radio italiana",
"Cities":"Torino",
"Publisher":"ERI",
"Years":1950,
"Fund":"BAL",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":2633.0,
"Authors":"Stecchetti, Lorenzo (Olindo Guerrini)",
"Title":"Nova polemica",
"Cities":"Sesto San Giovanni",
"Publisher":"Barion",
"Years":1919,
"Fund":"BTB Segn. 677",
"Segni":"Parzialmente intonso.",
"Category":"L"
},{
"Unnamed: 0":2634.0,
"Authors":"Steele, Richard",
"Title":"Il chiacchierone",
"Cities":"Roma",
"Publisher":"Colombo",
"Years":1945,
"Fund":"BTB Segn. 1313",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2635.0,
"Authors":"Stein, Gertrude",
"Title":"Autobiografia di Alice Toklas",
"Cities":"Torino  ",
"Publisher":"Einaudi",
"Years":1938,
"Fund":"BTB Segn. 1314",
"Segni":"Intonso.",
"Category":"L"
},{
"Unnamed: 0":2636.0,
"Authors":"Steinbeck, John",
"Title":"Piandella Tortilla",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1939,
"Fund":"BTB Segn. 1315",
"Segni":"Pieghe.",
"Category":"EL"
},{
"Unnamed: 0":2637.0,
"Authors":"Stendhal (Henry Beyle)",
"Title":"La Certosa di Parma.",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1940,
"Fund":"BTB Segn. 1099",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":2638.0,
"Authors":"Stendhal (Henry Beyle)",
"Title":" Ricordi di egotismo. ",
"Cities":"Roma",
"Publisher":"Documento",
"Years":1944,
"Fund":"BTB Segn. 1102",
"Segni":"Dedica del curatore.",
"Category":"FL"
},{
"Unnamed: 0":2639.0,
"Authors":"Stendhal (Henry Beyle)",
"Title":"Romans et nouvelles",
"Cities":"Paris  ",
"Publisher":"Gallimard",
"Years":1947,
"Fund":"BAL",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":2640.0,
"Authors":"Stendhal (Henry Beyle)",
"Title":"Il rosso e il bianco (Luciano Leuwen)",
"Cities":"Milano",
"Publisher":"Treves",
"Years":1930,
"Fund":"BTB Segn. 1100-1101",
"Segni":"Intonsi.",
"Category":"FL"
},{
"Unnamed: 0":2641.0,
"Authors":"Stendhal (Henry Beyle)",
"Title":"Les temps h\u00e9ro\u00efques de Napol\u00e9on",
"Cities":"Paris  ",
"Publisher":"Nilsson",
"Years":"s.d.",
"Fund":"BTB Segn. 1103",
"Segni":"Sottolineature e postille.",
"Category":"FL"
},{
"Unnamed: 0":2642.0,
"Authors":"Sterne, Lawrence",
"Title":"Il viaggio sentimentale di Yorik",
"Cities":"Firenze",
"Publisher":"Barbera",
"Years":1922,
"Fund":"BAL",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":2643.0,
"Authors":"Stifter, Adalbert",
"Title":"Cristallo di rocca",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1942,
"Fund":"BTB Segn. 1216",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":2644.0,
"Authors":"Stoker, Bram",
"Title":"Dracula il vampiro",
"Cities":"Milano  ",
"Publisher":"Longanesi",
"Years":1966,
"Fund":"BAL",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":2645.0,
"Authors":"Stoppani, Antonio",
"Title":"Il bel paese",
"Cities":"Milano  ",
"Publisher":"Ditta Giacomo Agnelli",
"Years":1883,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2646.0,
"Authors":"Not found",
"Title":"Storia del mondo moderno. ",
"Cities":"Milano  ",
"Publisher":"Garzanti",
"Years":1967,
"Fund":"BAL",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":2647.0,
"Authors":"Not found",
"Title":"Storia della letteratura italiana. ",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1965,
"Fund":"BTB Segn. 891-899",
"Segni":"Al volume I, piega; nel volume VIII, segnalibro inserito.",
"Category":"L"
},{
"Unnamed: 0":2648.0,
"Authors":null,
"Title":"Storia d\u2019Italia. I. I caratteri originali. ",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1972,
"Fund":"BTB Segn. 1565",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":2649.0,
"Authors":"Not found",
"Title":"Storia di Milano.",
"Cities":"Milano ",
"Publisher":"Fondazione Treccani degli Alfieri",
"Years":1953,
"Fund":"BAL",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":2650.0,
"Authors":"Not found",
"Title":"Storia e cultura della Locride",
"Cities":"Messina  ",
"Publisher":"La Sicilia",
"Years":1964,
"Fund":"BTB Segn. 2265",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":2651.0,
"Authors":"Not found",
"Title":"Storie di fantasmi. Antologia di racconti anglosassoni del sopran naturale. ",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1960,
"Fund":"BTB Segn. 1317",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2652.0,
"Authors":"Strachey, Giles Lytton",
"Title":"Elisabetta d\u2019Inghilterra",
"Cities":"Milano  ",
"Publisher":"Longanesi",
"Years":1949,
"Fund":"BTB Segn. 1722",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":2653.0,
"Authors":"Not found",
"Title":"Stradario alfabetico di Napoli.",
"Cities":"Napoli",
"Publisher":"La Campania",
"Years":1939,
"Fund":"BTB Segn. 2310",
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":2654.0,
"Authors":"Straparola, Gianfrancesco",
"Title":"Le piacevoli notti",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1943,
"Fund":"BTB Segn. 678",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2655.0,
"Authors":"Not found",
"Title":"Studi e materiali di storia delle religioni",
"Cities":"Roma",
"Publisher":"Optima",
"Years":1929,
"Fund":"BTB Segn. 1799-1802",
"Segni":"Volumi I e III parzialmente intonsi; volumi II e IV intonsi.",
"Category":"S"
},{
"Unnamed: 0":2656.0,
"Authors":"Not found",
"Title":"Studi in onore di Leone Traverso",
"Cities":"Urbino",
"Publisher":"Argalia",
"Years":1971,
"Fund":"BTB Segn. 1413-1415",
"Segni":"[contiene, alle pp. 384-386, C.E. Gadda, Gli amici taciturni (ovvero \u00abritorno\u00bb)].",
"Category":"L"
},{
"Unnamed: 0":2657.0,
"Authors":"Not found",
"Title":"Studi urbinati di storia, filosofia e letteratura",
"Cities":"Urbino  ",
"Publisher":"Argal\u00eca",
"Years":1971,
"Fund":"BAL",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":2658.0,
"Authors":"Stuparich, Gianni",
"Title":"Guerra del \u201915",
"Cities":"Milano",
"Publisher":"Treves",
"Years":1931,
"Fund":"BAL",
"Segni":"Nota di possesso di Gadda in data 01.1932 Milano. Postille.",
"Category":"F"
},{
"Unnamed: 0":2659.0,
"Authors":"Stura, Francesco",
"Title":"  Organi sessuali",
"Cities":"Milano",
"Publisher":"Bolla",
"Years":"s.d.",
"Fund":null,
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2660.0,
"Authors":"Not found",
"Title":"Le style Louis XIV.",
"Cities":"Paris",
"Publisher":"Flammarion",
"Years":1948,
"Fund":"BTB Segn. 2154",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":2661.0,
"Authors":"Not found",
"Title":"Le style Louis XV",
"Cities":"Paris  ",
"Publisher":"Flammarion",
"Years":1951,
"Fund":"BTB Segn. 2155",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":2662.0,
"Authors":"Not found",
"Title":"Le style Louis XVI",
"Cities":"Paris  ",
"Publisher":"Flammarion",
"Years":1949,
"Fund":"BTB Segn. 2156",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":2663.0,
"Authors":"Not found",
"Title":"Sui campi di battaglia. Il Trentino, il Pasubio e gli Altipiani.  Storico-turistica",
"Cities":"Milano  ",
"Publisher":"TCI",
"Years":1929,
"Fund":"BTB Segn. 2343",
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":2664.0,
"Authors":"Not found",
"Title":"Sull\u2019arte: architettura, scultura, grafica. ",
"Cities":"Ivrea",
"Publisher":"Ufficio stampa Ing. C. Olivetti e S.p.A.",
"Years":1952,
"Fund":"BAL",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":2665.0,
"Authors":"Not found",
"Title":"Sulla via della pace. Trattato per la interdizione delle prove nucleari",
"Cities":"Washington ",
"Publisher":"US Information Service",
"Years":1961,
"Fund":"BTB Segn. Op. 66",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":2666.0,
"Authors":"Not found",
"Title":"Sull\u2019Etna.",
"Cities":"Firenze  ",
"Publisher":"Geografico Militare",
"Years":1901,
"Fund":"BTB Segn. Op. 35",
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":2667.0,
"Authors":"Not found",
"Title":"Sul limitare. Prose e poesie scelte per la scuola italiana.",
"Cities":"Milano-Palermo- Napoli",
"Publisher":"Sandron",
"Years":"s.d.",
"Fund":"BTB Segn. 853",
"Segni":"Nota di possesso autografa. Postille.",
"Category":"IL"
},{
"Unnamed: 0":2668.0,
"Authors":"Not found",
"Title":"Surrey \u2013 the playground of London.",
"Cities":"London  ",
"Publisher":"The Homeland Association",
"Years":1928,
"Fund":"BAL",
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":2669.0,
"Authors":"Svetonio Tranquillo, Gaio",
"Title":"Les douze C\u00e9sars: livre 1er",
"Cities":"Paris",
"Publisher":"Garnier",
"Years":1954,
"Fund":"BTB Segn. 75",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":2670.0,
"Authors":"Svetonio Tranquillo, Gaio",
"Title":"Les douze C\u00e9sars",
"Cities":"Paris",
"Publisher":"Garnier",
"Years":1955,
"Fund":"BAL",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":2671.0,
"Authors":"Svetonio Tranquillo, Gaio",
"Title":" Le vite dei dodici Cesari",
"Cities":"Roma",
"Publisher":"Ed. Romana",
"Years":1944,
"Fund":"BTB Segn. 76",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":2672.0,
"Authors":"Svevo, Italo (Ettore Schmitz)",
"Title":"La coscienza di Zeno",
"Cities":"Milano",
"Publisher":"Corbaccio",
"Years":1938,
"Fund":"BTB Segn. 679",
"Segni":"Parzialmente intonso.",
"Category":"CL"
},{
"Unnamed: 0":2673.0,
"Authors":"Svevo, Italo (Ettore Schmitz)",
"Title":"La novella del buon vecchio e della bella fanciulla",
"Cities":"Milano",
"Publisher":"Corbaccio",
"Years":1938,
"Fund":"BTB Segn. 680",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":2674.0,
"Authors":"Svevo, Italo (Ettore Schmitz)",
"Title":"Senilit\u00e0",
"Cities":"Milano",
"Publisher":"Corbaccio",
"Years":1938,
"Fund":"BTB Segn. 681",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":2675.0,
"Authors":"Svevo, Italo (Ettore Schmitz)",
"Title":"Una vita",
"Cities":"Milano",
"Publisher":"Corbaccio",
"Years":1938,
"Fund":"BTB Segn. 682",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":2676.0,
"Authors":"Swift, Jonathan",
"Title":"Libelli.",
"Cities":"Lanciano",
"Publisher":"Carabba ",
"Years":1909,
"Fund":"BTB Segn. 1319",
"Segni":"Nota di possesso autografa: \u00abBibl. Blocco C\u00bb.",
"Category":"EL"
},{
"Unnamed: 0":2677.0,
"Authors":"Swift, Jonathan",
"Title":"Swift. ",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1942,
"Fund":"BTB Segn. 1318",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":2678.0,
"Authors":"Swift, Jonathan",
"Title":"I viaggi di Gulliver.",
"Cities":"Sesto San Giovanni",
"Publisher":"Barion",
"Years":1919,
"Fund":"BTB Segn. 1320",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":2679.0,
"Authors":"Swift, Jonathan",
"Title":"I viaggi di Gulliver",
"Cities":"Sesto San Giovanni",
"Publisher":"Barion",
"Years":1934,
"Fund":null,
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":2680.0,
"Authors":"Swift, Jonathan",
"Title":"I viaggi di Gulliver.",
"Cities":"Milano",
"Publisher":"Bietti",
"Years":1939,
"Fund":"BTB Segn. 1321",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":2681.0,
"Authors":"Swift, Jonathan",
"Title":"I viaggi di Gulliver in vari paesi lontani del mondo",
"Cities":"Milano",
"Publisher":"Rizzoli",
"Years":1952,
"Fund":"BTB Segn. 1322",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":2682.0,
"Authors":"Swift, Jonathan",
"Title":"Viaggio di Gulliver a Lilliput.",
"Cities":"Torino-Roma-Firenze-Napoli ",
"Publisher":"Paravia",
"Years":1902,
"Fund":"BTB Segn. 1323",
"Segni":"Piega.",
"Category":"EL"
},{
"Unnamed: 0":2683.0,
"Authors":"Swinton, William",
"Title":"Elementary Course in Geography designed for primary and intermediate grades and as a complete shorter course",
"Cities":"New York-Chicago",
"Publisher":"Ivison, Blakeman, Taylor, and Company",
"Years":1875,
"Fund":"BTB Segn. 2397",
"Segni":"Nota di possesso autografa di Enrico Gadda in data 15.02.1905.",
"Category":"G"
},{
"Unnamed: 0":2684.0,
"Authors":"Synge, John Millington",
"Title":"Deirdre l\u2019addolorata (1910)",
"Cities":"Milano",
"Publisher":"Milano",
"Years":1944,
"Fund":"BTB Segn. 1325",
"Segni":"Piega.",
"Category":"EL"
},{
"Unnamed: 0":2685.0,
"Authors":"Synge, John Millington",
"Title":"Il furfantello dell\u2019ovest (1907)",
"Cities":"Milano",
"Publisher":"Rosa e Ballo",
"Years":1944,
"Fund":"BTB Segn. 1324",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":2686.0,
"Authors":"Tacito, Publio Cornelio",
"Title":"Annales",
"Cities":"Paris",
"Publisher":"Les Belles Lettres",
"Years":1938,
"Fund":"BTB Segn. 108-110",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":2687.0,
"Authors":"Tacito, Publio Cornelio",
"Title":"La Germania. ",
"Cities":"Milano ",
"Publisher":"Istituto Editoriale Italiano",
"Years":1928,
"Fund":"BTB Segn. 77",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":2688.0,
"Authors":"Tacito, Publio Cornelio",
"Title":"Histoires",
"Cities":"Paris  ",
"Publisher":"Les Belles Lettres",
"Years":1939,
"Fund":"BTB Segn. 106-107",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":2689.0,
"Authors":"Taine, Hippolyte-Adolphe",
"Title":"Les origines de la France contemporaine",
"Cities":"Paris",
"Publisher":"Hachette",
"Years":1928,
"Fund":"BTB Segn. 1696-1703",
"Segni":"Volumi VI e VIII, parzialmente intonsi; volume VII intonso. Pieghe.",
"Category":"S"
},{
"Unnamed: 0":2690.0,
"Authors":"Tana, Giambattista",
"Title":"\u2019l Cont Piolet",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1966,
"Fund":"BTB Segn. 683",
"Segni":"Dedica del curatore in data 10.1966.",
"Category":"L"
},{
"Unnamed: 0":2691.0,
"Authors":"Tanizaki, Junichiro",
"Title":"Diario di un vecchio pazzo",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1965,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2692.0,
"Authors":"Tanzi, Carl\u2019Antonio",
"Title":"Le poesie milanesi",
"Cities":"Pistoia ",
"Publisher":"Edizioni Can Bianco",
"Years":1960,
"Fund":"BAL",
"Segni":"Intonso.",
"Category":"IL"
},{
"Unnamed: 0":2693.0,
"Authors":"Tarchetti, Iginio Ugo",
"Title":"Storia di una gamba. ",
"Cities":"Firenze",
"Publisher":"L\u2019Ape",
"Years":1950,
"Fund":"BTB Segn. 688",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2694.0,
"Authors":"Tarle, Evgenij Viktorovic",
"Title":"Talleyrand",
"Cities":"Milano",
"Publisher":"Feltrinelli",
"Years":1958,
"Fund":"BAL",
"Segni":null,
"Category":"RL"
},{
"Unnamed: 0":2695.0,
"Authors":"Tasca, Angelo",
"Title":"Due anni di alleanza germanosovietica (1939-1941)",
"Cities":"Firenze",
"Publisher":"La Nuova Italia",
"Years":1951,
"Fund":"BTB Segn. 1766",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":2696.0,
"Authors":"Tasso, Torquato",
"Title":"Aminta",
"Cities":"Roma",
"Publisher":"Garroni",
"Years":1908,
"Fund":"BAL",
"Segni":"Timbro di possesso di Enrico Gadda.",
"Category":"IL"
},{
"Unnamed: 0":2697.0,
"Authors":"Tasso, Torquato",
"Title":"La Gerusalemme liberata",
"Cities":"Firenze",
"Publisher":"Barbera",
"Years":1876,
"Fund":"BTB Segn. 687",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2698.0,
"Authors":"Tasso, Torquato",
"Title":"Opere",
"Cities":"Milano",
"Publisher":"Rizzoli",
"Years":1963,
"Fund":"BTB Segn. 686",
"Segni":"Presente solo il I volume. Parzialmente in tonso.",
"Category":"IL"
},{
"Unnamed: 0":2699.0,
"Authors":"Tasso, Torquato",
"Title":"Poesie. Flora",
"Cities":"Milano-Roma  ",
"Publisher":"Rizzoli",
"Years":1934,
"Fund":"BTB Segn. 684",
"Segni":"Parzialmente intonso.",
"Category":"IL"
},{
"Unnamed: 0":2700.0,
"Authors":"Tasso, Torquato",
"Title":"Prose",
"Cities":"Milano-Roma",
"Publisher":"Rizzoli",
"Years":1935,
"Fund":"BTB Segn. 685",
"Segni":"Parzialmente intonso.",
"Category":"IL"
},{
"Unnamed: 0":2701.0,
"Authors":"Taylor, William Cook \u2013 Pinnock,William",
"Title":"History of England, from the invasion of Julius Caesar to the death of George II, with a continuation to the present time. ",
"Cities":"London",
"Publisher":"Whittaker & Co.",
"Years":1858,
"Fund":"BTB Segn. 1721",
"Segni":"Sottolineature.",
"Category":"S"
},{
"Unnamed: 0":2702.0,
"Authors":"Not found",
"Title":"Teatro elisabettiano.",
"Cities":"Firenze  ",
"Publisher":"Sansoni",
"Years":1948,
"Fund":"BTB Segn. 1326",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":2703.0,
"Authors":"Not found",
"Title":"Teatro spagnolo del secolo d\u2019oro",
"Cities":"Torino",
"Publisher":"ERI",
"Years":1957,
"Fund":"BTB Segn. 1326",
"Segni":null,
"Category":"SL"
},{
"Unnamed: 0":2704.0,
"Authors":"Tecchi, Bonaventura",
"Title":"Azione della Brigata Arezzo nell\u2019offensiva carsica dal 23 al 31 maggio 1917 e nella controffensiva austriaca 4-5 giugno 1917",
"Cities":"Bagnoregio",
"Publisher":"Scuola Tipografica",
"Years":1920,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2705.0,
"Authors":"Tecchi, Bonaventura",
"Title":"Baracca 15 C",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1961,
"Fund":"BAL",
"Segni":"Dedica a stampa.",
"Category":"IL"
},{
"Unnamed: 0":2706.0,
"Authors":"Tecchi, Bonaventura",
"Title":" Clemes Brentano, interprete degli animali",
"Cities":"Estratto da \u00abQuaderni ACI\u00bb",
"Publisher":null,
"Years":1950,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":2707.0,
"Authors":"Tecchi, Bonaventura",
"Title":"Un\u2019estate in campagna",
"Cities":"Firenze  ",
"Publisher":"Sansoni",
"Years":1945,
"Fund":"BTB Segn. 689",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":2708.0,
"Authors":"Tecchi, Bonaventura",
"Title":"Gianni Stuparich granatiere triestino",
"Cities":"Roma",
"Publisher":"Nuova Antologia",
"Years":1931,
"Fund":"BTB Segn. Op. 62",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2709.0,
"Authors":"Tecchi, Bonaventura",
"Title":"Goethe scrittore di fiabe",
"Cities":"Torino  ",
"Publisher":"Einaudi",
"Years":1966,
"Fund":"BTB Segn. 1232",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2710.0,
"Authors":"Tecchi, Bonaventura",
"Title":"Idilli moravi",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1939,
"Fund":"BTB Segn. 690",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":2711.0,
"Authors":"Tecchi, Bonaventura",
"Title":"La luna a ponente",
"Cities":"Firenze  ",
"Publisher":"Vallecchi",
"Years":1955,
"Fund":"BTB Segn. 691",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":2712.0,
"Authors":"Tecchi, Bonaventura",
"Title":"Maestri e amici",
"Cities":"Pescara ",
"Publisher":"Tempo Nostro",
"Years":1932,
"Fund":"BTB Segn. 900",
"Segni":"Dedica dell\u2019autore. Postille e foglio inserito.",
"Category":"IL"
},{
"Unnamed: 0":2713.0,
"Authors":"Tecchi, Bonaventura",
"Title":"Il nome sulla sabbia",
"Cities":"Milano  ",
"Publisher":"Treves",
"Years":1924,
"Fund":"BTB Segn. 692",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":2714.0,
"Authors":"Tecchi, Bonaventura",
"Title":"Per una presunta lettera di Cola di  Rienzo.",
"Cities":"s.l.",
"Publisher":"s.n.",
"Years":1921,
"Fund":"BAL",
"Segni":"A penna in copertina \u00abTesina di laurea\u00bb.",
"Category":"IL"
},{
"Unnamed: 0":2715.0,
"Authors":"Tecchi, Bonaventura",
"Title":"Scrittori tedeschi del Novecento",
"Cities":"Firenze",
"Publisher":"Parenti",
"Years":1941,
"Fund":"BTB Segn. 1233",
"Segni":"Intonso.",
"Category":"IL"
},{
"Unnamed: 0":2716.0,
"Authors":"Tecchi, Bonaventura",
"Title":"Sette liriche di Goethe",
"Cities":"Bari  ",
"Publisher":"Laterza",
"Years":1949,
"Fund":"BTB Segn. 1234",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":2717.0,
"Authors":"Tecchi, Bonaventura",
"Title":"La vedova timida; Antica Terra",
"Cities":"Roma",
"Publisher":"Tumminelli",
"Years":1942,
"Fund":"BTB Segn. 693",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":2718.0,
"Authors":"Not found",
"Title":"Technologischen Taschenw\u00f6rterbuch.",
"Cities":"Stuttgart",
"Publisher":"Metzlerscher",
"Years":"s.d.",
"Fund":"BTB Segn. 2473",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":2719.0,
"Authors":"Not found",
"Title":"Teodora imperatrice di Bisanzio",
"Cities":"Roma ",
"Publisher":"Anonima Romana Editoriale",
"Years":1934,
"Fund":"BTB Segn. Op. 4",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":2720.0,
"Authors":"Terenzio Afro, Publio",
"Title":"Tutte le commedie",
"Cities":"Milano",
"Publisher":"Rizzoli",
"Years":1951,
"Fund":"BTB Segn. 78",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":2721.0,
"Authors":"Tessa, Delio",
"Title":"L\u2019\u00e8 el d\u00ec di mort, alegher!",
"Cities":"Milano",
"Publisher":"All\u2019insegna del pesce d\u2019oro",
"Years":1960,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2722.0,
"Authors":"Not found",
"Title":"Testimonianze su Pierro.",
"Cities":"Bari",
"Publisher":"Laterza",
"Years":1969,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2723.0,
"Authors":"Testori, Giovanni",
"Title":"I segreti di Milano (II). La Gilda del Mac Mahon",
"Cities":"Milano  ",
"Publisher":"Feltrinelli",
"Years":1959,
"Fund":"BTB Segn. 694",
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":2724.0,
"Authors":"Testori, Giovanni",
"Title":"I segreti di Milano. Il ponte della Ghisolfa",
"Cities":"Milano",
"Publisher":"Feltrinelli",
"Years":1958,
"Fund":"BTB Segn. 695",
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":2725.0,
"Authors":"They, Giovanni",
"Title":"La locomotiva a vapore. Storia, sviluppo e perfezionamento",
"Cities":"Milano",
"Publisher":"Vallardi",
"Years":1910,
"Fund":"BTB Segn. 2098",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":2726.0,
"Authors":"Thibaud, Jean",
"Title":"Vita e trasmutazioni degli atomi.",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1939,
"Fund":"BTB Segn. 2102",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":2727.0,
"Authors":"Thibaudet, Albert",
"Title":"Histoire de la litt\u00e9rature fran\u00e7aise de1789 \u00e0 nos jours",
"Cities":"Paris",
"Publisher":"Stock",
"Years":1936,
"Fund":"BTB Segn. 1153",
"Segni":"Postille.",
"Category":"FL"
},{
"Unnamed: 0":2728.0,
"Authors":"Thorpe, Edward",
"Title":"Storia della chimica",
"Cities":"Torino",
"Publisher":"S.T.E.N.",
"Years":1911,
"Fund":"BTB Segn. 2101",
"Segni":"Nota di possesso autografa in data 26.02.1922.",
"Category":"T"
},{
"Unnamed: 0":2729.0,
"Authors":"Tieck, Johann Ludwig",
"Title":"Il biondo Ecberto",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1942,
"Fund":"BTB Segn. 1217",
"Segni":null,
"Category":"GL"
},{
"Unnamed: 0":2730.0,
"Authors":"Tilgher, Adriano",
"Title":"Critica dello storicismo",
"Cities":"Modena  ",
"Publisher":"Guanda",
"Years":1935,
"Fund":"BTB Segn. 1920",
"Segni":"Parzialmente intonso.",
"Category":"FL"
},{
"Unnamed: 0":2731.0,
"Authors":"Tilgher, Adriano",
"Title":"Estetica: teoria generale dell\u2019attivit\u00e0 artistica. Studi critici sulla estetica contemporanea",
"Cities":"Roma  ",
"Publisher":"Libreria di Scienze e lettere",
"Years":1931,
"Fund":"BTB Segn. 1921",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":2732.0,
"Authors":"Tinto, Edoardo",
"Title":"La Lemuria",
"Cities":"Roma ",
"Publisher":"Anonima Romana Editoriale",
"Years":1934,
"Fund":"BTB Segn. Op. 7",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":2733.0,
"Authors":"Tinto, Edoardo",
"Title":"La medicina al tempo dei faraoni",
"Cities":"Roma  ",
"Publisher":"Anonima Romana Editoriale",
"Years":1934,
"Fund":"BTB Segn. Op. 8",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":2734.0,
"Authors":"Tinto, Edoardo",
"Title":"I misteri di Eleusi",
"Cities":"Roma  ",
"Publisher":"Anonima Romana Editoriale",
"Years":1934,
"Fund":null,
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2735.0,
"Authors":"Tisserant, Eug\u00e8ne \u2013 Wesley Koch, Theodore",
"Title":"The Vatican Library. Two papers",
"Cities":"Jersey City",
"Publisher":"Snead & Co",
"Years":1929,
"Fund":"BTB Segn. 2398",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":2736.0,
"Authors":"Tjutcev, F\u00ebdor Ivanovic",
"Title":"Poesie",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1964,
"Fund":"BTB Segn. 1387",
"Segni":null,
"Category":"RL"
},{
"Unnamed: 0":2737.0,
"Authors":"Tobino, Mario",
"Title":"Bandiera nera",
"Cities":"Roma",
"Publisher":", Istituto Grafico Tiberino",
"Years":1950,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore in data 21.9.1950",
"Category":"IL"
},{
"Unnamed: 0":2738.0,
"Authors":"Tobino, Mario",
"Title":"La gelosia del marinaio",
"Cities":"Roma  ",
"Publisher":"Tumminelli",
"Years":1942,
"Fund":"BTB Segn. 696",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2739.0,
"Authors":"Tobino, Mario",
"Title":"Veleno e amore.",
"Cities":"Firenze  ",
"Publisher":"Rivoluzione",
"Years":1942,
"Fund":"BTB Segn. 697",
"Segni":"Dedica dell\u2019autore in data 28.2.1942.",
"Category":"IL"
},{
"Unnamed: 0":2740.0,
"Authors":"Todeschini, Angelo Maria \u2013 Dupin, Louis",
"Title":"Grammatica teorico-pratica della lingua francese compilata in conformit\u00e0 dei programmi ministeriali ad uso delle scuole secondarie inferiori e superiori",
"Cities":"Milano  ",
"Publisher":"Trevisini",
"Years":"s.d.",
"Fund":"BTB Segn. 2457",
"Segni":"Nota di possesso autografa.",
"Category":"GR"
},{
"Unnamed: 0":2741.0,
"Authors":"Tolstoj, Lev Nikolaevi\u010d",
"Title":"Anna Karenina",
"Cities":"Sesto San Giovanni  ",
"Publisher":"Barion",
"Years":1932,
"Fund":"BTB Segn. 1390-1391",
"Segni":"Volume I parzialmente intonso; volume II intonso.",
"Category":"RL"
},{
"Unnamed: 0":2742.0,
"Authors":"Tolstoj, Lev Nikolaevi\u010d",
"Title":"Anna Karenina",
"Cities":"Milano  ",
"Publisher":"Mondadori",
"Years":1952,
"Fund":"BAL",
"Segni":null,
"Category":"RL"
},{
"Unnamed: 0":2743.0,
"Authors":"Tolstoj, Lev Nikolaevi\u010d",
"Title":"Due usseri. Il taglio del bosco. Sebastopoli. Le memorie di un segnatore.",
"Cities":"Torino",
"Publisher":"Slavia",
"Years":1929,
"Fund":"BTB Segn. 1392",
"Segni":null,
"Category":"RL"
},{
"Unnamed: 0":2744.0,
"Authors":"Tolstoj, Lev Nikolaevi\u010d",
"Title":"Guerra e pace",
"Cities":"Milano  ",
"Publisher":"Mondadori",
"Years":1941,
"Fund":"BAL",
"Segni":null,
"Category":"RL"
},{
"Unnamed: 0":2745.0,
"Authors":"Tolstoj, Lev Nikolaevi\u010d",
"Title":"Guerra e pace",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1942,
"Fund":"BTB Segn. 1388-1389",
"Segni":null,
"Category":"RL"
},{
"Unnamed: 0":2746.0,
"Authors":"Tolstoj, Lev Nikolaevi\u010d",
"Title":"Resurrezione (Voskresenie)",
"Cities":"Milano",
"Publisher":"Sonzogno",
"Years":1930,
"Fund":"BTB Segn. 1393-1394",
"Segni":null,
"Category":"RL"
},{
"Unnamed: 0":2747.0,
"Authors":"Tolstoj, Lev Nikolaevi\u010d",
"Title":"Resurrezione",
"Cities":"Milano",
"Publisher":"Rizzoli",
"Years":1952,
"Fund":"BTB Segn. 1395",
"Segni":null,
"Category":"RL"
},{
"Unnamed: 0":2748.0,
"Authors":"Tolstoj, Lev Nikolaevi\u010d",
"Title":"La sonata a Kreutzer.",
"Cities":"Torino  ",
"Publisher":"Einaudi",
"Years":1942,
"Fund":"BTB Segn. 1396",
"Segni":null,
"Category":"RL"
},{
"Unnamed: 0":2749.0,
"Authors":"Tomasi di Lampedusa, Giuseppe",
"Title":"Il Gattopardo",
"Cities":"Milano  ",
"Publisher":"Feltrinelli",
"Years":1960,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2750.0,
"Authors":"Tomasi di Lampedusa, Giuseppe",
"Title":"Le professeur et la sirene",
"Cities":"Paris  ",
"Publisher":"Editions du Seuil",
"Years":1962,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2751.0,
"Authors":"Tomizza, Fulvio",
"Title":"L\u2019albero dei sogni.",
"Cities":"Milano  ",
"Publisher":"Mondadori",
"Years":1969,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2752.0,
"Authors":"Tommaseo, Niccol\u00f2",
"Title":"Due baci e altri racconti",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1943,
"Fund":"BTB Segn. 698",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2753.0,
"Authors":"Tommaso d\u2019Aquino (Pseudo)",
"Title":"Trattato della pietra filosofale. Preceduto da una introduzione e seguito da un Trattato del medesimo Autore su l\u2019Arte dell\u2019alchimia nelle quali operesono rilevati i segreti per arrivare alBene su questa Terra",
"Cities":"Todi  ",
"Publisher":"Atanor",
"Years":1913,
"Fund":"BTB Segn. 1922",
"Segni":"Nota di possesso autografa in data 06.1918.",
"Category":"F "
},{
"Unnamed: 0":2754.0,
"Authors":"Tonelli, Luigi",
"Title":"Manzoni",
"Cities":"Milano  ",
"Publisher":"Corbaccio",
"Years":1928,
"Fund":"BTB Segn. 901",
"Segni":"Dedica dell\u2019autore ad Alberto Carocci. \u00abNota per i posteri\u00bb di Gadda, 1956. Sottolineature e annotazioni.",
"Category":"IL"
},{
"Unnamed: 0":2755.0,
"Authors":"Toniazzo, Guglielmo",
"Title":"Elementi di storia antica. II. La Grecia.",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1891,
"Fund":"BTB Segn. 1490",
"Segni":"Nota di possesso autografa di Adele Gadda  Lehr.",
"Category":"S"
},{
"Unnamed: 0":2756.0,
"Authors":"Tonna, Giuseppe",
"Title":"Al di qua della siepe",
"Cities":"Parma  ",
"Publisher":"Il raccoglitore",
"Years":1955,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2757.0,
"Authors":"Tonna, Giuseppe",
"Title":"Le bestie parlano",
"Cities":"Modena  ",
"Publisher":"Guanda",
"Years":1951,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":2758.0,
"Authors":"Torraca, Francesco",
"Title":"Manuale della letteratura italiana: ad uso delle scuole secondarie",
"Cities":"Firenze   ",
"Publisher":"Sansoni",
"Years":1941,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2759.0,
"Authors":"Touchard-Lafosse, Georges",
"Title":"Chroniques de l\u2019\u0152il-de-b\u0153uf. Des petits appartements de la cour et des salons de Paris sous Louis XIV, la R\u00e9gence, Louis XV et\nLouis XVI",
"Cities":"Paris",
"Publisher":"Garnier",
"Years":"s.d.",
"Fund":"BTB Segn. 1704-1706",
"Segni":"Note di possesso autografa di Leone Traverso nelle date 193435. Postille.",
"Category":"S"
},{
"Unnamed: 0":2760.0,
"Authors":"Treccani, Ernesto",
"Title":"Giornata nel tempo",
"Cities":"Milano  ",
"Publisher":"Corrente",
"Years":1941,
"Fund":"BTB Segn. 699",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":2761.0,
"Authors":"Not found",
"Title":"Trent\u2019anni di storia italiana (1915-1945)",
"Cities":"Torino  ",
"Publisher":"Einaudi",
"Years":1961,
"Fund":"BTB Segn. 1571",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":2762.0,
"Authors":"Trevelyan, George Macaulay",
"Title":"Storia d\u2019Inghilterra nel secolo XIX",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1941,
"Fund":"BTB Segn. 1723",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":2763.0,
"Authors":"Trilussa (Carlo Alberto Salustri)",
"Title":"Libro muto",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1935,
"Fund":"BTB Segn. 700",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":null,
"Authors":"Trizzino, Antonino",
"Title":"Settembre nero",
"Cities":"Milano  ",
"Publisher":"Longanesi",
"Years":1956,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":null,
"Authors":"Troilo, Erminio",
"Title":"Giordano Bruno",
"Cities":"Milano  ",
"Publisher":"Bietti",
"Years":1940,
"Fund":"BTB Segn. 1978",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":null,
"Authors":"Trombetti, Alfredo",
"Title":"L\u2019unit\u00e0 di origine del linguaggio",
"Cities":"Bologna",
"Publisher":"Beltrami",
"Years":1905,
"Fund":"BTB Segn. 2458",
"Segni":"Nota di possesso autografa di Adele Gadda     Lehr.",
"Category":"IL"
},{
"Unnamed: 0":null,
"Authors":"Truffi, Riccardo",
"Title":"Cantori di giostre perugine nel Quattrocento",
"Cities":"Perugia",
"Publisher":"La Favilla",
"Years":1909,
"Fund":"BTB Segn. Op. 63",
"Segni":"Nota di possesso autografa.",
"Category":"IL"
},{
"Unnamed: 0":null,
"Authors":"Truffi, Riccardo",
"Title":"Carlo Tenca: conferenza tenuta nella scuola normale femminile C. Tenca",
"Cities":"Milano  ",
"Publisher":"Tipografia indipendenza",
"Years":1899,
"Fund":"BAL",
"Segni":"Dedica dell\u2019autore ad Adele Gadda Lehr.",
"Category":"IL"
},{
"Unnamed: 0":null,
"Authors":"Truffi, Riccardo",
"Title":"D\u2019una probabile fonte del Margutte",
"Cities":"Torino",
"Publisher":"Loescher",
"Years":1893,
"Fund":"BTB Segn. Op. 64",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":null,
"Authors":"Tschuppick, Kar",
"Title":"Maria Teresa",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1935,
"Fund":"BTB Segn. 1767",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":null,
"Authors":"Not found",
"Title":"Turbine idrauliche e macchinari accessori. Lubrificazione.",
"Cities":"Genova  ",
"Publisher":"Foltzer",
"Years":1933,
"Fund":"BTB Segn. Op. 95",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":null,
"Authors":"Turchi, Nicola",
"Title":"La civilt\u00e0 bizantina",
"Cities":"Milano.Roma  ",
"Publisher":"Bocca",
"Years":1915,
"Fund":"BTB Segn. 1491",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":null,
"Authors":"Turgenev, Ivan Sergeevic",
"Title":"Due amici ed altri romanzi",
"Cities":"Milano  ",
"Publisher":"Treves",
"Years":1933,
"Fund":"BTB Segn. 1397",
"Segni":null,
"Category":"RL"
},{
"Unnamed: 0":null,
"Authors":"Turgenev, Ivan Sergeevic",
"Title":"Un nido di gentiluomini.",
"Cities":"Milano-Roma  ",
"Publisher":"Treves-Treccani-Tumminelli",
"Years":1933,
"Fund":"BTB Segn. 1398",
"Segni":null,
"Category":"RL"
},{
"Unnamed: 0":null,
"Authors":"Turgenev, Ivan Sergeevic",
"Title":"Nido di nobili",
"Cities":"Sesto San Giovanni  ",
"Publisher":"Barion",
"Years":1935,
"Fund":"BTB Segn. 1399",
"Segni":"Parzialmente intonso.",
"Category":"RL"
},{
"Unnamed: 0":null,
"Authors":"Turolla, Enrico",
"Title":"Virgilio",
"Cities":"Milano",
"Publisher":"Bietti",
"Years":1940,
"Fund":"BTB Segn. 129",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":null,
"Authors":"Not found",
"Title":"Tutta la pittura del Crivelli.",
"Cities":"Milano",
"Publisher":"Rizzoli",
"Years":1961,
"Fund":"BAL",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":null,
"Authors":"Not found",
"Title":"Tutta la pittura di Leonardo.",
"Cities":"Milano",
"Publisher":"Rizzoli",
"Years":1952,
"Fund":"BAL",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":null,
"Authors":"Tyrrell, George Walter",
"Title":"La terra e i suoi misteri",
"Cities":"Milano  ",
"Publisher":"Feltrinelli",
"Years":1962,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":null,
"Authors":"\u00dcberwegs, Friedrich",
"Title":"Grundriss der Geschichte der Philosophie",
"Cities":"Berlin  ",
"Publisher":"Mittler & Sohn",
"Years":1926,
"Fund":"BTB Segn. 1979",
"Segni":null,
"Category":"GL"
},{
"Unnamed: 0":null,
"Authors":"Ulivi, Pasquale",
"Title":"L\u2019industria frigorifera",
"Cities":"Milano  ",
"Publisher":"Hoepli",
"Years":1927,
"Fund":"BTB Segn. 2043",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":null,
"Authors":"Not found",
"Title":"L\u2019Umanitaria e la sua opera",
"Cities":"Milano  ",
"Publisher":"Cooperativa grafica degli operai",
"Years":1922,
"Fund":"BTB Segn. 2159",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":null,
"Authors":"Not found",
"Title":"Umoristi del Novecento",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1964,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":null,
"Authors":"Unamuno, Miguel de",
"Title":"Le sentiment tragique de la vie.",
"Cities":"Paris  ",
"Publisher":"NRF-Gallimard",
"Years":1917,
"Fund":"BTB Segn. 1923",
"Segni":"Intonso.",
"Category":"FL"
},{
"Unnamed: 0":null,
"Authors":"Not found",
"Title":"Undicesimo concerto stagione sinfonica 1942 Teatro Comunale di Firenze",
"Cities":"Firenze  ",
"Publisher":"s.n.",
"Years":1942,
"Fund":"BTB Segn. 1437",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":null,
"Authors":"Ungaretti, Giuseppe",
"Title":"Sentimento del tempo",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1933,
"Fund":"BTB Segn. 703",
"Segni":"Segnalibri.",
"Category":"IL"
},{
"Unnamed: 0":null,
"Authors":"Ungaretti, Giuseppe",
"Title":"Il taccuino del vecchio",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1960,
"Fund":"BTB Segn. 705",
"Segni":"Dedica dell\u2019autore in data 7.11.1960.",
"Category":"IL"
},{
"Unnamed: 0":null,
"Authors":"Ungaretti, Giuseppe",
"Title":"Vie d\u2019un homme. La douleur. La terre promise",
"Cities":"Lausanne",
"Publisher":"Mermod",
"Years":1953,
"Fund":"BTB Segn. 708",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":null,
"Authors":"Ungaretti, Giuseppe",
"Title":"Vita d\u2019un uomo. Poesie. I. L\u2019allegria 1914-1919",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1942,
"Fund":"BTB Segn. 701",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":null,
"Authors":"Ungaretti, Giuseppe",
"Title":"Vita d\u2019un uomo. II. Sentimento del tempo 1919-1935.",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1943,
"Fund":"BTB Segn. 704",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":null,
"Authors":"Ungaretti, Giuseppe",
"Title":"Vita d\u2019un uomo. IV. Traduzioni I. 40 sonetti di Shakespeare",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1946,
"Fund":"BTB Segn. 707",
"Segni":"Postille dell\u2019autore e dedica in data 19.9.1946.",
"Category":"IL"
},{
"Unnamed: 0":null,
"Authors":"Ungaretti, Giuseppe",
"Title":"Vita d\u2019un uomo. Poesie VI. Un Gridoe Paesaggi 1939-1952",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1954,
"Fund":"BTB Segn. 706",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":null,
"Authors":"Ungaretti, Giuseppe",
"Title":"Vita d\u2019un uomo. XI. Prose di viaggio e saggi. I. Il deserto e dopo",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1961,
"Fund":"BTB Segn. 702",
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":null,
"Authors":"Not found",
"Title":"Un inedito petrarchesco",
"Cities":"Roma  ",
"Publisher":"Edizioni di storia e letteratura",
"Years":1950,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":null,
"Authors":"Not found",
"Title":"L\u2019uomo in fabbrica",
"Cities":"Torino",
"Publisher":"FIAT",
"Years":1971,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":null,
"Authors":"Not found",
"Title":"L\u2019univers: histoire et description de tous les peuples",
"Cities":"Paris  ",
"Publisher":"Didot",
"Years":1839,
"Fund":"BTB Segn. 2360-2368",
"Segni":"Note di possesso autografe di Adele Gadda Lehr e Carlo Emilio Gadda.",
"Category":"S"
},{
"Unnamed: 0":null,
"Authors":"Not found",
"Title":"L\u2019universo e la vita",
"Cities":"  Torino",
"Publisher":"ERI",
"Years":1950,
"Fund":"BTB Segn. Op. 141",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":null,
"Authors":"Vaccaj  Giulio",
"Title":"Le feste di Roma antica",
"Cities":"Milano-Roma",
"Publisher":"Bocca",
"Years":1927,
"Fund":"BTB Segn. 1492",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":null,
"Authors":"Vacchiano, Ermenegildo",
"Title":"La bonifica integrale della Maremma",
"Cities":"Grosseto  ",
"Publisher":"Bollettino di Statistica",
"Years":1938,
"Fund":"BTB Segn. Op. 111",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":null,
"Authors":"Valenti, Ghino",
"Title":"Principi di scienza economica.",
"Cities":"Firenze",
"Publisher":"Barbera",
"Years":1920,
"Fund":"BTB Segn. 2051-2052",
"Segni":"Nota di possesso autografa in data 9.06.1925 Milano.",
"Category":"T"
},{
"Unnamed: 0":null,
"Authors":"Valeri, Diego",
"Title":"Poesie vecchie e nuove",
"Cities":"Milano  ",
"Publisher":"Mondadori",
"Years":1932,
"Fund":"BTB Segn. 710",
"Segni":"Dedica dell\u2019autore in data 18.7.1932.",
"Category":"L"
},{
"Unnamed: 0":null,
"Authors":"Valeri, Nino",
"Title":"Storia d\u2019Italia illustrata. V. Signorie e principati.",
"Cities":"Milano  ",
"Publisher":"Mondadori",
"Years":1949,
"Fund":"BTB Segn. 1570",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":null,
"Authors":"Val\u00e9ry, Paul",
"Title":"Instants",
"Cities":"Milano",
"Publisher":"All\u2019insegna del pesce d\u2019oro",
"Years":1937,
"Fund":"BAL",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":null,
"Authors":"Val\u00e9ry, Paul",
"Title":"Po\u00e9sies: Album de vers anciens; La jeune parque; Pi\u00e8ces diverses; Cantate du Narcisse; Amphion; S\u00e9miramis.",
"Cities":"Paris  ",
"Publisher":"NRF-Gallimard",
"Years":1944,
"Fund":"BTB Segn. 1104",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":null,
"Authors":"Valgimigli, Manara",
"Title":"Poesia e poetica di Giovanni Pascol",
"Cities":"Bologna",
"Publisher":"Zanichelli",
"Years":1934,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":null,
"Authors":"Valgimigli, Manara",
"Title":"Poeti e filosofi di Grecia.",
"Cities":"Bari  ",
"Publisher":"Laterza",
"Years":1940,
"Fund":"BTB Segn. 28",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":null,
"Authors":"Valiani, Leo",
"Title":"Storia del movimento socialista.",
"Cities":"Firenze",
"Publisher":"La Nuova Italia",
"Years":1951,
"Fund":"BTB Segn. 1768",
"Segni":"Parzialmente intonso.",
"Category":"S"
},{
"Unnamed: 0":null,
"Authors":"Vallardi, Antonio",
"Title":"Le macchine a vapore. Motrici a stan tuffo, turbine",
"Cities":"Milano  ",
"Publisher":"Vallardi",
"Years":1918,
"Fund":"BTB Segn. 2100",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":null,
"Authors":"Valle-Incl\u00e1n, Ramon del",
"Title":"Memorias des Marqu\u00e9s de Bradomin",
"Cities":"Madrid",
"Publisher":"Imprenta Rivadeneyra",
"Years":1933,
"Fund":"BTB Segn. 927",
"Segni":"Nota di possesso autografa di Emilio Cecchi in data 14.9.1939.",
"Category":"FL"
},{
"Unnamed: 0":null,
"Authors":"Vallese, Tarquinio",
"Title":"Britannia latina",
"Cities":"Napoli",
"Publisher":"Federico",
"Years":1926,
"Fund":"BTB Segn. 2459",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":null,
"Authors":"Valsecchi, Marco",
"Title":"Vincent Van Gogh",
"Cities":"Milano",
"Publisher":"Hoepli",
"Years":1952,
"Fund":"BTB Segn. 2191",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":null,
"Authors":"Valverde, Jos\u00e9 Maria",
"Title":"La Espera",
"Cities":"Madrid",
"Publisher":"Cultura Hispanica",
"Years":1949,
"Fund":"BTB Segn. 931",
"Segni":"Dedica dell\u2019autore in data 1953.",
"Category":"SL"
},{
"Unnamed: 0":null,
"Authors":"Valverde, Jos\u00e9 Maria",
"Title":"Storia della letteratura spagnola",
"Cities":"Torino",
"Publisher":"ERI",
"Years":1955,
"Fund":"BTB Segn. 941",
"Segni":null,
"Category":"SL"
},{
"Unnamed: 0":null,
"Authors":"Valverde, Jos\u00e9 Maria",
"Title":"Versos del domingo",
"Cities":"Barcelona",
"Publisher":"Barna",
"Years":1954,
"Fund":"BTB Segn. 932",
"Segni":"Dedica dell\u2019autore.",
"Category":"SL"
},{
"Unnamed: 0":null,
"Authors":"Not found",
"Title":"I Vangeli.",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1949,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":null,
"Authors":"Not found",
"Title":"Il Vangelo.",
"Cities":"Venezia",
"Publisher":"Neri Pozza",
"Years":1950,
"Fund":"BTB Segn. 1173",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":null,
"Authors":"Not found",
"Title":"Il Vangelo",
"Cities":"Modena",
"Publisher":"Guanda",
"Years":1936,
"Fund":"BTB Segn. 1172",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":null,
"Authors":"Not found",
"Title":"Van Gogh",
"Cities":"Milano-Firenze",
"Publisher":"Electa",
"Years":1952,
"Fund":"BTB Segn. 2202",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":null,
"Authors":"Not found",
"Title":"]Van Gogh. Dipinti e disegni. Milano, Palazzo Reale febbraioaprile 1952. Catalogo",
"Cities":"Milano  ",
"Publisher":"Ente manifestazioni milanesi",
"Years":1952,
"Fund":"BTB Segn. 2244",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":null,
"Authors":"Not found",
"Title":"Van Gogh racont\u00e9 par luim\u00eame et par ses amis, ses contemporains, sa posterit\u00e9",
"Cities":"Vesenaz-Gen\u00e8ve  ",
"Publisher":"Cailler",
"Years":1947,
"Fund":"BTB Segn. 2199",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":null,
"Authors":"Van Gogh, Vincent",
"Title":"Lettres \u00e0 son fr\u00e8re Th\u00e9o",
"Cities":"Paris",
"Publisher":"Grasset",
"Years":1937,
"Fund":"BTB Segn. 2245",
"Segni":"Intonso.",
"Category":"L"
},{
"Unnamed: 0":null,
"Authors":"Van Gogh, Vincent",
"Title":"Lettres \u00e0 Van Rappard",
"Cities":"Paris",
"Publisher":"Grasset",
"Years":1950,
"Fund":"BTB Segn. 2246",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":null,
"Authors":"Vanini, Giulio Cesare",
"Title":"Saggi di opere",
"Cities":"Lanciano  ",
"Publisher":"Carabba",
"Years":1938,
"Fund":"BTB Segn. 1924",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":null,
"Authors":"Vanni, Manfredo",
"Title":"Calliope: epos di Grecia e di Roma: letture omeriche e virgiliane nelle traduzioni del Monti, del Pindemonte e del Caro, scelte e commentate e ricongiunte col nesso dei poemi aggiuntivi i riepiloghi delle note di lingua, grammatica e stile",
"Cities":"Milano",
"Publisher":"Signorelli",
"Years":1943,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":null,
"Authors":"Vanzi Angioletti, Giannina",
"Title":"I giorni del mio tempo",
"Cities":"Milano",
"Publisher":"Edizioni della Meridiana,",
"Years":1951,
"Fund":"BTB Segn. 709",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":null,
"Authors":"Not found",
"Title":"El vap\u00f3r: su producci\u00f3n y su em pleo",
"Cities":"New York-London ",
"Publisher":" Babcock & Wilcox",
"Years":1896,
"Fund":"BTB Segn. 2104",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":null,
"Authors":"Vasari, Giorgio",
"Title":"Capricci e aneddoti di artisti",
"Cities":"Firenze",
"Publisher":"Salani",
"Years":1907,
"Fund":"BTB Segn. 718",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":null,
"Authors":"Vasari, Giorgio",
"Title":"Le vite",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1929,
"Fund":"BTB Segn. 717",
"Segni":"Intonso.",
"Category":"IL"
},{
"Unnamed: 0":null,
"Authors":"Vasari, Giorgio",
"Title":"Le vite",
"Cities":"Firenze",
"Publisher":"Salani",
"Years":1932,
"Fund":"BTB Segn. 711-716",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":null,
"Authors":"Vassalli, Sebastiano",
"Title":"Narcisso",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1968,
"Fund":"BTB Segn. 719",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":null,
"Authors":"Vaunois, Louis",
"Title":"La vie de Louis XIII",
"Cities":"Paris  ",
"Publisher":"Grasset",
"Years":1943,
"Fund":"BTB Segn. 1709",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":null,
"Authors":"Vavilov, Sergej Ivanovic",
"Title":"Isaac Newton",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1954,
"Fund":"BTB Segn. 2099",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":null,
"Authors":"Not found",
"Title":"Vent\u2019anni d\u2019impazienza: antologia della narrativa italiana dal \u201946 ad oggi",
"Cities":"Milano  ",
"Publisher":"Feltrinelli",
"Years":1966,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":null,
"Authors":"Not found",
"Title":"Vent\u2019anni di narrativa italiana (1945-1965)",
"Cities":"Roma  ",
"Publisher":"Edindustria",
"Years":1967,
"Fund":"BTB Segn. 882-883",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":null,
"Authors":"Not found",
"Title":"Ventisei. Escluso il nero",
"Cities":"Roma  ",
"Publisher":"Edizioni dell\u2019Aldina",
"Years":1970,
"Fund":"BTB Segn. Op. 116",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":null,
"Authors":"Ventura, Giovanni",
"Title":"Poesie scelte",
"Cities":"Milano",
"Publisher":"Cogliati",
"Years":1922,
"Fund":"BTB Segn. 720",
"Segni":"Intonso.",
"Category":"IL"
},{
"Unnamed: 0":null,
"Authors":"Venturi, Franco",
"Title":"Jean Jaur\u00e8s",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1948,
"Fund":"BTB Segn. 1707",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":null,
"Authors":"Verdi, Giuseppe",
"Title":"Autobiografia dalle lettere",
"Cities":"Milano",
"Publisher":"Rizzoli",
"Years":1951,
"Fund":"BTB Segn. 1435",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":null,
"Authors":"Verga, Giovanni",
"Title":"I Malavoglia",
"Cities":"Sesto San Giovanni",
"Publisher":"Barion",
"Years":1923,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":null,
"Authors":"Verga, Giovanni",
"Title":"I Malavoglia",
"Cities":"Milano-Verona",
"Publisher":"Mondadori",
"Years":1940,
"Fund":null,
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":null,
"Authors":"Verga, Giovanni",
"Title":"Mastro Don Gesualdo",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1941,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":null,
"Authors":"Verga, Giovanni",
"Title":"Tutte le novelle",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1941,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":null,
"Authors":"Verga, Giovanni",
"Title":"Tutte le novelle. II.",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1942,
"Fund":"BTB Segn. 721",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":null,
"Authors":"Vergani, Orio",
"Title":"Addio vecchia Milano!",
"Cities":"Milano",
"Publisher":"Silvana",
"Years":1958,
"Fund":"BTB Segn. 2282",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":null,
"Authors":"Verginelli, Vinci",
"Title":"Ceneri di paradiso",
"Cities":"Parma  ",
"Publisher":"Guanda",
"Years":1957,
"Fund":"BTB Segn. 722",
"Segni":"Dedica dell\u2019autore in data 21.12.1957. In tonso.",
"Category":"IL"
},{
"Unnamed: 0":null,
"Authors":"Verlaine, Paul",
"Title":"Les plus belles pages de PaulVerlaine. Po\u00e9sies",
"Cities":"Paris",
"Publisher":"Messein",
"Years":1946,
"Fund":null,
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":null,
"Authors":"Veroi, Gomberto",
"Title":"Condotta delle macchine elettriche e delle centrali",
"Cities":"Torino",
"Publisher":"UTET",
"Years":1916,
"Fund":"BTB Segn. 2134",
"Segni":"Nota di possesso in data 7.1920 Milano.",
"Category":"T"
},{
"Unnamed: 0":null,
"Authors":"Veronelli, Luigi",
"Title":"Guide Veronelli all\u2019Italia piacevole: Lazio",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1968,
"Fund":"BAL",
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":null,
"Authors":"Veronelli, Luigi",
"Title":"Guide Veronelli all\u2019Italia piacevole: Liguria",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1968,
"Fund":"BAL",
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":null,
"Authors":"Veronelli, Luigi",
"Title":"Guide Veronelli all\u2019Italia piacevole: Lombardia",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1968,
"Fund":"BAL",
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":null,
"Authors":"Veronelli, Luigi",
"Title":"Guide Veronelli all\u2019Italia piacevole: Piemonte, Valle d\u2019Aosta",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1968,
"Fund":"BAL",
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":null,
"Authors":"Veronelli, Luigi",
"Title":"Guide Veronelli all\u2019Italia piacevole: Umbria e Marche",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1968,
"Fund":"BAL",
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":null,
"Authors":"Verri, Pietro",
"Title":" Storia di Milano, dai suoi pi\u00f9 remoti principii fino al 1525 e, continuata fino alla presente et\u00e0 da S. Ticozzi.",
"Cities":"Milano",
"Publisher":"Gatti-Cairo",
"Years":1835,
"Fund":"BTB Segn. 1572-1575",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":null,
"Authors":"Vespasiano da Bisticci",
"Title":"Vite di uomini illustri del secolo XV",
"Cities":"Firenze",
"Publisher":"Rinascimento del Libro",
"Years":1938,
"Fund":"BTB Segn. 723",
"Segni":"Parzialmente intonso.",
"Category":"S"
},{
"Unnamed: 0":null,
"Authors":"Vian, Boris",
"Title":"Sterpacuore",
"Cities":"Milano",
"Publisher":"Rizzoli",
"Years":1965,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":null,
"Authors":"Vian, Francesco",
"Title":"Introduzione alla letteratura spagnola del \u00absiglo de oro\u00bb.",
"Cities":"Milano",
"Publisher":"Vita e Pensiero",
"Years":1946,
"Fund":"BTB Segn. 942",
"Segni":null,
"Category":"SL"
},{
"Unnamed: 0":null,
"Authors":"Viani, Lorenzo",
"Title":"Angi\u00f2 uomo d\u2019acqua",
"Cities":"Milano",
"Publisher":"Alpes",
"Years":1928,
"Fund":"BTB Segn. 724",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":null,
"Authors":"Viani, Lorenzo",
"Title":"Il Bava",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1932,
"Fund":"BTB Segn. 725",
"Segni":"Pieghe, sottolineature e postille.",
"Category":"IL"
},{
"Unnamed: 0":null,
"Authors":"Viani, Rolando",
"Title":"I ragazzi della spiaggia",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1956,
"Fund":"BTB Segn. 726",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":null,
"Authors":"Vicari, Giambattista",
"Title":"Indice ragionato de \u00abIl caff\u00e8\u00bb.",
"Cities":"s.l.",
"Publisher":"Il Caff\u00e8",
"Years":1969,
"Fund":"BTB Segn. Op. 112",
"Segni":"Invio.",
"Category":"IL"
},{
"Unnamed: 0":null,
"Authors":"Vicari, Giambattista",
"Title":"La smorfia letteraria",
"Cities":"Parma  ",
"Publisher":"Maccari",
"Years":1968,
"Fund":"BTB Segn. 727",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":null,
"Authors":"Vico, Giambattista",
"Title":"La scienza nuova.",
"Cities":"Bari",
"Publisher":"Laterza",
"Years":1928,
"Fund":"BTB Segn. 1925-1926",
"Segni":"Nota di possesso autografa.",
"Category":"F "
},{
"Unnamed: 0":null,
"Authors":"Vico, Giambattista",
"Title":"La scienza nuova.",
"Cities":null,
"Publisher":"Mondadori",
"Years":1943,
"Fund":null,
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":null,
"Authors":"Vighi, Alberto",
"Title":"L\u2019addio",
"Cities":"Milano",
"Publisher":"Schwarz",
"Years":1957,
"Fund":"BTB Segn. 728",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":null,
"Authors":"Vigny, Alfred de",
"Title":"Po\u00e8mes antiques et modernes",
"Cities":"Paris",
"Publisher":"Flammarion",
"Years":"s.d.",
"Fund":"BTB Segn. 1107",
"Segni":"Nota di possesso autografa in data 17.09.1919. Intonso.",
"Category":"FL"
},{
"Unnamed: 0":null,
"Authors":"Vigny, Alfred de",
"Title":"Po\u00e9sies",
"Cities":"Paris",
"Publisher":"Nelson",
"Years":"s.d.",
"Fund":"BTB Segn. 1110",
"Segni":"Nota di possesso autografa di Enrico Gadda in data 10.1917.",
"Category":"FL"
},{
"Unnamed: 0":null,
"Authors":"Vigny, Alfred de",
"Title":"Servitude et grandeur militaires.",
"Cities":"Paris",
"Publisher":"Nelson",
"Years":"s.d.",
"Fund":"BTB Segn. 1109",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":null,
"Authors":"Vigny, Alfred de",
"Title":"Servitude et grandeur militaires",
"Cities":"Paris",
"Publisher":"Flammarion",
"Years":"s.d.",
"Fund":"BTB Segn. 1108",
"Segni":"Nota di possesso autografa in data 17.09.1919.",
"Category":"FL"
},{
"Unnamed: 0":null,
"Authors":"Vigo, Pietro",
"Title":"Le definizioni geografiche della Divina Commedia",
"Cities":"Livorno",
"Publisher":"Giusti",
"Years":1913,
"Fund":"BTB Segn. 902",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":null,
"Authors":"Vigolo, Giorgio",
"Title":"Canto fermo",
"Cities":"Roma  ",
"Publisher":"Formiggini",
"Years":1931,
"Fund":"BTB Segn. 729",
"Segni":"Dedica dell\u2019autore in data 1.6.1934.",
"Category":"L"
},{
"Unnamed: 0":null,
"Authors":"Villa, Carlo",
"Title":"Siamo esseri antichi",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1964,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":null,
"Authors":"Villa, Guido",
"Title":"La psicologia contemporanea",
"Cities":"Torino",
"Publisher":"Bocca",
"Years":1911,
"Fund":"BTB Segn. 2001",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":null,
"Authors":"Villa, Vincenzo Maria",
"Title":"La bougainvillea",
"Cities":"Civitanova Alta",
"Publisher":"Ciarocchi",
"Years":1945,
"Fund":"BTB Segn. 730",
"Segni":"Dedica dell\u2019autore.",
"Category":"L"
},{
"Unnamed: 0":null,
"Authors":"Villanova, Rafael Lasso de la Vega, marqu\u00e8s de",
"Title":"Constancias 1925-1938",
"Cities":"Siena",
"Publisher":"Tip. Poligrafica di Siena",
"Years":1941,
"Fund":"BTB Segn. 933",
"Segni":"Dedica dell\u2019autore in data 1941.",
"Category":"SL"
},{
"Unnamed: 0":null,
"Authors":"Villanova, Rafael Lasso de la Vega, marqu\u00e8s de",
"Title":"Prestigi (1911-1916)",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1944,
"Fund":"BTB Segn. 936",
"Segni":"Dedica del traduttore in data 9.1945.",
"Category":"SL"
},{
"Unnamed: 0":null,
"Authors":"Villanova, Rafael Lasso de la Vega, marqu\u00e8s de",
"Title":"Prestigios 1911-1916",
"Cities":"Ginevra-Parigi-Firenze",
"Publisher":"Bibl. Modernos",
"Years":1938,
"Fund":"BTB Segn. 935",
"Segni":"Dedica dell\u2019autore.",
"Category":"SL"
},{
"Unnamed: 0":null,
"Authors":"Villanova, Rafael Lasso de la Vega, marqu\u00e8s de",
"Title":"Prestigios 1911-1916",
"Cities":"Firenze",
"Publisher":"Beltrami",
"Years":1944,
"Fund":"BTB Segn. 934",
"Segni":"Dedica dell\u2019autore. Parzialmente intonso.",
"Category":"SL"
},{
"Unnamed: 0":null,
"Authors":"Villari, Pasquale",
"Title":"Mezzogiorno tra riforme e rivoluzione",
"Cities":"Bari",
"Publisher":"Laterza",
"Years":1962,
"Fund":"BTB Segn. 1576",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":null,
"Authors":"Villat, Louis",
"Title":"La rivoluzione francese e l\u2019impero napoleonico",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1940,
"Fund":"BTB Segn. 1708",
"Segni":"Pieghe.",
"Category":"S"
},{
"Unnamed: 0":null,
"Authors":"Villon, Fran\u00e7ois",
"Title":"\u0152uvres compl\u00e8tes",
"Cities":"Paris",
"Publisher":"Lemerre",
"Years":1941,
"Fund":"BTB Segn. 1111",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":null,
"Authors":"Villon, Fran\u00e7ois",
"Title":"Poesie",
"Cities":"Torino",
"Publisher":"Chiantore",
"Years":1950,
"Fund":"BTB Segn. 1112",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":null,
"Authors":"Villone, Leonardo",
"Title":"La strada del pellegrino",
"Cities":"Milano",
"Publisher":"Schwarz",
"Years":1957,
"Fund":"BTB Segn. 731",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":null,
"Authors":"Not found",
"Title":"Vini italiani",
"Cities":"Torino",
"Publisher":"ERI",
"Years":1951,
"Fund":"BTB Segn. Op. 142",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":null,
"Authors":"Vio, Marta",
"Title":"Romanza per patrioti",
"Cities":"Milano",
"Publisher":"Schwarz",
"Years":1957,
"Fund":"BTB Segn. 732",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":null,
"Authors":"Virgadamo, Giuseppe",
"Title":"Processo alla scuola.",
"Cities":"Palermo",
"Publisher":"Palladium",
"Years":1971,
"Fund":"BTB Segn. Op. 65",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":null,
"Authors":"Virgilio Marone, Publio",
"Title":"Bucolica, Georgica",
"Cities":"Torino",
"Publisher":"Paravia",
"Years":1907,
"Fund":"BAL",
"Segni":"Nota di possesso e appunto: \u00abCarlo Emilio Gadda comperato il giorno 28 febbraio 1908. E ci\u00f2 \u00e8 assicuratissimo\u00bb.",
"Category":"CL"
},{
"Unnamed: 0":null,
"Authors":"Virgilio Marone, Publio",
"Title":"Bucoliques",
"Cities":"Paris",
"Publisher":"Les Belles Lettres",
"Years":1949,
"Fund":"BTB Segn. 114",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":null,
"Authors":"Virgilio Marone, Publio",
"Title":"L\u2019Eneade",
"Cities":"Prato",
"Publisher":"Alberghetti",
"Years":1905,
"Fund":null,
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":null,
"Authors":"Virgilio Marone, Publio",
"Title":"En\u00e9ide",
"Cities":"Paris",
"Publisher":"Les Belles Lettres",
"Years":1948,
"Fund":"BTB Segn. 111-112",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":null,
"Authors":"Virgilio Marone, Publio",
"Title":"Eneide libro VIII",
"Cities":"Firenze",
"Publisher":"La Nuova Italia",
"Years":1942,
"Fund":"BTB Segn. 123",
"Segni":null,
"Category":"CL"
},{
"Unnamed: 0":null,
"Authors":"Virgilio Marone, Publio",
"Title":"Les G\u00e9orgiques",
"Cities":"Paris",
"Publisher":"Les Belles Lettres",
"Years":1946,
"Fund":"BTB Segn. 113",
"Segni":"Postille",
"Category":"CL"
},{
"Unnamed: 0":null,
"Authors":"Viscardi, Antonio",
"Title":"Letteratura franco-italiana",
"Cities":"Modena",
"Publisher":"Societ\u00e0 Tipografica Modenese",
"Years":1941,
"Fund":"BTB Segn. 903",
"Segni":"Intonso",
"Category":"L"
},{
"Unnamed: 0":null,
"Authors":"Viscardini, Mario",
"Title":"Hypersophia. La struttura dell\u2019universo",
"Cities":"Milano",
"Publisher":"U.H.U",
"Years":1953,
"Fund":"BTB Segn. 2135",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":null,
"Authors":"Visconti, Alessandro",
"Title":"Storia di Milano",
"Cities":"Milano",
"Publisher":"Ceschina",
"Years":1937,
"Fund":"BTB Segn. 1577",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":null,
"Authors":"Not found",
"Title":"La vita italiana durante la Rivoluzione francese e l\u2019Impero",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1941,
"Fund":"BTB Segn. 1581",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":null,
"Authors":"Not found",
"Title":"La vita italiana nel Cinquecento",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1939,
"Fund":"BTB Segn. 1580",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":null,
"Authors":"Not found",
"Title":"La vita italiana nell\u2019Ottocento",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1941,
"Fund":null,
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":null,
"Authors":"Not found",
"Title":"La vita italiana nel Trecento",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1941,
"Fund":"BTB Segn. 1579",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":null,
"Authors":"Viti, Gorizio",
"Title":"Il romanzo italiano del Novecento da Fogazzaro ai nostri giorni",
"Cities":"Messina- Firenze",
"Publisher":"D\u2019Anna",
"Years":1973,
"Fund":"BAL",
"Segni":"Biglietto per omaggio dell\u2019autore.",
"Category":"L"
},{
"Unnamed: 0":null,
"Authors":"Vittorini, Elio",
"Title":"Le donne di Messina",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1964,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":null,
"Authors":"Vittorini, Elio",
"Title":"Le due tensioni. Appunti per una ideologia della letteratura.",
"Cities":"Milano",
"Publisher":"il Saggiatore",
"Years":1967,
"Fund":"BTB Segn. 904",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":null,
"Authors":"Vittorini, Elio",
"Title":"Nei Morlacchi, viaggio in Sardegna",
"Cities":"Firenze ",
"Publisher":"Parenti",
"Years":1936,
"Fund":"BTB Segn. 735",
"Segni":"Intonso",
"Category":"IL"
},{
"Unnamed: 0":null,
"Authors":"Vittorini, Elio",
"Title":"Nome e lagrime",
"Cities":"Firenze ",
"Publisher":"Parenti",
"Years":1941,
"Fund":"BTB Segn. 733",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":null,
"Authors":"Vittorini, Elio",
"Title":"Piccola borghesia",
"Cities":"Firenze ",
"Publisher":"Solaria",
"Years":1931,
"Fund":"BTB Segn. 734",
"Segni":"Dedica dell\u2019autore in data 19.12.1931. Piega. Parzialmente intonso.",
"Category":"IL"
},{
"Unnamed: 0":null,
"Authors":"Vittorini, Elio",
"Title":"Uomini e no",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1945,
"Fund":null,
"Segni":"Dedica dell\u2019autore.",
"Category":"IL"
},{
"Unnamed: 0":null,
"Authors":"Vivante, Arturo",
"Title":"Un caso d\u2019amore",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1968,
"Fund":"BTB Segn. 736",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":null,
"Authors":"Vives, Jaime Vicens",
"Title":"Profilo della storia di Spagna.",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1966,
"Fund":"BTB Segn. 1590",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":null,
"Authors":"Not found",
"Title":"Vocabolario dell\u2019argot e del linguaggio popolare parigino.",
"Cities":"Torino",
"Publisher":"Petrini",
"Years":1939,
"Fund":"BTB Segn. 2486",
"Segni":null,
"Category":"D"
},{
"Unnamed: 0":null,
"Authors":"Not found",
"Title":"Vocabolario della lingua italiana",
"Cities":"Milano",
"Publisher":"Vallardi",
"Years":"s.d.",
"Fund":"BTB Segn. 2462",
"Segni":"Nota di possesso autografa di Adele\nGadda Lehr.",
"Category":"D"
},{
"Unnamed: 0":null,
"Authors":"Not found",
"Title":"Vocabolario etimologico della lingua italiana",
"Cities":"Milano",
"Publisher":"Sonzogno",
"Years":1937,
"Fund":"BTB Segn. 2494-2495",
"Segni":null,
"Category":"D"
},{
"Unnamed: 0":null,
"Authors":"Not found",
"Title":"Vocabolario italiano della lingua parlata",
"Cities":"Firenze",
"Publisher":"Barbera",
"Years":1883,
"Fund":"BTB Segn. 2418",
"Segni":null,
"Category":"D"
},{
"Unnamed: 0":null,
"Authors":"Not found",
"Title":"Vocabolario italiano della lingua parlata",
"Cities":"Firenze",
"Publisher":"Barbera",
"Years":1920,
"Fund":"BTB Segn. 2490",
"Segni":null,
"Category":"D"
},{
"Unnamed: 0":null,
"Authors":"Not found",
"Title":"Vocabolario italiano-latino per uso degli studiosi di belle lettere nelle Regie Scuole di Torino",
"Cities":"Venezia",
"Publisher":"Bettinelli",
"Years":1786,
"Fund":"BTB Segn. 2505-2506",
"Segni":null,
"Category":"D"
},{
"Unnamed: 0":null,
"Authors":"Not found",
"Title":"Vocabolario milanese-italiano",
"Cities":"Milano",
"Publisher":"Stamperia Reale",
"Years":1814,
"Fund":"BTB Segn. 2484-2485",
"Segni":null,
"Category":"D"
},{
"Unnamed: 0":null,
"Authors":null,
"Title":"Vocabolario nomenclatore illustrato",
"Cities":"Milano",
"Publisher":"Societ\u00e0 Editrice Aldo Manuzio",
"Years":1909,
"Fund":"BTB Segn. 2496-2497",
"Segni":null,
"Category":"D"
},{
"Unnamed: 0":null,
"Authors":"Not found",
"Title":"Vocabolario scolastico italiano-francese francese-italiano. Compendio del nuovo vocabolario comparativo delle lingue italianae francese",
"Cities":"Torino",
"Publisher":"Petrini",
"Years":"s.d.",
"Fund":"BTB Segn. 2481",
"Segni":"Nota di possesso autografa",
"Category":"D"
},{
"Unnamed: 0":null,
"Authors":"Vogelmann, Daniel",
"Title":"Fondamentale",
"Cities":"Parma  ",
"Publisher":"Guanda",
"Years":1972,
"Fund":"BTB Segn. 736 bis",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":null,
"Authors":"Vogt, Henri",
"Title":"El\u00e9ments de math\u00e9matique sup\u00e9rieure \u00e0 l\u2019usage des physiciens, chimistes et ing\u00e9nieurs et des \u00e9l\u00e8ves des facult\u00e9s des sciences",
"Cities":"Paris",
"Publisher":"Vuibert",
"Years":1912,
"Fund":"BTB Segn. 2150",
"Segni":"Postille",
"Category":"T"
},{
"Unnamed: 0":null,
"Authors":"Volpi, Iacopo",
"Title":"Le ligniti italiane e la loro utilizzazione",
"Cities":null,
"Publisher":null,
"Years":1936,
"Fund":"BAL",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":null,
"Authors":"Volponi, Paolo",
"Title":"L\u2019antica moneta",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1955,
"Fund":"BTB Segn. 737",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":null,
"Authors":"Voltaire (Fran\u00e7ois-Marie Arouet, detto)",
"Title":"Dizionario filosofico",
"Cities":"Milano",
"Publisher":"Universale Economica",
"Years":1950,
"Fund":"BTB Segn. 1113-1114",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":null,
"Authors":"Voltaire (Fran\u00e7ois-Marie Arouet, detto)",
"Title":"Romanzi e racconti",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1938,
"Fund":"BTB Segn. 1115",
"Segni":"Dedica del traduttore in data 4.1941",
"Category":"FL"
},{
"Unnamed: 0":null,
"Authors":"Voltaire (Fran\u00e7ois-Marie Arouet, detto)",
"Title":"Il secolo di Luigi XIV",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1951,
"Fund":"BTB Segn. 1710",
"Segni":"Postille",
"Category":"S"
},{
"Unnamed: 0":null,
"Authors":"Von Frieden, Lucius",
"Title":"I funghi di tutti i paesi: atlante praticocon 186 tavole a colori",
"Cities":"Milano",
"Publisher":"Rizzoli",
"Years":1964,
"Fund":"BAL",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":null,
"Authors":"Von Goethe, Johann Wolfgang",
"Title":"Enuft",
"Cities":"s.l.",
"Publisher":"s.n.",
"Years":"s.d.",
"Fund":"BAL",
"Segni":null,
"Category":"GL"
},{
"Unnamed: 0":null,
"Authors":"Von Herzmanovsky-Orlando, Fritz",
"Title":"Lo spaventacavalli nel roseto",
"Cities":"Milano",
"Publisher":"Rizzoli",
"Years":1962,
"Fund":"BAL",
"Segni":null,
"Category":"GL"
},{
"Unnamed: 0":null,
"Authors":"Not found",
"Title":"Die Vorsokratiker",
"Cities":"Jena",
"Publisher":"Diederich",
"Years":1922,
"Fund":"BTB Segn. 1964",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":null,
"Authors":"Vossler, Karl",
"Title":"Civilt\u00e0 e lingua di Francia. Storia del francese letterario dagli inizi fino ad oggi",
"Cities":"Bari",
"Publisher":"Laterza",
"Years":1948,
"Fund":"BTB Segn. 1154",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":null,
"Authors":"Vota, Lorenzo",
"Title":"Dopo il funerale",
"Cities":"Roma",
"Publisher":"Letteratura",
"Years":1966,
"Fund":"BTB Segn. 73",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":null,
"Authors":"Wackenroder, Wilhelm Heinrich",
"Title":"Scritti di poesia e di estetica",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1934,
"Fund":"BTB Segn. 1928",
"Segni":"Dedica del curatore. Parzialmente intonso.",
"Category":"F"
},{
"Unnamed: 0":null,
"Authors":"Wagner, Richard",
"Title":"Tristano e Isotta",
"Cities":"Milano",
"Publisher":"Ricordi",
"Years":1940,
"Fund":"BTB Segn. 1446",
"Segni":null,
"Category":"GL"
},{
"Unnamed: 0":null,
"Authors":"Wain, John",
"Title":"Colpisci a morte il padre.",
"Cities":"Milano",
"Publisher":"Rizzoli",
"Years":1965,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":null,
"Authors":"Waismann, Friedrich",
"Title":"Introduzione al pensiero matematico",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1939,
"Fund":"BTB Segn. 2136",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":null,
"Authors":"Waldberg, Patrick",
"Title":"Harloff",
"Cities":"Milano",
"Publisher":"Gabriele Mazzotta",
"Years":1968,
"Fund":"BAL",
"Segni":"Foglietto inserito.",
"Category":"L"
},{
"Unnamed: 0":null,
"Authors":"Wallace, Ferguson",
"Title":"La Renaissance dans la pens\u00e9e historisque",
"Cities":"Paris",
"Publisher":"Payot",
"Years":1950,
"Fund":"BAL",
"Segni":null,
"Category":"FL"
},{
"Unnamed: 0":null,
"Authors":"Walker, R.O",
"Title":"Introduction to Spanish",
"Cities":"London-New York",
"Publisher":"Harrap-Brentano\u2019s",
"Years":"s.d.",
"Fund":"BTB Segn. 2460.",
"Segni":null,
"Category":"GR"
},{
"Unnamed: 0":null,
"Authors":"Watson Fowler, Henry",
"Title":"The concise Oxford dictionary of current English",
"Cities":"Oxford  ",
"Publisher":"Oxford University press",
"Years":1931,
"Fund":"BAL",
"Segni":null,
"Category":"D"
},{
"Unnamed: 0":null,
"Authors":"Watson, Francis",
"Title":"La vita e i tempi di Caterina de\u2019 Medici.",
"Cities":"Firenze",
"Publisher":"Marzocco",
"Years":1949,
"Fund":"BTB Segn. 1711",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":null,
"Authors":"Watt, Alexander",
"Title":"Manuel pratique du fabricant de papier",
"Cities":"Paris",
"Publisher":"Tignol",
"Years":"s.d.",
"Fund":"BTB Segn. 2151",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":null,
"Authors":"Weber, Alfred",
"Title":"Histoire de la philosophie europ\u00e9enne",
"Cities":"Paris",
"Publisher":"Fischbacher",
"Years":1914,
"Fund":"BTB Segn. 1980",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":null,
"Authors":"Wegener, Alfred",
"Title":"La formazione dei continenti.",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1942,
"Fund":"BTB Segn. 2137",
"Segni":"Intonso",
"Category":"T"
},{
"Unnamed: 0":null,
"Authors":"Not found",
"Title":"Die Welt erz\u00e4hlt.",
"Cities":"Frankfurt",
"Publisher":"Fischer",
"Years":1966,
"Fund":"BTB Segn. 1412",
"Segni":null,
"Category":"T"
},{
"Unnamed: 0":null,
"Authors":"Werfel, Franz",
"Title":"La morte del piccolo borghese.",
"Cities":"Milano",
"Publisher":"Sperling & Kupfer",
"Years":1937,
"Fund":"BTB Segn. 1220",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":null,
"Authors":"Werfel, Franz",
"Title":"I quaranta giorni del Mussa Dagh",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1935,
"Fund":"BTB Segn. 1218-1219",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":null,
"Authors":"Whitman, Walt",
"Title":"Foglie di erba. Con le due aggiunte e gli \u00abEchi della vecchiaia\u00bb dell\u2019ed. del 1900",
"Cities":"Milano-Palermo-Napoli",
"Publisher":"Sandron",
"Years":"s.d.",
"Fund":"BTB Segn. 1327",
"Segni":"Invio in data 14.7.1908. Postille.",
"Category":"EL"
},{
"Unnamed: 0":null,
"Authors":"Wilcock, J. Rodolfo",
"Title":"Il caos",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1960,
"Fund":"BAL",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":null,
"Authors":"Wilde, Oscar",
"Title":"Derniers essais de litt\u00e9rature",
"Cities":"Paris",
"Publisher":"Stock",
"Years":1913,
"Fund":"BTB Segn. 1328",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":null,
"Authors":"Wilde, Oscar",
"Title":"The Picture of Dorian Gray",
"Cities":"London",
"Publisher":"Simkin, Marshall, Hamilton, Kent & C",
"Years":1920,
"Fund":"BTB Segn. 1330",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":null,
"Authors":"Wilde, Oscar",
"Title":"Il ritratto di Dorian Gray",
"Cities":"Milano",
"Publisher":"Rizzoli",
"Years":1951,
"Fund":"BTB Segn. 1329",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":null,
"Authors":"Wilder, Thornton",
"Title":"Il ponte di San Luis Rey.",
"Cities":"Milano",
"Publisher":"Modernissima",
"Years":1929,
"Fund":"BTB Segn. 1331",
"Segni":"Parzialmente intonso.",
"Category":"EL"
},{
"Unnamed: 0":null,
"Authors":"Williams, Eric",
"Title":"The Wooden Horse",
"Cities":"London-New York-Toronto",
"Publisher":"Longmans",
"Years":1955,
"Fund":"BTB Segn. 1332",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":null,
"Authors":"Williams, Tennessee",
"Title":"I Blues.",
"Cities":"Torino",
"Publisher":"Einaudi",
"Years":1952,
"Fund":"BTB Segn. 1333",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":null,
"Authors":"Wilson, Colin",
"Title":"Riti notturni",
"Cities":"Milano",
"Publisher":"Lerici",
"Years":1960,
"Fund":"BAL ",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":null,
"Authors":"Wilson, Edmund",
"Title":"Saggi letterari 1920-1950",
"Cities":"Milano",
"Publisher":"Garzanti",
"Years":1967,
"Fund":"BTB Segn. 1354",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":null,
"Authors":"Windelband, Wilhelm",
"Title":"Storia della filosofia.",
"Cities":"s.l.",
"Publisher":"Sandron",
"Years":"s.d.",
"Fund":"BTB Segn. 1981-1982",
"Segni":"Nota di possesso autografa in data 11.06.1924 Milano.",
"Category":"F"
},{
"Unnamed: 0":null,
"Authors":"Windelband, Wilhelm",
"Title":"Storia della Filosofia moderna. Volume primo. Dal Rinascimento all\u2019Illuminismo tedesco.",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1925,
"Fund":"BTM   ",
"Segni":"Sottolineature e postille.",
"Category":"F"
},{
"Unnamed: 0":null,
"Authors":"Windelband, Wilhelm",
"Title":"Storia della Filosofia moderna. Volume secondo. L\u2019Illuminismo tedesco e la filosofia kantiana",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1925,
"Fund":"BTM   ",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":null,
"Authors":"Windelband, Wilhelm",
"Title":"Storia della Filosofia moderna. Volume terzo. La filosofia postkantiana.",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1925,
"Fund":"BTM   ",
"Segni":"Sottolineature e postille.",
"Category":"F"
},{
"Unnamed: 0":null,
"Authors":"Withers, Hartley",
"Title":"In difesa del capitalismo.",
"Cities":"Bari",
"Publisher":"Laterza",
"Years":1922,
"Fund":"BTB Segn. 2016",
"Segni":"Timbro della libreria italiana Alfredo Meledi Buenos Aires.",
"Category":"F"
},{
"Unnamed: 0":null,
"Authors":"W\u00f6llflin, Heinrich",
"Title":"L\u2019arte classica del Rinascimento",
"Cities":"Firenze",
"Publisher":"Sansoni",
"Years":1941,
"Fund":"BTB Segn. 2249",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":null,
"Authors":"Not found",
"Title":"World atlas (Encyclopaedia Britannica)",
"Cities":"London",
"Publisher":"Benton",
"Years":1960,
"Fund":"BAL",
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":null,
"Authors":"Woolf, Virginia",
"Title":"La casa degli spiriti",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1950,
"Fund":"BTB Segn. 1335",
"Segni":"Postille",
"Category":"EL"
},{
"Unnamed: 0":null,
"Authors":"Yeats, William Butler",
"Title":"Lady Cathleen 1892. L\u2019oriolo a polvere 1903",
"Cities":"Milano",
"Publisher":"Rosa e Ballo",
"Years":1944,
"Fund":"BTB Segn. 1336",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":null,
"Authors":"Not found",
"Title":"Yesterday and Today. A Comparative Anthology of Poetry",
"Cities":"New York",
"Publisher":"Harcourt, Brace & Co",
"Years":1926,
"Fund":"BTB Segn. 1353",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":null,
"Authors":"Yorick (Laurence Sterne)",
"Title":"Viaggio sentimentale lungo la Francia e l\u2019Italia.",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1942,
"Fund":"BTB Segn. 1316",
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":null,
"Authors":"Young, George Frederick",
"Title":"I Medici",
"Cities":"Firenze",
"Publisher":"Salani",
"Years":1949,
"Fund":"BTB Segn. 1583-1584",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":null,
"Authors":"Zamengo, Toni (Ta Nek)",
"Title":"Cani randagi",
"Cities":"s.l.",
"Publisher":"Tipografia editrice Amicucci",
"Years":1966,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":null,
"Authors":"Zamengo, Toni (Ta Nek)",
"Title":"Discorsi randagi",
"Cities":"s.l.",
"Publisher":"Tipografia editrice Amicucci",
"Years":1966,
"Fund":"BAL",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":null,
"Authors":"Zanazzo, Giggi",
"Title":"Poesie",
"Cities":"Roma",
"Publisher":"Letteratura",
"Years":1951,
"Fund":"BTB Segn. 739",
"Segni":"Invio autografo di P.P. Pasolini in data 3.10.1953. Postille.",
"Category":"IL"
},{
"Unnamed: 0":null,
"Authors":"Zanelli, Severino",
"Title":"Il reggimento cavalleria Piemonte reale (1692-1892)",
"Cities":"Citt\u00e0 di Castello",
"Publisher":"Lapi",
"Years":1892,
"Fund":"BTB Segn. 2281",
"Segni":null,
"Category":"S"
},{
"Unnamed: 0":null,
"Authors":"Zappelloni, Carlo",
"Title":"Incanti di Stresa e del Golfo",
"Cities":"Stresa ",
"Publisher":"Edizioni Alfredo Paulon",
"Years":1957,
"Fund":"BAL",
"Segni":null,
"Category":"G"
},{
"Unnamed: 0":null,
"Authors":"Zarco-Cuevas, F. Juli\u00e1n",
"Title":"Monasterio de San Lorenzo el Real de El Escorial y Casita del Principe",
"Cities":"s.l.",
"Publisher":"Tip. de los PP. Agustinos",
"Years":1949,
"Fund":"BTB Segn. 2309",
"Segni":null,
"Category":"SA"
},{
"Unnamed: 0":null,
"Authors":"Zeller, Edward",
"Title":"Compendio di storia della filosofia greca",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1921,
"Fund":"BTM",
"Segni":"Nota di possesso e data 18.05.1924, Milano. Sottolineature e postille.",
"Category":"F"
},{
"Unnamed: 0":null,
"Authors":"Zeller, Edward",
"Title":"Die Philosophie der Griechen",
"Cities":"Leipzig",
"Publisher":"Reisland",
"Years":1903,
"Fund":"BTB Segn. 1984-1989",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":null,
"Authors":"Zenoni, Giovanni",
"Title":"Manuale teorico-pratico di sintassi latina.",
"Cities":"Venezia",
"Publisher":"Sorteni e Vidotti",
"Years":1905,
"Fund":"BTB Segn. 2461",
"Segni":null,
"Category":"GR"
},{
"Unnamed: 0":null,
"Authors":"Zerilli Marim\u00f2, Guido",
"Title":"Crepuscolo e aurora della televisione",
"Cities":"Roma",
"Publisher":"De Luca ",
"Years":"s.d.",
"Fund":"BTB Segn. 1417",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":null,
"Authors":"Zerilli Marim\u00f2, Guido",
"Title":"I problemi sociali dell\u2019informazione",
"Cities":"Roma",
"Publisher":"Nuova Antologia",
"Years":1973,
"Fund":"BTB Segn. 1418",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":null,
"Authors":"Zerilli Marim\u00f2, Guido",
"Title":"Scuola e universit\u00e0 in Russia e in Cina",
"Cities":"Roma",
"Publisher":"Nuova Antologia",
"Years":1973,
"Fund":"BTB Segn. 2005",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":null,
"Authors":"Zerilli Marim\u00f2, Guido",
"Title":"Televisione: inutile parlare di dili genze in tempo di jets e di supersonici.Conferenza al Rotary Club di Roma, 28 marzo 1972.",
"Cities":"Roma",
"Publisher":"De Luca",
"Years":1972,
"Fund":"BTB Segn. 1419",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":null,
"Authors":"Zerilli Marim\u00f2, Guido",
"Title":"Televisioni all\u2019europea",
"Cities":"Roma",
"Publisher":"De Luca",
"Years":1971,
"Fund":"BTB Segn. 1420",
"Segni":"Postille dell\u2019autore.",
"Category":"V"
},{
"Unnamed: 0":null,
"Authors":"Zerilli Marim\u00f2, Guido",
"Title":"Trasmettere la verit\u00e0?",
"Cities":"Roma",
"Publisher":"De Luca",
"Years":1971,
"Fund":"BTB Segn. 1421",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":null,
"Authors":"Zerilli Marim\u00f2, Guido",
"Title":"TV. Un monopolio non pi\u00f9 giustificato una soluzione utile.",
"Cities":"Roma",
"Publisher":"IstitutoGrafico Tiberino",
"Years":1973,
"Fund":"BTB Segn. 1427",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":null,
"Authors":"Zerilli Marim\u00f2, Guido",
"Title":"TV: una \u00abriforma\u00bb non riformatrice",
"Cities":"Roma",
"Publisher":"De Luca",
"Years":1971,
"Fund":"BTB Segn. 1422",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":null,
"Authors":"Zerilli Marim\u00f2, Guido",
"Title":"Uomo televisione libert\u00e0. Fascicolo primo. La televisione nei paesi liberi e democratici",
"Cities":"Roma",
"Publisher":"De Luca",
"Years":1970,
"Fund":"BTB Segn. 1416",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":null,
"Authors":"Zerilli Marim\u00f2, Guido",
"Title":"La voce della Francia",
"Cities":"Roma",
"Publisher":"De Luca",
"Years":1971,
"Fund":"BTB Segn. 1428",
"Segni":null,
"Category":"V"
},{
"Unnamed: 0":null,
"Authors":"Zolla, El\u00e9mire",
"Title":"Eclissi dell\u2019intellettuale",
"Cities":"Milano",
"Publisher":"Bompiani",
"Years":1956,
"Fund":"BTB Segn. 905",
"Segni":null,
"Category":"F"
},{
"Unnamed: 0":null,
"Authors":"Zottoli, Angelandrea",
"Title":"Umili e potenti del Manzoni",
"Cities":"Roma",
"Publisher":"Tumminelli",
"Years":1942,
"Fund":"BTB Segn. 906",
"Segni":null,
"Category":"L"
},{
"Unnamed: 0":null,
"Authors":"Zuccante, Giuseppe",
"Title":"Giovanni Stuart Mill e l\u2019utilitarismo",
"Cities":"Firenze",
"Publisher":"Vallecchi",
"Years":1922,
"Fund":"BTB Segn. 2017",
"Segni":"Timbro della libreria italiana A. Mele di Buenos Aires. Nota di possesso autografa.",
"Category":"F"
},{
"Unnamed: 0":null,
"Authors":"Zucchi, Giuseppe",
"Title":"Un mondo materiale",
"Cities":"Padova",
"Publisher":"Rebellato",
"Years":1959,
"Fund":"BTB Segn. 740",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":null,
"Authors":"Zuccoli, Luciano",
"Title":"Per la sua bocca",
"Cities":"Milano",
"Publisher":"Treves",
"Years":1918,
"Fund":"BTB Segn. 741",
"Segni":null,
"Category":"IL"
},{
"Unnamed: 0":null,
"Authors":"Zuccoli, Luciano",
"Title":"La volpe di Sparta",
"Cities":"Milano",
"Publisher":"Treves",
"Years":1916,
"Fund":"BTB Segn. 742",
"Segni":"Nota di possesso autografa di Enrico Gadda in data 1.09.1917.",
"Category":"IL"
},{
"Unnamed: 0":null,
"Authors":"Zweig, Stefan",
"Title":"Fouch\u00e9",
"Cities":"Roma",
"Publisher":"Mondadori",
"Years":1945,
"Fund":"BTB Segn. 1712",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":null,
"Authors":"Zweig, Stefan",
"Title":"Maria Antonietta: una vita involontariamente eroica",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1948,
"Fund":"BAL",
"Segni":null,
"Category":"EL"
},{
"Unnamed: 0":null,
"Authors":"Zweig, Stefan",
"Title":"Maria Stuarda",
"Cities":"Milano",
"Publisher":"Mondadori",
"Years":1949,
"Fund":"BAL",
"Segni":null,
"Category":"EL"
}
];
// Number of items to display per page
const itemsPerPage = 50; // Change this to 100 for your case

// Initial page number
let currentPage = 1;

// Function to update the displayed items based on the current page
function updateItemsPerPage(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = page * itemsPerPage;
    const itemsToDisplay = jsonData.slice(startIndex, endIndex);
    displayCatalog(itemsToDisplay);

    // Update result count information
    const totalResults = jsonData.length;
    const startResult = startIndex + 1;
    const endResult = Math.min(endIndex, totalResults);
    document.getElementById("result-info").textContent = `Results ${startResult}-${endResult} of ${totalResults} total`;
    
    document.getElementById("page-info").textContent = `Page ${page}`;
}

// Function to display the catalog items
function displayCatalog(items) {
    const catalog = document.getElementById("catalog");
    catalog.innerHTML = '';

    items.forEach(item => {
        var entry = document.createElement("div");
        entry.classList.add("catalog-entry");
        entry.innerHTML = `
            <strong>${item.Authors}</strong><br>
            ${item.Title}<br>
            ${item.Cities} : ${item.Publisher}, ${item.Years}<br>
            ${item.Fund}<br>
            ${item.Segni || "[No additional information]"}<br>
            ${item.Category}
        `;
        catalog.appendChild(entry);
    });
}

// Handle pagination controls
document.getElementById("prev-page").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        updateItemsPerPage(currentPage);
    }
});

document.getElementById("next-page").addEventListener("click", () => {
    const totalPages = Math.ceil(jsonData.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        updateItemsPerPage(currentPage);
    }
});

// Initial display
updateItemsPerPage(currentPage);
