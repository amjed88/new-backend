const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
});
let newtest = {};
newtest.postall = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT (postbl.id),(postbl.depar),(postbl.postitl),(postbl.date),(categuraytbl.categuray) from postbl INNER JOIN categuraytbl ON postbl.catid=categuraytbl.id', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });

    });

};
newtest.postone = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('select *from postbl where id=?', [id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results[0]);
        });

    });

};
newtest.postinsert = (depar, postitl,date,catid) => {
    return new Promise((resolve, reject) => {
        pool.query('insert into  postbl (depar,postitl,date,catid) values (?,?,?,?)', [depar, postitl,date,catid], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });

    });
};
newtest.postput = (depar, postitl,date,catid,id) => {
    return new Promise((resolve, reject) => {
        pool.query('update postbl set depar=?, postitl=?,date=?,catid=? where id=? ', [depar, postitl,date,catid,id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });

    });
};
newtest.postdelete = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('delete from  postbl where id=? ', [id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });

    });
};


module.exports = newtest;