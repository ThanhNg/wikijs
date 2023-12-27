exports.up = async knex => {
  await knex.schema
    .alterTable('pages', table => {
      table.integer('displayOrder')
    })
    .alterTable('pageHistory', table => {
      table.integer('displayOrder')
    })
    .alterTable('pageTree', table => {
      table.integer('displayOrder')
    })
}

exports.down = knex => { }
