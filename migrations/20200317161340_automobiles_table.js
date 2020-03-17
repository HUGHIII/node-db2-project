exports.up = function(knex) {
  return knex.schema.createTable("automobiles", tbl => {
    tbl.increments();

    tbl.string("make", 50).notNullable();

    tbl.string("model", 100).notNullable();

    tbl
      .string("VIN", 50)
      .notNullable()
      .unique();

    tbl.integer("mileage").notNullable();

    tbl.string("transmission", 20);

    tbl.string("title status", 50);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("automobiles");
};
