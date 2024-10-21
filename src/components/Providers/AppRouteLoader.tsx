export async function loader(props:any) {
    const faction = props.params.faction;
    const army = props.params.army;
    return {faction, army}
}