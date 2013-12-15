Boardee
=======

Meteor based dashboard to render graphs through the graphite render api.

Solves the following pain points of graphite or alternative dashboards:

* After editing a graph, the change is visible in the dashboards the graph is in
* Simple user authentication with readonly/write access

## Getting Started

* Install [Meteor](http://docs.meteor.com/)

```bash
curl https://install.meteor.com | /bin/sh
```

* Install [Meteorite](https://github.com/oortcloud/meteorite/)

```bash
npm install -g meteorite
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

* Run meteorite (This will install any required dependency)

```bash
$ mrt
[[[[[ boardee ]]]]]

=> Meteor server running on: http://localhost:3000/
=> Meteor server restarted
```


## Screenshots

![](https://raw.github.com/adrienbrault/boardee/master/screenshots/1.png)
![](https://raw.github.com/adrienbrault/boardee/master/screenshots/2.png)
![](https://raw.github.com/adrienbrault/boardee/master/screenshots/3.png)
![](https://raw.github.com/adrienbrault/boardee/master/screenshots/4.png)
![](https://raw.github.com/adrienbrault/boardee/master/screenshots/5.png)
![](https://raw.github.com/adrienbrault/boardee/master/screenshots/6.png)
![](https://raw.github.com/adrienbrault/boardee/master/screenshots/7.png)
![](https://raw.github.com/adrienbrault/boardee/master/screenshots/8.png)
