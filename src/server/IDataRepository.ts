interface IDataRepository<T> {
    delete(id: number): number;
    get(id?: number): T|Array<T>;
    insert(T): T;
    update(T): number;
}
export default IDataRepository;
