В чём моя ошибка? 


Failed to compile.

src\components\Sofa\sofa.js
  Line 8:23:   'props' is not defined  no-undef
  Line 12:16:  'sofa' is not defined   no-undef

src\components\Table\table.js
  Line 11:16:  'table' is not defined  no-undef

src\components\Wardrobe\wardrobe.js
  Line 1:16:  'wardrobe' is not defined  no-undef

src\components\myRoom\myRoom.js
  Line 17:3:   'Sofa' is not defined     react/jsx-no-undef
  Line 18:3:   'Chair' is not defined    react/jsx-no-undef
  Line 18:19:  'ChairIt' is not defined  no-undef
  Line 22:16:  'myRoom' is not defined   no-undef


# Домашнее задание №3

## 3.0 На основе main создать ветку 3

### Выполнено.

## 3.1 Перенести все компоненты в соответствующие подпапки внутри папки components, например, Appartment.js в подпапку Appartment, App.js, внутри App и т.д.

### Выполнено.

## 3.2 Хотя бы один компонент должен подключать стили одним через import css файла

### Выполнено. Это компонент myRoom.

## 3.3 Хотя бы один компонент должен подключать стили одним через import css модуля, убедиться, что в верстке к классу добавляется префикс и постфикс
### Выполнено. Это компонент Chair.

## 3.4  Установить node-sass через команду npm install node-sass --save

### Выполнено.

## 3.5 Хотя бы один компонент должен подключать стили одним через import scss файла

### Выполнено. Это компонент Table.

## 3.6 Хотя бы один компонент должен подключать стили одним через import scss модуля, создать scss селектор, убедиться, что в верстке к классу добавляется префикс и постфикс

### Выполнено. Это компонент Sofa.

## 3.7 Хотя бы в одном родительском компоненте реализовать передачу данных в дочерний компонент через props
### Выполнено. myRoom =>sofa

## 3.8 одном родительском компоненте реализовать передачу функции в дочерний компонент через props

### Выполнено. myRoom =>Chair

## 3.9 одном родительском компоненте реализовать передачу children в дочерний компонент через props

### Выполнено. myRoom =>Chair

## 3.10  установить экстеншн eslint, установить галочку format on save убедиться, пройтись по всем js файлам и сохраняя файлы убедиться, что весь код корректно отформатирован

### !!!!!

## 3.11 Поднять пиар из 3 в main

### Выполнено.

## 3.12* Изучить React без JSX

### Выполнено.

## 3.13* Изучить Знакомство с JSX

### Выполнено.

## 3.14* Изучить Компоненты и пропсы

### Выполнено.