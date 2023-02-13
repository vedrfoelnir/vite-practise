export default function Update() {
    return (
        <>
            <div id="update-section" className="section" style={{ display: "none" }}>
                <div id="update-entry-form" className="form">
                    <form action="javascript:void(0);" id="saveEdit" className="form-container">
                        <div className="addicon-popup">
                            <img src="./assets/images/edit-256.png" alt="" width="20%" />
                        </div>
                        <label htmlFor="type">Baumart</label>
                        <input type="text" id="edit-tree" name="type"  />
                        <label htmlFor="street">Straße und Hausnummer</label>
                        <input type="text" id="edit-address" name="street"  />
                        <label htmlFor="plz">PLZ</label>
                        <input type="text" id="edit-plz" name="plz"  />
                        <label htmlFor="city">Stadt</label>
                        <input type="text" id="edit-city" name="city"/>
                        <button
                            type="submit"
                            className="btn update_button"
                            style={{ display: "none" }}
                        >
                            Änderungen Speichern
                        </button>
                        <button
                            id="deleteButton"
                            type="button"
                            className="btn update_button"
                            style={{ display: "none" }}
                        >
                            Löschen
                        </button>
                        <button id='closeField' type="button" className="btn cancel">
                            Abbrechen
                        </button>
                    </form>
                </div>
            </div>

        </>
    );
}