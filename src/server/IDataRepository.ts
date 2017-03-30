interface IDataRepository<T> {
    delete(T);
    get(id?: number): T|Array<T>;
    insert(T);
    update(T);
}
export default IDataRepository;
