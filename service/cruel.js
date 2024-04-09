let propertyData = [
    ['01/2023','Hatigisha #01', 'Plot with structure', '1_2023_cover.jpg', 'No data', [5040, 'Bastu', 'General', 'Freehold','12 ft','Residential','3BHK','G+1', '-', 'Available', 'Under construction', 'none'], ['0m','0m','0m','0m','0m','0m','0m'],[3800000,'Financed']],
    ['02/2023','Pradhan Nagar #01', 'Apartment', '2_2023_cover.jpg','No data', [1200, 'Residential', '2BHK', '1st', '12 ft', 'Available', 2012, 'None'], ['0m','0m','0m','0m','0m','0m','0m'],[4200000,'None']],
    ['03/2023','Pradhan Nagar #02', 'Apartment', '3_2023_cover.jpg','No data', [1200, 'Residential', '3BHK', '3rd', '12 ft', 'Available', 2013, 'None'], ['0m','0m','0m','0m','0m','0m','0m'],[4800000,'None']],
    ['01/2024','Gossaipur #01', 'Plot', '1_2024_cover.jpg','No data', [36000,'Rupni','General', 'Freehold','14 ft','Gram Panchayat'], ['0m','0m','0m','0m','0m','0m','0m'],[15000000,'None']],
    ['02/2024','Pradhan Nagar #03', 'Apartment', '2_2024_cover.jpg',['2_2024_1.jpg', '2_2024_2.jpg', '2_2024_3.jpg','2_2024_4.jpg'], [1200, 'Residential','3BHK','2nd','12 ft','unavailable',2016,'None'], ['0m','0m','0m','0m','0m','0m','0m'],[3200000,'Financed']]
];

const dateEvents = new Date();
const contractDateShort = new Date();
const contractDateMid = new Date();
const contractDateLong = new Date() ;

const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};

let brandName = "Tyrant's Hold";
let copyYear = dateEvents.getFullYear();

let injectedData, injectImage, injectUpperdata, injectLowerdata, injectSpecifications, injectContracts, ageData, contractData;
let sizeFactor = 720;
let marginTarget = 0.10;

let nearby_Parameters = ['School', 'Hospital', 'Commerce', 'Highway', 'Railway', 'Airport', 'Seaport'];
let financial_Parameters = ['Base Price', 'Per unit', 'Encumbrance'];
let contract_Parameters = ['Purchase Date', 'Prepayment', 'Sale Price', 'Ask Price'];

let sizeMetric = ['Sq. ft.', 'Katha', 'Decimal', 'Biga', 'Acre'];

let plotwithstructure_Parameters = ['Size', 'Classification', 'Owner', 'Ownership', 'Road', 'Use', 'Layout', 'Floors', 'Area', 'Parking', 'Built', 'Revovation'];
let plot_Parameters = ['Size', 'Classification', 'Owner', 'Ownership', 'Road', 'Authority'];
let apartment_Parameters = ['Size', 'Use', 'Layout', 'Floor', 'Road', 'Parking', 'Built', 'Revovation'];

contractDateShort.setDate(contractDateShort.getDate()+ 7);
contractDateMid.setDate(contractDateMid.getDate()+ 15);
contractDateLong.setDate(contractDateLong.getDate()+ 30);


let logoCount = document.getElementsByClassName("logo");

for(let i = 0; i < logoCount.length; i++) {
    logoCount[i].innerText= brandName;
}

document.getElementById("copyYear").innerText= copyYear;

for (let cycle = 0; cycle < propertyData.length; cycle++){
    contractData = [
        [
            contractDateShort.toLocaleDateString('en-IN', options),
            contractDateMid.toLocaleDateString('en-IN', options),
            contractDateLong.toLocaleDateString('en-IN', options)
        ], 
        [
            Math.round(0.09 * propertyData[cycle][7][0]),
            Math.round(0.06 * propertyData[cycle][7][0]),
            Math.round(0.03 * propertyData[cycle][7][0])
        ], 
        [
            Math.round(propertyData[cycle][7][0] - (0.05 * propertyData[cycle][7][0])),
            Math.round(propertyData[cycle][7][0] - (0.03 * propertyData[cycle][7][0])),
            Math.round(propertyData[cycle][7][0] - (0.01 * propertyData[cycle][7][0])),
        ],
        (propertyData[cycle][7][0] + Math.round(propertyData[cycle][7][0] * marginTarget))
    ];

    injectContracts=`
    <h1>Prebook Options</h1>
    <table>
        <tr>
            <th>`+contract_Parameters[0]+`</th>
            <th>`+contract_Parameters[1]+`</th>
            <th>`+contract_Parameters[2]+`</th>
            <th>`+contract_Parameters[3]+`</th>
        </tr>
        <tr>
            <td>`+contractData[0][0]+`</td>
            <td>`+contractData[1][0]+`</td>
            <td>`+contractData[2][0]+`</td>
            <td>`+contractData[3]+`</td>
        </tr>
        <tr>
            <td>`+contractData[0][1]+`</td>
            <td>`+contractData[1][1]+`</td>
            <td>`+contractData[2][1]+`</td>
            <td>`+contractData[3]+`</td>
        </tr>
        <tr>
            <td>`+contractData[0][2]+`</td>
            <td>`+contractData[1][2]+`</td>
            <td>`+contractData[2][2]+`</td>
            <td>`+contractData[3]+`</td>
        </tr>
    </table>`;

    injectUpperdata = `
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
    `;

    injectLowerdata = `
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
        <p>`+financial_Parameters[0]+`: `+ (propertyData[cycle][7][0] + Math.round(propertyData[cycle][7][0] * marginTarget)) +`</p>
        <p>`+financial_Parameters[1]+`: `+ Math.round(propertyData[cycle][7][0] / propertyData[cycle][5][0])+` / `+ sizeMetric[0] +`</p>
        <p>`+financial_Parameters[2]+`: `+propertyData[cycle][7][1]+`</p>
    </div>
    `;

    if (propertyData[cycle][4]=='No data'){
        
        injectImage = `
        <h1>Visuals</h1>
        <div class="visualGrid">
            <p>`+propertyData[cycle][4]+`</p>
        </div>
        `;
    }

    else{
        injectImage=`
        <h1>Visuals</h1>
        <div class="visualGrid">
            <img src="./listing/`+propertyData[cycle][4][0]+`" alt="" srcset="">
            <img src="./listing/`+propertyData[cycle][4][1]+`" alt="" srcset="">
            <img src="./listing/`+propertyData[cycle][4][2]+`" alt="" srcset="">
            <img src="./listing/`+propertyData[cycle][4][3]+`" alt="" srcset="">
        </div>
        `;
    }

    if(propertyData[cycle][2] == 'Plot with structure'){

        if(propertyData[cycle][5][10]=='Under construction'){
            ageData = propertyData[cycle][5][10];
        }
        else{
            ageData = dateEvents.getFullYear() - propertyData[cycle][5][10];
        }

        injectSpecifications = `
        <h1>Land Specifications</h1>
        <div class="dataGrid">
            <p>`+plotwithstructure_Parameters[0]+`: `+ Math.round(propertyData[cycle][5][0])+ ` Sq. ft. (` +(propertyData[cycle][5][0] / sizeFactor)+` `+ sizeMetric[1] +`)`+`</p>
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
            <p>`+plotwithstructure_Parameters[10]+`: `+ageData+`</p>
            <p>`+plotwithstructure_Parameters[11]+`: `+propertyData[cycle][5][11]+`</p>
        </div>
        `;   
    }
    

    else if(propertyData[cycle][2] == 'Plot'){

        injectSpecifications = `
        <h1>Land Specifications</h1>
        <div class="dataGrid">
            <p>`+plot_Parameters[0]+`: `+ Math.round(propertyData[cycle][5][0])+ ` Sq. ft. (` +(propertyData[cycle][5][0] / sizeFactor)+` `+ sizeMetric[1] +`)`+`</p>
            <p>`+plot_Parameters[1]+`: `+propertyData[cycle][5][1]+`</p>
            <p>`+plot_Parameters[2]+`: `+propertyData[cycle][5][2]+`</p>
            <p>`+plot_Parameters[3]+`: `+propertyData[cycle][5][3]+`</p>
            <p>`+plot_Parameters[4]+`: `+propertyData[cycle][5][4]+`</p>
            <p>`+plot_Parameters[5]+`: `+propertyData[cycle][5][5]+`</p>
        </div>
        `;   
    }

    else if(propertyData[cycle][2] == 'Apartment'){

        if(propertyData[cycle][5][10]=='Under construction'){
            ageData = propertyData[cycle][5][10];
        }
        else{
            ageData = dateEvents.getFullYear() - propertyData[cycle][5][6];
        }

        injectSpecifications = `
        <h1>Unit Specifications</h1>
        <div class="dataGrid">
            <p>`+apartment_Parameters[0]+`: `+propertyData[cycle][5][0]+` Sq. ft</p>
            <p>`+apartment_Parameters[1]+`: `+propertyData[cycle][5][1]+`</p>
            <p>`+apartment_Parameters[2]+`: `+propertyData[cycle][5][2]+`</p>
            <p>`+apartment_Parameters[3]+`: `+propertyData[cycle][5][3]+`</p>
            <p>`+apartment_Parameters[4]+`: `+propertyData[cycle][5][4]+`</p>
            <p>`+apartment_Parameters[5]+`: `+propertyData[cycle][5][5]+`</p>
            <p>`+apartment_Parameters[6]+`: `+ageData+` Years</p>
            <p>`+apartment_Parameters[7]+`: `+propertyData[cycle][5][7]+`</p>
        </div>
        `;   
    }

    injectedData = `
        <details>
            `+injectUpperdata+`
            <br><br>
            `+injectImage+`
            <br><br>
            `+injectSpecifications+`
            <br><br>
            `+injectLowerdata+`
            <br><br>
            `+injectContracts+`
            <br><br>
        </details>
        `;

    document.getElementById('mainListing').insertAdjacentHTML('beforeend', injectedData);
}
