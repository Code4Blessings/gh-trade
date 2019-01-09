// Location select
export function LocationSelectMenu() {
  return (
    <select name="location">
      <option value="">Select Town (any)</option>
      <option value="ACCRA">Accra</option>
      <option value="KUMASI">Kumasi</option>
      <option value="GREATER ACCRA">Greater Accra</option>
      <option value="SEKONDI TAKORADI">Sekondi Takoradi</option>
      <option value="EASTERN">Eastern</option>
      <option value="ASHANTI">Ashanti</option>
      <option value="BRONG AHAFO">Brong Ahafo</option>
      <option value="CENTRAL">Central</option>
      <option value="NORTHERN">Northern</option>
      <option value="UPPER EAST">Upper East</option>
      <option value="UPPER WEST">Upper West</option>
      <option value="VOLTA">Volta</option>
      <option value="WESTERN">Western</option>
    </select>
  );
}
// Car type select
export function TypeSelectMenu() {
  return (
    <select name="type">
      <option value="">Type (any)</option>
      <option value="HATCH">Hatch</option>
      <option value="CONVERTIBLE">Convertible</option>
      <option value="COUPE">Coupe</option>
      <option value="MPV">Mpv</option>
      <option value="SEDAN">Sedan</option>
      <option value="SUV">Suv</option>
      <option value="PICKUP">Pickup</option>
      <option value="EASTATE">Estate</option>
    </select>
  );
}

// Transmission select
export function TransmissionSelectMenu() {
  return (
    <select name="transmission">
      <option value="">Gearbox (any)</option>
      <option value="Automatic">Automatic</option>
      <option value="Manual">Manual</option>
      <option value="Semi-Automatic">Semi-Automatic</option>
      <option value="Unlisted">Unlisted</option>
    </select>
  );
}

// Max price select
export function MaxPriceSelectMenu() {
  return (
    <select>
      <option value="">Max Price (any)</option>
      <option value="5000">To 5000</option>
      <option value="10000">To 10000</option>
      <option value="15000">To 15000</option>
      <option value="20000">To 20000</option>
      <option value="25000">To 25000</option>
      <option value="30000">To 30000</option>
      <option value="35000">To 35000</option>
      <option value="40000">To 40000</option>
      <option value="45000">To 45000</option>
      <option value="50000">To 50000</option>
      <option value="60000">To 60000</option>
      <option value="75000">To 75000</option>
      <option value="100000">To 100000</option>
      <option value="150000">To 150000</option>
    </select>
  );
}

// Transmission select
export function MinPriceSelectMenu() {
  return (
    <select>
      <option value="">Min Price (any)</option>
      <option value="0">From 0</option>
      <option value="1000">From 1000</option>
      <option value="5000">From 5000</option>
      <option value="10000">From 10000</option>
      <option value="15000">From 15000</option>
      <option value="20000">From 20000</option>
      <option value="25000">From 25000</option>
      <option value="30000">From 30000</option>
      <option value="35000">From 35000</option>
      <option value="40000">From 40000</option>
      <option value="45000">From 45000</option>
      <option value="50000">From 50000</option>
      <option value="60000">From 60000</option>
      <option value="75000">From 75000</option>
      <option value="100000">From 100000</option>
      <option value="150000">From 150000</option>
    </select>
  );
}

// Color select
export function ColorSelectMenu() {
  return (
    <select>
      <option value="">Colour (any)</option>
      <option value="Beige">Beige</option>
      <option value="Black">Black</option>
      <option value="Blue">Blue</option>
      <option value="Bronze">Bronze</option>
      <option value="Brown">Brown</option>
      <option value="Burgundy">Burgundy</option>
      <option value="Gold">Gold</option>
      <option value="Green">Green</option>
      <option value="Grey">Grey</option>
      <option value="Indigo">Indigo</option>
      <option value="Magenta">Magenta</option>
      <option value="Maroon">Maroon</option>
      <option value="Multicolour">Multicolour</option>
      <option value="Navy">Navy</option>
      <option value="Orange">Orange</option>
      <option value="Pink">Pink</option>
      <option value="Purple">Purple</option>
      <option value="Red">Red</option>
      <option value="Silver">Silver</option>
      <option value="Turquoise">Turquoise</option>
      <option value="Unlisted">Unlisted</option>
      <option value="White">White</option>
      <option value="Yellow">Yellow</option>
    </select>
  );
}

// Engine size select
export function EngineSizeSelectMenu() {
  return (
    <select name="engine-size">
      <option value="">Max engine size (any)</option>
      <option value="1.0">1.0L</option>
      <option value="1.2">1.2L</option>
      <option value="1.4">1.4L</option>
      <option value="1.6">1.6L</option>
      <option value="1.8">1.8L</option>
      <option value="1.9">1.9L</option>
      <option value="2.0">2.0L</option>
      <option value="2.2">2.2L</option>
      <option value="2.4">2.4L</option>
      <option value="2.6">2.6L</option>
      <option value="3.0">3.0L</option>
      <option value="3.5">3.5L</option>
      <option value="4.0">4.0L</option>
      <option value="4.5">4.5L</option>
      <option value="5.0">5.0L</option>
      <option value="5.5">5.5L</option>
      <option value="6.0">6.0L</option>
      <option value="6.5">6.5L</option>
      <option value="7.0">7.0L</option>
    </select>
  );
}

// Year select
export function YearSelectMenu() {
  return (
    <select name="year-from">
      <option value="">Year from (any)</option>
      <option value="new">Brand New</option>
      <option value="2018">2018</option>
      <option value="2017">2017</option>
      <option value="2016">2016</option>
      <option value="2015">2015</option>
      <option value="2014">2014</option>
      <option value="2013">2013</option>
      <option value="2012">2012</option>
      <option value="2011">2011</option>
      <option value="2010">2010</option>
      <option value="2009">2009</option>
      <option value="2008">2008</option>
      <option value="2007">2007</option>
      <option value="2006">2006</option>
      <option value="2005">2005</option>
      <option value="2004">2004</option>
      <option value="2003">2003</option>
      <option value="2002">2002</option>
      <option value="2001">2001</option>
      <option value="2000">2000</option>
      <option value="1995">1995</option>
      <option value="1990">1990</option>
      <option value="1980">1980</option>
      <option value="1970">1970</option>
      <option value="1960">1960</option>
      <option value="1950">1950</option>
      <option value="1940">1940</option>
      <option value="1920">1920</option>
    </select>
  );
}

// Mileage select
export function MileageSelectMenu() {
  return (
    <select name="maximum-mileage">
      <option value="">Mileage (any)</option>
      <option value="0">Up to 0 miles</option>
      <option value="5000">Up to 5,000 miles</option>
      <option value="10000">Up to 10,000 miles</option>
      <option value="20000">Up to 20,000 miles</option>
      <option value="30000">Up to 30,000 miles</option>
      <option value="50000">Up to 50,000 miles</option>
      <option value="80000">Up to 80,000 miles</option>
      <option value="100000">Up to 100,000 miles</option>
      <option value="125000">Up to 125,000 miles</option>
      <option value="150000">Up to 150,000 miles</option>
      <option value="200000">Up to 200,000 miles</option>
    </select>
  );
}

// Car make select
export function MakeSelectMenu() {
  return (
    <select name="make">
      <option value="">Make (any)</option>
      <option value="ABARTH">Abarth</option>
      <option value="ALFA ROMEO">Alfa Romeo</option>
      <option value="ALPINE">Alpine</option>
      <option value="ARIEL">Ariel</option>
      <option value="ASTON MARTIN">Aston Martin</option>
      <option value="AUDI">Audi</option>
      <option value="BAC">Bac</option>
      <option value="BENTLEY">Bentley</option>
      <option value="BMW">BMW</option>
      <option value="CADILLAC">Cadillac</option>
      <option value="CATERHAM">Caterham</option>
      <option value="CHEVROLET">Chevrolet</option>
      <option value="CHRYSLER">Chrysler</option>
      <option value="CITROEN">Citroen</option>
      <option value="DACIA">Dacia</option>
      <option value="DAIHATSU">Daihatsu</option>
      <option value="DAIMLER">Daimler</option>
      <option value="DAX">DAX</option>
      <option value="DE TOMASO">De Tomaso</option>
      <option value="DODGE">Dodge</option>
      <option value="DS AUTOMOBILES">DS Automobiles</option>
      <option value="FERRARI">Ferrari</option>
      <option value="FIAT">Fiat</option>
      <option value="FORD">Ford</option>
      <option value="GBS">Gbs</option>
      <option value="GREAT WALL">Great Wall</option>
      <option value="HONDA">Honda</option>
      <option value="HUDSON">Hudson</option>
      <option value="HUMMER">Hummer</option>
      <option value="HYUNDAI">Hyundai</option>
      <option value="INFINITI">Infiniti</option>
      <option value="ISUZU">Isuzu</option>
      <option value="JAGUAR">Jaguar</option>
      <option value="JEEP">Jeep</option>
      <option value="KIA">Kia</option>
      <option value="KTM">KTM</option>
      <option value="LAMBORGHINI">Lamborghini</option>
      <option value="LANCIA">Lancia</option>
      <option value="LAND ROVER">Land Rover</option>
      <option value="LEXUS">Lexus</option>
      <option value="LINCOLN">Lincoln</option>
      <option value="LOTUS">Lotus</option>
      <option value="MAHINDRA">Mahindra</option>
      <option value="MASERATI">Maserati</option>
      <option value="MAZDA">Mazda</option>
      <option value="MCLAREN">McLaren</option>
      <option value="MERCEDES-BENZ">Mercedes-Benz</option>
      <option value="MG">MG</option>
      <option value="MINI">MINI</option>
      <option value="MITSUBISHI">Mitsubishi</option>
      <option value="MNR">Mnr</option>
      <option value="MORGAN">Morgan</option>
      <option value="NISSAN">Nissan</option>
      <option value="OPEL">Opel</option>
      <option value="PERODUA">Perodua</option>
      <option value="PEUGEOT">Peugeot</option>
      <option value="PORSCHE">Porsche</option>
      <option value="PROTON">Proton</option>
      <option value="RENAULT">Renault</option>
      <option value="REPLICA">Replica</option>
      <option value="ROLLS-ROYCE">Rolls-Royce</option>
      <option value="ROVER">Rover</option>
      <option value="ROYALE">Royale</option>
      <option value="SAAB">Saab</option>
      <option value="SANTANA">Santana</option>
      <option value="SEAT">SEAT</option>
      <option value="SEBRING">Sebring</option>
      <option value="SKODA">SKODA</option>
      <option value="SMART">Smart</option>
      <option value="SSANGYONG">Ssangyong</option>
      <option value="SUBARU">Subaru</option>
      <option value="SUZUKI">Suzuki</option>
      <option value="TESLA">Tesla</option>
      <option value="TOYOTA">Toyota</option>
      <option value="TRIUMPH">Triumph</option>
      <option value="TVR">TVR</option>
      <option value="VAUXHALL">Vauxhall</option>
      <option value="VOLKSWAGEN">Volkswagen</option>
      <option value="VOLVO">Volvo</option>
      <option value="WESTFIELD">Westfield</option>
      <option value="YAMAHA">Yamaha</option>
      <option value="ZENOS">Zenos</option>
    </select>
  );
}
