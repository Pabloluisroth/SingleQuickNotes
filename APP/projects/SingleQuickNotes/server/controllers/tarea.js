const logger = require('../config/logger');// logger
var Tarea = require('../models/tarea');

exports.list_all_tareas = function(req, res) {
  Tarea.find({}, function(err, tarea) {
    if (err) res.send(err);
    res.json(tarea);
    logger.info("listando todas las tareas");// mensjae para logger.........correct
  });
};

exports.create_tarea = function(req, res) {
  var new_tarea = new Tarea(req.body);
  new_tarea.save(function(err, tarea) {
    if (err) res.send(err);
    res.json(tarea);
    logger.info("Tarea creada correctamente");// mensjae para logger.........correct
  });
};

exports.read_tarea = function(req, res) {
  Tarea.findById(req.params.tareaId, function(err, tarea) {
    if (err) res.send(err);
    res.json(tarea);
    logger.info("Tarea leida correctamente");// mensjae para logger.........correct
  });
};

exports.update_tarea = function(req, res) {
  Tarea.findOneAndUpdate({_id: req.params.tareaId}, req.body, {new: true}, function(err, tarea) {
    if (err) res.send(err);
    res.json(tarea);
    logger.info("Tarea actualizada correctamente");
  });
};

exports.delete_tarea = function(req, res) {
  Tarea.deleteOne({_id: req.params.tareaId}, function(err, tarea) {
    if (err) res.send(err);
    res.json({ message: 'Tarea eliminada correctamente' });
    logger.info(" Tarea eliminada correctamente");// mensjae para logger.........correct
  });
};
