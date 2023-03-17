//Как вы, вероятно, знаете, существует HTTP-заголовок Referer, 
//который обычно содержит адрес страницы, инициировавшей сетевой запрос.
//Accept: */*
// Accept-Charset: utf-8
// Accept-Encoding: gzip,deflate,sdch
// Connection: keep-alive
// Host: google.com
// Origin: http://javascript.info
// Referer: http://javascript.info/some/url

// Почему нужен Origin, если Referer содержит даже больше информации?
// Возможно ли отсутствие Referer или Origin, или это неправильно?

//Refer может отсутствовать, поэтому был изобретен Origin, который гарантировано будет передан