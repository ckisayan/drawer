console.log("starting server.js");

const express = require("express");
const cors = require("cors");


const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
console.log("setting cors");
app.use(cors());
port = 9124;
app.get("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.json({ message: "Welcome to REST API application." });
 });
//app.get('/', (req,res) => {
//    console.log ('request recieved...');
//    res.send ('hello from node insdie IBMi!');
//});

require("./app/routes/supplychain.routes.js")(app);

function getpurchaseordersql(vendorNumber, ponumber){

    let sql = "SELECT PONUMBER, ORDERSTATUS, v.VENDORNUMBER, VendorName, VARCHAR_FORMAT(PODate, 'YYYY-MM-DD HH:MM:SS') as PODate, UserIdOrdered , ";    
    sql += " VARCHAR_FORMAT(add_hours(poDate, -8), 'YYYY-MM-DD HH24:MI:SS') as POdatePDT, "
    sql += "( select ";
	sql += "VARCHAR_FORMAT(sum( io.Quantity * i.UnitPriceAmt),'999,999.99') "
	sql += "from ckisayan1.itemOrd io "
	sql += "inner join ckisayan1.item i on io.ItemNumber = i.itemnumber	"
	sql += "where io.PONumber = p.PONumber "
	sql += "group by io.PONumber "
	sql += ") as OrderAmt "
    sql += "FROM ckisayan1.purchorder p "
    sql += "inner join ckisayan1.vendor v on v.vendorNumber = p.VENDORNUMBER "
    sql += "where 1 = 1 "
    if (vendorNumber.length>0){
        sql += " and v.VENDORNUMBER = '" +vendorNumber + "' ";
    }
    if (ponumber.length>0){
        sql += " and PONUMBER = '" +ponumber + "' ";
    }
    sql += " order by p.podate desc "
    sql += " FETCH FIRST 15 ROWS ONLY WITH UR; "
    return sql;
}

app.get("/api/supplychain/allitems", (req, res) => {
    //res.json({ message: "Welcome to REST API application." });
    var db2i = require("idb-connector");
    var dbconn = new db2i.dbconn();
    dbconn.conn('*LOCAL');
    var stm = new db2i.dbstmt(dbconn);   
    var sql = "SELECT ItemNumber, ItemShortDesc, UnitPriceAmt FROM ckisayan1.item FETCH FIRST 10 ROWS ONLY  WITH UR";

    const jsonData = [];
    stm.exec(sql, (results, err) => {
        if (err){
            console.log('error' , err)
        }else { 
            results.forEach(data => {
                console.log(data.ORDERSTATUS)  
                jsonData.push(data)              ;
            });        
        }
        console.log(results);
        
        //res.send (res);   
        stm.close();
        //dbconn.disconn();     
        res.json(jsonData);
    });
   
  });

  app.get("/api/supplychain/allvendors", (req, res) => {
    //res.json({ message: "Welcome to REST API application." });
    var db2i = require("idb-connector");
    var dbconn = new db2i.dbconn();
    dbconn.conn('*LOCAL');
    var stm = new db2i.dbstmt(dbconn);       
    let sql = "SELECT * FROM ckisayan1.vendor FETCH FIRST 5 ROWS ONLY WITH UR";

    const jsonData = [];
    stm.exec(sql, (results, err) => {
        if (err){
            console.log('error' , err)
        }else { 
            results.forEach(data => {
                console.log(data.ORDERSTATUS)  
                jsonData.push(data)              ;
            });        
        }
        console.log(results);
        
        //res.send (res);   
        stm.close();
        //dbconn.disconn();     
        res.json(jsonData);
    });
   
  });

  app.post("/api/supplychain/allpurchaseorders", (req, res) => {
    //res.json({ message: "Welcome to REST API application." });
    var db2i = require("idb-connector");
    var dbconn = new db2i.dbconn();
    dbconn.conn('*LOCAL');
    var stm = new db2i.dbstmt(dbconn);        

    let sql = getpurchaseordersql( req.body.vendornumber,req.body.ponumber);

    console.log (sql);

    const jsonData = [];
    stm.exec(sql, (results, err) => {
        if (err){
            console.log('error' , err)
        }else { 
            results.forEach(data => {
                //console.log(data.ORDERSTATUS)  
                jsonData.push(data)              ;
            });        
        }
        console.log(results);
        
        //res.send (res);   
        stm.close();
        //dbconn.disconn();     
        res.json(jsonData);
    });
   
  });
  app.get("/api/supplychain/purchaseorder/:id", (req, res) => {
    //res.json({ message: "Welcome to REST API application." });
    console.log (req.params.id);
    var db2i = require("idb-connector");
    var dbconn = new db2i.dbconn();
    dbconn.conn('*LOCAL');
    var stm = new db2i.dbstmt(dbconn);               
    let sql = "SELECT PONUMBER, ORDERSTATUS, VENDORNUMBER FROM ckisayan1.purchorder where PONumber = '" + req.params.id + "'  WITH UR";
    console.log (sql);
    const jsonData = [];
    stm.exec(sql, (results, err) => {
        if (err){
            console.log('error' , err)
        }else { 
            results.forEach(data => {
                //console.log(data.ORDERSTATUS)  
                jsonData.push(data)              ;
            });        
        }
        //console.log(results);
        
        //res.send (res);   
        stm.close();
        //dbconn.disconn();     
        res.json(jsonData);
    });
   
  });
  app.post("/api/supplychain/putpurchaseorder", (req, res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!",
        });
      }      
      let sql = "SELECT PONumber FROM FINAL TABLE ("
      sql += "INSERT INTO ckisayan1.PurchOrder (PODate, OrderStatus, UserIdOrdered,  VendorNumber)";      
      sql += " values (CURRENT_TIMESTAMP,";
      sql += " '" + req.body.orderStatus + "',";
      sql += " '" + req.body.userIdOrdered + "', ";
      sql += " " + req.body.vendorNumber + ") ";
      sql += ");"
      //sql += " RETURNING PONumber INTO ?";  
      //sql += " SELECT max(PONumber) FROM ckisayan1.PurchOrder";
      //sql += " SELECT IDENTITY_VAL_LOCAL() as insertedPO FROM SYSIBM.SYSDUMMY1;";
      console.log("about to execute query: " + sql);
      var db2i = require("idb-connector");
      var dbconn = new db2i.dbconn();
      dbconn.conn('*LOCAL');
      var stm = new db2i.dbstmt(dbconn);
      const jsonData = [];
      stm.exec(sql, (results, err) => {
        if (err) {
          console.error('Error executing insert statement:', err);
        } else {
            results?.forEach(data => {
                //console.log(data.ORDERSTATUS)  
                jsonData.push(data) ;
            });
          
        }             
    
        stm.close();
        dbconn.disconn();
        res.json(jsonData);
      });
      
  });


  app.post("/api/supplychain/putitemorder", (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!",
        });        
    }   
    let sql=""; 
    itemdata = req.body;
    sql += "INSERT INTO ckisayan1.ItemOrd (PONumber, ItemNumber, Quantity) values ";      
    let rcdcnt = 0;
    itemdata.forEach(elem => {
        if (rcdcnt>0) sql += ",";
        sql += "( " + elem.PONumber + ",";        
        sql += " " + elem.ItemNumber + ", ";
        sql += " " + elem.ItemQuanity + " ";
        sql += ") "
        rcdcnt+=1;
    });
    console.log("about to execute query: " + sql);
    var db2i = require("idb-connector");
    var dbconn = new db2i.dbconn();
    dbconn.conn('*LOCAL');
    var stm = new db2i.dbstmt(dbconn);
    const jsonData = [];
    stm.exec(sql, (results, err) => {
      if (err) {
        console.error('Error executing insert statement:', err);
      } else {
          results?.forEach(data => {
              //console.log(data.ORDERSTATUS)  
              jsonData.push(data) ;
          });        
      }             
  
      stm.close();
      dbconn.disconn();
      res.json(jsonData);
    });


  });


app.listen (port, () => console.log ('server started at port:' + port))
//app.listen(port, function ()
//{
//    console.log("server started...")
//});

