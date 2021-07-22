let pg = require("pg")
const TelegramBot = require('node-telegram-bot-api');

const token = '1909295628:AAH2IaasIY45bEMigl785t99IIInD3TgtH4';
const bot = new TelegramBot(token, { polling: true });

const Pool = pg.Pool
const pool = new Pool({
    user: 'vynsdmcvqjjian',
    host: 'ec2-54-220-170-192.eu-west-1.compute.amazonaws.com',
    database: 'd18hevl0orgu57',
    password: 'c6db7d6c2dbe3a8d8d54017b670b7d6ac3414583debbc109a44e5977f720e122',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    },
})

bot.onText(/\/show/, function (msg, match) {
    let messageArray = msg.text.split(" ");
    messageArray.splice(0, 1);
    let messageWithout = messageArray.join(" ");

    pool.query("select  orders.id,movie_id,user_name,row_seat,movies.name, movies.price from orders join movies on movies.id = orders.movie_id where user_name = $1", [messageWithout], function (error, results) {
        for(let i = 0; i < results.rows.length; i++){
           let movies = results.rows[i];

            bot.sendMessage(msg.chat.id, 
                "Название:  " + movies.name + 
                "\nСтоимость:  " + movies.price
                );
        }
    }
    )
    
})

