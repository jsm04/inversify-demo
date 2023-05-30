export interface GenericRepository<TEntity, TKey> {
	findAll(): TEntity[] | null
	create(payload: TEntity): TEntity
	findById(id: TKey): TEntity | null
	update(id: TKey, payload: TEntity): TEntity | null
}
