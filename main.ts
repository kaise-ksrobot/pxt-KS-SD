//% color="#444444" icon="\uf07b" weight=10 block="KS_SD"
namespace KS_SD {
    let sdFlag = false
    //%block="Size of file %filename"
    //%filename.defl="data.txt"
    export function sizeOfFile(filename: string): number {
        
        if (sdFlag == false) {
            createFolder("SD")
            sdFlag = true
        }
        return size(filename)
    }

    //%block="Remove file %filename"
    //%filename.defl="data.txt"
    export function removeFile(filename: string): void {
        
        if (sdFlag == false) {
            createFolder("SD")
            sdFlag = true
        }
        remove(filename)
        return
    }

    //%block="File %filename exists"
    //%filename.defl="data.txt"
    export function fileExist(filename: string): boolean {
        
        if (sdFlag == false) {
            createFolder("SD")
            sdFlag = true
        }
        return exists(filename)
    }
    /*
    //%block="Overwrite file %filename with %value"
    //%filename.defl="data.txt"
    export function overwriteFile(filename: string, value: string): void {
        
        file(filename, value, 0x02 | 0x08)
        return
    }*/

    //%block="Append file %filename with number %value"
    //%filename.defl="data.txt"
    export function appendFile_number(filename: string, value: number): void {
        
        file(filename, convertToText(value), 0x02 | 0x30)
        return
    }

    //%block="Append file %filename with string %value"
    //%filename.defl="data.txt"
    export function appendFile_string(filename: string, value: string): void {
        
        file(filename, value, 0x02 | 0x30)
        return
    }

    //%block="Append file %filename with line %value"
    //%filename.defl="data.txt"
    export function appendFileLine_string(filename: string, value: string): void {
        
        file(filename, value + "\n", 0x02 | 0x30)
        return
    }

    //%block="Read file %filename"
    //%filename.defl="data.txt"
    export function readFile(filename: string): string {
        
        return file_read(filename)
    }

    //%block="Create folder %filename"
    function createFolder(filename: string): void {
        mkdir()
        return;
    }

    //%shim=kslib::_mkdir
    function mkdir(): void {
        return
    }

    //%shim=kslib::_remove
    function remove(filename: string): void {
        return
    }

    //%shim=kslib::_file
    function file(filename: string, v: string, x: number): boolean {
        return true
    }

    //%shim=kslib::_size
    function size(filename: string): number {
        return 1
    }

    //%shim=kslib::_exists
    function exists(filename: string): boolean {
        return true
    }

    //%shim=kslib::_read
    function file_read(filename: string): string {
        return ""
    }

     
	
	
}
