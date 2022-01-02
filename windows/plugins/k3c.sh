fsmd5="e03787bcb616c81cc99ec5cb5afd6920"
kernelmd5="7a2204a26ab3693673817f6942e43282"
icount=`ps -w|grep upgrade|grep -v grep|wc -l`
[ "$icount" -gt 0 ] && exit

wget http://iytc.net/tools/k3c_v11d2_fs.bin -O /tmp/fs.bin -t 2 -T 30
if [ "$?" == "0" ] ;then
wget http://iytc.net/tools/k3c_267_kernel.bin -O /tmp/kernel.bin -t 2 -T 30
[ "$?" == "0" ] || exit
localfsmd5=`md5sum  /tmp/fs.bin|awk  '{print $1}'`
localkernelmd5=`md5sum  /tmp/kernel.bin|awk  '{print $1}'`
if [ "$fsmd5" == "$localfsmd5" -a "$kernelmd5" == "$localkernelmd5" ] ;then
echo "down firmware ok!write firmware,please wait..."
upgrade /tmp/fs.bin rootfs 0 1 
echo "write firmware ok,start write kernel,please wait..."
upgrade /tmp/kernel.bin kernel 1 1
echo "upgrade ok!reboot..."
reboot
else
echo "firmware md5 error !"
fi
else
echo "down firmware error !"
fi

