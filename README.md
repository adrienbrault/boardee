Boardee
=======

Meteor based dashboard to render graphs through the graphite render api.

Solves the following pain points of graphite or alternative dashboards:

* After editing a graph, the change is visible in the dashboards the graph is in
* Simple user authentication with readonly/write access

## Screenshots

![](https://raw.github.com/adrienbrault/boardee/master/screenshots/1.png)
![](https://raw.github.com/adrienbrault/boardee/master/screenshots/2.png)
![](https://raw.github.com/adrienbrault/boardee/master/screenshots/3.png)
![](https://raw.github.com/adrienbrault/boardee/master/screenshots/4.png)
![](https://raw.github.com/adrienbrault/boardee/master/screenshots/5.png)
![](https://raw.github.com/adrienbrault/boardee/master/screenshots/6.png)
![](https://raw.github.com/adrienbrault/boardee/master/screenshots/7.png)
![](https://raw.github.com/adrienbrault/boardee/master/screenshots/8.png)

### Getting Started

* Install [Meteor](http://docs.meteor.com/)

```bash
curl https://install.meteor.com | /bin/sh
```

* Install [Meteroite

```bash
npm install -g [meteorite](https://github.com/oortcloud/meteorite/)
```   

* Install dependencies 

```bash
 mrt install
```   

* Update config and set Graphite server URL

```bash
cp server/config.js{.dist,}
```  
  
```json
Config = {
    graphite_host: 'https://graphite.server.com/render',
    graphite_timezone: 'UTC'
};
```

* Run meteor 

```bash
jdyer@retina:~/Projects/graphite_stuff/boardee(master○) » meteor                                                                 1 ↵
[[[[[ ~/Projects/graphite_stuff/boardee ]]]]]

=> Meteor server running on: http://localhost:3000/
=> Meteor server restarted^C
```