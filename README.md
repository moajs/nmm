# nmm

node moa manager


## todo

以entity作为模块，发布到npmjs.org上，以期达到复用的目的

### 抽取插件

```
nmm extract user to vendor/moa-user
```

### 安装插件

```
nmm install user = moag user xxxx:string ...
```

### 移除插件

```
nmm uninstall user
```

### 为moa项目创建symlink

```
nmm link moa-user
```

### 为moa项目移除symlink

```
nmm unlink moa-user
```

### 发布插件


```
nmm publish moa-user
```
