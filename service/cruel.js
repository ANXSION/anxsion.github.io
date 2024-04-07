let propertyData = [
    ["01/2023",'Hatigisha #01', 'Plot with structure', '1_2023_cover.jpg','No data', ['7 Katha','Bastu','General', 'Freehold','12 ft','Residential','3BHK','G+1', '-', 'Available', 'Under progress', 'none'], ['0m','0m','0m','0m','0m','0m','0m'],['4500000','Mortgaged']],
    ["02/2023",'Pradhan Nagar #01', 'Apartment', '2_2023_cover.jpg','No data', ['Residential','2BHK','1st', '1200 Sq. ft.','12 ft','Available','2012','None'], ['0m','0m','0m','0m','0m','0m','0m'],['4500000','Mortgaged']],
    ["03/2023",'Pradhan Nagar #02', 'Apartment', '3_2023_cover.jpg','No data', ['Residential','3BHK','3rd', '1200 Sq. ft.','12 ft','Available','2013','None'], ['0m','0m','0m','0m','0m','0m','0m'],['3600000','Mortgaged']],
    ["01/2024",'Gossaipur #01', 'Plot', '1_2024_cover.jpg','No data', ['2.5 Bigha','Rupni','General', 'Freehold','14 ft','Gram Panchayat'], ['0m','0m','0m','0m','0m','0m','0m'],['17500000','Clear']],
    ["02/2024",'Pradhan Nagar #03', 'Apartment', '2_2024_cover.jpg','No data', ['Residential','3BHK','2nd', '-','12 ft','unavailable','2016','None'], ['0m','0m','0m','0m','0m','0m','0m'],['3800000','Mortgaged']]
];

let brandName = "_EBONYFROST";
let copyYear = "2024";

let injectedData, injectImage;

let nearby_Parameters = ['School', 'Hospital', 'Commerce', 'Highway', 'Railway', 'Airport', 'Seaport'];
let financial_Parameters = ['Price', 'Encumbrance'];

let plotwithstructure_Parameters = ['Size','Classification','Owner', 'Ownership','Road','Use', 'Layout', 'Floors', 'Area', 'Parking', 'Built', 'Revovation'];
let plot_Parameters = ['Size','Classification','Owner', 'Ownership','Road','Authority'];
let apartment_Parameters = ['Use', 'Layout', 'Floor', 'Area', 'Road', 'Parking', 'Built', 'Revovation'];

let logoCount = document.getElementsByClassName("logo");

for(let i = 0; i < logoCount.length; i++) {
    logoCount[i].innerText= brandName;
}

document.getElementById("copyYear").innerText= copyYear;

for (let cycle = 0; cycle < propertyData.length; cycle++){

    if(propertyData[cycle][2] == 'Plot with structure'){
        if (propertyData[cycle][4]=='No data'){
            injectImage = propertyData[cycle][4];
        }
        injectedData = `
        <details>
            <summary>
                <div class="displayCellL">
                    <img src="./listing/`+propertyData[cycle][3]+`" alt="" srcset="">
                </div>
                
                <div class="displayCellR">
                    <h1>`+propertyData[cycle][1]+`</h1>
                    <p>ITEM #`+propertyData[cycle][0]+`</p>
                    <p>`+propertyData[cycle][2]+`</p>
                </div>
            </summary>

            <br><br>
            <h1>Visuals</h1>
            <p>`+injectImage+`</p>

            <br><br>
            <h1>Land Specifications</h1>
            <div class="dataGrid">
                <p>`+plotwithstructure_Parameters[0]+`: `+propertyData[cycle][5][0]+`</p>
                <p>`+plotwithstructure_Parameters[1]+`: `+propertyData[cycle][5][1]+`</p>
                <p>`+plotwithstructure_Parameters[2]+`: `+propertyData[cycle][5][2]+`</p>
                <p>`+plotwithstructure_Parameters[3]+`: `+propertyData[cycle][5][3]+`</p>
                <p>`+plotwithstructure_Parameters[4]+`: `+propertyData[cycle][5][4]+`</p>
            </div>

            <br><br>
            <h1>Building Specifications</h1>
            <div class="dataGrid">
                <p>`+plotwithstructure_Parameters[5]+`: `+propertyData[cycle][5][5]+`</p>
                <p>`+plotwithstructure_Parameters[6]+`: `+propertyData[cycle][5][6]+`</p>
                <p>`+plotwithstructure_Parameters[7]+`: `+propertyData[cycle][5][7]+`</p>
                <p>`+plotwithstructure_Parameters[8]+`: `+propertyData[cycle][5][8]+`</p>
                <p>`+plotwithstructure_Parameters[9]+`: `+propertyData[cycle][5][9]+`</p>
                <p>`+plotwithstructure_Parameters[10]+`: `+propertyData[cycle][5][10]+`</p>
                <p>`+plotwithstructure_Parameters[11]+`: `+propertyData[cycle][5][11]+`</p>
            </div>

            <br><br>
            <h1>Nearby</h1>
            <div class="dataGrid">
                <p>`+nearby_Parameters[0]+`: `+propertyData[cycle][6][0]+`</p>
                <p>`+nearby_Parameters[1]+`: `+propertyData[cycle][6][1]+`</p>
                <p>`+nearby_Parameters[2]+`: `+propertyData[cycle][6][2]+`</p>
                <p>`+nearby_Parameters[3]+`: `+propertyData[cycle][6][3]+`</p>
                <p>`+nearby_Parameters[4]+`: `+propertyData[cycle][6][4]+`</p>
                <p>`+nearby_Parameters[5]+`: `+propertyData[cycle][6][5]+`</p>
                <p>`+nearby_Parameters[6]+`: `+propertyData[cycle][6][6]+`</p>
            </div>

            <br><br>
            <h1>Financials</h1>
            <div class="dataGrid">
                <p>`+financial_Parameters[0]+`: `+propertyData[cycle][7][0]+`</p>
                <p>`+financial_Parameters[1]+`: `+propertyData[cycle][7][1]+`</p>
            </div>
        </details>
        `;   
    }

    else if(propertyData[cycle][2] == 'Plot'){

        if (propertyData[cycle][4]=='No data'){
            injectImage = propertyData[cycle][4];
        }
        injectedData = `
        <details>
            <summary>
                <div class="displayCellL">
                    <img src="./listing/`+propertyData[cycle][3]+`" alt="" srcset="">
                </div>
                
                <div class="displayCellR">
                    <h1>`+propertyData[cycle][1]+`</h1>
                    <p>ITEM #`+propertyData[cycle][0]+`</p>
                    <p>`+propertyData[cycle][2]+`</p>
                </div>
            </summary>

            <br><br>
            <h1>Visuals</h1>
            <p>`+injectImage+`</p>

            <br><br>
            <h1>Land Specifications</h1>
            <div class="dataGrid">
                <p>`+plotwithstructure_Parameters[0]+`: `+propertyData[cycle][5][0]+`</p>
                <p>`+plotwithstructure_Parameters[1]+`: `+propertyData[cycle][5][1]+`</p>
                <p>`+plotwithstructure_Parameters[2]+`: `+propertyData[cycle][5][2]+`</p>
                <p>`+plotwithstructure_Parameters[3]+`: `+propertyData[cycle][5][3]+`</p>
                <p>`+plotwithstructure_Parameters[4]+`: `+propertyData[cycle][5][4]+`</p>
                <p>`+plotwithstructure_Parameters[5]+`: `+propertyData[cycle][5][5]+`</p>
            </div>

            <br><br>
            <h1>Nearby</h1>
            <div class="dataGrid">
                <p>`+nearby_Parameters[0]+`: `+propertyData[cycle][6][0]+`</p>
                <p>`+nearby_Parameters[1]+`: `+propertyData[cycle][6][1]+`</p>
                <p>`+nearby_Parameters[2]+`: `+propertyData[cycle][6][2]+`</p>
                <p>`+nearby_Parameters[3]+`: `+propertyData[cycle][6][3]+`</p>
                <p>`+nearby_Parameters[4]+`: `+propertyData[cycle][6][4]+`</p>
                <p>`+nearby_Parameters[5]+`: `+propertyData[cycle][6][5]+`</p>
                <p>`+nearby_Parameters[6]+`: `+propertyData[cycle][6][6]+`</p>
            </div>

            <br><br>
            <h1>Financials</h1>
            <div class="dataGrid">
                <p>`+financial_Parameters[0]+`: `+propertyData[cycle][7][0]+`</p>
                <p>`+financial_Parameters[1]+`: `+propertyData[cycle][7][1]+`</p>
            </div>
        </details>
        `;   
    }

    else if(propertyData[cycle][2] == 'Apartment'){
        if (propertyData[cycle][4]=='No data'){
            injectImage = propertyData[cycle][4];
        }
        injectedData = `
        <details>
            <summary>
                <div class="displayCellL">
                    <img src="./listing/`+propertyData[cycle][3]+`" alt="" srcset="">
                </div>
                
                <div class="displayCellR">
                    <h1>`+propertyData[cycle][1]+`</h1>
                    <p>ITEM #`+propertyData[cycle][0]+`</p>
                    <p>`+propertyData[cycle][2]+`</p>
                </div>
            </summary>

            <br><br>
            <h1>Visuals</h1>
            <p>`+injectImage+`</p>

            <br><br>
            <h1>Unit Specifications</h1>
            <div class="dataGrid">
                <p>`+apartment_Parameters[0]+`: `+propertyData[cycle][5][0]+`</p>
                <p>`+apartment_Parameters[1]+`: `+propertyData[cycle][5][1]+`</p>
                <p>`+apartment_Parameters[2]+`: `+propertyData[cycle][5][2]+`</p>
                <p>`+apartment_Parameters[3]+`: `+propertyData[cycle][5][3]+`</p>
                <p>`+apartment_Parameters[4]+`: `+propertyData[cycle][5][4]+`</p>
                <p>`+apartment_Parameters[5]+`: `+propertyData[cycle][5][5]+`</p>
                <p>`+apartment_Parameters[6]+`: `+propertyData[cycle][5][6]+`</p>
            </div>

            <br><br>
            <h1>Nearby</h1>
            <div class="dataGrid">
                <p>`+nearby_Parameters[0]+`: `+propertyData[cycle][6][0]+`</p>
                <p>`+nearby_Parameters[1]+`: `+propertyData[cycle][6][1]+`</p>
                <p>`+nearby_Parameters[2]+`: `+propertyData[cycle][6][2]+`</p>
                <p>`+nearby_Parameters[3]+`: `+propertyData[cycle][6][3]+`</p>
                <p>`+nearby_Parameters[4]+`: `+propertyData[cycle][6][4]+`</p>
                <p>`+nearby_Parameters[5]+`: `+propertyData[cycle][6][5]+`</p>
                <p>`+nearby_Parameters[6]+`: `+propertyData[cycle][6][6]+`</p>
            </div>

            <br><br>
            <h1>Financials</h1>
            <div class="dataGrid">
                <p>`+financial_Parameters[0]+`: `+propertyData[cycle][7][0]+`</p>
                <p>`+financial_Parameters[1]+`: `+propertyData[cycle][7][1]+`</p>
            </div>
        </details>
        `;   
    }
    
    document.getElementById('mainListing').insertAdjacentHTML('beforeend', injectedData);
}
