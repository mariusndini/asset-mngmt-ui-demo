function select_exchange(d){ //NOT USED AND DEPRECATED I BELIEVE - JUST SCARED TO DELETE
    gbl.exchange = d; 

    gbl.sql = `select SYMBOL AS SYMBOL, 'EXCHANGE' as EXCHANGE, MKTCAP as VALUE, 100 as EQ
        from ZEPL_US_STOCKS_DAILY.PUBLIC.COMPANY_PROFILE
        where exchange = '`+gbl.exchange+`'
        order by MKTCAP DESC
        limit 500`;
        
    getTreeMap(gbl.sql);
}

function add_stock_portolio(sym){
    gbl.portfolio.push(`'`+sym+`'`)
    console.log( gbl.portfolio );
}

function show_portfolio_chart(){
    gbl.sql = `select SYMBOL AS SYMBOL, 'EXCHANGE' as EXCHANGE, MKTCAP as VALUE, 100 as EQ
        from ZEPL_US_STOCKS_DAILY.PUBLIC.COMPANY_PROFILE
        where SYMBOL in (`+ gbl.portfolio.join() +`)
        order by MKTCAP DESC
        limit 500`;

    getTreeMap(gbl.sql);
}

function S_P_500(){
    showMenu('treeDiv');
    $('#indicies-side-bar').show();
    
    gbl.sql = `
            select SYMBOL AS SYMBOL, 'EXCHANGE' as EXCHANGE, 100 as EQ, PCT_CHANGE as PCT_CHANGE
            from STOCKS.ALPACA.PCT_CHANGE_SINCE_OPEN
            where SYMBOL in ('MMM','ABT','ABBV','ABMD','ACN','ATVI','ADBE','AMD','AAP','AES','AFL','A','APD','AKAM','ALK','ALB','ARE','ALXN','ALGN','ALLE','LNT','ALL','GOOGL','GOOG','MO','AMZN','AMCR','AEE','AAL','AEP','AXP','AIG','AMT','AWK','AMP','ABC','AME','AMGN','APH','ADI','ANSS','ANTM','AON','AOS','APA','AAPL','AMAT','APTV','ADM','ANET','AJG','AIZ','T','ATO','ADSK','ADP','AZO','AVB','AVY','BKR','BLL','BAC','BK','BAX','BDX','BRK.B','BBY','BIO','BIIB','BLK','BA','BKNG','BWA','BXP','BSX','BMY','AVGO','BR','BF.B','CHRW','COG','CDNS','CPB','COF','CAH','KMX','CCL','CARR','CTLT','CAT','CBOE','CBRE','CDW','CE','CNC','CNP','CERN','CF','SCHW','CHTR','CVX','CMG','CB','CHD','CI','CINF','CTAS','CSCO','C','CFG','CTXS','CLX','CME','CMS','KO','CTSH','CL','CMCSA','CMA','CAG','CXO','COP','ED','STZ','COO','CPRT','GLW','CTVA','COST','CCI','CSX','CMI','CVS','DHI','DHR','DRI','DVA','DE','DAL','XRAY','DVN','DXCM','FANG','DLR','DFS','DISCA','DISCK','DISH','DG','DLTR','D','DPZ','DOV','DOW','DTE','DUK','DRE','DD','DXC','EMN','ETN','EBAY','ECL','EIX','EW','EA','EMR','ETR','EOG','EFX','EQIX','EQR','ESS','EL','ETSY','EVRG','ES','RE','EXC','EXPE','EXPD','EXR','XOM','FFIV','FB','FAST','FRT','FDX','FIS','FITB','FE','FRC','FISV','FLT','FLIR','FLS','FMC','F','FTNT','FTV','FBHS','FOXA','FOX','BEN','FCX','GPS','GRMN','IT','GD','GE','GIS','GM','GPC','GILD','GL','GPN','GS','GWW','HAL','HBI','HIG','HAS','HCA','PEAK','HSIC','HSY','HES','HPE','HLT','HFC','HOLX','HD','HON','HRL','HST','HWM','HPQ','HUM','HBAN','HII','IEX','IDXX','INFO','ITW','ILMN','INCY','IR','INTC','ICE','IBM','IP','IPG','IFF','INTU','ISRG','IVZ','IPGP','IQV','IRM','JKHY','J','JBHT','SJM','JNJ','JCI','JPM','JNPR','KSU','K','KEY','KEYS','KMB','KIM','KMI','KLAC','KHC','KR','LB','LHX','LH','LRCX','LW','LVS','LEG','LDOS','LEN','LLY','LNC','LIN','LYV','LKQ','LMT','L','LOW','LUMN','LYB','MTB','MRO','MPC','MKTX','MAR','MMC','MLM','MAS','MA','MKC','MXIM','MCD','MCK','MDT','MRK','MET','MTD','MGM','MCHP','MU','MSFT','MAA','MHK','TAP','MDLZ','MNST','MCO','MS','MOS','MSI','MSCI','NDAQ','NOV','NTAP','NFLX','NWL','NEM','NWSA','NWS','NEE','NLSN','NKE','NI','NSC','NTRS','NOC','NLOK','NCLH','NRG','NUE','NVDA','NVR','ORLY','OXY','ODFL','OMC','OKE','ORCL','OTIS','PCAR','PKG','PH','PAYX','PAYC','PYPL','PNR','PBCT','PEP','PKI','PRGO','PFE','PM','PSX','PNW','PXD','PNC','POOL','PPG','PPL','PFG','PG','PGR','PLD','PRU','PEG','PSA','PHM','PVH','QRVO','PWR','QCOM','DGX','RL','RJF','RTX','O','REG','REGN','RF','RSG','RMD','RHI','ROK','ROL','ROP','ROST','RCL','SPGI','CRM','SBAC','SLB','STX','SEE','SRE','NOW','SHW','SPG','SWKS','SLG','SNA','SO','LUV','SWK','SBUX','STT','STE','SYK','SIVB','SYF','SNPS','SYY','TMUS','TROW','TTWO','TPR','TGT','TEL','FTI','TDY','TFX','TER','TSLA','TXN','TXT','TMO','TIF','TJX','TSCO','TT','TDG','TRV','TFC','TWTR','TYL','TSN','UDR','ULTA','USB','UAA','UA','UNP','UAL','UNH','UPS','URI','UHS','UNM','VLO','VAR','VTR','VRSN','VRSK','VZ','VRTX','VFC','VIAC','VTRS','V','VNT','VNO','VMC','WRB','WAB','WMT','WBA','DIS','WM','WAT','WEC','WFC','WELL','WST','WDC','WU','WRK','WY','WHR','WMB','WLTW','WYNN','XEL','XRX','XLNX','XYL','YUM','ZBRA','ZBH','ZION','ZTS')
            order by PCT_CHANGE DESC
            --order by SYMBOL ASC `;

    getTreeMap(gbl.sql);
}

function Nasdaq_QQQ(){
    showMenu('treeDiv');
    $('#indicies-side-bar').show();
    
    gbl.sql = `
            select SYMBOL AS SYMBOL, 'EXCHANGE' as EXCHANGE, 100 as EQ, PCT_CHANGE as PCT_CHANGE
            from STOCKS.ALPACA.PCT_CHANGE_SINCE_OPEN
            where SYMBOL in ('AAPL','ADBE','ADI','ADP','ADSK','AEP','ALGN','ALXN','AMAT','AMD','AMGN','AMZN','ANSS','ASML','ATVI','AVGO','BIDU','BIIB','BKNG','CDNS','CDW','CERN','CHKP','CHTR','CMCSA','COST','CPRT','CSCO','CSX','CTAS','CTSH','DLTR','DOCU','DXCM','EA','EBAY','EXC','FAST','FB','FISV','FOX','FOXA','GILD','GOOG','GOOGL','IDXX','ILMN','INCY','INTC','INTU','ISRG','JD','KDP','KHC','KLAC','LRCX','LULU','MAR','MCHP','MDLZ','MELI','MNST','MRNA','MRVL','MSFT','MTCH','MU','MXIM','NFLX','NTES','NVDA','NXPI','OKTA','ORLY','PAYX','PCAR','PDD','PEP','PTON','PYPL','QCOM','REGN','ROST','SBUX','SGEN','SIRI','SNPS','SPLK','SWKS','TCOM','TEAM','TMUS','TSLA','TXN','VRSK','VRSN','VRTX','WBA','WDAY','XEL','XLNX','ZM')
            order by PCT_CHANGE DESC
            --order by SYMBOL ASC `;

    getTreeMap(gbl.sql);
}

function DJI(){
    showMenu('treeDiv');
    $('#indicies-side-bar').show();
    
    gbl.sql = `
            select SYMBOL AS SYMBOL, 'EXCHANGE' as EXCHANGE, 100 as EQ, PCT_CHANGE as PCT_CHANGE
            from STOCKS.ALPACA.PCT_CHANGE_SINCE_OPEN
            where SYMBOL in ('UNH','HD','CRM','AMGN','MSFT','V','MCD','GS','BA','HON','MMM','JNJ','CAT','WMT','PG','DIS','AAPL','IBM','TRV','NKE','JPM','AXP','CVX','MRK','VZ','INTC','KO','DOW','CSCO','WBA')
            order by PCT_CHANGE DESC
            --order by SYMBOL ASC `;

    getTreeMap(gbl.sql);
}

var screenrSort = {col:'SYMBOL', type: 'asc'}
function showScreenr(){
    var exchange_filter = $('#exchange-input-select').find(':selected').text();
    var industry_filter = $('#industry-input-select').find(':selected').text();
    var sector_filter = $('#sector-input-select').find(':selected').text();
    var mc_start = $('#mc-start-input-select').find(':selected').text();
    var mc_end = $('#mc-end-input-select').find(':selected').text();
    var ticker = $('#ticker-input').val();

    console.log(mc_start, mc_end);

    var SQL = ` select SYMBOL, T, PCT_CHANGE, OFFICIALOPEN, HIGH, ACCUMULATEDVOLUME, AVERAGEPRICE, VWAP,
                       MKTCAP, LASTDIV, EXCHANGE, INDUSTRY, SECTOR, RANGE, SYM_ID::STRING AS SYM_ID
                from STOCKS.PUBLIC.SCREENER
                where true `;

    if(exchange_filter != 'All'){
        SQL += ` and EXCHANGE = '${exchange_filter}'`
    }

    if(industry_filter != 'All'){
        SQL += ` and INDUSTRY = '${industry_filter}'`
    }

    if(sector_filter != 'All'){
        SQL += ` and SECTOR = '${sector_filter}'`
    }
    if(ticker != ""){
        SQL += ` and SYMBOL like UPPER('%${ticker}%')`
    }

        SQL += ` and MKTCAP >= ${mc_start} * 100000000 and MKTCAP <= ${mc_end} * 1000000000 `
        
        SQL += ` order by ${screenrSort.col} ${screenrSort.type}
                limit 100`;


    $('#screenrDiv').html(' ')
        .append(`<table class="table table-sm table-dark table-hover" id='screenr-table'>
                    <thead></thead>
                </table>`)

    
    var th = `<tr>
                <th class="text-center" onclick='setScreenrOrder("1")' scope="col">🎫<br>Symbol</th>
                <td style='width:20px'></td>
                <th class="text-center" onclick='setScreenrOrder("2")' scope="col">⏰<br>Time</th>

                <th class="text-center" style='width:70px;' onclick='setScreenrOrder("11")' scope="col">🏛<br>Exchange</th>
                <th class="text-center" style='width:70px;' onclick='setScreenrOrder("12")' scope="col">🏭<br>Industry</th>
                <th class="text-center" style='width:70px;' onclick='setScreenrOrder("13")' scope="col">𑅀<br>Sector</th>


                <th class="text-center" onclick='setScreenrOrder("3")' scope="col">%<br>Pct Change</th>
                <th class="text-center" onclick='setScreenrOrder("4")' scope="col">👐<br>Open</th>
                <th class="text-center" onclick='setScreenrOrder("5")' scope="col">🏷<br>Price</th>
                <th class="text-center" onclick='setScreenrOrder("7")' scope="col">🏷<br>Avg Price</th>

                <th class="text-center" onclick='setScreenrOrder("6")' scope="col">💹<br>Volume</th>
                <th class="text-center" onclick='setScreenrOrder("8")' scope="col">𐄷<br>VWAP</th>
                <th class="text-center" onclick='setScreenrOrder("9")' scope="col">💰<br>Market Cap</th>

                <th class="text-center" onclick='setScreenrOrder("10")' scope="col">💸<br>Dividend</th>
                <th class="text-center" onclick='setScreenrOrder("14")' scope="col">↔️<br>Range</th>

                </tr>`;
    $('#screenr-table thead').append(th)
    
    $('#screenr-table').append(`<tbody style='background-color:black'></tbody>`)

    runSQL(gbl.sfconn, SQL).then((res)=>{
        gbl.screener_result = res;
        for( i=0; i <res.length; i++ ){
            var p = '';
            for(k=0; k < gbl.portfolio.length; k++){
                p +=`<div class="input-group mb-1">
                        <strong style='padding-left:10px; width:60%' onclick='showPortfolioBreakdown("${gbl.portfolio[k].name}", ${i})'><a href='#'>`+gbl.portfolio[k].name+`</a></strong>

                            <input type="number" style='50px' class="form-control" id='unit-buy-input-screenr-`+i+`-`+k+`' placeholder="Units" min="1"  aria-describedby="basic-addon1">
                            <button type="button" class="btn btn-dark" onclick='addAssetToPortfolio("${res[i].SYMBOL}",$("#unit-buy-input-screenr-`+i+`-`+k+`").val(), ${k}, "${res[i].SYM_ID}")'>👍</button>
    
                    </div>`;
            }
    
            var stock_popup = `<div class="btn-group dropright w-100">
                <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                <div class="dropdown-menu" x-placement="right-start" style="position: absolute; transform: translate3d(111px, 0px, 0px); top: 0px; left: 0px; will-change: transform; width:350px">
                <a class="dropdown-item" href="#" onclick="showAsset('${res[i].SYMBOL}', ${i} )">View Asset</a>
                <div class="dropdown-divider"></div>
                `+p+`
                </div>
            </div>`

            var tr = $(`<tr>`).append(`<td><a href='#' onclick="showAsset('${res[i].SYMBOL}', ${i} )">${res[i].SYMBOL}</a></td>
                                       <td>${stock_popup}</td>
                                       
                                       <td style='font-size:12px;'>${res[i].T}</td>
                                       <td style='font-size:10px;'>${res[i].EXCHANGE}</td>
                                       <td style='font-size:10px;'>${res[i].INDUSTRY}</td>
                                       <td style='font-size:10px;'>${res[i].SECTOR}</td>
                                       
                                       <td class="text-right" style='color:${(res[i].PCT_CHANGE>0)?"#05AC72":"#FF5639"}'>${(res[i].PCT_CHANGE+'').substring(0,5)}%</td>
                                       <td class="text-right" style='color:${(res[i].PCT_CHANGE>0)?"#05AC72":"#FF5639"}'>${parseFloat(res[i].OFFICIALOPEN).toLocaleString('en')}</td>
                                       <td class="text-right" style='color:${(res[i].PCT_CHANGE>0)?"#05AC72":"#FF5639"}'>${parseFloat(res[i].HIGH).toLocaleString('en')}</td>
                                       <td class="text-right" style='color:${(res[i].PCT_CHANGE>0)?"#05AC72":"#FF5639"}'>${parseFloat(res[i].AVERAGEPRICE).toLocaleString('en')}</td>                                       

                                       <td class="text-right" >${parseFloat(res[i].ACCUMULATEDVOLUME).toLocaleString('en')}</td>
                                       <td class="text-right" >${parseFloat(res[i].VWAP).toLocaleString('en')}</td>
                                       <td class="text-right" >${parseFloat(res[i].MKTCAP).toLocaleString('en')}</td>

                                       <td class="text-right" >${parseFloat(res[i].LASTDIV).toLocaleString('en')}</td>
                                       <td class="text-right">${res[i].RANGE}</td>
                                       `)
            
            $('#screenr-table tbody').append(tr)
        }

    })

    showMenu('screenrDiv'); 
    $('#screener-side-bar').show();
    
}

function setScreenrOrder(id){
    if(screenrSort.type == 'asc'){
        screenrSort.type = 'desc'
    }else{
        screenrSort.type = 'asc'
    }
    
    screenrSort.col = id;
    showScreenr();
}

function showProfile(){
    showMenu('profileDiv');
}

function showLeaderboard(){
    showMenu('all-leaderboard');

    var SQL = ` select NAME, USERTAG, ASSET_COUNT, VAL, TPMV, PROFITLOSS, PERFORMANCE_PCT
                from STOCKS.UI.PORTFOLIO_PERF
                order by performance_pct desc; `;

    runSQL(gbl.sfconn, SQL).then((res)=>{
        //console.log(res);
        $('#all-leaderboard tbody').html(' ')
        for( i=0; i <res.length; i++ ){
            var tr = $(`<tr>`).append(`<td> <a href='#' onclick='alert("Coming Soon")'>${res[i].NAME}</a>
                                       </td>

                    <td style='font-size:12px;' class="text-right">${res[i].USERTAG}</td>
                    <td class="text-right">${res[i].ASSET_COUNT}</td>
                    <td class="text-right" style='color:${(res[i].PERFORMANCE_PCT>0)?"#05AC72":"#FF5639"}'>${parseFloat(res[i].VAL).toLocaleString('en')}</td>
                    <td class="text-right" style='color:${(res[i].PERFORMANCE_PCT>0)?"#05AC72":"#FF5639"}'>${parseFloat(res[i].TPMV).toLocaleString('en')}</td>

                    <td class="text-right" style='color:${(res[i].PERFORMANCE_PCT>0)?"#05AC72":"#FF5639"}'>${parseFloat(res[i].PROFITLOSS).toLocaleString('en')}</td>
                    <td class="text-right" style='color:${(res[i].PERFORMANCE_PCT>0)?"#05AC72":"#FF5639"}'>${parseFloat(res[i].PERFORMANCE_PCT).toLocaleString('en')}%</td>
                `)

            $('#all-leaderboard tbody').append(tr)
        }

    })




}

function showAsset(t, index){
    var asset = gbl.screener_result[index]
    console.log(asset);

    $('#asset-ticker').html('🎫'+t + ' | $' + parseFloat(asset.HIGH).toLocaleString('en') );

    $('#asset-table-exchange').html(asset.EXCHANGE);
    $('#asset-table-industry').html(asset.INDUSTRY);
    $('#asset-table-sector').html(asset.SECTOR);

    $('#asset-table-mktcap').html(parseFloat(asset.MKTCAP).toLocaleString('en'));
    $('#asset-table-open').html(parseFloat(asset.OFFICIALOPEN).toLocaleString('en'));
    $('#asset-table-range').html(asset.RANGE);
    $('#asset-table-volume').html(parseFloat(asset.ACCUMULATEDVOLUME).toLocaleString('en'));

    $.ajax({
        type: "POST",
        url: 'https://api.openfigi.com/v2/search',
        data: '{"query":"'+t+'", "exchCode":"US"}',
        headers: {
            'Content-Type': 'text/json'
        },
        dataType: 'json',
        success: (data)=>{
            $('#figi-output-table').html(' ');
            var tr = ''
            var  data = data.data;
            for(i=0; i < data.length; i++){
                tr = tr + `<tr>
                    <th>${data[i].compositeFIGI }</th>
                    <th>${data[i].exchCode }</th>
                    <th>${data[i].figi }</th>
                    <th>${data[i].marketSector }</th>
                    <th>${data[i].name }</th>
                    <th>${data[i].securityDescription }</th>
                    <th>${data[i].securityType }</th>
                    <th>${data[i].securityType2 }</th>
                    <th>${data[i].shareClassFIGI }</th>
                    <th>${data[i].shareClassFIGI }</th>
                    <th>${data[i].ticker }</th>
                    <th>${data[i].uniqueID }</th>
                    <th>${data[i].uniqueIDFutOpt }</th>
                </tr>`
            }
            $('#figi-output-table').html(tr);
            console.log(data);
        },
      });

    showMenu('show-asset-div');
}

function showAllPortfolios(){
    showMenu('all-ports-Div');
    
    $('#all-ports-Div').html(' ')
        .append(`<table class="table table-sm table-dark table-hover" id='all-ports-table'><thead></thead></table>`);

    var th = `<tr>
            <th class="text-right" scope="col">ID</th>
            
            <th class="text-right" scope="col">Name</th>
            <th class="text-right" scope="col">Asset Count</th>
            <th class="text-right" scope="col">Profit/ Loss</th>
        </tr>`;
    $('#all-ports-table thead').append(th)

    $('#all-ports-table').append(`<tbody style='background-color:black'></tbody>`)

    for(i=0; i < gbl.portfolio.length; i++){
        var tr = $(`<tr>`).append(`<td class="text-right">${i}</td>
                <td class="text-right"><a href='#' onclick='showPortfolioBreakdown("${gbl.portfolio[i].name}", ${i})'>${gbl.portfolio[i].name}</a></td>
                <td class="text-right">${gbl.portfolio[i].assets.length}</td>
                <td class="text-right">${0}</td>`);                               
        
        $('#all-ports-table tbody').append(tr)
    }

}

function showMenu(menu){
    $('#treeDiv').hide();
    $('#screenrDiv').hide();
    $('#profileDiv').hide();
    $('#all-ports-Div').hide();
    $('#show-asset-div').hide();
    $('#portfolio-assets-div').hide();
    $('#indi-ports-Div').hide();
    $('#all-leaderboard').hide()
    
    //hide sidebar(s)
    $('#indicies-side-bar').hide();
    $('#screener-side-bar').hide();
    
    $('#'+menu).show();
}

function make_portfolio(name){
    var portfolio = {name : name, id: generateGuid(), assets:[]};
    gbl.portfolio.push(portfolio)
    $("#new-port-input").val('')

    $('#portfolio-dropdown').append(`<a class="dropdown-item" href="#" onclick='showPortfolioBreakdown("${name}", ${gbl.portfolio.length})' >`+portfolio.name+`</a>`)
    saveData()

    $('#portfolio-dropdown-profile').html(' ')
    for(i=0; i < gbl.portfolio.length; i++){
        $('#portfolio-dropdown-profile').append(`<b onclick='removePortfolio(`+i+`)'>🆇</b> <a href='#' onclick='showPortfolioBreakdown("${gbl.portfolio[i].name}", ${i})'>` +gbl.portfolio[i].name + `</a><br>`)
    }

}

function addAssetToPortfolio(asset, units, index, sym_id){
    if(units > 0){
        gbl.portfolio[index].assets.push({ticker:asset, units: units, sym_id: sym_id})
        console.log(gbl.portfolio[index])
    }
    //save locally
    saveData()
}

function showPortfolioBreakdown(port, index){
    $('#portfolio-id-in-div').html('💼' +port)
    var port = gbl.portfolio[index];
    var assets =  port.assets;
    var body = ''

    var tickers = $.map(assets, function(obj){
        return obj.sym_id
    }).join("','");

    var SQL = ` WITH
                MXDATE(SYMBOL, MAX_DATE, MX_PRICE) AS(
                    SELECT MT.SYMBOL, MAX(STARTTIME) as MAX_DATE, HIGH
                    FROM STOCKS.ALPACA.MINUTE_TICKS MT INNER JOIN(
                        SELECT SYMBOL, MAX(STARTTIME) AS T
                        FROM STOCKS.ALPACA.MINUTE_TICKS
                        GROUP BY 1
                    )MX ON MX.SYMBOL = MT.SYMBOL and MT.STARTTIME = MX.T
                    GROUP BY 1, 3
                )
                
                select s.symbol as symbol, MONTH(starttime)||'/'||DAY(starttime)||'/'||YEAR(starttime)||' '|| HOUR(starttime)||':'|| RIGHT('00'||MINUTE(starttime),2) as time, 
                       high, mx_price, S.ID
                from STOCKS.ALPACA.MINUTE_TICKS S 
                INNER JOIN MXDATE MD ON S.SYMBOL = MD.SYMBOL --AND MD.MAX_DATE = S.STARTTIME
                WHERE ID IN ('${tickers}')`;

    for(i=0; i < assets.length; i++){
        console.log(assets[i])
        body += `<tr class="text-right" id='div-tick-${assets[i].sym_id}'> 
                    <td class="text-left">${assets[i].ticker}</td>
                    <td id='p-time'>${' '}</td>
                    <td id='p-purchase-price'>${' '}</td>
                    <td id='p-current-price'>${' '}</td>
                    <td id='p-units'>${assets[i].units}</td>
                    <td id='p-cost'>${' '}</td>
                    <td id='p-fmv'>${' '}</td>
                    <td id='p-profit-loss'${' '}</td>
                </tr>`
    }

    runSQL(gbl.sfconn, SQL).then((res)=>{ 
        console.log(res);
        
        for (i=0; i < res.length; i++){
            var units = parseInt( $(`#div-tick-${res[i].ID} #p-units`).html() );
            var profits = (res[i].MX_PRICE * units) - (res[i].HIGH *  units);

            $(`#div-tick-${res[i].ID} #p-time`).html( res[i].TIME );

            $(`#div-tick-${res[i].ID} #p-purchase-price`)
                .html(parseFloat( res[i].HIGH ).toLocaleString('en'))
                .attr('style', `color:${(profits>0)?"#05AC72":"#FF5639"}`);

            $(`#div-tick-${res[i].ID} #p-current-price`)
                .html( parseFloat(res[i].MX_PRICE ).toLocaleString('en'))
                .attr('style', `color:${(profits>0)?"#05AC72":"#FF5639"}`);

            $(`#div-tick-${res[i].ID} #p-cost`)
                .html( parseFloat(res[i].HIGH *  units).toLocaleString('en'))
                .attr('style', `color:${(profits>0)?"#05AC72":"#FF5639"}`);

            $(`#div-tick-${res[i].ID} #p-fmv`)
                .html( parseFloat(res[i].MX_PRICE * units).toLocaleString('en'))
                .attr('style', `color:${(profits>0)?"#05AC72":"#FF5639"}`);

            $(`#div-tick-${res[i].ID} #p-profit-loss`)
                .html( parseFloat( profits ).toLocaleString('en') )
                .attr('style', `color:${(profits>0)?"#05AC72":"#FF5639"}`);

        }// end for

    });//end run sql


    $('#port-tbody').html( body )
    showMenu('indi-ports-Div'); // SHOW THE DIV



}

function randBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}



function initUI(){
    $('#user-id-profile').html(gbl.uuid);
    if(gbl.usertag == null){
        setUserTag('user-' + gbl.uuid.substring(0,8));
    }

    $('#user-tag-input').val(gbl.usertag)

    $('#portfolio-dropdown').html(`<div class="input-group mb-3">
                                        <input type="text" class="form-control" id='new-port-input' placeholder="New Portfolio Name"  aria-describedby="basic-addon1">
                                        <button type="button" class="btn btn-dark" onclick='make_portfolio($("#new-port-input").val())'>👍</button>
                                    </div>
                                    <div class="dropdown-divider"></div>
                                    
                                    <a class="dropdown-item" href="#" onclick="showAllPortfolios()"><strong>Show All</strong></a>`)

    for(i=0; i < gbl.portfolio.length; i++){
        //<b onclick='removePortfolio(`+i+`)'>🆇</b>
        $('#portfolio-dropdown').append(`<a class="dropdown-item" href="#" onclick='showPortfolioBreakdown("${gbl.portfolio[i].name}", ${i})'>` +gbl.portfolio[i].name+`</a>`)
    }

    //PROFILE PAGE IS UPDATED HERE HERE
    $('#portfolio-dropdown-profile').html(' ')
    for(i=0; i < gbl.portfolio.length; i++){
        $('#portfolio-dropdown-profile').append(`<b onclick='removePortfolio(`+i+`)'>🆇</b> <a href='#' onclick='showPortfolioBreakdown("${gbl.portfolio[i].name}", ${i})'>` +gbl.portfolio[i].name + `</a><br>`)
    }

    
}//end init ui


function generateGuid() {
    var result, i, j;
    result = '';
    for(j=0; j<32; j++) {
      if( j == 8 || j == 12 || j == 16 || j == 20)
        result = result + '-';
      i = Math.floor(Math.random()*16).toString(16).toUpperCase();
      result = result + i;
    }
    return result;
  }

function removePortfolio(index){
    gbl.portfolio.splice(index, 1)
    saveData();
    initUI();
}

function setUserTag(tag){
    gbl.usertag = tag;
    saveData();
}


const http = require("https");
function saveData(){
    localStorage.setItem("gbl", JSON.stringify(gbl) );

    var options = {
        "method": "POST",
        "hostname": "datapi1.p.rapidapi.com",
        "port": null,
        "path": "/set/snowflake-asset-ui-demo-"+gbl.uuid,
        "headers": {
            "content-type": "application/json",
            "x-rapidapi-key": "de599e61d7msh6ca875ed8566e5dp1b9b20jsndaa94d777f24",
            "x-rapidapi-host": "datapi1.p.rapidapi.com",
            "useQueryString": true
        }
    };
    
    var req = http.request(options, function (res) {
        const chunks = [];
    
        res.on("data", function (chunk) {
            chunks.push(chunk);
        });
    
        res.on("end", function () {
            const body = Buffer.concat(chunks);
            console.log(body.toString());
        });
    });
    
    req.write(JSON.stringify({uuid:gbl.uuid, usertag: gbl.usertag, portfolio: gbl.portfolio}));
    req.end();

}//end save data


