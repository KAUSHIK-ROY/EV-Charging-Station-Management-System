const { Station } = require('../models');

exports.getStations = async (req, res) => {
  const stations = await Station.findAll();
  res.json(stations);
};

exports.createStation = async (req, res) => {
  const station = await Station.create(req.body);
  res.json(station);
};

exports.updateStation = async (req, res) => {
  const updated = await Station.update(req.body, {
    where: { id: req.params.id }
  });
  res.json({ msg: 'Updated', updated });
};

exports.deleteStation = async (req, res) => {
  await Station.destroy({ where: { id: req.params.id } });
  res.json({ msg: 'Deleted' });
};
